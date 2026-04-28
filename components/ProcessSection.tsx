"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { PROCESS_STEPS, BOOKING_URL } from "@/lib/constants";

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Pin for 500vh — 400vh of scroll real-estate, 100vh per step
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Activate steps at even quarter-scroll thresholds
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v >= 0.75) setActiveStep(3);
    else if (v >= 0.5) setActiveStep(2);
    else if (v >= 0.25) setActiveStep(1);
    else setActiveStep(0);
  });

  // Connector fill — 3 segments between 4 steps
  const lineWidth = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["0%", "33.33%", "66.67%", "100%", "100%"]
  );

  // CTA fades in when step 4 activates
  const ctaOpacity = useTransform(scrollYProgress, [0.72, 0.9], [0, 1]);
  const ctaY       = useTransform(scrollYProgress, [0.72, 0.9], [20, 0]);

  // Scroll hint fades out after first ~12% of scroll
  const hintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative"
      style={{ height: "500vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-white">

        {/* Atmospheric glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute rounded-full"
            style={{
              width: 700, height: 700,
              left: -200, top: "-10%",
              background: "radial-gradient(circle, rgba(54,212,255,0.055) 0%, transparent 65%)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 500, height: 500,
              right: -100, bottom: "5%",
              background: "radial-gradient(circle, rgba(137,246,239,0.045) 0%, transparent 65%)",
            }}
          />
        </div>

        {/* Content — vertically centered, padded below the fixed navbar (h-16) */}
        <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-16 pb-4">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="text-center mb-12 md:mb-14"
          >
            <p
              className="font-heading font-semibold text-xs tracking-[0.3em] uppercase mb-3"
              style={{ color: "#36D4FF" }}
            >
              The Process
            </p>
            <h2
              className="font-heading font-extrabold text-brand-dark max-w-xl mx-auto leading-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.6rem)" }}
            >
              From Discovery Call to Dream Team in 4 Steps
            </h2>
          </motion.div>

          {/* ─── DESKTOP: 4-column grid with animated connector ─── */}
          <div className="hidden md:block relative">

            {/* Connector track — spans center-to-center of column 1 and 4 */}
            <div
              className="absolute z-0"
              style={{ top: 31, left: "calc(12.5% + 2rem)", right: "calc(12.5% + 2rem)", height: 2 }}
            >
              {/* Dashed background */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, rgba(54,212,255,0.3) 0, rgba(54,212,255,0.3) 8px, transparent 8px, transparent 18px)",
                }}
              />
              {/* Animated fill — driven directly by scroll, no React re-renders */}
              <motion.div
                className="absolute top-0 left-0 h-full"
                style={{
                  width: lineWidth,
                  background: "linear-gradient(90deg, #36D4FF, #89F6EF)",
                  boxShadow: "0 0 8px rgba(54,212,255,0.7)",
                }}
              />
            </div>

            <div className="grid grid-cols-4 gap-4 relative z-10">
              {PROCESS_STEPS.map((step, i) => {
                const isActive = i === activeStep;
                const isPast   = i < activeStep;

                return (
                  <div
                    key={step.number}
                    className="flex flex-col items-center text-center px-2"
                    style={{
                      transform: isActive ? "scale(1.07)" : isPast ? "scale(0.98)" : "scale(0.92)",
                      opacity:   isActive ? 1 : isPast ? 0.7 : 0.35,
                      transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.5s ease",
                    }}
                  >
                    {/* Number circle */}
                    <div
                      className="relative flex items-center justify-center mb-5"
                      style={{ width: 64, height: 64 }}
                    >
                      {/* Glow halo (absolute, slightly larger than the circle) */}
                      <div
                        className="absolute rounded-full pointer-events-none"
                        style={{
                          top: "-16px", right: "-16px", bottom: "-16px", left: "-16px",
                          background: isActive
                            ? "radial-gradient(circle, rgba(54,212,255,0.22) 0%, transparent 70%)"
                            : "transparent",
                          transition: "background 0.5s ease",
                        }}
                      />
                      {/* Circle */}
                      <div
                        className="relative w-full h-full rounded-full flex items-center justify-center z-10"
                        style={{
                          background: isActive ? "#000000" : isPast ? "#111111" : "#f4f4f4",
                          border: isActive
                            ? "2px solid #36D4FF"
                            : isPast
                            ? "2px solid rgba(54,212,255,0.4)"
                            : "2px solid #e0e0e0",
                          boxShadow: isActive
                            ? "0 0 0 4px rgba(54,212,255,0.2), 0 6px 24px rgba(54,212,255,0.3)"
                            : "none",
                          transition: "all 0.5s ease",
                        }}
                      >
                        <span
                          className="font-heading font-extrabold text-xl leading-none"
                          style={{
                            color: isActive || isPast ? "#36D4FF" : "#c0c0c0",
                            transition: "color 0.5s ease",
                          }}
                        >
                          {step.number}
                        </span>
                      </div>
                    </div>

                    <h3
                      className="font-heading font-bold text-lg mb-2.5"
                      style={{
                        color: isActive ? "#000000" : isPast ? "#333" : "#777",
                        transition: "color 0.5s ease",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="font-body text-sm leading-relaxed"
                      style={{
                        color: isActive ? "#555" : "#999",
                        transition: "color 0.5s ease",
                        maxWidth: 200,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ─── MOBILE: indicator strip + animated active-step card ─── */}
          <div className="md:hidden space-y-8">

            {/* Step indicator row */}
            <div className="relative flex items-center justify-between w-full max-w-xs mx-auto">
              {/* Track — left-5 / right-5 aligns with circle centres (w-10 → 20px radius) */}
              <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 h-0.5">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, rgba(54,212,255,0.3) 0, rgba(54,212,255,0.3) 6px, transparent 6px, transparent 12px)",
                  }}
                />
                <motion.div
                  className="absolute top-0 left-0 h-full"
                  style={{
                    width: lineWidth,
                    background: "linear-gradient(90deg, #36D4FF, #89F6EF)",
                    boxShadow: "0 0 6px rgba(54,212,255,0.6)",
                  }}
                />
              </div>

              {PROCESS_STEPS.map((step, i) => {
                const isActive = i === activeStep;
                const isPast   = i < activeStep;
                return (
                  <div
                    key={step.number}
                    className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: isActive ? "#000" : isPast ? "#111" : "#f4f4f4",
                      border: isActive
                        ? "2px solid #36D4FF"
                        : isPast
                        ? "2px solid rgba(54,212,255,0.4)"
                        : "2px solid #e0e0e0",
                      boxShadow: isActive
                        ? "0 0 0 3px rgba(54,212,255,0.25), 0 4px 16px rgba(54,212,255,0.3)"
                        : "none",
                      transition: "all 0.5s ease",
                    }}
                  >
                    <span
                      className="font-heading font-bold text-xs leading-none"
                      style={{
                        color: isActive || isPast ? "#36D4FF" : "#aaa",
                        transition: "color 0.5s ease",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Active step content — slides in on change */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.38, ease: "easeOut" }}
                className="text-center px-4"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{
                    background: "#000000",
                    border: "2px solid #36D4FF",
                    boxShadow: "0 0 0 4px rgba(54,212,255,0.2), 0 6px 24px rgba(54,212,255,0.3)",
                  }}
                >
                  <span className="font-heading font-extrabold text-xl" style={{ color: "#36D4FF" }}>
                    {PROCESS_STEPS[activeStep].number}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-brand-dark mb-3">
                  {PROCESS_STEPS[activeStep].title}
                </h3>
                <p className="font-body text-base leading-relaxed text-gray-500 max-w-xs mx-auto">
                  {PROCESS_STEPS[activeStep].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA — appears when step 4 activates */}
          <motion.div
            className="text-center mt-10 md:mt-12"
            style={{ opacity: ctaOpacity, y: ctaY }}
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-aqua text-brand-dark font-heading font-bold text-sm px-8 py-3.5 rounded-full transition-colors duration-200"
              style={{ boxShadow: "0 4px 24px rgba(54,212,255,0.4)" }}
            >
              Start the Process →
            </a>
          </motion.div>
        </div>

        {/* Scroll hint — fades out after first step */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          style={{ opacity: hintOpacity }}
        >
          <span className="font-body text-xs tracking-widest uppercase text-gray-400">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-gray-300 flex items-start justify-center pt-1.5">
            <motion.div
              className="w-1 h-2 rounded-full bg-brand-blue"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
