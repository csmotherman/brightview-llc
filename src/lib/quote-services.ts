/** Confirmed BrightView core services; the form and the server allowlist share this list. */
export const SERVICE_OPTIONS = [
  { name: "Window Cleaning", description: "Clearer views, inside and out" },
  { name: "Pressure Washing", description: "Driveways, patios, and outdoor surfaces" },
  { name: "Holiday Lighting", description: "Seasonal outdoor lighting" },
] as const;

export const QUOTE_LIMITS = { name: 120, phone: 40, email: 254, address: 300, message: 3000 } as const;

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const hasEnoughPhoneDigits = (phone: string) => phone.replace(/\D/g, "").length >= 7;
