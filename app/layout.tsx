import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAKKN - AI Solutions for Businesses",
  description:
    "AI-powered solutions that drive measurable business value. At MAKKN, we help you unlock new opportunities by automating customer support, enhancing data and document intelligence, and delivering tailored AI agents designed around your needs.",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.webp",
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
