"use client";

import { motion, type Variants } from "framer-motion";
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
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProblemSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
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
              initial={{ opacity: 0, y: 20 }}
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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative h-64 lg:h-72 rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=600&q=80"
              alt="Overwhelmed business owner managing too many tasks"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-white/10 via-transparent to-transparent" />
          </motion.div>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PAIN_POINTS.map(({ Icon, title, description }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="bg-white border-l-4 border-brand-blue rounded-xl shadow-sm p-7 flex flex-col gap-4"
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
