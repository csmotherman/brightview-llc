import type { Metadata } from "next";
import { GlassPage } from "@/components/layout/GlassPage";

export const metadata: Metadata = { title: "Service Areas | BrightView LLC", description: "BrightView LLC serves homeowners in Michigan." };

export default function Page() {
  return <GlassPage title="Service Areas" />;
}
