import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "../components/SiteShell";

export const metadata: Metadata = {
  title: {
    default: "Bright View LLC | Michigan Exterior Cleaning & Holiday Lighting",
    template: "%s | Bright View LLC",
  },
  description:
    "Family-owned Michigan window cleaning, power washing, and holiday lighting. Explore Bright View LLC services and request a free quote.",
  keywords: [
    "Bright View LLC",
    "Michigan window cleaning",
    "Michigan power washing",
    "pressure washing Michigan",
    "holiday light installation Michigan",
  ],
  openGraph: {
    title: "Bright View LLC",
    description:
      "Window cleaning, power washing, and holiday lighting from a family-owned Michigan business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
