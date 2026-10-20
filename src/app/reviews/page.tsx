import type { Metadata } from "next";
import { GlassPage } from "@/components/layout/GlassPage";

export const metadata: Metadata = { title: "Reviews | BrightView LLC", description: "What Michigan homeowners say about BrightView LLC." };

export default function Page() {
  return <GlassPage title="Reviews" />;
}
