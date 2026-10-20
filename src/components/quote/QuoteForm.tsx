"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { QUOTE_LIMITS, SERVICE_OPTIONS, isValidEmailAddress, isValidPhoneNumber } from "@/lib/quote-services";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CheckboxOption, FieldError, FormField, Input, Textarea, formStyles } from "@/components/ui/FormField";
import styles from "@/app/quote/quote.module.css";

type TextField = "name" | "phone" | "email" | "street" | "city" | "zip" | "message";
type FormValues = Record<TextField, string> & { services: string[] };
type FieldErrors = Partial<Record<TextField | "services", string>>;

const newSubmissionId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2) + Date.now().toString(36);

const emptyForm: FormValues = { name: "", phone: "", email: "", street: "", city: "", zip: "", message: "", services: [] };

// Zolato's intake expects one address string, even though users fill three short fields.
const formatAddress = ({ street, city, zip }: Pick<FormValues, "street" | "city" | "zip">) => {
  const clean = (value: string) => value.trim().replace(/\s+/g, " ");
  const normalizedZip = clean(zip).replace(/^(\d{5})(\d{4})$/, "$1-$2");
  return `${clean(street)}, ${clean(city)}, MI ${normalizedZip}`;
};

function validate(form: FormValues): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!isValidPhoneNumber(form.phone)) errors.phone = "Enter a valid 10-digit phone number.";
  if (!isValidEmailAddress(form.email)) errors.email = "Enter a valid email address.";
  if (!form.street.trim()) errors.street = "Enter the street address.";
  if (!form.city.trim()) errors.city = "Enter the city.";
  if (!/^\d{5}(?:-?\d{4})?$/.test(form.zip.trim())) errors.zip = "Enter a valid 5-digit ZIP code.";
  if (form.services.length === 0) errors.services = "Please select at least one service.";
  return errors;
}

export function QuoteForm() {
  const [form, setForm] = useState<FormValues>(emptyForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  // Use the same validation for button availability and the submit handler.
  const canSubmit = Object.keys(validate(form)).length === 0;
  const sending = useRef(false);
  // One id per attempt-series: retries of the same request reuse it so the server can de-duplicate.
  const submissionId = useRef<string>(newSubmissionId());

  const updateText = (field: TextField, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setFieldErrors((current) => ({ ...current, [field]: undefined }));
    if (error) setError("");
  };

  const validateOnBlur = (field: TextField) => {
    setFieldErrors((current) => ({ ...current, [field]: validate(form)[field] }));
  };

  const toggleService = (service: string) => {
    setForm((current) => ({
      ...current,
      services: current.services.includes(service)
        ? current.services.filter((selected) => selected !== service)
        : [...current.services, service],
    }));
    setFieldErrors((current) => ({ ...current, services: undefined }));
    if (error) setError("");
  };

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;

    const errors = validate(form);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setError("Please fix the highlighted fields.");
      return;
    }

    sending.current = true;
    setStatus("submitting");
    setError("");

    try {
      const data = new FormData(event.currentTarget);
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          address: formatAddress(form),
          message: form.message,
          services: SERVICE_OPTIONS.map((option) => option.name).filter((name) => form.services.includes(name)),
          website: String(data.get("website") ?? ""),
          submissionId: submissionId.current,
        }),
      });
      const result: { ok?: boolean; message?: string } | null = await response.json().catch(() => null);

      if (!response.ok || result?.ok !== true) {
        throw new Error(result?.message ?? "Submission failed");
      }

      setStatus("success");
      setForm(emptyForm);
      submissionId.current = newSubmissionId();
    } catch (caught) {
      setStatus("idle");
      setError(
        caught instanceof Error && caught.message && caught.message !== "Submission failed" && caught.message !== "Failed to fetch"
          ? caught.message
          : "We couldn't confirm that your request was received. Please try again or contact us on Facebook."
      );
    } finally {
      sending.current = false;
    }
  }

  if (status === "success") {
    return (
      <Card tone="glass" className={styles.card} role="status" aria-live="polite">
        <div className={styles.success}>
          <span className={styles.successIcon} aria-hidden="true">✓</span>
          <p className={styles.eyebrow}>REQUEST SUBMITTED</p>
          <h2>Thank you for reaching out.</h2>
          <p>Your quote request has been sent to BrightView. We&apos;ll review the details and follow up with you.</p>
          <Button href="/" block arrow>Return to homepage</Button>
          <button type="button" className={styles.againButton} onClick={() => setStatus("idle")}>Send another request</button>
        </div>
      </Card>
    );
  }

  const busy = status === "submitting";
  const invalid = (field: TextField) => Boolean(fieldErrors[field]);
  const bind = (field: TextField, extra: { id: string; maxLength: number; required?: boolean }) => ({
    ...extra,
    name: field,
    required: extra.required !== false,
    value: form[field],
    invalid: invalid(field),
    onBlur: () => validateOnBlur(field),
    onChange: (event: { target: { value: string } }) => updateText(field, event.target.value),
  });

  return (
    <Card tone="glass" className={styles.card}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>FREE QUOTE REQUEST</p>
        <h2>Let’s get your quote started.</h2>
        <p>Choose as many services as you need. Fields marked * are required.</p>
      </div>
      <form className={styles.form} onSubmit={submit} noValidate aria-busy={busy}>
        <fieldset className={styles.fields} disabled={busy}>
          <div className={styles.row}>
            <FormField id="quote-name" label="Full name" required error={fieldErrors.name}>
              <Input {...bind("name", { id: "quote-name", maxLength: QUOTE_LIMITS.name })} type="text" autoComplete="name" placeholder="Your full name" />
            </FormField>
            <FormField id="quote-phone" label="Phone number" required error={fieldErrors.phone}>
              <Input {...bind("phone", { id: "quote-phone", maxLength: QUOTE_LIMITS.phone })} type="tel" autoComplete="tel" placeholder="(555) 555-5555" />
            </FormField>
          </div>
          <FormField id="quote-email" label="Email address" required error={fieldErrors.email}>
            <Input {...bind("email", { id: "quote-email", maxLength: QUOTE_LIMITS.email })} type="email" autoComplete="email" placeholder="you@example.com" />
          </FormField>
          <fieldset className={styles.addressFields}>
            <legend className={formStyles.legend}>Where do you need service? <span className={formStyles.required} aria-hidden="true">*</span></legend>
            <p className={styles.addressHint}>Michigan property address</p>
            <FormField id="quote-street" label="Street address" required error={fieldErrors.street}>
              <Input {...bind("street", { id: "quote-street", maxLength: 160 })} type="text" autoComplete="section-service-address address-line1" enterKeyHint="next" placeholder="123 Main St" />
            </FormField>
            <div className={styles.addressRow}>
              <FormField id="quote-city" label="City" required error={fieldErrors.city}>
                <Input {...bind("city", { id: "quote-city", maxLength: 80 })} type="text" autoComplete="section-service-address address-level2" enterKeyHint="next" placeholder="Clarkston" />
              </FormField>
              <FormField id="quote-zip" label="ZIP code" required error={fieldErrors.zip}>
                <Input {...bind("zip", { id: "quote-zip", maxLength: 10 })} type="text" inputMode="numeric" autoComplete="section-service-address postal-code" enterKeyHint="next" placeholder="48346" />
              </FormField>
            </div>
          </fieldset>

          <fieldset className={styles.services} aria-describedby="service-hint">
            <legend className={formStyles.legend}>Which services do you need? <span className={formStyles.required} aria-hidden="true">*</span></legend>
            <p id="service-hint">Select all that apply</p>
            <div className={styles.serviceGrid}>
              {SERVICE_OPTIONS.map((option) => (
                <CheckboxOption key={option.name} name="services" value={option.name} title={option.name} description={option.description}
                  checked={form.services.includes(option.name)} onChange={() => toggleService(option.name)} />
              ))}
            </div>
            {fieldErrors.services && <FieldError id="quote-services-error">{fieldErrors.services}</FieldError>}
          </fieldset>
          <FormField id="quote-message" label="Special requests or additional notes (optional)" error={fieldErrors.message}>
            <Textarea {...bind("message", { id: "quote-message", maxLength: QUOTE_LIMITS.message, required: false })} rows={3} placeholder="Anything else you'd like us to know?" />
          </FormField>
          <div className={styles.honeypot} aria-hidden="true">
            <label htmlFor="quote-website">Leave this field empty</label>
            <input id="quote-website" name="website" type="text" autoComplete="off" tabIndex={-1} />
          </div>
        </fieldset>
        {error && <p role="alert" className={styles.error}>{error}</p>}
        <Button type="submit" block arrow={!busy} disabled={busy || !canSubmit}>{busy ? "Sending request…" : "Request My Free Quote"}</Button>
        {!canSubmit && <p className={styles.submitHint}>Enter your contact details, property address and at least one service to continue.</p>}
        <p className={styles.disclaimer}>No payment or booking required. We&apos;ll contact you about a quote.</p>
      </form>
    </Card>
  );
}
