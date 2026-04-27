"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BOOKING_URL, STATS } from "@/lib/constants";

const PARTICLES = [
  { x: 8,  y: 18, size: 8,  delay: 0.20, color: "#36D4FF" },
  { x: 88, y: 12, size: 11, delay: 0.50, color: "#36D4FF" },
  { x: 72, y: 65, size: 7,  delay: 0.10, color: "#89F6EF" },
  { x: 22, y: 72, size: 9,  delay: 0.70, color: "#36D4FF" },
  { x: 45, y: 8,  size: 12, delay: 0.30, color: "#89F6EF" },
  { x: 60, y: 85, size: 8,  delay: 0.60, color: "#36D4FF" },
  { x: 35, y: 42, size: 6,  delay: 0.40, color: "#36D4FF" },
  { x: 78, y: 30, size: 10, delay: 0.80, color: "#89F6EF" },
  { x: 15, y: 55, size: 10, delay: 0.20, color: "#36D4FF" },
  { x: 92, y: 78, size: 8,  delay: 0.90, color: "#36D4FF" },
  { x: 50, y: 48, size: 13, delay: 0.15, color: "#89F6EF" },
  { x: 5,  y: 90, size: 7,  delay: 0.55, color: "#36D4FF" },
  { x: 65, y: 5,  size: 9,  delay: 0.35, color: "#89F6EF" },
  { x: 30, y: 25, size: 7,  delay: 0.65, color: "#36D4FF" },
  { x: 95, y: 45, size: 11, delay: 0.45, color: "#36D4FF" },
];

const RINGS = [
  { x: 82, y: 38, size: 280, delay: 0.0 },
  { x: 12, y: 62, size: 200, delay: 0.4 },
  { x: 58, y: 16, size: 130, delay: 0.7 },
  { x: 28, y: 82, size: 160, delay: 1.0 },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Normalized scroll progress 0→1 through the hero section
  const progress = useMotionValue(0);

  // Mouse motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mxSpring = useSpring(mouseX, { stiffness: 50, damping: 18 });
  const mySpring = useSpring(mouseY, { stiffness: 50, damping: 18 });

  // Direct window scroll listener — bypasses framer-motion's scroll internals
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const maxScroll = section.offsetHeight - window.innerHeight;
      progress.set(maxScroll > 0 ? Math.min(1, scrolled / maxScroll) : 0);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [progress]);

  // Parallax layers — different speeds create clear depth
  const orbsY      = useTransform(progress, [0, 1], [0,  -80]);   // slowest / deepest
  const gridY      = useTransform(progress, [0, 1], [0, -260]);
  const ringsY     = useTransform(progress, [0, 1], [0, -420]);
  const particlesY = useTransform(progress, [0, 1], [0, -650]);   // fastest / closest
  const textY      = useTransform(progress, [0, 1], [0, -220]);
  const imageY     = useTransform(progress, [0, 1], [0, -400]);
  const scanX      = useTransform(progress, [0, 1], [0, -200]);
  const contentOpacity = useTransform(progress, [0.45, 0.88], [1, 0]);

  // Mouse → orb parallax
  const orb1x = useTransform(mxSpring, [-1, 1], [-45, 45]);
  const orb1y = useTransform(mySpring, [-1, 1], [-35, 35]);
  const orb2x = useTransform(mxSpring, [-1, 1], [35, -35]);
  const orb2y = useTransform(mySpring, [-1, 1], [25, -25]);
  const orb3x = useTransform(mxSpring, [-1, 1], [-22, 22]);
  const orb3y = useTransform(mySpring, [-1, 1], [28, -28]);
  const gridMx = useTransform(mxSpring, [-1, 1], [-12, 12]);

  function handleMouseMove(e: React.MouseEvent) {
    mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
    mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
  }

  return (
    <section
      ref={sectionRef}
      className="relative h-[220vh]"
      onMouseMove={handleMouseMove}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden bg-brand-dark">

        {/* ── Layer 0 · Gradient orbs (slowest / deepest) ──── */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: orbsY }}
        >
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 800, height: 800,
              right: -200, top: "6%",
              background: "radial-gradient(circle, rgba(54,212,255,0.18) 0%, transparent 65%)",
              x: orb1x, y: orb1y,
            }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 550, height: 550,
              left: -160, top: "3%",
              background: "radial-gradient(circle, rgba(137,246,239,0.14) 0%, transparent 65%)",
              x: orb2x, y: orb2y,
            }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 440, height: 440,
              left: "30%", bottom: "-10%",
              background: "radial-gradient(circle, rgba(54,212,255,0.12) 0%, transparent 65%)",
              x: orb3x, y: orb3y,
            }}
          />
        </motion.div>

        {/* ── Layer 1 · Grid ─────────────────────────────────── */}
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
            opacity: 0.06,
          }}
        />

        {/* ── Layer 2 · Rings + scan lines ───────────────────── */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: ringsY }}
        >
          {RINGS.map((ring, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-brand-blue/20"
              style={{
                width: ring.size,
                height: ring.size,
                left: `${ring.x}%`,
                top: `${ring.y}%`,
                translateX: "-50%",
                translateY: "-50%",
              }}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2.2, delay: ring.delay, ease: "easeOut" }}
            />
          ))}

          <motion.div
            className="absolute h-px"
            style={{
              left: "-10%", right: 0, top: "34%",
              background: "linear-gradient(90deg, transparent, rgba(54,212,255,0.35) 40%, rgba(137,246,239,0.25) 60%, transparent)",
              x: scanX,
            }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute h-px left-0 right-0"
            style={{
              top: "67%",
              background: "linear-gradient(90deg, transparent, rgba(137,246,239,0.18) 40%, rgba(54,212,255,0.30) 60%, transparent)",
            }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* ── Layer 3 · Particles (fastest / closest) ────────── */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: particlesY }}
        >
          {PARTICLES.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                top: `${p.y}%`,
                backgroundColor: p.color,
                boxShadow: `0 0 ${p.size * 3}px ${p.color}88`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.75, scale: 1 }}
              transition={{ duration: 0.9, delay: p.delay }}
            />
          ))}
        </motion.div>

        {/* ── Layer 4 · Hero content ─────────────────────────── */}
        <motion.div
          className="absolute inset-0 z-10 flex items-center"
          style={{ opacity: contentOpacity }}
        >
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-24 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Text */}
              <motion.div style={{ y: textY }}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="inline-flex items-center gap-2 border border-brand-blue/40 bg-brand-blue/10 text-brand-blue text-sm font-body font-medium px-4 py-1.5 rounded-full mb-6"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                    Virtual Assistance &amp; Digital Marketing
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="font-heading font-extrabold text-white leading-[1.1] mb-6"
                    style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
                  >
                    Your Business Deserves
                    <br />
                    <span className="text-brand-blue">A Team That Grows</span>
                    <br />
                    With You.
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="font-body text-gray-300 mb-8 max-w-xl"
                    style={{ fontSize: "1.125rem", lineHeight: "1.7" }}
                  >
                    ES Team connects you with hand-picked virtual assistants who don&apos;t
                    just do tasks — they drive results. Start with a free discovery call
                    and find your perfect match.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16"
                  >
                    <motion.a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      animate={{ scale: [1, 1.03, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-flex items-center gap-2 bg-brand-blue text-brand-dark font-heading font-bold text-base px-7 py-4 rounded-full hover:bg-brand-aqua transition-colors duration-200 shadow-lg shadow-brand-blue/25"
                    >
                      Book Your Free Discovery Call →
                    </motion.a>
                    <Link
                      href="/how-it-works"
                      className="text-gray-400 hover:text-white font-body text-base underline underline-offset-4 decoration-gray-600 hover:decoration-white transition-colors duration-200"
                    >
                      See How It Works ↓
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.65 }}
                    className="flex flex-wrap items-center border border-white/10 rounded-2xl overflow-hidden w-fit"
                  >
                    {STATS.map((stat, i) => (
                      <div
                        key={stat.label}
                        className={`px-6 py-4 flex flex-col items-center ${
                          i < STATS.length - 1 ? "border-r border-white/10" : ""
                        }`}
                      >
                        <span className="font-heading font-bold text-white text-xl">
                          {stat.value}
                        </span>
                        <span className="font-body text-gray-400 text-xs mt-0.5">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Image — moves faster than text for depth */}
              <motion.div
                className="hidden lg:block relative"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                style={{ y: imageY }}
              >
                <div className="relative h-[520px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-blue/10">
                  <Image
                    src="/Hero%20Header.png"
                    alt="Hero header"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
                </div>
                <div className="absolute -inset-1 rounded-2xl bg-brand-blue/5 blur-xl -z-10" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom vignette */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none z-20" />
      </div>
    </section>
  );
}
