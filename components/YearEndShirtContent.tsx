"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { FiShoppingBag, FiCalendar, FiCreditCard, FiChevronDown, FiMaximize2 } from "react-icons/fi";
import Aurora from "./Aurora";
import YearEndShirtForm from "./YearEndShirtForm";
import { PaymentQrCard, SectionHeading } from "./YearEndPartyContent";
import {
  JONATHAN_EMAIL,
  SHIRT_WEAR_DAY,
  SIZE_CHART_SRC,
} from "@/lib/year-end-shirt";

const DETAILS = [
  { Icon: FiShoppingBag, label: "What", value: "ES Team Official Polo Shirt" },
  { Icon: FiCalendar, label: "When to wear it", value: SHIRT_WEAR_DAY },
  { Icon: FiCreditCard, label: "Price", value: "₱500 per shirt" },
];

const JonathanLink = () => (
  <a href={`mailto:${JONATHAN_EMAIL}`} className="font-semibold text-brand-blue hover:underline underline-offset-4">
    {JONATHAN_EMAIL}
  </a>
);

const STEPS = [
  {
    title: "Pay",
    body: (
      <>
        Send ₱500 per shirt by bank transfer or digital bank using the InstaPay QR code in the order section below
        (GoTyme · Jonathan Kim Sarong). Keep a screenshot or photo of your receipt.
      </>
    ),
  },
  {
    title: "Fill out the form",
    body: <>Tell us your name, pick your fit and size, and upload your proof of payment.</>,
  },
  {
    title: "Get confirmed",
    body: (
      <>
        You will receive a confirmation email once your order is recorded. You can get your shirt at the year-end
        party, or contact Jonathan to pick it up at his place, meet up somewhere, or have it shipped.
      </>
    ),
  },
];

const FAQS = [
  {
    q: "Can I change my size after ordering?",
    a: (
      <>
        Yes. Email Jonathan at <JonathanLink /> with your full name and the new size.
      </>
    ),
  },
  {
    q: "I can't upload my receipt. What do I do?",
    a: (
      <>
        Try a screenshot instead of a PDF, or send it to Jonathan at <JonathanLink /> with your full name.
      </>
    ),
  },
  {
    q: "How do I get my shirt?",
    a: (
      <>
        Jonathan will hand out the shirts at the year-end party. You can also pick it up at Jonathan&apos;s place or
        meet up with him somewhere, or have it shipped via LBC, J&amp;T, etc. Contact Jonathan at <JonathanLink /> to
        arrange it.
      </>
    ),
  },
  {
    q: "Can I order for a teammate?",
    a: (
      <>
        Yes. Tap &ldquo;Add another shirt&rdquo; in the form and pick a fit and size for each one. It&apos;s ₱500 per
        shirt, so pay the total shown in the form.
      </>
    ),
  },
  {
    q: "How much is the shirt and how do I pay?",
    a: (
      <>
        It is ₱500 per shirt. Pay by bank transfer or digital bank using the InstaPay QR code on this page, then upload
        your receipt in the form.
      </>
    ),
  },
  {
    q: "Do I have to wear it on a specific day?",
    a: <>Yes. We are all wearing the polo on {SHIRT_WEAR_DAY}.</>,
  },
  {
    q: "Who do I ask if I have questions?",
    a: (
      <>
        Reach out to Jonathan at <JonathanLink />.
      </>
    ),
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const gridOverlay = {
  backgroundImage: [
    "linear-gradient(rgba(54,212,255,0.6) 1px, transparent 1px)",
    "linear-gradient(90deg, rgba(54,212,255,0.6) 1px, transparent 1px)",
  ].join(", "),
  backgroundSize: "60px 60px",
};

export default function YearEndShirtContent() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-brand-dark pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="absolute inset-0 pointer-events-none">
          <Aurora colorStops={["#36D4FF", "#89F6EF", "#4055A9"]} blend={0.34} amplitude={1.0} speed={0.8} />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ ...gridOverlay, opacity: 0.05 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 border border-brand-blue/40 bg-brand-blue/10 text-brand-blue text-sm font-body font-medium px-4 py-1.5 rounded-full mb-5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                ES Team Official Polo 2026
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="font-heading font-extrabold text-white leading-tight mb-5"
                style={{ fontSize: "clamp(2.1rem, 5.5vw, 3.5rem)" }}
              >
                Wear it with pride.{" "}
                <span className="bg-gradient-to-r from-brand-blue to-brand-aqua bg-clip-text text-transparent">
                  The official ES Team polo is here.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-body text-gray-400 max-w-xl mb-8"
                style={{ fontSize: "1.05rem", lineHeight: "1.75" }}
              >
                Get your polo for our year-end party and show up looking like one team.
              </motion.p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
              >
                {DETAILS.map(({ Icon, label, value }) => (
                  <motion.div
                    key={label}
                    variants={itemVariants}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-blue/15 flex-shrink-0 flex items-center justify-center">
                      <Icon size={17} className="text-brand-blue" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-body text-xs uppercase tracking-wider text-gray-500">{label}</p>
                      <p className="font-heading font-semibold text-white text-sm leading-snug">{value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.a
                href="#order"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-aqua px-7 py-3.5 font-heading text-sm font-bold text-brand-dark shadow-lg shadow-brand-blue/25 transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/40 hover:-translate-y-0.5"
              >
                Order Your Polo
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="relative mx-auto w-full max-w-md"
            >
              {/* Light glow so the black shirt reads against the dark background */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(137,246,239,0.45) 35%, rgba(54,212,255,0.12) 58%, transparent 72%)",
                }}
              />
              <div className="relative aspect-square">
                <Image
                  src="/year-end-party/shirt.png"
                  alt="Front of the black ES Team official polo shirt with the ES Team logo on the chest"
                  fill
                  sizes="(min-width: 1024px) 28rem, 100vw"
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── About the shirt + How to order ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeading
            eyebrow="About the shirt"
            title="Made for the ES Team, made for the party."
            subtitle="Our official polo is made of 100% cotton honeycomb fabric, designed to look sharp and feel comfortable all day. It comes in both Men's and Women's cuts, so pick whichever fits you best."
          />

          <motion.ol
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {STEPS.map((step, i) => (
              <motion.li key={step.title} variants={itemVariants} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 font-heading text-lg font-extrabold text-brand-blue">
                  {i + 1}
                </div>
                <h3 className="font-heading font-bold text-brand-dark text-base mb-2">
                  Step {i + 1} · {step.title}
                </h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{step.body}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* ── Size guide ── */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <SectionHeading
            eyebrow="Size guide"
            title="Not sure which size to pick?"
            subtitle="Check the size chart below. You can choose either the Men's or Women's cut, whichever you like. If you are between sizes, we suggest going one size up."
          />
          <motion.a
            href={SIZE_CHART_SRC}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative block overflow-hidden rounded-3xl border border-gray-100 shadow-xl"
          >
            <Image
              src={SIZE_CHART_SRC}
              alt="Polo shirt size chart in inches (flat lay). Men's cut chest width and length: XS 18 by 25, S 19 by 26, M 20 by 27, L 21 by 28, XL 22 by 29, XXL 23 by 30, XXXL 24 by 31. Women's cut: XS 16 by 22, S 17 by 23, M 18 by 24, L 19 by 25, XL 20 by 26, XXL 21 by 27. Measurements may vary by plus or minus 0.5 inches."
              width={2752}
              height={1536}
              sizes="(min-width: 1024px) 64rem, 100vw"
              className="h-auto w-full"
            />
            <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 font-heading text-xs font-bold text-brand-dark shadow">
              <FiMaximize2 size={12} /> Open full size
            </span>
          </motion.a>
        </div>
      </section>

      {/* ── Order form ── */}
      <section id="order" className="relative bg-white py-16 md:py-24 scroll-mt-16 overflow-hidden">
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 520, height: 520, left: -120, top: "10%",
            background: "radial-gradient(circle, rgba(54,212,255,0.07) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="lg:col-span-2"
              >
                <span className="font-heading font-bold text-brand-blue text-xs tracking-widest uppercase mb-3 block">
                  Order
                </span>
                <h2
                  className="font-heading font-extrabold text-brand-dark leading-tight mb-4"
                  style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
                >
                  Place your order
                </h2>
                <p className="font-body text-gray-500 text-base leading-relaxed mb-8">
                  Pay <span className="font-semibold text-brand-dark">₱500 per shirt</span> using the QR code below,
                  then fill out the form.
                </p>
                <PaymentQrCard />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="lg:col-span-3"
              >
                <YearEndShirtForm />
              </motion.div>
            </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="flex flex-col gap-3">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading font-bold text-brand-dark text-sm [&::-webkit-details-marker]:hidden">
                  {q}
                  <FiChevronDown size={18} className="flex-shrink-0 text-brand-blue transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 font-body text-gray-500 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-brand-dark px-4 py-5 text-center font-body text-sm text-gray-400">
        ES Team Year-End Party 2026 | Questions? Contact Jonathan at <JonathanLink />
      </div>
    </>
  );
}
