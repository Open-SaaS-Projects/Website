import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ContextProvider from "../contexts/ChatbotContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "MAKKN - AI Solutions for Businesses",
  description:
    "AI-powered solutions that drive measurable business value. At MAKKN, we help you unlock new opportunities by automating customer support, enhancing data and document intelligence, and delivering tailored AI agents designed around your needs.",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.webp",
  },
  metadataBase: new URL('https://makkn.com'),
  openGraph: {
    title: "MAKKN - AI Solutions for Businesses",
    description:
      "AI-powered solutions that drive measurable business value. Automating customer support, enhancing data intelligence, and delivering tailored AI agents.",
    url: "https://makkn.com",
    siteName: "MAKKN Technologies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAKKN - AI Solutions for Businesses",
    description:
      "AI-powered solutions that drive measurable business value. Automating customer support, enhancing data intelligence, and delivering tailored AI agents.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MAKKN Technologies",
    "url": "https://makkn.com",
    "logo": "https://makkn.com/makkn-logo.webp",
    "foundingDate": "2025",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cairo",
      "addressCountry": "EG"
    },
    "description": "AI solutions company providing intelligent automation, data intelligence, and custom AI agents for businesses.",
    "sameAs": []
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MAKKN Technologies",
    "url": "https://makkn.com",
    "description": "AI-powered solutions that drive measurable business value through intelligent automation and data intelligence.",
    "publisher": {
      "@type": "Organization",
      "name": "MAKKN Technologies"
    }
  };

  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
