"use client";

import { FormEvent, useMemo, useState } from "react";
import { services } from "../data/services";
import { Icon } from "./Icons";

type QuoteFormProps = {
  defaultService?: string;
  compact?: boolean;
};

type Status =
  | { type: "idle"; message?: string }
  | { type: "sending"; message?: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function QuoteForm({
  defaultService = "",
  compact = false,
}: QuoteFormProps) {
  const normalizedDefault = useMemo(() => {
    const match = services.find(
      (service) =>
        service.name.toLowerCase() === defaultService.toLowerCase() ||
        service.slug === defaultService.toLowerCase()
    );
    return match?.name ?? "";
  }, [defaultService]);

  const [selectedService, setSelectedService] = useState(normalizedDefault);
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selectedService) {
      setStatus({
        type: "error",
        message: "Choose the service you want a quote for.",
      });
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || ""),
      phone: String(data.get("phone") || ""),
      email: String(data.get("email") || ""),
      city: String(data.get("city") || ""),
      service: selectedService,
      details: String(data.get("details") || ""),
      contactPreference: String(data.get("contactPreference") || "Text"),
      source: "brightview-website",
    };

    setStatus({ type: "sending" });

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result?.message ||
            "The online quote form is not connected yet. Please contact Bright View on Facebook for now."
        );
      }

      setStatus({
        type: "success",
        message:
          "Request received. Bright View will follow up using the contact information you provided.",
      });
      form.reset();
      setSelectedService("");
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your request.",
      });
    }
  }

  if (status.type === "success") {
    return (
      <div className="quote-success" role="status">
        <span className="success-icon">
          <Icon name="check" />
        </span>
        <p className="eyebrow eyebrow-dark">Request sent</p>
        <h3>You&apos;re on Bright View&apos;s radar.</h3>
        <p>{status.message}</p>
        <button
          type="button"
          className="text-button"
          onClick={() => setStatus({ type: "idle" })}
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      className={`quote-form ${compact ? "quote-form-compact" : ""}`}
      onSubmit={handleSubmit}
    >
      <div className="form-heading">
        <span className="form-step">01</span>
        <div>
          <p className="eyebrow eyebrow-dark">Start here</p>
          <h3>What can we make brighter?</h3>
        </div>
      </div>

      <fieldset className="service-picker">
        <legend>Choose a service</legend>
        <div className="service-picker-row">
          {services.map((service) => (
            <label
              key={service.slug}
              className={
                selectedService === service.name ? "is-selected" : undefined
              }
            >
              <input
                type="radio"
                name="service"
                value={service.name}
                checked={selectedService === service.name}
                onChange={() => setSelectedService(service.name)}
              />
              <Icon name={service.icon} />
              <span>{service.shortName}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="form-heading form-heading-secondary">
        <span className="form-step">02</span>
        <div>
          <p className="eyebrow eyebrow-dark">Your info</p>
          <h3>Where should we follow up?</h3>
        </div>
      </div>

      <div className="field-grid">
        <label>
          <span>Name *</span>
          <input
            required
            name="name"
            autoComplete="name"
            placeholder="Your name"
          />
        </label>
        <label>
          <span>Phone *</span>
          <input
            required
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(248) 555-0123"
          />
        </label>
        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
          />
        </label>
        <label>
          <span>City or ZIP</span>
          <input
            name="city"
            autoComplete="postal-code"
            placeholder="Where is the property?"
          />
        </label>
      </div>

      <label className="full-field">
        <span>Tell us about the job</span>
        <textarea
          name="details"
          rows={compact ? 3 : 5}
          placeholder="What would you like cleaned or installed? Add anything that would help us understand the project."
        />
      </label>

      <fieldset className="contact-picker">
        <legend>Best way to reach you</legend>
        <div>
          {["Text", "Call", "Email"].map((preference) => (
            <label key={preference}>
              <input
                type="radio"
                name="contactPreference"
                value={preference}
                defaultChecked={preference === "Text"}
              />
              <span>{preference}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {status.type === "error" && (
        <div className="form-error" role="alert">
          {status.message}
        </div>
      )}

      <button
        type="submit"
        className="btn btn-navy btn-wide quote-submit"
        disabled={status.type === "sending"}
      >
        {status.type === "sending" ? "Sending..." : "Request my free quote"}
        {status.type !== "sending" && <Icon name="arrow" />}
      </button>

      <p className="form-fine-print">
        No account. No obligation. Just enough information for Bright View to
        follow up about your project.
      </p>
    </form>
  );
}
