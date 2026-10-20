import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { GlassPage } from "@/components/layout/GlassPage";

export const metadata: Metadata = pageMetadata({ title: "Window Cleaning", description: "Residential window cleaning from BrightView LLC.", path: "/services/window-cleaning", noindex: true }); // thin placeholder: stays out of the index until the full service page ships

export default function Page() {
  return <GlassPage title="Window Cleaning" />;
}
