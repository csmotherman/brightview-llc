import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bright View LLC | Power Washing & Window Cleaning",
  description:
    "Family-owned Michigan power washing, window cleaning, and holiday lighting services. Request a free quote from Bright View LLC.",
  openGraph: {
    title: "Bright View LLC",
    description:
      "Power washing, window cleaning, and holiday lighting for Michigan homes and businesses.",
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
      <body>{children}</body>
    </html>
  );
}
