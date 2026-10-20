import type { Metadata } from "next";
import { GlassPage } from "@/components/layout/GlassPage";

export const metadata: Metadata = { title: "Holiday Lighting | BrightView LLC", description: "Holiday lighting installation from BrightView LLC." };

export default function Page() {
  return <GlassPage title="Holiday Lighting" />;
}
