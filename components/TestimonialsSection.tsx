"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import Image from "next/image";
import { FiStar } from "react-icons/fi";
import { TESTIMONIALS } from "@/lib/constants";

const PARTICLES = [
  { x: 3,  y: 20, size: 6,  delay: 0.2, color: "#36D4FF" },
  { x: 92, y: 12, size: 8,  delay: 0.4, color: "#36D4FF" },
  { x: 75, y: 75, size: 5,  delay: 0.1, color: "#89F6EF" },
  { x: 18, y: 80, size: 7,  delay: 0.6, color: "#36D4FF" },
  { x: 48, y: 8,  size: 9,  delay: 0.3, color: "#89F6EF" },
  { x: 88, y: 55, size: 6,  delay: 0.5, color: "#36D4FF" },
  { x: 62, y: 90, size: 5,  delay: 0.7, color: "#36D4FF" },
  { x: 10, y: 50, size: 7,  delay: 0.35, color: "#89F6EF" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: 16, scale: 0.93 },
  visible: {
    opacity: 1, y: 0, rotateX: 0, scale: 1,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <FiStar key={i} size={14} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY      = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const scanX    = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const particleY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={sectionRef} className="relative bg-brand-dark py-20 md:py-28 overflow-hidden">

      {/* Parallax bg layer */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        {/* Orbs */}
        <div
          className="absolute rounded-full"
          style={{
            width: 700, height: 700,
            right: -200, top: "-15%",
            background: "radial-gradient(circle, rgba(54,212,255,0.10) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 480, height: 480,
            left: -120, bottom: "-5%",
            background: "radial-gradient(circle, rgba(137,246,239,0.08) 0%, transparent 60%)",
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.028]"
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
            left: 0, right: 0, top: "28%",
            background: "linear-gradient(90deg, transparent, rgba(54,212,255,0.30) 40%, rgba(137,246,239,0.22) 60%, transparent)",
            x: scanX,
          }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute h-px left-0 right-0"
          style={{
            top: "74%",
            background: "linear-gradient(90deg, transparent, rgba(137,246,239,0.14) 40%, rgba(54,212,255,0.24) 60%, transparent)",
          }}
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        />
      </motion.div>

      {/* Parallax particles */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: particleY }}>
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: p.size, height: p.size,
              left: `${p.x}%`, top: `${p.y}%`,
              backgroundColor: p.color,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}77`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 0.9, delay: p.delay }}
          />
        ))}
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
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-white max-w-lg mx-auto leading-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            What Our Clients Are Saying
          </motion.h2>
        </div>

        {/* 3D cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ perspective: "1100px" }}
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              whileHover={{
                y: -10,
                rotateX: -4,
                rotateY: 3,
                scale: 1.02,
                borderColor: "rgba(54,212,255,0.5)",
                boxShadow: "0 20px 60px rgba(54,212,255,0.12), 0 4px 20px rgba(0,0,0,0.3)",
                transition: { type: "spring", stiffness: 300, damping: 22 },
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col gap-4 cursor-default transition-colors duration-300"
            >
              <Stars />
              <p className="font-body text-gray-300 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-white/10">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-heading font-bold text-white text-sm">{t.name}</p>
                  <p className="font-body text-gray-400 text-xs">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
              {/* Bottom accent */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent rounded-b-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
