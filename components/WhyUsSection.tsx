"use client";

import { motion, type Variants } from "framer-motion";
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="py-20 md:py-28"
      style={{
        background: "linear-gradient(180deg, rgba(137,246,239,0.18) 0%, #ffffff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
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
            initial={{ opacity: 0, y: 20 }}
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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative h-80 lg:h-[440px] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
              alt="Professional team delivering results for clients"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent" />
          </motion.div>

          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {WHY_US.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
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
