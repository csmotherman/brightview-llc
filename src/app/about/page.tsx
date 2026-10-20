import type { Metadata } from "next";
import { GlassPage } from "@/components/layout/GlassPage";

export const metadata: Metadata = { title: "About | BrightView LLC", description: "BrightView LLC is a family-owned Michigan exterior cleaning and holiday lighting business." };

export default function Page() {
  return <GlassPage title="About" />;
}
