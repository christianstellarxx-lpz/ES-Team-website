import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiMail } from "react-icons/fi";

const FOOTER_LEGAL = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const FOOTER_SERVICES = [
  { label: "Social Media Management", href: "/services#social-media-management" },
  { label: "Digital Marketing Support", href: "/services#digital-marketing-support" },
  { label: "Virtual Admin Assistance", href: "/services#virtual-admin-assistance" },
  { label: "Lead Generation & Research", href: "/services#lead-generation-research" },
];

const FOOTER_COMPANY = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3 w-fit">
              <Image
                src="/logo.png"
                alt="ES Team logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="font-heading font-bold text-xl text-white">
                ES<span className="text-brand-blue">.</span>Team
              </span>
            </Link>
            <p className="font-body text-gray-400 text-sm leading-relaxed mb-4">
              &ldquo;Success Is In Our Hands&rdquo;
            </p>
            <p className="font-body text-gray-500 text-xs leading-relaxed">
              Helping entrepreneurs and growing businesses scale efficiently
              through virtual assistance and digital marketing support.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-body text-gray-400 text-sm hover:text-brand-blue transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_COMPANY.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-body text-gray-400 text-sm hover:text-brand-blue transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-gray-400 text-sm hover:text-brand-blue transition-colors duration-200"
              >
                <FiFacebook size={16} />
                Facebook
              </a>
              <a
                href="mailto:info@esteam.work"
                className="inline-flex items-center gap-2 font-body text-gray-400 text-sm hover:text-brand-blue transition-colors duration-200"
              >
                <FiMail size={16} />
                info@esteam.work
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-gray-500 text-xs">
            © 2025 ES Team. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {FOOTER_LEGAL.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-gray-500 text-xs hover:text-brand-blue transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <a
            href="mailto:info@esteam.work"
            className="font-body text-gray-500 text-xs hover:text-brand-blue transition-colors duration-200"
          >
            info@esteam.work
          </a>
        </div>
      </div>
    </footer>
  );
}
