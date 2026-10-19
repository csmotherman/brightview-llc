import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/ServiceDetail";

export const metadata: Metadata = { title: "Pressure Washing | BrightView LLC" };

export default function Page() {
  return <ServiceDetail slug="pressure-washing" />;
}
