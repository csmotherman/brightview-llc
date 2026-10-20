import type { Metadata } from "next";
import { GlassPage } from "@/components/layout/GlassPage";

export const metadata: Metadata = { title: "FAQ | BrightView LLC", description: "Common questions about BrightView's services." };

export default function Page() {
  return <GlassPage title="FAQ" />;
}
