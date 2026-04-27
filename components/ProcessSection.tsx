"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { PROCESS_STEPS, BOOKING_URL } from "@/lib/constants";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProcessSection() {
  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading font-semibold text-brand-blue text-sm tracking-widest uppercase mb-3"
          >
            The Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-brand-dark max-w-lg mx-auto leading-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            From Discovery Call to Dream Team in 4 Steps
          </motion.h2>
        </div>

        {/* Steps — desktop horizontal, mobile vertical */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px border-t-2 border-dashed border-brand-blue/30 z-0" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10"
          >
            {PROCESS_STEPS.map((step) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="flex flex-col items-center md:items-center text-center"
              >
                {/* Step number circle */}
                <div className="w-16 h-16 rounded-full bg-brand-dark flex items-center justify-center mb-5 border-4 border-white shadow-lg">
                  <span className="font-heading font-extrabold text-brand-blue text-xl">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-brand-dark text-lg mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-blue text-brand-dark font-heading font-bold text-sm px-8 py-3.5 rounded-full hover:bg-brand-aqua transition-colors duration-200 shadow-md"
          >
            Start the Process →
          </a>
        </motion.div>

        {/* Showcase image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mt-16 h-72 md:h-80 rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80"
            alt="Team collaborating in a discovery session"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <span className="inline-block bg-white/90 backdrop-blur-sm text-brand-dark font-heading font-bold text-sm px-5 py-2 rounded-full shadow-md">
              Real teams. Real results.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
