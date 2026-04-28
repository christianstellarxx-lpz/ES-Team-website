import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions | ES Team",
  description: "Read the Terms and Conditions governing your use of ES Team's website and virtual assistance and digital marketing services.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Legal"
          title="Terms and Conditions"
          subtitle="The terms governing your use of our website and virtual assistance and digital marketing services."
        />

        <section className="bg-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-10">

            <div className="mb-12 pb-8 border-b border-gray-100">
              <p className="font-body text-xs text-gray-400 uppercase tracking-widest mb-4">
                Last Updated: April 28, 2026
              </p>
              <p className="font-body text-gray-600 leading-relaxed text-base">
                Welcome to ES Team. These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of our
                website and the virtual assistance and digital marketing services we provide. By accessing our
                website or engaging our services, you agree to be bound by these Terms. Please read these
                Terms carefully before using our services.
              </p>
            </div>

            <div className="space-y-12">

              <div>
                <h2 className="font-heading font-bold text-brand-dark text-xl mb-4">
                  <span className="text-brand-blue mr-2">3.1</span>Services
                </h2>
                <p className="font-body text-gray-600 leading-relaxed mb-4">
                  ES Team provides the following digital support services to businesses and entrepreneurs,
                  primarily in the US and Canada:
                </p>
                <ul className="list-none space-y-2 pl-4 mb-4">
                  {[
                    "Social media management",
                    "Digital marketing support",
                    "Administrative virtual assistance",
                    "Content creation and scheduling",
                    "Lead generation and research",
                  ].map((item) => (
                    <li key={item} className="font-body text-gray-600 text-sm flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="font-body text-gray-600 leading-relaxed">
                  The specific scope, deliverables, timeline, and pricing for any engagement will be agreed
                  upon separately between ES Team and the client prior to the commencement of work.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-brand-dark text-xl mb-4">
                  <span className="text-brand-blue mr-2">3.2</span>Eligibility
                </h2>
                <p className="font-body text-gray-600 leading-relaxed mb-4">
                  By using our services, you confirm that:
                </p>
                <ul className="list-none space-y-2 pl-4">
                  {[
                    "You are at least 18 years of age",
                    "You are authorized to enter into a binding agreement on behalf of yourself or your business",
                    "You will provide accurate and complete information when engaging with us",
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
                  <span className="text-brand-blue mr-2">3.3</span>Client Responsibilities
                </h2>
                <p className="font-body text-gray-600 leading-relaxed mb-4">
                  To enable ES Team to deliver quality services, clients agree to:
                </p>
                <ul className="list-none space-y-2 pl-4">
                  {[
                    "Provide timely access to required accounts, assets, and information",
                    "Communicate feedback and approvals within agreed timelines",
                    "Ensure that any materials shared with ES Team do not infringe upon the intellectual property or rights of third parties",
                    "Comply with the terms of any third-party platforms relevant to the services (e.g., Facebook, Instagram, Google)",
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
                  <span className="text-brand-blue mr-2">3.4</span>Payment Terms
                </h2>
                <p className="font-body text-gray-600 leading-relaxed mb-4">
                  Payment terms and rates will be specified in a separate service agreement or invoice issued
                  to each client. General terms include:
                </p>
                <ul className="list-none space-y-2 pl-4">
                  {[
                    "All payments are made as a one-time, upfront payment prior to the commencement of any work",
                    "Payments are processed exclusively through Wise (wise.com). No other payment methods are accepted at this time",
                    "The client is responsible for any transaction fees charged by Wise",
                    "Work will only begin upon confirmation of successful payment receipt",
                    "ES Team reserves the right to pause or terminate services in the event of non-payment",
                    "All fees are non-refundable unless otherwise agreed in writing",
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
                  <span className="text-brand-blue mr-2">3.5</span>Intellectual Property
                </h2>
                <p className="font-body text-gray-600 leading-relaxed mb-4">
                  Unless otherwise agreed in writing:
                </p>
                <ul className="list-none space-y-2 pl-4">
                  {[
                    "Content, materials, and deliverables created by ES Team for a client will become the client's property upon full payment",
                    "ES Team retains the right to reference completed work in its portfolio or marketing materials, unless the client requests otherwise in writing",
                    "ES Team retains ownership of its proprietary tools, templates, processes, and methodologies used in delivering services",
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
                  <span className="text-brand-blue mr-2">3.6</span>Confidentiality
                </h2>
                <p className="font-body text-gray-600 leading-relaxed">
                  Both parties agree to keep confidential any sensitive business information, client data, or
                  proprietary materials exchanged during the course of the engagement. This obligation
                  survives the termination of the service agreement.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-brand-dark text-xl mb-4">
                  <span className="text-brand-blue mr-2">3.7</span>Limitation of Liability
                </h2>
                <p className="font-body text-gray-600 leading-relaxed mb-4">
                  ES Team provides services in good faith and strives to deliver measurable results. However,
                  we cannot guarantee specific business outcomes, revenue growth, or advertising performance,
                  as these depend on factors outside our control.
                </p>
                <p className="font-body text-gray-600 leading-relaxed">
                  To the fullest extent permitted by applicable law, ES Team shall not be liable for any
                  indirect, incidental, special, or consequential damages arising from the use of our services
                  or website, including but not limited to loss of revenue, data, or business opportunity. Our
                  total liability to any client shall not exceed the total fees paid by that client in the
                  three (3) months preceding the claim.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-brand-dark text-xl mb-4">
                  <span className="text-brand-blue mr-2">3.8</span>Termination
                </h2>
                <p className="font-body text-gray-600 leading-relaxed mb-4">
                  Either party may terminate a service engagement by providing written notice as specified in
                  the applicable service agreement. Upon termination:
                </p>
                <ul className="list-none space-y-2 pl-4">
                  {[
                    "The client remains responsible for payment of all services rendered to date",
                    "ES Team will return or delete client-owned materials upon request",
                    "Confidentiality obligations remain in effect",
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
                  <span className="text-brand-blue mr-2">3.9</span>Acceptable Use
                </h2>
                <p className="font-body text-gray-600 leading-relaxed mb-4">
                  When using ES Team&apos;s services or website, you agree not to:
                </p>
                <ul className="list-none space-y-2 pl-4">
                  {[
                    "Use our services for any unlawful, fraudulent, or harmful purpose",
                    "Provide false or misleading information",
                    "Attempt to gain unauthorized access to our systems or data",
                    "Infringe upon the intellectual property rights of ES Team or any third party",
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
                  <span className="text-brand-blue mr-2">3.10</span>Governing Law
                </h2>
                <p className="font-body text-gray-600 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the Republic
                  of the Philippines. Any disputes arising from or in connection with these Terms or the
                  services provided shall first be attempted to be resolved through good-faith negotiation
                  between the parties. If unresolved, disputes shall be submitted to the appropriate courts
                  of the Philippines, which shall have exclusive jurisdiction over such matters.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-brand-dark text-xl mb-4">
                  <span className="text-brand-blue mr-2">3.11</span>Changes to These Terms
                </h2>
                <p className="font-body text-gray-600 leading-relaxed">
                  ES Team reserves the right to update these Terms at any time. The revised version will be
                  posted on our website with an updated &ldquo;Last Updated&rdquo; date. Continued use of our
                  services following any changes constitutes acceptance of the updated Terms.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
                  <span className="text-brand-blue mr-2">3.12</span>Contact Us
                </h2>
                <p className="font-body text-gray-600 leading-relaxed">
                  If you have questions about these Terms and Conditions, please contact us:
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
