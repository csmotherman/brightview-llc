import type { Metadata } from "next";
import { site } from "@/config/site";

/**
 * Central SEO configuration.
 *
 * - NEXT_PUBLIC_SITE_URL: the canonical production origin (no trailing slash), e.g. https://www.example.com.
 *   Until it is set, no canonical, Open Graph or sitemap URLs are emitted.
 * - SEO_ALLOW_INDEXING=true: the explicit launch switch. Search engines are blocked unless this is "true",
 *   a canonical origin is set, and the deployment is Production (never Vercel Preview).
 */
const rawOrigin = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "");
export const siteUrl: string | null = rawOrigin && /^https?:\/\//.test(rawOrigin) ? rawOrigin : null;

export const indexingAllowed =
  process.env.SEO_ALLOW_INDEXING === "true" &&
  siteUrl !== null &&
  (process.env.VERCEL_ENV === undefined || process.env.VERCEL_ENV === "production");

export const absoluteUrl = (path: string): string | null => (siteUrl ? siteUrl + (path === "/" ? "" : path) : null);

/** Every route that is ready for search engines, in sitemap order. Thin or unfinished routes stay out. */
export const indexablePaths = ["/", "/services", "/gallery", "/service-areas", "/about", "/contact", "/reviews", "/faq", "/quote"] as const;

export const defaultDescription =
  "Family-owned Michigan exterior cleaning and holiday lighting: window cleaning, pressure washing, gutter cleaning, soft washing, roof cleaning and holiday lighting installation.";

type PageSeo = { title: string; description: string; path: string; absoluteTitle?: boolean; noindex?: boolean };

/** Per-page metadata: unique title and description, canonical URL (when the origin is known) and social tags. */
export function pageMetadata({ title, description, path, absoluteTitle, noindex }: PageSeo): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(url && !noindex ? { alternates: { canonical: path } } : {}),
    openGraph: { type: "website", siteName: site.name, locale: "en_US", title: fullTitle, description, images: ["/opengraph-image"], ...(url ? { url: path } : {}) },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: ["/twitter-image"] },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
