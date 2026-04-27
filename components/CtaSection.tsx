"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { BOOKING_URL } from "@/lib/constants";

export default function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY   = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["0%",  "14%"]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-brand-blue py-20 md:py-28 overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
          alt="Modern collaborative office workspace"
          fill
          className="object-cover mix-blend-overlay opacity-20"
        />
      </motion.div>

      {/* Parallax orbs */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 440, height: 440,
          top: -140, right: -100,
          background: "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)",
          y: orb1Y,
        }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 320, height: 320,
          bottom: -100, left: -80,
          background: "radial-gradient(circle, rgba(10,10,10,0.12) 0%, transparent 70%)",
          y: orb2Y,
        }}
      />

      {/* Decorative rings */}
      <motion.div
        className="absolute rounded-full border border-white/15 pointer-events-none"
        style={{ width: 600, height: 600, right: -200, top: "50%", translateY: "-50%" }}
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute rounded-full border border-white/10 pointer-events-none"
        style={{ width: 400, height: 400, left: -100, top: "50%", translateY: "-50%" }}
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
      />

      {/* Scan line */}
      <motion.div
        className="absolute h-px left-0 right-0 pointer-events-none"
        style={{ top: "45%" }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        // subtle white scan on brand-blue
        // using an inline style so it adapts to the bg color
      >
        <div
          className="w-full h-full"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.2) 60%, transparent)",
          }}
        />
      </motion.div>

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
          initial={{ opacity: 0, y: 24, rotateX: 14, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-heading font-extrabold text-brand-dark leading-tight mb-5"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", perspective: "800px" }}
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
          <motion.a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 340, damping: 18 }}
            className="inline-flex items-center gap-2 bg-brand-dark text-white font-heading font-bold text-base px-9 py-4 rounded-full hover:bg-brand-dark/80 transition-colors duration-200 shadow-2xl shadow-brand-dark/25"
          >
            Book My Free Discovery Call
          </motion.a>

          <p className="mt-5 font-body text-brand-dark/70 text-sm">
            ✓ Free 30-min call &nbsp;&nbsp;✓ No commitment &nbsp;&nbsp;✓ Matched within 48 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
