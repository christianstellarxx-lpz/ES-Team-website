"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
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

const perkVariants: Variants = {
  hidden: { opacity: 0, x: -28, rotateY: 8 },
  visible: {
    opacity: 1, x: 0, rotateY: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

export default function ContactContent() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section ref={sectionRef} className="relative bg-white py-16 md:py-24 overflow-hidden" id="contact">

      {/* Atmospheric glow */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div
          className="absolute rounded-full"
          style={{
            width: 520, height: 520,
            left: -100, top: "10%",
            background: "radial-gradient(circle, rgba(54,212,255,0.055) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 380, height: 380,
            right: -60, bottom: "15%",
            background: "radial-gradient(circle, rgba(137,246,239,0.045) 0%, transparent 65%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left: info with 3D perk cards */}
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

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-5 mb-10"
              style={{ perspective: "800px" }}
            >
              {PERKS.map(({ Icon, title, description }) => (
                <motion.div
                  key={title}
                  variants={perkVariants}
                  whileHover={{
                    x: 6,
                    rotateY: -2,
                    scale: 1.01,
                    boxShadow: "0 8px 32px rgba(54,212,255,0.09)",
                    transition: { type: "spring", stiffness: 320, damping: 24 },
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="flex gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm cursor-default"
                >
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
                </motion.div>
              ))}
            </motion.div>

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

          {/* Right: Calendly embed — stable, no parallax */}
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
