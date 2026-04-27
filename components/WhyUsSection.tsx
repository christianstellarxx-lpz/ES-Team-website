"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import Image from "next/image";
import {
  FiTarget,
  FiRefreshCw,
  FiMessageSquare,
  FiBarChart2,
} from "react-icons/fi";
import { WHY_US } from "@/lib/constants";

const ICONS: Record<string, React.ElementType> = {
  FiTarget,
  FiRefreshCw,
  FiMessageSquare,
  FiBarChart2,
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 46, rotateX: 16, scale: 0.93 },
  visible: {
    opacity: 1, y: 0, rotateX: 0, scale: 1,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function WhyUsSection() {
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

  const bgY    = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const imageY = useTransform(imgScroll,       [0, 1], ["-7%", "7%"]);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, rgba(137,246,239,0.18) 0%, #ffffff 100%)",
      }}
    >
      {/* Atmospheric glow */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div
          className="absolute rounded-full"
          style={{
            width: 500, height: 500,
            right: -80, top: "5%",
            background: "radial-gradient(circle, rgba(54,212,255,0.07) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 360, height: 360,
            left: -60, bottom: "20%",
            background: "radial-gradient(circle, rgba(137,246,239,0.06) 0%, transparent 65%)",
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
            Why Choose Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-brand-dark max-w-lg mx-auto leading-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Why Entrepreneurs Choose ES Team
          </motion.h2>
        </div>

        {/* 2-col: image + cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Parallax image */}
          <div
            ref={imageRef}
            className="relative h-80 lg:h-[440px] rounded-2xl overflow-hidden shadow-lg border border-white/50"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <motion.div className="absolute inset-0" style={{ y: imageY, scale: 1.1 }}>
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
                  alt="Professional team delivering results for clients"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent" />
            </motion.div>
          </div>

          {/* 3D cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            style={{ perspective: "1000px" }}
          >
            {WHY_US.map((item) => {
              const Icon = ICONS[item.icon];
              return (
                <motion.div
                  key={item.title}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    rotateX: -3,
                    rotateY: 3,
                    scale: 1.02,
                    boxShadow: "0 16px 48px rgba(54,212,255,0.10), 0 4px 16px rgba(0,0,0,0.06)",
                    transition: { type: "spring", stiffness: 300, damping: 22 },
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex gap-5 cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex-shrink-0 flex items-center justify-center mt-0.5">
                    {Icon && <Icon size={22} className="text-brand-blue" />}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-brand-dark text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
