"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  FiCalendar,
  FiMapPin,
  FiGift,
  FiCreditCard,
  FiDroplet,
  FiCompass,
  FiFeather,
  FiCoffee,
  FiHeart,
  FiMic,
  FiExternalLink,
} from "react-icons/fi";
import Aurora from "./Aurora";
import YearEndPartyForm from "./YearEndPartyForm";

const VENUE_URL = "https://www.facebook.com/DavaoBambooSanctuaryandEcologicalPark";
const VENUE_VIDEO_URL =
  "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1663939604287020%2F&show_text=false&width=267&t=0";

const DETAILS = [
  { Icon: FiCalendar, label: "When", value: "Dec. 12–14, 2026" },
  { Icon: FiMapPin, label: "Where", value: "Davao Bamboo Sanctuary & Ecological Park" },
  { Icon: FiCreditCard, label: "Fee", value: "₱4,000 per person · ₱2,000 downpayment" },
  { Icon: FiGift, label: "Exchange Gift", value: "₱500 minimum" },
];

const AMENITIES = [
  {
    Icon: FiDroplet,
    title: "Spring-Fed Swimming Pool",
    description: "A natural, non-chlorinated pool (3–6 ft deep) fed by cool, crystal-clear flowing spring water.",
  },
  {
    Icon: FiCompass,
    title: "Adventure & Recreation",
    description: "Kayaking, a monkey bridge, foam/practice archery, a fish spa, basketball, and fishing areas.",
  },
  {
    Icon: FiFeather,
    title: "Bamboo Gardens",
    description: "A sprawling 3.5-hectare landscape with around 26 bamboo species — Buddha's Belly, Thai, Japanese, and more.",
  },
  {
    Icon: FiCoffee,
    title: "Dining & Entertainment",
    description: "Poolside restaurant and bar serving Asian and barbecue cuisine, a dessert station, and videoke.",
  },
  {
    Icon: FiHeart,
    title: "Wellness",
    description: "On-site massage services, an open-air bath, and a hot tub to unwind after the year.",
  },
  {
    Icon: FiMic,
    title: "Event Spaces",
    description: "An air-conditioned function hall with sound system and projector for our year end program.",
  },
];

const GALLERY = [
  { src: "/year-end-party/2nd.jpg", alt: "ES Team members posing together at the 1st Year End Party" },
  { src: "/year-end-party/3rd.jpg", alt: "ES Team gathered around the food table at the 1st Year End Party" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center mb-12"
    >
      <span className="font-heading font-bold text-brand-blue text-xs tracking-widest uppercase mb-3 block">
        {eyebrow}
      </span>
      <h2
        className="font-heading font-extrabold text-brand-dark leading-tight mb-4"
        style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
      >
        {title}
      </h2>
      {subtitle && <p className="font-body text-gray-500 text-base max-w-xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}

export default function YearEndPartyContent() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-brand-dark pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="absolute inset-0 pointer-events-none">
          <Aurora colorStops={["#36D4FF", "#89F6EF", "#4055A9"]} blend={0.34} amplitude={1.0} speed={0.8} />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: [
              "linear-gradient(rgba(54,212,255,0.6) 1px, transparent 1px)",
              "linear-gradient(90deg, rgba(54,212,255,0.6) 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "60px 60px",
            opacity: 0.05,
          }}
        />

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
                2nd Annual · Dec. 12–14, 2026
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="font-heading font-extrabold text-white leading-tight mb-5"
                style={{ fontSize: "clamp(2.1rem, 5.5vw, 3.5rem)" }}
              >
                The ES Team{" "}
                <span className="bg-gradient-to-r from-brand-blue to-brand-aqua bg-clip-text text-transparent">
                  Year End Getaway
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-body text-gray-400 max-w-xl mb-8"
                style={{ fontSize: "1.05rem", lineHeight: "1.75" }}
              >
                Three days of spring water, bamboo groves, games, good food, and the people who made this year
                happen. Let&apos;s close out 2026 together.
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
                href="#register"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-aqua px-7 py-3.5 font-heading text-sm font-bold text-brand-dark shadow-lg shadow-brand-blue/25 transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/40 hover:-translate-y-0.5"
              >
                Register Now
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </motion.a>
            </div>

            {/* Main photo */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="relative mx-auto w-full max-w-lg"
            >
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-blue/40 to-brand-aqua/20 blur-2xl" />
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
                <Image
                  src="/year-end-party/main.jpg"
                  alt="The ES Team holding Christmas gifts at the 1st Annual Year End Party"
                  fill
                  sizes="(min-width: 1024px) 32rem, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 left-6 rounded-full bg-white px-4 py-2 font-heading text-xs font-bold text-brand-dark shadow-lg">
                📸 1st Year End Party · 2025
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Venue ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeading
            eyebrow="The Venue"
            title="Davao Bamboo Sanctuary & Ecological Park"
            subtitle="Tucked in Barangay Malagos, Davao City — a natural spring pool, adventure activities, and cozy accommodations surrounded by lush bamboo groves."
          />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center lg:items-start">
          {/* Venue reel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex-shrink-0 lg:sticky lg:top-24"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-blue/25 to-brand-aqua/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-brand-dark shadow-xl">
              <iframe
                src={VENUE_VIDEO_URL}
                width={267}
                height={476}
                title="Davao Bamboo Sanctuary and Ecological Park video"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid w-full grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {AMENITIES.map(({ Icon, title, description }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                whileHover={{ y: -4, boxShadow: "0 10px 32px rgba(54,212,255,0.1)" }}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand-blue" />
                </div>
                <h3 className="font-heading font-bold text-brand-dark text-base mb-2">{title}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>
          </div>

          <div className="mt-10 text-center">
            <a
              href={VENUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-brand-blue hover:underline underline-offset-4"
            >
              View the park on Facebook
              <FiExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Year end shirt ── */}
      <section className="relative overflow-hidden bg-brand-dark py-16 md:py-24">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: [
              "linear-gradient(rgba(54,212,255,0.6) 1px, transparent 1px)",
              "linear-gradient(90deg, rgba(54,212,255,0.6) 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "60px 60px",
            opacity: 0.04,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <span className="font-heading font-bold text-brand-blue text-xs tracking-widest uppercase mb-3 block">
                Sneak Peek
              </span>
              <h2
                className="font-heading font-extrabold text-white leading-tight mb-4"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
              >
                The Year End Shirt
              </h2>
              <p className="font-body text-gray-400 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                A first look at this year&apos;s ES Team polo: classic black with our logo on the chest.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
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
                  alt="Preview of the black ES Team year end polo shirt with the ES Team logo"
                  fill
                  sizes="(min-width: 1024px) 28rem, 100vw"
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Last year ── */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeading
            eyebrow="Throwback"
            title="Our 1st Year End Party"
            subtitle="Great food, a lot of laughs, and one very competitive gift exchange. Year two is going bigger."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GALLERY.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                className="relative aspect-square overflow-hidden rounded-3xl border border-gray-100 shadow-md"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Registration ── */}
      <section id="register" className="relative bg-white py-16 md:py-24 scroll-mt-16 overflow-hidden">
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
              className="lg:col-span-2 lg:sticky lg:top-24"
            >
              <span className="font-heading font-bold text-brand-blue text-xs tracking-widest uppercase mb-3 block">
                Registration
              </span>
              <h2
                className="font-heading font-extrabold text-brand-dark leading-tight mb-4"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
              >
                Reserve your spot
              </h2>
              <p className="font-body text-gray-500 text-base leading-relaxed mb-8">
                Fill out the form and upload your payment receipt to lock in your slot.
              </p>

              <ul className="flex flex-col gap-4">
                <li className="flex gap-3">
                  <FiCreditCard size={18} className="text-brand-blue flex-shrink-0 mt-0.5" />
                  <p className="font-body text-sm text-gray-600">
                    <span className="font-semibold text-brand-dark">₱2,000 downpayment</span> or{" "}
                    <span className="font-semibold text-brand-dark">₱4,000 full payment</span> per person.
                    Bringing someone? The amount doubles for 1 pip and triples for 2. Attach a screenshot of
                    your receipt.
                  </p>
                </li>
                <li className="flex gap-3">
                  <FiGift size={18} className="text-brand-blue flex-shrink-0 mt-0.5" />
                  <p className="font-body text-sm text-gray-600">
                    Bring an <span className="font-semibold text-brand-dark">exchange gift worth at least ₱500</span>.
                  </p>
                </li>
                <li className="flex gap-3">
                  <FiCalendar size={18} className="text-brand-blue flex-shrink-0 mt-0.5" />
                  <p className="font-body text-sm text-gray-600">
                    <span className="font-semibold text-brand-dark">Dec. 12–14, 2026</span> at Davao Bamboo
                    Sanctuary and Ecological Park.
                  </p>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="lg:col-span-3"
            >
              <YearEndPartyForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
