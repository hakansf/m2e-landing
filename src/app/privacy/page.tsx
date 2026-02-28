import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — M2E",
  description: "Privacy policy for Memes to an End (m2e.ai).",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="mt-3 text-neutral-600 text-sm">
          Effective February 27, 2026 &middot; Last Updated February 27, 2026
        </p>

        <p className="mt-10 text-neutral-400 leading-relaxed">
          Memes to an End, LLC (&ldquo;M2E,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the M2E Signal
          platform at app.m2e.ai and the website at m2e.ai (collectively, the
          &ldquo;Service&rdquo;). This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you use our
          Service.
        </p>
        <p className="mt-4 text-neutral-400 leading-relaxed">
          By accessing or using the Service, you agree to this Privacy Policy.
          If you do not agree, please do not use the Service.
        </p>

        <div className="mt-12 space-y-10">
          {/* 1. Information We Collect */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              1. Information We Collect
            </h2>

            <h3 className="text-sm font-semibold text-neutral-200 mt-5 mb-2">
              Information You Provide Directly
            </h3>
            <ul className="space-y-2 text-neutral-400 text-sm leading-relaxed list-disc list-outside ml-5">
              <li>
                <strong className="text-neutral-300">
                  Account Information:
                </strong>{" "}
                When you create an account, we collect your name, email address,
                and company or organization name. If you sign in through Google
                OAuth, we receive your name, email address, and profile picture
                from Google.
              </li>
              <li>
                <strong className="text-neutral-300">
                  Contact Information:
                </strong>{" "}
                When you use our contact form, request a demo, or email us, we
                collect the information you provide, such as your name, email,
                company, and message content.
              </li>
              <li>
                <strong className="text-neutral-300">Client Data:</strong> If
                you are a client using M2E Signal, you or your organization may
                provide brand guidelines, marketing documents, product
                information, and other business materials to configure the
                platform for your use.
              </li>
            </ul>

            <h3 className="text-sm font-semibold text-neutral-200 mt-5 mb-2">
              Information Collected Automatically
            </h3>
            <ul className="space-y-2 text-neutral-400 text-sm leading-relaxed list-disc list-outside ml-5">
              <li>
                <strong className="text-neutral-300">Usage Data:</strong> We
                collect information about how you interact with the Service,
                including pages visited, features used, queries made, and
                timestamps.
              </li>
              <li>
                <strong className="text-neutral-300">
                  Device and Browser Information:
                </strong>{" "}
                We collect your browser type, operating system, IP address, and
                device identifiers to ensure compatibility and security.
              </li>
              <li>
                <strong className="text-neutral-300">
                  Cookies and Local Storage:
                </strong>{" "}
                We use essential cookies and browser local storage to maintain
                your session, remember your preferences (such as theme and
                sidebar state), and keep you logged in. We do not use
                advertising or tracking cookies.
              </li>
            </ul>

            <h3 className="text-sm font-semibold text-neutral-200 mt-5 mb-2">
              Information from Third-Party Sources
            </h3>
            <ul className="space-y-2 text-neutral-400 text-sm leading-relaxed list-disc list-outside ml-5">
              <li>
                <strong className="text-neutral-300">
                  Publicly Available Data:
                </strong>{" "}
                M2E Signal analyzes publicly available content from platforms
                such as Reddit, search engine results pages (SERPs), and
                AI-generated outputs from large language models (LLMs). This
                data includes publicly posted text, usernames, upvote scores,
                timestamps, and other publicly visible metadata. We do not
                collect private messages, non-public content, or data that
                requires authentication to access.
              </li>
              <li>
                <strong className="text-neutral-300">
                  Authentication Providers:
                </strong>{" "}
                When you sign in with Google, we receive limited profile
                information as described above. We do not access your Google
                Drive, Gmail, contacts, or any other Google services beyond
                basic authentication.
              </li>
            </ul>
          </section>

          {/* 2. How We Use Your Information */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="mt-3 space-y-2 text-neutral-400 text-sm leading-relaxed list-disc list-outside ml-5">
              <li>
                Provide, maintain, and improve the M2E Signal platform and its
                features
              </li>
              <li>Authenticate your identity and manage your account</li>
              <li>
                Analyze publicly available community data to generate insights
                for our clients
              </li>
              <li>
                Respond to your inquiries, provide customer support, and
                communicate about the Service
              </li>
              <li>
                Monitor and analyze usage trends to improve user experience
              </li>
              <li>
                Detect, prevent, and address technical issues and security
                threats
              </li>
              <li>Comply with legal obligations</li>
            </ul>

            <p className="mt-5 text-neutral-400 text-sm leading-relaxed">
              We do <strong className="text-neutral-300">not</strong> use your
              information to:
            </p>
            <ul className="mt-3 space-y-2 text-neutral-400 text-sm leading-relaxed list-disc list-outside ml-5">
              <li>Serve advertisements</li>
              <li>Build advertising profiles</li>
              <li>
                Sell or rent your personal information to third parties
              </li>
              <li>
                Make automated decisions that produce legal or similarly
                significant effects on you
              </li>
            </ul>
          </section>

          {/* 3. How We Share Your Information */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              3. How We Share Your Information
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              We do not sell, rent, or trade your personal information. We may
              share information in the following limited circumstances:
            </p>
            <ul className="mt-3 space-y-2 text-neutral-400 text-sm leading-relaxed list-disc list-outside ml-5">
              <li>
                <strong className="text-neutral-300">
                  Service Providers:
                </strong>{" "}
                We use third-party services to operate the platform, including
                Supabase (database and authentication), Vercel (hosting), and
                Anthropic (AI processing). These providers access data only as
                necessary to perform services on our behalf and are
                contractually obligated to protect it.
              </li>
              <li>
                <strong className="text-neutral-300">
                  Client Organizations:
                </strong>{" "}
                If your account is associated with a client organization (e.g.,
                your employer has an M2E Signal subscription), your account
                activity within that organization&apos;s workspace may be
                visible to authorized administrators within that organization.
              </li>
              <li>
                <strong className="text-neutral-300">
                  Legal Requirements:
                </strong>{" "}
                We may disclose information if required by law, regulation,
                legal process, or governmental request, or to protect the
                rights, safety, or property of M2E, our users, or the public.
              </li>
              <li>
                <strong className="text-neutral-300">
                  Business Transfers:
                </strong>{" "}
                In the event of a merger, acquisition, or sale of assets, your
                information may be transferred as part of that transaction. We
                will notify you of any such change.
              </li>
            </ul>
          </section>

          {/* 4. Data from Public Platforms */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              4. Data from Public Platforms
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              M2E Signal collects and analyzes publicly available content from
              online communities (such as Reddit), search engines, and
              AI-generated outputs. This analysis is a core function of our
              Service.
            </p>
            <ul className="mt-3 space-y-2 text-neutral-400 text-sm leading-relaxed list-disc list-outside ml-5">
              <li>
                We only collect content that is publicly posted and visible to
                anyone on the internet without authentication.
              </li>
              <li>
                We do not scrape private or restricted content.
              </li>
              <li>
                We do not contact, message, or interact with public platform
                users on behalf of our platform.
              </li>
              <li>
                Publicly available usernames may appear in our analytics
                dashboards to help our clients understand community dynamics. If
                you are a public platform user and wish to have your publicly
                posted content excluded from our analysis, please contact us at{" "}
                <a
                  href="mailto:privacy@m2e.ai"
                  className="text-[#00BCD4] hover:brightness-110 transition-all"
                >
                  privacy@m2e.ai
                </a>
                .
              </li>
            </ul>
          </section>

          {/* 5. Google OAuth and Limited Use Disclosure */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              5. Google OAuth and Limited Use Disclosure
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              M2E Signal&apos;s use and transfer of information received from
              Google APIs adheres to the Google API Services User Data Policy,
              including the Limited Use requirements.
            </p>
            <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
              Specifically:
            </p>
            <ul className="mt-3 space-y-2 text-neutral-400 text-sm leading-relaxed list-disc list-outside ml-5">
              <li>
                We only request access to your basic profile information (name,
                email, profile picture) for authentication purposes.
              </li>
              <li>
                We do not request access to any sensitive or restricted Google
                API scopes.
              </li>
              <li>
                We do not use Google user data for advertising or to create
                advertising profiles.
              </li>
              <li>
                We do not share Google user data with third parties except as
                necessary to provide or improve the Service, as required by law,
                or as part of a merger or acquisition with adequate data
                protection.
              </li>
              <li>
                We do not allow humans to read Google user data unless we have
                your affirmative consent, it is necessary for security purposes,
                it is necessary to comply with applicable law, or our use is
                limited to internal operations and the data has been aggregated
                and anonymized.
              </li>
            </ul>
          </section>

          {/* 6. Data Retention */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              6. Data Retention
            </h2>
            <ul className="space-y-2 text-neutral-400 text-sm leading-relaxed list-disc list-outside ml-5">
              <li>
                <strong className="text-neutral-300">Account Data:</strong> We
                retain your account information for as long as your account is
                active or as needed to provide the Service. If you or your
                organization requests account deletion, we will delete or
                anonymize your personal data within 30 days, except where
                retention is required by law.
              </li>
              <li>
                <strong className="text-neutral-300">
                  Publicly Available Data:
                </strong>{" "}
                Analyzed public data is retained as part of our intelligence
                datasets for as long as needed to provide insights to clients.
                Data may be periodically refreshed or archived.
              </li>
              <li>
                <strong className="text-neutral-300">Usage Logs:</strong>{" "}
                Automatically collected usage data is retained for up to 12
                months for analytics and security purposes, then deleted or
                anonymized.
              </li>
            </ul>
          </section>

          {/* 7. Data Security */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              7. Data Security
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              We implement industry-standard security measures to protect your
              information, including:
            </p>
            <ul className="mt-3 space-y-2 text-neutral-400 text-sm leading-relaxed list-disc list-outside ml-5">
              <li>
                All data transmitted to and from the Service is encrypted using
                TLS/HTTPS
              </li>
              <li>
                Database access is protected by row-level security policies and
                role-based access controls
              </li>
              <li>
                Authentication is managed through secure OAuth 2.0 protocols
              </li>
              <li>
                We conduct regular security reviews of our infrastructure
              </li>
            </ul>
            <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
              No method of transmission or storage is 100% secure, however, and
              we cannot guarantee absolute security. If you become aware of a
              security vulnerability, please contact us immediately at{" "}
              <a
                href="mailto:security@m2e.ai"
                className="text-[#00BCD4] hover:brightness-110 transition-all"
              >
                security@m2e.ai
              </a>
              .
            </p>
          </section>

          {/* 8. Your Rights and Choices */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              8. Your Rights and Choices
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="mt-3 space-y-2 text-neutral-400 text-sm leading-relaxed list-disc list-outside ml-5">
              <li>
                <strong className="text-neutral-300">Access:</strong> Request a
                copy of the personal information we hold about you.
              </li>
              <li>
                <strong className="text-neutral-300">Correction:</strong>{" "}
                Request that we correct inaccurate or incomplete personal
                information.
              </li>
              <li>
                <strong className="text-neutral-300">Deletion:</strong> Request
                that we delete your personal information, subject to certain
                exceptions.
              </li>
              <li>
                <strong className="text-neutral-300">
                  Data Portability:
                </strong>{" "}
                Request a machine-readable copy of your data.
              </li>
              <li>
                <strong className="text-neutral-300">Opt-Out:</strong> Opt out
                of certain data processing activities.
              </li>
              <li>
                <strong className="text-neutral-300">
                  Withdraw Consent:
                </strong>{" "}
                Where processing is based on consent, you may withdraw consent
                at any time.
              </li>
            </ul>
            <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:privacy@m2e.ai"
                className="text-[#00BCD4] hover:brightness-110 transition-all"
              >
                privacy@m2e.ai
              </a>
              . We will respond to your request within 30 days.
            </p>

            <h3 className="text-sm font-semibold text-neutral-200 mt-5 mb-2">
              California Residents
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              If you are a California resident, you have additional rights under
              the California Consumer Privacy Act (CCPA), including the right to
              know what personal information we collect and how it is used, the
              right to request deletion, and the right to opt out of the sale of
              personal information. We do not sell personal information.
            </p>

            <h3 className="text-sm font-semibold text-neutral-200 mt-5 mb-2">
              European Economic Area (EEA) Residents
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              If you are in the EEA, our legal basis for processing personal
              information includes performance of a contract (providing the
              Service), legitimate interests (improving the Service, security),
              and consent (where applicable). You have the right to lodge a
              complaint with your local data protection authority.
            </p>
          </section>

          {/* 9. Children's Privacy */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              9. Children&apos;s Privacy
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              The Service is not intended for individuals under the age of 16.
              We do not knowingly collect personal information from children. If
              you believe we have collected information from a child, please
              contact us at{" "}
              <a
                href="mailto:privacy@m2e.ai"
                className="text-[#00BCD4] hover:brightness-110 transition-all"
              >
                privacy@m2e.ai
              </a>{" "}
              and we will promptly delete it.
            </p>
          </section>

          {/* 10. International Data Transfers */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              10. International Data Transfers
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Your information may be transferred to and processed in the United
              States, where our servers and service providers are located. If
              you are accessing the Service from outside the United States,
              please be aware that your information may be subject to U.S. data
              protection laws, which may differ from those in your jurisdiction.
            </p>
          </section>

          {/* 11. Third-Party Links */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              11. Third-Party Links
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              The Service may contain links to third-party websites or services
              (such as Reddit, Google, or client websites). We are not
              responsible for the privacy practices of these third parties. We
              encourage you to review their privacy policies.
            </p>
          </section>

          {/* 12. Changes to This Policy */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              12. Changes to This Policy
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              We may update this Privacy Policy from time to time. If we make
              material changes, we will notify you by updating the &ldquo;Last
              Updated&rdquo; date at the top of this page and, where
              appropriate, providing additional notice (such as email
              notification or an in-app alert). Your continued use of the
              Service after changes constitutes acceptance of the updated
              policy.
            </p>
          </section>
        </div>

        {/* Contact / Questions */}
        <div className="mt-16 pt-8 border-t border-neutral-800">
          <h2 className="text-lg font-semibold text-white mb-3">
            13. Contact Us
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            If you have questions about this Privacy Policy or our data
            practices, please contact us:
          </p>
          <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
            <strong className="text-neutral-300">
              Memes to an End, LLC
            </strong>
            <br />
            Email:{" "}
            <a
              href="mailto:privacy@m2e.ai"
              className="text-[#00BCD4] hover:brightness-110 transition-all"
            >
              privacy@m2e.ai
            </a>
            <br />
            General Inquiries:{" "}
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
          <span>
            <a href="/privacy" className="hover:text-neutral-400 transition-colors">Privacy</a>
            {" | "}
            <a href="/terms" className="hover:text-neutral-400 transition-colors">Terms</a>
          </span>
          <span>&copy; 2026 Memes to an End</span>
        </div>
      </div>
    </div>
  );
}
