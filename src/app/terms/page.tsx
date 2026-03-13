import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — M2E",
  description: "Terms of service for Memes to an End (m2e.ai).",
};

export default function TermsPage() {
  return (
    <div
      className="min-h-dvh bg-[#0a0a0a] relative flex flex-col"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(0, 188, 212, 0.06) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-2xl px-8 pt-20 pb-24 md:pt-28 md:pb-32 flex-1">
        <p className="text-[#00BCD4] text-sm font-medium tracking-wide uppercase mb-4">
          Legal
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          Terms of Service
        </h1>
        <p className="mt-3 text-neutral-600 text-sm">
          Effective February 27, 2026 &middot; Last Updated February 27, 2026
        </p>

        <p className="mt-10 text-neutral-400 leading-relaxed">
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
          use of the M2E Signal platform at app.m2e.ai and the website at m2e.ai
          (collectively, the &ldquo;Service&rdquo;), operated by Memes to an
          End, LLC (&ldquo;M2E,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;).
        </p>
        <p className="mt-4 text-neutral-400 leading-relaxed">
          By accessing or using the Service, you agree to be bound by these
          Terms. If you do not agree, do not use the Service.
        </p>

        <div className="mt-12 space-y-10">
          {/* 1. Overview */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              1. Overview of the Service
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              M2E Signal is a community intelligence platform that provides
              brand intelligence, audience insights, and content strategy tools
              for our clients.
            </p>
          </section>

          {/* 2. Eligibility */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              2. Eligibility
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              You must be at least 18 years old and have the legal capacity to
              enter into a binding agreement to use the Service. If you are using
              the Service on behalf of an organization, you represent and warrant
              that you have the authority to bind that organization to these
              Terms.
            </p>
          </section>

          {/* 3. Account Registration */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              3. Account Registration
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              To access the Service, you must create an account. You agree to:
            </p>
            <ul className="mt-3 space-y-2 text-neutral-400 text-sm leading-relaxed list-disc list-outside ml-5">
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>
                Promptly notify us of any unauthorized access to your account
              </li>
              <li>
                Accept responsibility for all activity that occurs under your
                account
              </li>
            </ul>
            <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
              We reserve the right to suspend or terminate accounts that violate
              these Terms.
            </p>
          </section>

          {/* 4. Subscription and Payment */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              4. Subscription and Payment
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Access to M2E Signal&apos;s full platform features requires a paid
              subscription, governed by a separate Statement of Work
              (&ldquo;SOW&rdquo;) or subscription agreement between M2E and your
              organization. Specific pricing, service scope, deliverables, and
              payment terms are defined in that agreement.
            </p>
            <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
              We may offer limited free or trial access at our discretion. All
              fees are non-refundable except as required by applicable law or as
              specified in your SOW.
            </p>
          </section>

          {/* 5. Acceptable Use */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              5. Acceptable Use
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              You agree to use the Service only for lawful purposes and in
              accordance with these Terms. You agree{" "}
              <strong className="text-neutral-300">not</strong> to:
            </p>
            <ul className="mt-3 space-y-2 text-neutral-400 text-sm leading-relaxed list-disc list-outside ml-5">
              <li>
                Use the Service to harass, stalk, threaten, or harm any
                individual or community
              </li>
              <li>
                Attempt to gain unauthorized access to the Service or any
                related systems
              </li>
              <li>
                Reverse engineer, decompile, or disassemble any part of the
                Service
              </li>
              <li>
                Redistribute, sublicense, or resell access to the Service
                without our prior written consent
              </li>
              <li>
                Use the Service in any manner that could disable, overburden, or
                impair its functionality
              </li>
              <li>
                Use automated means to access the Service except through our
                provided APIs
              </li>
            </ul>
          </section>

          {/* 6. Intellectual Property */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              6. Intellectual Property
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              The Service, including its design, architecture, methodologies,
              analytical processes, user interface, branding, and all related
              intellectual property, is and remains the exclusive property of
              Memes to an End, LLC. Nothing in these Terms grants you any right,
              title, or interest in our intellectual property except the limited
              right to use the Service as described herein.
            </p>

            <h3 className="text-sm font-semibold text-neutral-200 mt-5 mb-2">
              Client Data
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              You retain ownership of all data you provide to the Service. You
              grant M2E a limited, non-exclusive license to use this data solely
              to provide the Service for your organization.
            </p>

            <h3 className="text-sm font-semibold text-neutral-200 mt-5 mb-2">
              Analytical Outputs
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Reports, dashboards, and insights generated by the Service may be
              used by your organization for internal business purposes. The
              underlying methodologies and processes remain M2E&apos;s exclusive
              intellectual property.
            </p>

            <h3 className="text-sm font-semibold text-neutral-200 mt-5 mb-2">
              Feedback
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Any feedback you provide about the Service may be used by M2E
              without restriction or compensation.
            </p>
          </section>

          {/* 7. Data and Privacy */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              7. Data and Privacy
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Your use of the Service is governed by our{" "}
              <a
                href="/privacy"
                className="text-[#00BCD4] hover:brightness-110 transition-all"
              >
                Privacy Policy
              </a>
              , incorporated into these Terms by reference. We treat your
              organization&apos;s data and analytical outputs as confidential and
              will not share them with other clients or third parties except as
              described in our Privacy Policy.
            </p>
          </section>

          {/* 8. Disclaimer of Warranties */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              8. Disclaimer of Warranties
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed uppercase tracking-wide">
              The Service is provided &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; without warranties of any kind. We do not warrant
              that the Service will be uninterrupted, error-free, or meet your
              specific requirements.
            </p>
          </section>

          {/* 9. Limitation of Liability */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              9. Limitation of Liability
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed uppercase tracking-wide">
              To the maximum extent permitted by law, M2E shall not be liable
              for any indirect, incidental, special, or consequential damages
              arising from your use of the Service.
            </p>
            <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
              Our total aggregate liability shall not exceed the amount paid by
              your organization to M2E in the twelve (12) months preceding the
              claim.
            </p>
          </section>

          {/* 10. Indemnification */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              10. Indemnification
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              You agree to indemnify and hold harmless M2E from any claims
              arising out of your use of the Service in violation of these Terms
              or applicable law.
            </p>
          </section>

          {/* 11. Termination */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              11. Termination
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Either party may terminate access to the Service at any time. Upon
              termination, your right to use the Service ceases immediately.
              Sections 6, 8, 9, 10, and 13 survive termination.
            </p>
          </section>

          {/* 12. Modifications */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              12. Modifications
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              We may update these Terms from time to time. Continued use of the
              Service after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          {/* 13. Governing Law */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              13. Governing Law
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              These Terms are governed by the laws of the State of California.
              Disputes shall be resolved through binding arbitration administered
              by JAMS in San Francisco, California.
            </p>
          </section>
        </div>

        {/* Contact / Questions */}
        <div className="mt-16 pt-8 border-t border-neutral-800">
          <h2 className="text-lg font-semibold text-white mb-3">
            14. Contact Us
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            <strong className="text-neutral-300">
              Memes to an End, LLC
            </strong>
            <br />
            Email:{" "}
            <a
              href="mailto:info@m2e.ai"
              className="text-[#00BCD4] hover:brightness-110 transition-all"
            >
              info@m2e.ai
            </a>
            <br />
            Website:{" "}
            <a
              href="/contact"
              className="text-[#00BCD4] hover:brightness-110 transition-all"
            >
              m2e.ai/contact
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full px-6 md:px-8 py-4 text-neutral-600 text-xs">
        {/* Mobile */}
        <div className="flex justify-center md:hidden">
          <span>
            <a href="/contact" className="hover:text-neutral-400 transition-colors">Contact</a>
            {" | "}
            <a href="/privacy" className="hover:text-neutral-400 transition-colors">Privacy</a>
            {" | "}
            <a href="/terms" className="hover:text-neutral-400 transition-colors">Terms</a>
          </span>
        </div>
        {/* Desktop */}
        <div className="hidden md:flex md:justify-between">
          <a href="/contact" className="hover:text-neutral-400 transition-colors">
            Contact Us
          </a>
          <div className="flex gap-4 items-center">
            <span>
              <a href="/privacy" className="hover:text-neutral-400 transition-colors">Privacy</a>
              {" | "}
              <a href="/terms" className="hover:text-neutral-400 transition-colors">Terms</a>
            </span>
            <span>&copy; 2026 Memes to an End</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
