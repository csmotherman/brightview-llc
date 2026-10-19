"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { SERVICE_OPTIONS } from "@/lib/quote-services";
import styles from "@/app/quote/quote.module.css";

type TextField = "name" | "phone" | "email" | "address" | "message";
type FormValues = Record<TextField, string> & { services: string[] };

const emptyForm: FormValues = {
  name: "",
  phone: "",
  email: "",
  address: "",
  message: "",
  services: [],
};

export function QuoteForm() {
  const [form, setForm] = useState<FormValues>(emptyForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [error, setError] = useState("");

  const updateText = (field: TextField, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (error) setError("");
  };

  const toggleService = (service: string) => {
    setForm((current) => ({
      ...current,
      services: current.services.includes(service)
        ? current.services.filter((selected) => selected !== service)
        : [...current.services, service],
    }));
    if (error) setError("");
  };

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;
    if (form.services.length === 0) {
      setError("Please select at least one service.");
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const data = new FormData(event.currentTarget);
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          website: String(data.get("website") ?? ""),
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setForm(emptyForm);
    } catch {
      setStatus("idle");
      setError(
        "We couldn't confirm that your request was received. Please try again or contact us on Facebook."
      );
    }
  }

  if (status === "success") {
    return (
      <div className={styles.formCard} role="status" aria-live="polite">
        <div className={styles.success}>
          <span className={styles.successIcon} aria-hidden="true">✓</span>
          <p className={styles.cardEyebrow}>REQUEST SUBMITTED</p>
          <h2>Thank you for reaching out.</h2>
          <p>Your quote request has been sent to BrightView. We&apos;ll review the details and follow up with you.</p>
          <Link href="/" className={styles.submitButton}>Return to homepage <span aria-hidden="true">→</span></Link>
          <button type="button" className={styles.againButton} onClick={() => setStatus("idle")}>Send another request</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formCard}>
      <div className={styles.formIntro}>
        <p className={styles.cardEyebrow}>FREE QUOTE REQUEST</p>
        <h2>Tell us about your project.</h2>
        <p>Choose as many services as you need. Fields marked * are required.</p>
      </div>
      <form className={styles.form} onSubmit={submit}>
        <div className={styles.fieldRow}>
          <div className={styles.field}>
            <label htmlFor="quote-name">Full name <span aria-hidden="true">*</span></label>
            <input id="quote-name" name="name" type="text" autoComplete="name" maxLength={120} required
              value={form.name} onChange={(event) => updateText("name", event.target.value)} placeholder="Your full name" />
          </div>
          <div className={styles.field}>
            <label htmlFor="quote-phone">Phone number <span aria-hidden="true">*</span></label>
            <input id="quote-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} required
              value={form.phone} onChange={(event) => updateText("phone", event.target.value)} placeholder="(555) 555-5555" />
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="quote-email">Email address <span aria-hidden="true">*</span></label>
          <input id="quote-email" name="email" type="email" autoComplete="email" maxLength={254} required
            value={form.email} onChange={(event) => updateText("email", event.target.value)} placeholder="you@example.com" />
        </div>
        <div className={styles.field}>
          <label htmlFor="quote-address">Property address <span aria-hidden="true">*</span></label>
          <input id="quote-address" name="address" type="text" autoComplete="street-address" maxLength={300} required
            value={form.address} onChange={(event) => updateText("address", event.target.value)} placeholder="Street address, city, ZIP" />
        </div>

        <fieldset className={styles.serviceFieldset} aria-describedby="service-hint">
          <legend>Which services do you need? <span aria-hidden="true">*</span></legend>
          <p id="service-hint">Select all that apply</p>
          <div className={styles.serviceGrid}>
            {SERVICE_OPTIONS.map((option) => (
              <label key={option.name} className={styles.serviceOption}>
                <input type="checkbox" name="services" value={option.name}
                  checked={form.services.includes(option.name)}
                  onChange={() => toggleService(option.name)} />
                <span className={styles.checkBox} aria-hidden="true">✓</span>
                <span className={styles.serviceCopy}>
                  <strong>{option.name}</strong>
                  <small>{option.description}</small>
                </span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className={styles.field}>
          <label htmlFor="quote-message">Tell us about your project <span aria-hidden="true">*</span></label>
          <textarea id="quote-message" name="message" rows={4} maxLength={3000} required
            value={form.message} onChange={(event) => updateText("message", event.target.value)}
            placeholder="What would you like done? Any helpful details about the property?" />
        </div>
        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="quote-website">Leave this field empty</label>
          <input id="quote-website" name="website" type="text" autoComplete="off" tabIndex={-1} />
        </div>
        {error && <p role="alert" className={styles.error}>{error}</p>}
        <button className={styles.submitButton} type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending request…" : "Request My Free Quote"}
          {status !== "submitting" && <span aria-hidden="true">→</span>}
        </button>
        <p className={styles.disclaimer}>No payment or booking required. We&apos;ll contact you about a quote.</p>
      </form>
    </div>
  );
}
