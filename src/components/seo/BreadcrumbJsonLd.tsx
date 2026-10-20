"use client";

import { usePathname } from "next/navigation";
import { absoluteUrl } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

const labels: Record<string, string> = {
  "/services": "Services",
  "/gallery": "Gallery",
  "/service-areas": "Service Area",
  "/about": "About",
  "/contact": "Contact",
  "/reviews": "Reviews",
  "/faq": "FAQ",
  "/quote": "Request a Free Quote",
};

/** BreadcrumbList (Home > Page) for known top-level pages. Service pages will add their own deeper trail. */
export function BreadcrumbJsonLd() {
  const path = usePathname();
  const label = labels[path];
  const home = absoluteUrl("/");
  if (!label || !home) return null;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: home },
          { "@type": "ListItem", position: 2, name: label, item: absoluteUrl(path) },
        ],
      }}
    />
  );
}
