"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import Image from "next/image";
import { FiClock, FiTrendingDown, FiUserX } from "react-icons/fi";

const PAIN_POINTS = [
  {
    Icon: FiClock,
    title: "You're drowning in admin tasks",
    description:
      "Hours lost on emails, scheduling, and repetitive work that pull you away from the high-value decisions only you can make.",
  },
  {
    Icon: FiTrendingDown,
    title: "Marketing falls through the cracks",
    description:
      "No consistent presence, no steady leads, no momentum. Just constant firefighting while your competitors stay top of mind.",
  },
  {
    Icon: FiUserX,
    title: "Hiring takes too long and costs too much",
    description:
      "Job posts, interviews, failed onboarding — only to start the cycle over. There's a smarter way to build your support team.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 46, rotateX: 16, scale: 0.94 },
  visible: {
    opacity: 1, y: 0, rotateX: 0, scale: 1,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function ProblemSection() {
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
  const imageY = useTransform(imgScroll,       [0, 1], ["-6%", "6%"]);

  return (
    <section ref={sectionRef} className="relative bg-white py-20 md:py-28 overflow-hidden">
      {/* Atmospheric glow */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div
          className="absolute rounded-full"
          style={{
            width: 480, height: 480,
            right: -80, top: "20%",
            background: "radial-gradient(circle, rgba(54,212,255,0.055) 0%, transparent 65%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* 2-col header: text left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading font-semibold text-brand-blue text-sm tracking-widest uppercase mb-4"
            >
              The Problem
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-brand-dark leading-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              Running a business is hard enough. Managing everything alone is
              unsustainable.
            </motion.h2>
          </div>

          {/* Parallax image */}
          <div ref={imageRef} className="overflow-hidden rounded-2xl shadow-lg">
            <motion.div
              className="relative h-64 lg:h-72"
              style={{ y: imageY, scale: 1.08 }}
            >
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                className="absolute inset-0"
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=600&q=80"
                  alt="Overwhelmed business owner managing too many tasks"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-white/10 via-transparent to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* 3D cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ perspective: "1100px" }}
        >
          {PAIN_POINTS.map(({ Icon, title, description }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                rotateX: -3,
                rotateY: 3,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 22 },
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-white border-l-4 border-brand-blue rounded-xl shadow-sm p-7 flex flex-col gap-4 cursor-default"
            >
              <div className="w-11 h-11 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                <Icon size={22} className="text-brand-blue" />
              </div>
              <h3 className="font-heading font-bold text-brand-dark text-lg leading-snug">
                {title}
              </h3>
              <p className="font-body text-gray-500 text-sm leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
