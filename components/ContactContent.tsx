"use client";

import { motion } from "framer-motion";
import { FiCheckCircle, FiClock, FiUsers } from "react-icons/fi";
import CalendlyEmbed from "@/components/CalendlyEmbed";

const PERKS = [
  {
    Icon: FiClock,
    title: "Free 30-Minute Call",
    description: "A focused conversation about your business, your goals, and where you need support.",
  },
  {
    Icon: FiCheckCircle,
    title: "No Commitment Required",
    description: "Explore whether ES Team is the right fit — completely pressure-free.",
  },
  {
    Icon: FiUsers,
    title: "Matched Within 48 Hours",
    description: "If we're a fit, we'll have hand-picked VA candidates ready for you within two business days.",
  },
];

export default function ContactContent() {
  return (
    <section className="bg-white py-16 md:py-24" id="contact">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2
              className="font-heading font-extrabold text-brand-dark leading-tight mb-4"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
            >
              What to Expect on Your Discovery Call
            </h2>
            <p className="font-body text-gray-500 text-base leading-relaxed mb-10">
              Our team will take the time to truly understand your business — your
              goals, your pain points, and the type of support that will make the
              biggest difference. From there, we build a match plan tailored to you.
            </p>

            <div className="flex flex-col gap-7 mb-10">
              {PERKS.map(({ Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <Icon size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-brand-dark text-base mb-1">
                      {title}
                    </h3>
                    <p className="font-body text-gray-500 text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="border-t border-gray-100 pt-7">
              <p className="font-heading font-semibold text-brand-dark text-sm mb-2">
                Prefer to reach out directly?
              </p>
              <a
                href="mailto:info@esteam.work"
                className="font-body text-brand-blue text-sm hover:underline"
              >
                info@esteam.work
              </a>
            </div>
          </motion.div>

          {/* Right: Calendly embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="w-full"
          >
            <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-md">
              <CalendlyEmbed />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
