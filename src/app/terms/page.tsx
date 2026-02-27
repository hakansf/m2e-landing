import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — M2E",
  description: "Terms of service for Memes to an End (m2e.ai).",
};

export default function TermsPage() {
  return (
    <div
      className="min-h-dvh bg-[#0a0a0a] relative"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(0, 188, 212, 0.06) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-2xl px-8 pt-20 pb-24 md:pt-28 md:pb-32">
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
              M2E Signal is a community intelligence and generative engine
              optimization (GEO) platform. The Service analyzes publicly
              available online content — including discussions on platforms like
              Reddit, search engine results, and AI-generated outputs — to
              provide brand intelligence, audience insights, competitive
              analysis, and content strategy tools for our clients.
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
              To access the Service, you must create an account using Google
              OAuth or email/password authentication. You agree to:
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

            <h3 className="text-sm font-semibold text-neutral-200 mt-5 mb-2">
              Client Subscriptions
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Access to M2E Signal&apos;s full platform features requires a paid
              subscription, governed by a separate Statement of Work
              (&ldquo;SOW&rdquo;) or subscription agreement between M2E and your
              organization. Specific pricing, service scope, deliverables, and
              payment terms are defined in that agreement.
            </p>

            <h3 className="text-sm font-semibold text-neutral-200 mt-5 mb-2">
              Free and Trial Access
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              We may offer limited free access, demo accounts, or trial periods
              at our discretion. Free and trial access may be limited in
              features, data, or duration and may be modified or discontinued at
              any time.
            </p>

            <h3 className="text-sm font-semibold text-neutral-200 mt-5 mb-2">
              Refunds
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Refund policies are governed by your organization&apos;s SOW or
              subscription agreement with M2E. If no such agreement exists, all
              fees are non-refundable except as required by applicable law.
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
                Attempt to gain unauthorized access to the Service, other
                accounts, or any related systems or networks
              </li>
              <li>
                Reverse engineer, decompile, or disassemble any part of the
                Service
              </li>
              <li>
                Use the Service to scrape, collect, or store personal data of
                individuals without their consent, except as part of the
                Service&apos;s analysis of publicly available content
              </li>
              <li>
                Use the Service to create, distribute, or amplify misleading,
                deceptive, or manipulative content
              </li>
              <li>
                Circumvent or attempt to circumvent any access controls, rate
                limits, or security measures
              </li>
              <li>
                Use the Service in any manner that could disable, overburden, or
                impair its functionality
              </li>
              <li>
                Use the Service to violate the terms of service of any
                third-party platform (including Reddit)
              </li>
              <li>
                Redistribute, sublicense, or resell access to the Service or its
                outputs without our prior written consent
              </li>
              <li>
                Use automated means (bots, scrapers, etc.) to access the Service
                except through our provided APIs
              </li>
            </ul>
          </section>

          {/* 6. Intellectual Property */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              6. Intellectual Property
            </h2>

            <h3 className="text-sm font-semibold text-neutral-200 mt-5 mb-2">
              M2E&apos;s Intellectual Property
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              The Service, including its design, architecture, algorithms,
              methodologies, enrichment frameworks, data models, analytical
              processes, user interface, branding, and all related intellectual
              property, is and remains the exclusive property of Memes to an
              End, LLC. Nothing in these Terms grants you any right, title, or
              interest in our intellectual property except the limited right to
              use the Service as described herein.
            </p>
            <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
              Specifically, the following are proprietary and confidential:
            </p>
            <ul className="mt-3 space-y-2 text-neutral-400 text-sm leading-relaxed list-disc list-outside ml-5">
              <li>
                M2E Signal&apos;s data enrichment and analysis methodologies
              </li>
              <li>
                Our community intelligence frameworks and scoring models
              </li>
              <li>
                The UGC Signal Intelligence Framework and all related schemas
              </li>
              <li>
                Our generative engine optimization (GEO) processes and
                techniques
              </li>
              <li>
                Dashboard designs, data visualizations, and analytical outputs
                unique to the platform
              </li>
            </ul>

            <h3 className="text-sm font-semibold text-neutral-200 mt-5 mb-2">
              Client Data
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              You (or your organization) retain ownership of all data you
              provide to the Service, including brand guidelines, marketing
              documents, campaign briefs, and other business materials. You
              grant M2E a limited, non-exclusive license to use this data solely
              to provide and improve the Service for your organization.
            </p>

            <h3 className="text-sm font-semibold text-neutral-200 mt-5 mb-2">
              Analytical Outputs
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Reports, dashboards, insights, and other analytical outputs
              generated by the Service using publicly available data and our
              proprietary methodologies are jointly owned as follows:
            </p>
            <ul className="mt-3 space-y-2 text-neutral-400 text-sm leading-relaxed list-disc list-outside ml-5">
              <li>
                The underlying methodologies, frameworks, and analytical
                processes remain M2E&apos;s exclusive intellectual property
              </li>
              <li>
                The specific insights and recommendations generated for your
                organization may be used by your organization for internal
                business purposes
              </li>
              <li>
                M2E may use anonymized and aggregated insights derived from the
                Service to improve our products, conduct research, and develop
                benchmarks, provided such use does not reveal your
                organization&apos;s confidential information
              </li>
            </ul>

            <h3 className="text-sm font-semibold text-neutral-200 mt-5 mb-2">
              Feedback
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Any suggestions, ideas, enhancement requests, or other feedback
              you provide about the Service may be used by M2E without
              restriction or compensation.
            </p>
          </section>

          {/* 7. Data and Privacy */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              7. Data and Privacy
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Your use of the Service is also governed by our{" "}
              <a
                href="/privacy"
                className="text-[#00BCD4] hover:brightness-110 transition-all"
              >
                Privacy Policy
              </a>
              , which is incorporated into these Terms by reference.
            </p>

            <h3 className="text-sm font-semibold text-neutral-200 mt-5 mb-2">
              Publicly Available Data
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              The Service analyzes publicly available content from online
              platforms. This content is collected and processed in accordance
              with applicable laws and platform terms of service. We do not
              claim ownership of publicly available third-party content; we
              provide analytical insights derived from such content.
            </p>

            <h3 className="text-sm font-semibold text-neutral-200 mt-5 mb-2">
              Confidentiality
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              We treat your organization&apos;s configuration data, brand
              materials, and analytical outputs as confidential. We will not
              share your organization&apos;s specific data or insights with
              other clients or third parties, except as described in our Privacy
              Policy or with your consent.
            </p>
          </section>

          {/* 8. AI-Powered Features */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              8. AI-Powered Features
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              The Service includes features powered by artificial intelligence
              and large language models, including the AMA Query module, content
              generation tools, and automated analysis.
            </p>
            <ul className="mt-3 space-y-2 text-neutral-400 text-sm leading-relaxed list-disc list-outside ml-5">
              <li>
                AI-generated outputs are provided for informational purposes and
                should be reviewed by qualified personnel before being used for
                business decisions
              </li>
              <li>
                We do not guarantee the accuracy, completeness, or reliability
                of AI-generated content
              </li>
              <li>
                You are responsible for reviewing and approving any AI-generated
                content before publication or distribution
              </li>
              <li>
                The AI features are designed to operate within the scope of your
                organization&apos;s data and publicly available information;
                they are not a substitute for professional advice
              </li>
            </ul>
          </section>

          {/* 9. Disclaimer of Warranties */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              9. Disclaimer of Warranties
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed uppercase tracking-wide">
              The Service is provided &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; without warranties of any kind, either express or
              implied, including but not limited to implied warranties of
              merchantability, fitness for a particular purpose,
              non-infringement, or accuracy.
            </p>
            <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
              We do not warrant that:
            </p>
            <ul className="mt-3 space-y-2 text-neutral-400 text-sm leading-relaxed list-disc list-outside ml-5">
              <li>
                The Service will be uninterrupted, secure, or error-free
              </li>
              <li>
                Results obtained from the Service will be accurate or reliable
              </li>
              <li>Any defects in the Service will be corrected</li>
              <li>The Service will meet your specific requirements</li>
            </ul>
          </section>

          {/* 10. Limitation of Liability */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              10. Limitation of Liability
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed uppercase tracking-wide">
              To the maximum extent permitted by applicable law, in no event
              shall M2E, its officers, directors, employees, agents, or
              affiliates be liable for any indirect, incidental, special,
              consequential, or punitive damages, including but not limited to
              loss of profits, data, use, or goodwill, arising out of or in
              connection with your use of the Service, whether based on
              warranty, contract, tort (including negligence), or any other
              legal theory, even if we have been advised of the possibility of
              such damages.
            </p>
            <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
              Our total aggregate liability for all claims arising out of or
              relating to these Terms or the Service shall not exceed the amount
              paid by your organization to M2E in the twelve (12) months
              preceding the claim.
            </p>
          </section>

          {/* 11. Indemnification */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              11. Indemnification
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              You agree to indemnify, defend, and hold harmless M2E and its
              officers, directors, employees, and agents from and against any
              and all claims, liabilities, damages, losses, and expenses
              (including reasonable attorneys&apos; fees) arising out of or in
              connection with:
            </p>
            <ul className="mt-3 space-y-2 text-neutral-400 text-sm leading-relaxed list-disc list-outside ml-5">
              <li>Your use of the Service in violation of these Terms</li>
              <li>Your violation of any applicable law or regulation</li>
              <li>
                Any content you provide to or publish through the Service
              </li>
              <li>
                Your organization&apos;s use of insights or content generated by
                the Service
              </li>
            </ul>
          </section>

          {/* 12. Termination */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              12. Termination
            </h2>

            <h3 className="text-sm font-semibold text-neutral-200 mt-5 mb-2">
              By You
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              You may stop using the Service at any time. To close your account,
              contact us at{" "}
              <a
                href="mailto:info@m2e.ai"
                className="text-[#00BCD4] hover:brightness-110 transition-all"
              >
                info@m2e.ai
              </a>
              . Termination of a paid subscription is governed by your
              organization&apos;s SOW or subscription agreement.
            </p>

            <h3 className="text-sm font-semibold text-neutral-200 mt-5 mb-2">
              By Us
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              We may suspend or terminate your access to the Service at any
              time, with or without cause, including if we reasonably believe:
            </p>
            <ul className="mt-3 space-y-2 text-neutral-400 text-sm leading-relaxed list-disc list-outside ml-5">
              <li>You have violated these Terms</li>
              <li>
                Your use poses a security risk to the Service or other users
              </li>
              <li>Termination is required by law</li>
              <li>
                Your organization&apos;s subscription has expired or payment is
                overdue
              </li>
            </ul>

            <h3 className="text-sm font-semibold text-neutral-200 mt-5 mb-2">
              Effect of Termination
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Upon termination, your right to use the Service ceases
              immediately. We may delete your account data in accordance with
              our Privacy Policy. Sections 6 (Intellectual Property), 9
              (Disclaimer), 10 (Limitation of Liability), 11
              (Indemnification), and 14 (Governing Law) survive termination.
            </p>
          </section>

          {/* 13. Modifications */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              13. Modifications to the Service and Terms
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              We reserve the right to modify, suspend, or discontinue the
              Service (or any part thereof) at any time. We may also update
              these Terms from time to time. If we make material changes, we
              will notify you by updating the &ldquo;Last Updated&rdquo; date
              and, where appropriate, providing additional notice. Your
              continued use of the Service after changes constitutes acceptance
              of the updated Terms.
            </p>
          </section>

          {/* 14. Governing Law */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              14. Governing Law and Dispute Resolution
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              These Terms shall be governed by and construed in accordance with
              the laws of the State of California, without regard to its
              conflict of law provisions. Any disputes arising out of or
              relating to these Terms or the Service shall be resolved through
              binding arbitration administered by JAMS in San Francisco,
              California, in accordance with its Streamlined Arbitration Rules.
              Either party may seek injunctive relief in any court of competent
              jurisdiction.
            </p>
          </section>

          {/* 15. General Provisions */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              15. General Provisions
            </h2>
            <ul className="space-y-3 text-neutral-400 text-sm leading-relaxed list-disc list-outside ml-5">
              <li>
                <strong className="text-neutral-300">Entire Agreement:</strong>{" "}
                These Terms, together with the Privacy Policy and any applicable
                SOW or subscription agreement, constitute the entire agreement
                between you and M2E regarding the Service.
              </li>
              <li>
                <strong className="text-neutral-300">Severability:</strong> If
                any provision of these Terms is found to be unenforceable, the
                remaining provisions shall continue in full force and effect.
              </li>
              <li>
                <strong className="text-neutral-300">Waiver:</strong> Failure to
                enforce any provision of these Terms shall not constitute a
                waiver of that provision.
              </li>
              <li>
                <strong className="text-neutral-300">Assignment:</strong> You
                may not assign your rights under these Terms without our prior
                written consent. We may assign our rights without restriction.
              </li>
              <li>
                <strong className="text-neutral-300">Force Majeure:</strong> We
                shall not be liable for any failure or delay in performance
                resulting from causes beyond our reasonable control.
              </li>
            </ul>
          </section>
        </div>

        {/* Contact / Questions */}
        <div className="mt-16 pt-8 border-t border-neutral-800">
          <h2 className="text-lg font-semibold text-white mb-3">
            16. Contact Us
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            If you have questions about these Terms, please contact us:
          </p>
          <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
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
      <div className="fixed bottom-0 left-0 right-0 z-20 flex justify-between items-center px-6 md:px-8 py-3 md:py-4 text-neutral-600 text-[10px] md:text-xs">
        <a href="/contact" className="hover:text-neutral-400 transition-colors">
          Contact Us
        </a>
        <div className="flex gap-4 md:gap-6">
          <a href="/privacy" className="hover:text-neutral-400 transition-colors">
            Privacy
          </a>
          <span>|</span>
          <a href="/terms" className="hover:text-neutral-400 transition-colors">
            Terms
          </a>
          <span>&copy; 2026 Memes to an End</span>
        </div>
      </div>
    </div>
  );
}
