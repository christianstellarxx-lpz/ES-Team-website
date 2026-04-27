"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import Image from "next/image";
import { PROCESS_STEPS, BOOKING_URL } from "@/lib/constants";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: 18, scale: 0.93 },
  visible: {
    opacity: 1, y: 0, rotateX: 0, scale: 1,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: "easeInOut", delay: 0.3 },
  },
};

export default function ProcessSection() {
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
    <section ref={sectionRef} id="how-it-works" className="relative bg-white py-20 md:py-28 overflow-hidden">

      {/* Atmospheric glow */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div
          className="absolute rounded-full"
          style={{
            width: 500, height: 500,
            left: -100, top: "15%",
            background: "radial-gradient(circle, rgba(54,212,255,0.055) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 380, height: 380,
            right: -60, bottom: "10%",
            background: "radial-gradient(circle, rgba(137,246,239,0.045) 0%, transparent 65%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
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
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-brand-dark max-w-lg mx-auto leading-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            From Discovery Call to Dream Team in 4 Steps
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Animated connecting line */}
          <motion.div
            className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px origin-left"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              borderTop: "2px dashed",
              borderColor: "rgba(54,212,255,0.35)",
            }}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10"
            style={{ perspective: "1000px" }}
          >
            {PROCESS_STEPS.map((step) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                whileHover={{
                  y: -8,
                  rotateX: -3,
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300, damping: 22 },
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="flex flex-col items-center text-center cursor-default"
              >
                {/* Step number with glow ring */}
                <div className="relative mb-5">
                  {/* Outer pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-brand-blue/25"
                    animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: Number(step.number) * 0.4,
                    }}
                    style={{ width: 64, height: 64 }}
                  />
                  <div className="relative w-16 h-16 rounded-full bg-brand-dark flex items-center justify-center border-4 border-white shadow-lg shadow-brand-blue/15">
                    <span className="font-heading font-extrabold text-brand-blue text-xl">
                      {step.number}
                    </span>
                  </div>
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
          <motion.a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 340, damping: 20 }}
            className="inline-flex items-center gap-2 bg-brand-blue text-brand-dark font-heading font-bold text-sm px-8 py-3.5 rounded-full hover:bg-brand-aqua transition-colors duration-200 shadow-md shadow-brand-blue/20"
          >
            Start the Process →
          </motion.a>
        </motion.div>

        {/* Parallax showcase image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mt-16 aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-gray-100"
        >
          <div ref={imageRef} className="absolute inset-0">
            <motion.div className="absolute inset-0" style={{ y: imageY, scale: 1.1 }}>
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&h=900&q=80"
                alt="Team collaborating in a discovery session"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block bg-white/90 backdrop-blur-sm text-brand-dark font-heading font-bold text-sm px-5 py-2 rounded-full shadow-md"
            >
              Real teams. Real results.
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
