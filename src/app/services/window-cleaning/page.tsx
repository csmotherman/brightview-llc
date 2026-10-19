import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/ServiceDetail";

export const metadata: Metadata = { title: "Window Cleaning | BrightView LLC" };

export default function Page() {
  return <ServiceDetail slug="window-cleaning" />;
}
