import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy | ES Team",
  description: "Learn how ES Team uses cookies and similar tracking technologies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Legal"
          title="Cookie Policy"
          subtitle="How we use cookies and similar tracking technologies to improve your experience."
        />

        <section className="bg-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-10">

            <div className="mb-12 pb-8 border-b border-gray-100">
              <p className="font-body text-xs text-gray-400 uppercase tracking-widest mb-4">
                Last Updated: April 28, 2026
              </p>
              <p className="font-body text-gray-600 leading-relaxed text-base">
                This Cookie Policy explains how ES Team (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
                uses cookies and similar tracking technologies on our website. By using our site, you consent
                to the use of cookies as described in this policy.
              </p>
            </div>

            <div className="space-y-12">

              <div>
                <h2 className="font-heading font-bold text-brand-dark text-xl mb-4">
                  <span className="text-brand-blue mr-2">2.1</span>What Are Cookies?
                </h2>
                <p className="font-body text-gray-600 leading-relaxed">
                  Cookies are small text files stored on your device (computer, tablet, or mobile) when you
                  visit a website. They help websites remember your preferences and improve your browsing
                  experience.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-brand-dark text-xl mb-5">
                  <span className="text-brand-blue mr-2">2.2</span>Types of Cookies We Use
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Essential Cookies",
                      body: "These cookies are necessary for our website to function correctly. They enable core features such as page navigation, form submissions, and security. Without these cookies, our website cannot function properly.",
                    },
                    {
                      title: "Analytics & Performance Cookies",
                      body: "These cookies help us understand how visitors interact with our website by collecting anonymous data about pages visited, time spent, and actions taken. This information helps us improve our website's performance and content.",
                    },
                    {
                      title: "Functional Cookies",
                      body: "These cookies allow our website to remember your preferences (such as language or region) to provide a more personalized experience.",
                    },
                    {
                      title: "Marketing & Tracking Cookies",
                      body: "If we run advertising campaigns (e.g., via Facebook), these cookies may be used to track conversions and measure the effectiveness of our marketing efforts.",
                    },
                  ].map((type) => (
                    <div key={type.title} className="pl-4 border-l-2 border-brand-blue/20">
                      <h3 className="font-heading font-bold text-brand-dark text-base mb-2">
                        {type.title}
                      </h3>
                      <p className="font-body text-gray-600 text-sm leading-relaxed">
                        {type.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-heading font-bold text-brand-dark text-xl mb-4">
                  <span className="text-brand-blue mr-2">2.3</span>Third-Party Cookies
                </h2>
                <p className="font-body text-gray-600 leading-relaxed">
                  We may use third-party services such as Google Analytics or Facebook Pixel that set their
                  own cookies to collect information about your visit. These third parties operate under
                  their own privacy policies.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-brand-dark text-xl mb-4">
                  <span className="text-brand-blue mr-2">2.4</span>Managing Cookies
                </h2>
                <p className="font-body text-gray-600 leading-relaxed mb-4">
                  You can control and manage cookies through your browser settings. Most browsers allow you
                  to:
                </p>
                <ul className="list-none space-y-2 pl-4 mb-4">
                  {[
                    "View cookies stored on your device",
                    "Block all or specific cookies",
                    "Delete cookies at any time",
                  ].map((item) => (
                    <li key={item} className="font-body text-gray-600 text-sm flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="font-body text-gray-600 leading-relaxed">
                  Please note that disabling certain cookies may affect the functionality of our website and
                  your user experience. For more information on managing cookies, visit{" "}
                  <a
                    href="https://www.allaboutcookies.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:underline"
                  >
                    www.allaboutcookies.org
                  </a>.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-brand-dark text-xl mb-4">
                  <span className="text-brand-blue mr-2">2.5</span>Changes to This Policy
                </h2>
                <p className="font-body text-gray-600 leading-relaxed">
                  We may update this Cookie Policy periodically. Any changes will be reflected with a
                  revised &ldquo;Last Updated&rdquo; date at the top of this page.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h2 className="font-heading font-bold text-brand-dark text-xl mb-3">
                  <span className="text-brand-blue mr-2">2.6</span>Contact Us
                </h2>
                <p className="font-body text-gray-600 leading-relaxed">
                  If you have questions about our use of cookies, please contact us:
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
