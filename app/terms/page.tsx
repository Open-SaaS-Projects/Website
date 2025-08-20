"use client";
import { useEffect } from "react";

// Import the MainNavigation and MainFooter components
import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

          <div className="prose max-w-none">
            <p className="text-lg mb-6">Effective Date: May 04, 2025</p>

            <p className="mb-4">
              Welcome to MAKKN. These Terms of Service ("Terms") govern your
              access to and use of MAKKN's website, tools, APIs, and services
              (collectively, the "Services").
            </p>
            <p className="mb-6">
              By using our Services, you agree to be bound by these Terms. If
              you're using our Services on behalf of a business or organization,
              you're agreeing on behalf of that entity.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              1. Using Our Services
            </h2>
            <p className="mb-2">
              You must be at least 18 years old to use our Services. You agree
              to use our Services in compliance with applicable laws and these
              Terms.
            </p>
            <p className="mb-2">
              You may access and use our Services only for lawful, authorized
              purposes. Any use of our platforms beyond its intended business
              purposes is strictly prohibited.
            </p>
            <p className="mb-2">
              You may not use our Services for any unlawful, abusive, or harmful
              purposes. This includes, but is not limited to:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>
                Using the Services in any way that infringes, misappropriates,
                or violates the rights of any individual or organization,
                including privacy, intellectual property, or equal opportunity
                rights.
              </li>
              <li>
                Using any of our platforms to engage in discriminatation,
                harassment, deception, or exploitation.
              </li>
              <li>
                Attempting to reverse engineer, decompile, disassemble, or
                otherwise attempt to discover or extract the source code,
                algorithms, or underlying components of our models or systems.
              </li>
              <li>
                Scraping, crawling, or programmatically extracting data, resume
                content, or output from the platform, whether by bots,
                automation, or other means not explicitly authorized.
              </li>
              <li>
                Representing AI-generated output as human-written without proper
                disclosure.
              </li>
              <li>
                Circumventing system protections or abusing rate limits, APIs,
                or access permissions.
              </li>
              <li>
                Using the Services to develop or train a competing platform.
              </li>
            </ul>
            <p className="mb-6">
              We reserve the right to suspend or terminate access without notice
              if we detect misuse, abuse, or behavior that violates these terms.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              2. Business Registration & Accuracy of Information
            </h2>
            <p className="mb-2">
              If you're registering an account on behalf of a business or
              organization, you:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>
                Must provide accurate, complete, and up-to-date information
                about your company
              </li>
              <li>Are responsible for maintaining that accuracy over time</li>
              <li>
                Acknowledge that false or misleading information may result in
                immediate suspension or termination of your account
              </li>
            </ul>
            <p className="mb-6">
              We reserve the right to verify your identity or business
              affiliation before or after granting access to the platform.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              3. Similarity of Content
            </h2>
            <p className="mb-6">
              Due to the nature of artificial intelligence and generative
              technology, content or output produced by our Services may not be
              unique. Other users may receive similar or identical output when
              using similar inputs. We do not guarantee that any output
              generated for your account will be exclusive to you or protected
              from duplication. This includes content generated for other users
              or derived from public or commonly used inputs. We are not
              responsible for any perceived or actual similarity between your
              generated content and that of other users or third parties.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              4. Responsibility for Use of Output
            </h2>
            <p className="mb-2">
              When you use our Services, you understand and agree that:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>
                Output may not always be accurate or complete. You should not
                rely on output from our Services as your sole source of truth,
                factual information, or as a substitute for professional or
                human judgment.
              </li>
              <li>
                You are responsible for reviewing and evaluating all output.
                This includes assessing its accuracy, legality, fairness, and
                appropriateness for your specific use case.
              </li>
              <li>
                You must not use any output to make impactful decisions about
                individuals — including but not limited to employment, credit,
                insurance, legal, housing, or medical decisions — without human
                review and proper due diligence.
              </li>
              <li>
                Output generated by our Services is produced by AI and may
                occasionally be inaccurate, incomplete, biased, or offensive.
                Such content does not reflect the views, opinions, or values of
                MAKKN or any affiliated individuals or organizations.
              </li>
              <li>
                If output references third-party products, companies, or
                services, such references do not imply any endorsement,
                partnership, or affiliation unless explicitly stated.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              5. Data & Privacy
            </h2>
            <p className="mb-6">
              You retain ownership of all data you upload, including candidate
              resumes and company materials. We process your data only to
              provide the Services, in accordance with our Privacy Policy. We
              use encryption, access controls, and secure hosting to protect
              your data. You are responsible for complying with data protection
              laws when using the Services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              6. Service Availability
            </h2>
            <p className="mb-6">
              We strive to ensure uninterrupted access, but do not guarantee
              uptime. Features may be added, modified, or removed without prior
              notice. We may suspend or restrict access to some Services in
              response to abuse, technical issues, or regulatory concerns.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              7. Feedback & Improvements
            </h2>
            <p className="mb-6">
              You may submit feedback, suggestions, or ideas about the Services.
              We may use this feedback without obligation or compensation to
              you.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Termination</h2>
            <p className="mb-6">
              You may stop using the Services at any time. We reserve the right
              to suspend or terminate accounts that violate these Terms or abuse
              the system.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              9. Modifications
            </h2>
            <p className="mb-6">
              We may update these Terms from time to time. We'll notify users of
              material changes, and continued use after updates constitutes
              acceptance.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Billing</h2>
            <p className="mb-2">
              If you purchase any of our Services, you agree to provide complete
              and accurate billing information, including a valid and authorized
              payment method.
            </p>
            <p className="mb-2">
              For paid subscriptions or usage-based plans, your payment method
              will be automatically charged at the start of each billing period
              (monthly, annually, or as otherwise agreed).
            </p>
            <p className="mb-2">
              You are responsible for all applicable taxes, duties, and charges
              related to your use of the Services, and we will collect tax where
              legally required.
            </p>
            <p className="mb-2">
              If we are unable to process your payment, we may suspend your
              access to paid features, downgrade your account to a free tier, or
              terminate your Services until payment is successfully completed.
            </p>
            <p className="mb-6">
              We reserve the right to change our pricing and subscription models
              at any time. Any changes will apply at the start of your next
              billing cycle, and we will notify you in advance where required.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              11. Cancellation
            </h2>
            <p className="mb-6">
              You may cancel your paid subscription at any time through your
              account settings or by contacting support. Cancellation will stop
              future billing, but previously processed payments are
              non-refundable, except where required by law. If your cancellation
              occurs before the end of your billing cycle, you will continue to
              have access to paid features until the end of the period. These
              Terms are governed by the laws of Egypt. Any disputes shall be
              resolved in the courts of Egypt.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact</h2>
            <p className="mb-2">
              For questions about these Terms or to report misuse:
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
