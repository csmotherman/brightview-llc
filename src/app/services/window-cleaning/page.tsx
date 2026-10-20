import type { Metadata } from "next";
import { GlassPage } from "@/components/layout/GlassPage";

export const metadata: Metadata = { title: "Window Cleaning | BrightView LLC", description: "Residential window cleaning from BrightView LLC." };

export default function Page() {
  return <GlassPage title="Window Cleaning" />;
}
