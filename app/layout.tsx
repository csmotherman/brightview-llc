import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Inter } from "next/font/google";
import "./globals.css";
import { SiteShell } from "../components/SiteShell";
import { business } from "../lib/business";

const display = Big_Shoulders({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://brightviewllc.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Michigan Window Cleaning, Power Washing & Holiday Lighting`,
    template: `%s | ${business.name}`,
  },
  description:
    "Bright View LLC is a family-owned Michigan business offering window cleaning, power washing, and holiday lighting. Request a free quote.",
  keywords: [
    "Bright View LLC",
    "Michigan window cleaning",
    "Michigan power washing",
    "pressure washing Michigan",
    "holiday light installation Michigan",
  ],
  openGraph: {
    title: business.name,
    description:
      "Window cleaning, power washing, and holiday lighting from a family-owned Michigan business.",
    type: "website",
    url: siteUrl,
    siteName: business.name,
  },
  twitter: {
    card: "summary",
    title: business.name,
    description:
      "Window cleaning, power washing, and holiday lighting from a family-owned Michigan business.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#02122b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description:
      "Family-owned Michigan window cleaning, power washing, and holiday lighting business.",
    areaServed: {
      "@type": "State",
      name: business.state,
    },
    sameAs: [business.facebookUrl],
  };

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
