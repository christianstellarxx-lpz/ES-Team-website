"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BOOKING_URL } from "@/lib/constants";

export default function SolutionSection() {
  return (
    <section className="bg-brand-dark py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="font-heading font-semibold text-brand-blue text-sm tracking-widest uppercase mb-4">
              The Solution
            </p>
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
              style={{ lineHeight: "1.7" }}
            >
              We match you with dedicated virtual assistants tailored precisely
              to your business needs, goals, and culture. From social media
              management to administrative operations to lead generation — we
              handle the execution so you can focus on leading.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-blue text-brand-dark font-heading font-bold text-sm px-7 py-3.5 rounded-full hover:bg-brand-aqua transition-colors duration-200"
            >
              Get Matched With Your VA →
            </a>
          </motion.div>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="relative h-[420px] w-full rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                alt="Team collaborating on business strategy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent" />
            </div>

            {/* Floating stat cards */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-brand-blue/20 border border-brand-blue/30 rounded-xl px-4 py-2 backdrop-blur-sm"
            >
              <span className="font-heading font-bold text-brand-blue text-sm">50+ Clients</span>
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-brand-aqua/20 border border-brand-aqua/30 rounded-xl px-4 py-2 backdrop-blur-sm"
            >
              <span className="font-heading font-bold text-brand-aqua text-sm">4.9★ Rated</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
