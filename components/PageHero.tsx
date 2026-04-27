"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
}

export default function PageHero({ label, title, subtitle, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative bg-brand-dark pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      {/* Radial gradient accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(54,212,255,0.07) 0%, transparent 70%)",
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className={`grid grid-cols-1 ${image ? "lg:grid-cols-2 gap-10" : ""} items-center`}>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-heading font-semibold text-brand-blue text-sm tracking-widest uppercase mb-4"
            >
              {label}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-white leading-tight max-w-2xl"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-body text-gray-400 mt-4 max-w-xl"
                style={{ fontSize: "1.05rem", lineHeight: "1.7" }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>

          {image && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="hidden lg:block relative h-56 rounded-2xl overflow-hidden border border-white/10 shadow-xl"
            >
              <Image
                src={image}
                alt={imageAlt || title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-l from-brand-dark/30 to-transparent" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
