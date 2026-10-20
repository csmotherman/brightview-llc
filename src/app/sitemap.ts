import type { MetadataRoute } from "next";
import { absoluteUrl, indexablePaths, indexingAllowed } from "@/lib/seo";

// No lastModified: we only list a date when we can state a real one. Priority and changeFrequency are ignored by Google.
export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexingAllowed) return [];
  return indexablePaths.map((path) => ({ url: absoluteUrl(path) as string }));
}
