import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | MAKKN Technologies",
  description:
    "Get in touch with MAKKN Technologies. Request a demo, ask questions about our AI solutions, or discuss how we can help transform your business with intelligent automation based in Cairo, Egypt.",
  alternates: {
    canonical: "https://makkn.com/contact",
  },
  openGraph: {
    title: "Contact Us | MAKKN Technologies",
    description:
      "Get in touch with MAKKN Technologies. Request a demo or discuss how our AI solutions can transform your business.",
    url: "https://makkn.com/contact",
    siteName: "MAKKN Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | MAKKN Technologies",
    description:
      "Get in touch with MAKKN Technologies. Request a demo or discuss how our AI solutions can transform your business.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
