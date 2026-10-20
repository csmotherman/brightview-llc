import type { Metadata } from "next";
import { GlassPage } from "@/components/layout/GlassPage";

export const metadata: Metadata = { title: "Gallery | BrightView LLC", description: "Real projects from BrightView LLC." };

export default function Page() {
  return <GlassPage title="Gallery" />;
}
