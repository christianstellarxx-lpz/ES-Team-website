"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { FiGlobe, FiTrendingUp, FiUsers, FiFileText, FiCalendar, FiBriefcase } from "react-icons/fi";
import CareersEmbed from "@/components/CareersEmbed";

const PERKS = [
  {
    Icon: FiGlobe,
    title: "Remote-First, Always",
    description: "Work from anywhere in the world. We're built for remote professionals and believe great talent knows no borders.",
  },
  {
    Icon: FiTrendingUp,
    title: "Real Clients, Real Growth",
    description: "Gain hands-on experience with entrepreneurs and growing businesses, building a portfolio that speaks for itself.",
  },
  {
    Icon: FiUsers,
    title: "A Community, Not Just a Job",
    description: "Join a supportive team that invests in your development with guidance, feedback, and clear paths to advance.",
  },
];

const STEPS = [
  {
    Icon: FiCalendar,
    step: "01",
    title: "Book Your Intro Call",
    description: "Use the calendar above to choose the best date and time that works for you. Pick a slot and lock in your spot with our team.",
  },
  {
    Icon: FiFileText,
    step: "02",
    title: "Submit Your Information",
    description: "Fill out the form with your details and attach your Resume/CV and portfolio so our team can review your background before the call.",
  },
  {
    Icon: FiBriefcase,
    step: "03",
    title: "Check Your Email",
    description: "Look out for a confirmation email in your inbox. Review the details, mark your calendar, and come prepared for your scheduled call.",
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

export default function CareersContent() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <>
      {/* Why Join + Booking Section */}
      <section ref={sectionRef} className="relative bg-white py-16 md:py-24 overflow-hidden" id="careers">

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

            {/* Left: info with perk cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2
                className="font-heading font-extrabold text-brand-dark leading-tight mb-4"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
              >
                Why Join ES Team?
              </h2>
              <p className="font-body text-gray-500 text-base leading-relaxed mb-10">
                We&apos;re a fast-growing virtual assistance agency connecting skilled remote professionals
                with businesses that need them. If you&apos;re driven, detail-oriented, and ready to do
                work that matters — you belong here.
              </p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-5 mb-12"
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
                  Have a question before applying?
                </p>
                <a
                  href="mailto:info@esteam.work"
                  className="font-body text-brand-blue text-sm hover:underline"
                >
                  info@esteam.work
                </a>
              </div>
            </motion.div>

            {/* Right: Booking calendar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="w-full"
            >
              <div className="mb-5">
                <p className="font-heading font-bold text-brand-dark text-lg mb-1">Book Your Intro Call</p>
                <p className="font-body text-gray-500 text-sm">
                  Select a time that works for you. Please have your Resume/CV and portfolio ready to share during the call.
                </p>
              </div>
              <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-md">
                <CareersEmbed />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2
              className="font-heading font-extrabold text-brand-dark leading-tight mb-4"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
            >
              How to Apply
            </h2>
            <p className="font-body text-gray-500 text-base max-w-xl mx-auto">
              Three simple steps to start your journey with ES Team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map(({ Icon, step, title, description }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
                className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mx-auto mb-5">
                  <Icon size={24} className="text-brand-blue" />
                </div>
                <span className="font-heading font-bold text-brand-blue text-xs tracking-widest uppercase mb-2 block">
                  Step {step}
                </span>
                <h3 className="font-heading font-bold text-brand-dark text-lg mb-3">{title}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
