import type { Metadata } from "next";
import { GlassPage } from "@/components/layout/GlassPage";

export const metadata: Metadata = { title: "Pressure Washing | BrightView LLC", description: "Exterior pressure washing from BrightView LLC." };

export default function Page() {
  return <GlassPage title="Pressure Washing" />;
}
