// Single source of truth for Bright View business facts.
// Unconfirmed fields stay undefined — consuming components must hide
// the related UI rather than render a placeholder or invented value.

export const business = {
  name: "Bright View LLC",
  legalName: "Bright View LLC",
  tagline: "Window Cleaning • Power Washing • Holiday Lighting",
  state: "Michigan",
  ownership: "Family-owned",
  facebookUrl: "https://www.facebook.com/people/Bright-View-LLC/61552396894247/",

  // Not yet confirmed — leave unset until Bright View provides real values.
  phone: undefined as string | undefined,
  email: undefined as string | undefined,
  serviceArea: undefined as string | undefined,
  googleBusinessUrl: undefined as string | undefined,
  instagramUrl: undefined as string | undefined,
  googleRating: undefined as number | undefined,
  googleReviewCount: undefined as number | undefined,
  licensedInsured: undefined as boolean | undefined,
  yearsInBusiness: undefined as number | undefined,
  ownerPhotoSrc: undefined as string | undefined,
  ownerPhotoAlt: undefined as string | undefined,
};

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function smsHref(phone: string) {
  return `sms:${phone.replace(/[^\d+]/g, "")}`;
}
