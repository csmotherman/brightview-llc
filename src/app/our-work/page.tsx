import type { Metadata } from "next";
import { GlassPage } from "@/components/layout/GlassPage";

export const metadata: Metadata = { title: "Our Work | BrightView LLC", description: "Real projects from BrightView LLC." };

export default function Page() {
  return <GlassPage title="Our Work" />;
}
