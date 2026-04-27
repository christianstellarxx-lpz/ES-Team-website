"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BOOKING_URL } from "@/lib/constants";

export default function CtaSection() {
  return (
    <section className="bg-brand-blue py-20 md:py-28 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
          alt="Modern collaborative office workspace"
          fill
          className="object-cover mix-blend-overlay opacity-20"
        />
      </div>

      {/* Decorative background shapes */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-brand-dark/10 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading font-semibold text-brand-dark/70 text-sm tracking-widest uppercase mb-4"
        >
          Get Started
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-extrabold text-brand-dark leading-tight mb-5"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
        >
          Ready to Build Your Dream Support Team?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-brand-dark/80 text-lg leading-relaxed mb-8"
        >
          Book a free 30-minute discovery call. No pressure. No commitment. Just
          clarity on how ES Team can help your business grow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-dark text-white font-heading font-bold text-base px-9 py-4 rounded-full hover:bg-brand-dark/80 transition-colors duration-200 shadow-xl shadow-brand-dark/20"
          >
            Book My Free Discovery Call
          </a>

          <p className="mt-5 font-body text-brand-dark/70 text-sm">
            ✓ Free 30-min call &nbsp;&nbsp;✓ No commitment &nbsp;&nbsp;✓ Matched within 48 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
