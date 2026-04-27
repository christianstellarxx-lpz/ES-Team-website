"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import Image from "next/image";
import {
  FiInstagram,
  FiTrendingUp,
  FiClipboard,
  FiUsers,
} from "react-icons/fi";
import { SERVICES } from "@/lib/constants";

const ICONS: Record<string, React.ElementType> = {
  FiInstagram,
  FiTrendingUp,
  FiClipboard,
  FiUsers,
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: 18, scale: 0.93 },
  visible: {
    opacity: 1, y: 0, rotateX: 0, scale: 1,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "#F9FAFB" }}
    >
      {/* Parallax atmospheric glows */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div
          className="absolute rounded-full"
          style={{
            width: 560, height: 560,
            right: -120, top: "5%",
            background: "radial-gradient(circle, rgba(54,212,255,0.07) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 420, height: 420,
            left: -80, bottom: "10%",
            background: "radial-gradient(circle, rgba(137,246,239,0.06) 0%, transparent 65%)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: [
              "linear-gradient(rgba(54,212,255,1) 1px, transparent 1px)",
              "linear-gradient(90deg, rgba(54,212,255,1) 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading font-semibold text-brand-blue text-sm tracking-widest uppercase mb-3"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-brand-dark max-w-xl mx-auto leading-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Everything Your Business Needs to Run Smoothly
          </motion.h2>
        </div>

        {/* 3D card grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ perspective: "1100px" }}
        >
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  rotateX: -4,
                  rotateY: 3,
                  scale: 1.025,
                  transition: { type: "spring", stiffness: 300, damping: 22 },
                }}
                className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col cursor-default"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative w-full h-44">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                  {/* Card top shimmer on hover – driven by parent via CSS transition */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-7 flex flex-col gap-4 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                    {Icon && <Icon size={24} className="text-brand-blue" />}
                  </div>
                  <h3 className="font-heading font-bold text-brand-dark text-lg leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-body text-gray-500 text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                </div>
                {/* Bottom accent line */}
                <div className="h-0.5 bg-gradient-to-r from-brand-blue/0 via-brand-blue/30 to-brand-blue/0" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
