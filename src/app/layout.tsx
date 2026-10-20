import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { PageBackdrop } from "@/components/layout/PageBackdrop";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import { site } from "@/config/site";
import { defaultDescription, indexingAllowed, siteUrl } from "@/lib/seo";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: { default: `${site.name} | Exterior Cleaning & Holiday Lighting in Southeast Michigan`, template: `%s | ${site.name}` },
  description: defaultDescription,
  applicationName: site.name,
  // The site is crawlable only after the owner confirms the canonical domain and sets SEO_ALLOW_INDEXING=true on Production.
  // See src/lib/seo.ts. Preview deployments always stay noindex.
  robots: indexingAllowed ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0a251c" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={sans.variable + " " + display.variable}>
      <body>
        <SiteJsonLd />
        <BreadcrumbJsonLd />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <PageBackdrop />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
