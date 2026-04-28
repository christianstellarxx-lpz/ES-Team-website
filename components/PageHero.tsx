"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import Aurora from "./Aurora";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
}

const PAGE_PARTICLES = [
  { x: 5,  y: 15, size: 7,  delay: 0.20, color: "#36D4FF" },
  { x: 85, y: 10, size: 9,  delay: 0.40, color: "#36D4FF" },
  { x: 70, y: 70, size: 6,  delay: 0.10, color: "#89F6EF" },
  { x: 20, y: 75, size: 8,  delay: 0.60, color: "#36D4FF" },
  { x: 50, y: 5,  size: 10, delay: 0.30, color: "#89F6EF" },
  { x: 90, y: 50, size: 7,  delay: 0.50, color: "#36D4FF" },
  { x: 40, y: 85, size: 6,  delay: 0.70, color: "#36D4FF" },
  { x: 15, y: 45, size: 8,  delay: 0.25, color: "#89F6EF" },
  { x: 60, y: 25, size: 9,  delay: 0.45, color: "#36D4FF" },
  { x: 30, y: 55, size: 6,  delay: 0.65, color: "#89F6EF" },
];

const PAGE_RINGS = [
  { x: 88, y: 35, size: 240, delay: 0.0 },
  { x: 8,  y: 68, size: 170, delay: 0.5 },
  { x: 55, y: 12, size: 110, delay: 0.8 },
];

export default function PageHero({ label, title, subtitle, image, imageAlt }: PageHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const progress   = useMotionValue(0);
  const mouseX     = useMotionValue(0);
  const mouseY     = useMotionValue(0);
  const mxSpring   = useSpring(mouseX, { stiffness: 50, damping: 18 });
  const mySpring   = useSpring(mouseY, { stiffness: 50, damping: 18 });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const update = () => {
      const rect     = section.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const maxScroll = section.offsetHeight - window.innerHeight;
      progress.set(maxScroll > 0 ? Math.min(1, scrolled / maxScroll) : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [progress]);

  // Parallax layers — speed increases from background to foreground
  const orbsY      = useTransform(progress, [0, 1], [0,  -60]);
  const gridY      = useTransform(progress, [0, 1], [0, -190]);
  const ringsY     = useTransform(progress, [0, 1], [0, -310]);
  const particlesY = useTransform(progress, [0, 1], [0, -500]);
  const textY      = useTransform(progress, [0, 1], [0, -145]);
  const imageY     = useTransform(progress, [0, 1], [0, -250]);
  const scanX      = useTransform(progress, [0, 1], [0, -160]);
  const contentOpacity = useTransform(progress, [0.38, 0.82], [1, 0]);

  // Mouse → orb parallax
  const orb1x  = useTransform(mxSpring, [-1, 1], [-32, 32]);
  const orb1y  = useTransform(mySpring, [-1, 1], [-24, 24]);
  const orb2x  = useTransform(mxSpring, [-1, 1], [22, -22]);
  const orb2y  = useTransform(mySpring, [-1, 1], [16, -16]);
  const gridMx = useTransform(mxSpring, [-1, 1], [-10, 10]);

  function handleMouseMove(e: React.MouseEvent) {
    mouseX.set((e.clientX / window.innerWidth  - 0.5) * 2);
    mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
  }

  return (
    <section
      ref={sectionRef}
      className="relative h-screen"
      onMouseMove={handleMouseMove}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden bg-brand-dark">

        {/* ── Layer −1 · Aurora (WebGL background) ── */}
        <div className="absolute inset-0 pointer-events-none">
          <Aurora
            colorStops={["#36D4FF", "#89F6EF", "#4055A9"]}
            blend={0.34}
            amplitude={1.0}
            speed={0.8}
          />
        </div>

        {/* ── Layer 0 · Gradient orbs (slowest / deepest) ── */}
        <motion.div className="absolute inset-0 pointer-events-none" style={{ y: orbsY }}>
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 640, height: 640,
              right: -160, top: "4%",
              background: "radial-gradient(circle, rgba(54,212,255,0.16) 0%, transparent 65%)",
              x: orb1x, y: orb1y,
            }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 440, height: 440,
              left: -110, top: "6%",
              background: "radial-gradient(circle, rgba(137,246,239,0.13) 0%, transparent 65%)",
              x: orb2x, y: orb2y,
            }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 360, height: 360,
              left: "32%", bottom: "-8%",
              background: "radial-gradient(circle, rgba(54,212,255,0.10) 0%, transparent 65%)",
            }}
          />
        </motion.div>

        {/* ── Layer 1 · Grid ── */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            y: gridY,
            x: gridMx,
            backgroundImage: [
              "linear-gradient(rgba(54,212,255,0.6) 1px, transparent 1px)",
              "linear-gradient(90deg, rgba(54,212,255,0.6) 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "60px 60px",
            opacity: 0.055,
          }}
        />

        {/* ── Layer 2 · Rings + scan line ── */}
        <motion.div className="absolute inset-0 pointer-events-none" style={{ y: ringsY }}>
          {PAGE_RINGS.map((ring, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-brand-blue/20"
              style={{
                width: ring.size, height: ring.size,
                left: `${ring.x}%`, top: `${ring.y}%`,
                translateX: "-50%", translateY: "-50%",
              }}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2.2, delay: ring.delay, ease: "easeOut" }}
            />
          ))}

          <motion.div
            className="absolute h-px"
            style={{
              left: "-10%", right: 0, top: "44%",
              background: "linear-gradient(90deg, transparent, rgba(54,212,255,0.32) 40%, rgba(137,246,239,0.22) 60%, transparent)",
              x: scanX,
            }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute h-px left-0 right-0"
            style={{
              top: "72%",
              background: "linear-gradient(90deg, transparent, rgba(137,246,239,0.16) 40%, rgba(54,212,255,0.26) 60%, transparent)",
            }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </motion.div>

        {/* ── Layer 3 · Particles (fastest / closest) ── */}
        <motion.div className="absolute inset-0 pointer-events-none" style={{ y: particlesY }}>
          {PAGE_PARTICLES.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: p.size, height: p.size,
                left: `${p.x}%`, top: `${p.y}%`,
                backgroundColor: p.color,
                boxShadow: `0 0 ${p.size * 3}px ${p.color}88`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.65, scale: 1 }}
              transition={{ duration: 0.9, delay: p.delay }}
            />
          ))}
        </motion.div>

        {/* ── Layer 4 · Content ── */}
        <motion.div
          className="absolute inset-0 z-10 flex items-center"
          style={{ opacity: contentOpacity }}
        >
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-16 pb-12">
            <div className={`grid grid-cols-1 ${image ? "lg:grid-cols-2 gap-10" : ""} items-center`}>

              {/* Text */}
              <motion.div style={{ y: textY }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="inline-flex items-center gap-2 border border-brand-blue/40 bg-brand-blue/10 text-brand-blue text-sm font-body font-medium px-4 py-1.5 rounded-full mb-5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                  {label}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.12 }}
                  className="font-heading font-extrabold text-white leading-tight max-w-2xl mb-4"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.1rem)" }}
                >
                  {title}
                </motion.h1>

                {subtitle && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.22 }}
                    className="font-body text-gray-400 max-w-xl"
                    style={{ fontSize: "1.05rem", lineHeight: "1.75" }}
                  >
                    {subtitle}
                  </motion.p>
                )}
              </motion.div>

              {/* Image */}
              {image && (
                <motion.div
                  initial={{ opacity: 0, x: 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.75, ease: "easeOut", delay: 0.2 }}
                  style={{ y: imageY }}
                  className="hidden lg:block relative h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                >
                  <Image
                    src={image}
                    alt={imageAlt || title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-brand-dark/40 to-transparent" />
                  {/* Glow border */}
                  <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_40px_rgba(54,212,255,0.08)]" />
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Bottom vignette */}
        <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none z-20" />
      </div>
    </section>
  );
}
