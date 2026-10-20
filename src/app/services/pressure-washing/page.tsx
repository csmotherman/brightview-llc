import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { GlassPage } from "@/components/layout/GlassPage";

export const metadata: Metadata = pageMetadata({ title: "Pressure Washing", description: "Exterior pressure washing from BrightView LLC.", path: "/services/pressure-washing", noindex: true }); // thin placeholder: stays out of the index until the full service page ships

export default function Page() {
  return <GlassPage title="Pressure Washing" />;
}
