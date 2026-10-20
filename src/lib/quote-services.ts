/** BrightView services; the form and the server allowlist share this list. */
export const SERVICE_OPTIONS = [
  { name: "Window Cleaning", description: "Clearer views, inside and out" },
  { name: "Pressure Washing", description: "Driveways, patios, and outdoor surfaces" },
  { name: "Soft Washing", description: "Low-pressure washing for delicate surfaces" },
  { name: "Roof Cleaning", description: "Clean up your roof's appearance" },
  { name: "Gutter Cleaning", description: "Clear out built-up debris" },
  { name: "Holiday Lighting", description: "Seasonal outdoor lighting" },
] as const;

export const QUOTE_LIMITS = { name: 120, phone: 40, email: 254, address: 300, message: 3000 } as const;

// Format checks only; neither email delivery nor phone ownership is verified here.
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/;
export const isValidEmailAddress = (email: string) => {
  const value = email.trim();
  return value.length <= QUOTE_LIMITS.email && !value.includes("..") && EMAIL_PATTERN.test(value);
};

// BrightView serves Michigan: accept standard 10-digit US numbers or +1 country code.
// Reject 7-digit partial numbers and non-phone characters.
export const isValidPhoneNumber = (phone: string) => {
  const value = phone.trim();
  if (value.length > QUOTE_LIMITS.phone || !/^[+()\d.\-\s]+$/.test(value)) return false;
  const digits = value.replace(/\D/g, "");
  const national = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  return /^[2-9]\d{2}[2-9]\d{6}$/.test(national);
};
