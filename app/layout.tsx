import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
