"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { BOOKING_URL } from "@/lib/constants";

export default function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef   = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: imgScroll } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const bgY    = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const imageY = useTransform(imgScroll,       [0, 1], ["-8%", "8%"]);
  const scanX  = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section ref={sectionRef} className="relative bg-brand-dark py-20 md:py-28 overflow-hidden">

      {/* Parallax bg orbs */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div
          className="absolute rounded-full"
          style={{
            width: 640, height: 640,
            right: -160, top: "-10%",
            background: "radial-gradient(circle, rgba(54,212,255,0.12) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 420, height: 420,
            left: -80, bottom: "0%",
            background: "radial-gradient(circle, rgba(137,246,239,0.09) 0%, transparent 65%)",
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: [
              "linear-gradient(rgba(54,212,255,1) 1px, transparent 1px)",
              "linear-gradient(90deg, rgba(54,212,255,1) 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "60px 60px",
          }}
        />
        {/* Scan lines */}
        <motion.div
          className="absolute h-px"
          style={{
            left: 0, right: 0, top: "30%",
            background: "linear-gradient(90deg, transparent, rgba(54,212,255,0.28) 40%, rgba(137,246,239,0.20) 60%, transparent)",
            x: scanX,
          }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute h-px left-0 right-0"
          style={{
            top: "70%",
            background: "linear-gradient(90deg, transparent, rgba(137,246,239,0.14) 40%, rgba(54,212,255,0.22) 60%, transparent)",
          }}
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-brand-blue/40 bg-brand-blue/10 text-brand-blue text-sm font-body font-medium px-4 py-1.5 rounded-full mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
              The Solution
            </motion.div>
            <h2
              className="font-heading font-extrabold text-white leading-tight mb-6"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Meet ES Team —<br />
              Your On-Demand<br />
              <span className="text-brand-blue">Digital Support Partner.</span>
            </h2>
            <p
              className="font-body text-gray-300 mb-8 leading-relaxed"
              style={{ lineHeight: "1.75" }}
            >
              We match you with dedicated virtual assistants tailored precisely
              to your business needs, goals, and culture. From social media
              management to administrative operations to lead generation — we
              handle the execution so you can focus on leading.
            </p>
            <motion.a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 340, damping: 20 }}
              className="inline-flex items-center gap-2 bg-brand-blue text-brand-dark font-heading font-bold text-sm px-7 py-3.5 rounded-full hover:bg-brand-aqua transition-colors duration-200 shadow-lg shadow-brand-blue/20"
            >
              Get Matched With Your VA →
            </motion.a>
          </motion.div>

          {/* Parallax image side */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div
              ref={imageRef}
              className="relative h-[420px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-blue/10"
            >
              <motion.div className="absolute inset-0" style={{ y: imageY, scale: 1.1 }}>
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80"
                  alt="Team collaborating on business strategy"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent" />
              {/* Inner glow border */}
              <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_50px_rgba(54,212,255,0.07)]" />
            </div>

            {/* Floating stat cards */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-brand-blue/20 border border-brand-blue/30 rounded-xl px-4 py-2 backdrop-blur-sm shadow-lg"
            >
              <span className="font-heading font-bold text-brand-blue text-sm">50+ Clients</span>
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-brand-aqua/20 border border-brand-aqua/30 rounded-xl px-4 py-2 backdrop-blur-sm shadow-lg"
            >
              <span className="font-heading font-bold text-brand-aqua text-sm">4.9★ Rated</span>
            </motion.div>

            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-2xl border border-brand-blue/8 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
