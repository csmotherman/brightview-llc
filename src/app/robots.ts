import type { MetadataRoute } from "next";
import { absoluteUrl, indexingAllowed } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  if (!indexingAllowed) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: absoluteUrl("/sitemap.xml") ?? undefined,
  };
}
