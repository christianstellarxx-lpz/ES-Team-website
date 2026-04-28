import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | ES Team",
  description: "Learn how ES Team collects, uses, and protects your personal information. We are committed to safeguarding your privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Legal"
          title="Privacy Policy"
          subtitle="We are committed to protecting your personal information and your right to privacy."
        />

        <section className="bg-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-10">

            <div className="mb-12 pb-8 border-b border-gray-100">
              <p className="font-body text-xs text-gray-400 uppercase tracking-widest mb-4">
                Last Updated: April 28, 2026
              </p>
              <p className="font-body text-gray-600 leading-relaxed text-base">
                At ES Team, we are committed to protecting your personal information and your right to privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                you visit our website or engage with our virtual assistance and digital marketing services.
                Please read this policy carefully. If you disagree with its terms, please discontinue use of
                our site and services.
              </p>
            </div>

            <div className="space-y-12">

              <div>
                <h2 className="font-heading font-bold text-brand-dark text-xl mb-4">
                  <span className="text-brand-blue mr-2">1.1</span>Information We Collect
                </h2>
                <p className="font-body text-gray-600 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-none space-y-2 mb-4 pl-4">
                  {[
                    "Inquire about our services",
                    "Fill out a contact or lead capture form",
                    "Book a consultation or onboarding call",
                    "Communicate with us via email or social media",
                  ].map((item) => (
                    <li key={item} className="font-body text-gray-600 text-sm flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="font-body text-gray-600 leading-relaxed mb-4">
                  The personal information we collect may include your full name, email address, phone number,
                  business name and industry, service needs and preferences, and any other information you
                  choose to provide.
                </p>
                <p className="font-body text-gray-600 leading-relaxed">
                  We may also automatically collect certain technical information when you visit our website,
                  including IP address, browser type and version, pages visited and time spent, referring URL,
                  and device and operating system information.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-brand-dark text-xl mb-4">
                  <span className="text-brand-blue mr-2">1.2</span>How We Use Your Information
                </h2>
                <p className="font-body text-gray-600 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-none space-y-2 pl-4">
                  {[
                    "Respond to your inquiries and service requests",
                    "Provide, operate, and maintain our virtual assistance and digital marketing services",
                    "Send you relevant information, updates, and service-related communications",
                    "Improve our website and service offerings",
                    "Understand how our clients interact with our services",
                    "Comply with legal obligations",
                  ].map((item) => (
                    <li key={item} className="font-body text-gray-600 text-sm flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="font-body text-gray-600 leading-relaxed mt-4">
                  We do not sell, trade, or rent your personal information to third parties.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-brand-dark text-xl mb-4">
                  <span className="text-brand-blue mr-2">1.3</span>How We Share Your Information
                </h2>
                <p className="font-body text-gray-600 leading-relaxed mb-4">
                  We may share your information only in the following circumstances:
                </p>
                <ul className="list-none space-y-2 pl-4">
                  {[
                    "With service providers and tools we use to operate our business (e.g., scheduling platforms, email tools, project management software), bound by confidentiality obligations",
                    "If required by law, regulation, or legal process",
                    "To protect the rights, property, and safety of ES Team, our clients, or others",
                  ].map((item) => (
                    <li key={item} className="font-body text-gray-600 text-sm flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-brand-dark text-xl mb-4">
                  <span className="text-brand-blue mr-2">1.4</span>Data Retention
                </h2>
                <p className="font-body text-gray-600 leading-relaxed">
                  We retain your personal data only for as long as necessary to fulfill the purposes outlined
                  in this policy or as required by law. When no longer needed, your data will be securely
                  deleted or anonymized.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-brand-dark text-xl mb-4">
                  <span className="text-brand-blue mr-2">1.5</span>Your Rights
                </h2>
                <p className="font-body text-gray-600 leading-relaxed mb-4">
                  Depending on your location (including clients in the US and Canada), you may have the
                  right to:
                </p>
                <ul className="list-none space-y-2 pl-4">
                  {[
                    "Access the personal data we hold about you",
                    "Request correction of inaccurate data",
                    "Request deletion of your data",
                    "Withdraw consent at any time (where processing is based on consent)",
                    "Lodge a complaint with a relevant data protection authority",
                  ].map((item) => (
                    <li key={item} className="font-body text-gray-600 text-sm flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="font-body text-gray-600 leading-relaxed mt-4">
                  To exercise any of these rights, please contact us at:{" "}
                  <a href="mailto:info@esteam.work" className="text-brand-blue hover:underline">
                    info@esteam.work
                  </a>
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-brand-dark text-xl mb-4">
                  <span className="text-brand-blue mr-2">1.6</span>Security
                </h2>
                <p className="font-body text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal
                  information from unauthorized access, use, alteration, or disclosure. However, no
                  transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-brand-dark text-xl mb-4">
                  <span className="text-brand-blue mr-2">1.7</span>Third-Party Links
                </h2>
                <p className="font-body text-gray-600 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the
                  privacy practices of those sites and encourage you to review their privacy policies
                  independently.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-brand-dark text-xl mb-4">
                  <span className="text-brand-blue mr-2">1.8</span>Changes to This Policy
                </h2>
                <p className="font-body text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. The updated version will be indicated
                  by a revised &ldquo;Last Updated&rdquo; date at the top of this document. Continued use of
                  our website or services after any changes constitutes your acceptance of the updated policy.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
                  <span className="text-brand-blue mr-2">1.9</span>Contact Us
                </h2>
                <p className="font-body text-gray-600 leading-relaxed">
                  If you have questions or concerns about this Privacy Policy, please contact us:
                </p>
                <a
                  href="mailto:info@esteam.work"
                  className="inline-flex items-center gap-2 mt-4 font-heading font-bold text-brand-blue hover:text-brand-aqua transition-colors duration-200"
                >
                  info@esteam.work →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
