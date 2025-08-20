"use client";
import { useEffect } from "react";

// Import the MainNavigation and MainFooter components
import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";

export default function PrivacyPolicy() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Replace the header with MainNavigation */}
      <MainNavigation />

      <main className="flex-1">
        <div className="container mx-auto max-w-4xl py-12">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose max-w-none">
            <p className="text-lg mb-6">Effective Date: May 04, 2025</p>

            <p className="mb-4">
              Welcome to MAKKN. We take your privacy seriously. This Privacy
              Policy explains how we collect, use, store, and share your
              personal data when you use any of our platforms ("Services"),
              including our website, applications, and integrations.
            </p>
            <p className="mb-6">
              By using our Services, you acknowledge that you've read and
              understood this Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              1. What Information We Collect
            </h2>
            <h3 className="text-xl font-medium mt-6 mb-2">
              A. Information You Provide
            </h3>
            <ul className="list-disc pl-6 my-4">
              <li>Name, email, phone number, company details</li>
              <li>Account credentials and settings</li>
              <li>Uploaded documents and content</li>
              <li>Feedback, support requests, or survey responses</li>
              <li>Prompts and user-generated content</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-2">
              B. Automatically Collected Data
            </h3>
            <ul className="list-disc pl-6 my-4">
              <li>Log data (e.g., IP address, browser type, access times)</li>
              <li>
                Usage data (e.g., features used, interaction times, errors)
              </li>
              <li>
                Device information (e.g., type, OS, language, screen size)
              </li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-2">
              C. Information from Third Parties
            </h3>
            <p className="mb-6">
              If you connect third-party services (e.g., calendars, messaging
              platforms, video conferencing), we may collect profile and access
              data necessary to perform the Services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-2">We use your data to:</p>
            <ul className="list-disc pl-6 my-4">
              <li>Provide, maintain, and improve our Services</li>
              <li>Process AI-powered tasks and other platform features</li>
              <li>
                Communicate with you (e.g., support, updates, feedback requests)
              </li>
              <li>Send automated notifications (as configured by you)</li>
              <li>Analyze usage to improve performance and functionality</li>
              <li>Detect fraud, misuse, or abuse</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              3. Data Sharing and Disclosure
            </h2>
            <p className="mb-2">
              We do not sell your data. We may share your data with:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>
                Service providers (e.g., cloud infrastructure, analytics, AI
                services)
              </li>
              <li>Communication tools to enable messaging and notifications</li>
              <li>Legal authorities when required by law</li>
              <li>
                Business partners in the event of a merger, acquisition, or
                reorganization
              </li>
            </ul>
            <p className="mb-6">
              All third-party providers are required to adhere to strict
              confidentiality and data protection terms.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              4. Data Retention
            </h2>
            <p className="mb-6">
              We retain your information for as long as necessary to provide the
              Services and fulfill legal, tax, or regulatory requirements. You
              may request data deletion at and fulfill legal, tax, or regulatory
              requirements. You may request data deletion at any time by
              contacting us at support@makkn.com. We may retain anonymized or
              aggregated data for research and performance monitoring.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              5. Your Rights and Choices
            </h2>
            <p className="mb-2">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Access the personal data we hold about you</li>
              <li>Request corrections</li>
              <li>Request deletion</li>
              <li>Restrict or object to certain types of processing</li>
              <li>Withdraw consent at any time</li>
              <li>File a complaint with a data protection authority</li>
            </ul>
            <p className="mb-6">
              To exercise any of these rights, email{" "}
              <a
                href="mailto:support@makkn.com"
                className="text-[#7C4DFF] hover:underline"
              >
                support@makkn.com
              </a>
              .
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Security</h2>
            <p className="mb-6">
              We implement reasonable technical and organizational measures to
              protect your data, including encryption, access control, and
              secure hosting environments. However, no system is 100% secure,
              and we encourage users to protect their credentials and report any
              suspicious activity.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              7. International Transfers
            </h2>
            <p className="mb-6">
              Your data may be processed outside your country depending on
              hosting and service arrangements. We ensure these transfers comply
              with applicable laws.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              8. Children's Privacy
            </h2>
            <p className="mb-6">
              Our Services are not intended for individuals under 18. We do not
              knowingly collect data from children. If discovered, such data
              will be deleted.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              9. Changes to This Policy
            </h2>
            <p className="mb-6">
              We may update this Privacy Policy periodically. Material changes
              will be communicated, and the "Effective Date" will be updated
              accordingly.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
            <p className="mb-2">
              For questions or concerns about this Privacy Policy, contact us
              at:
            </p>
            <p className="mb-6">
              <a
                href="mailto:support@makkn.com"
                className="text-[#7C4DFF] hover:underline"
              >
                info@makkn.com
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Replace the footer with MainFooter */}
      <MainFooter />
    </div>
  );
}
