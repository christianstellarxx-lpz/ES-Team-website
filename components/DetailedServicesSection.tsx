"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import Image from "next/image";
import {
  FiCheckCircle,
  FiClock,
  FiTrendingUp,
  FiUsers,
  FiBarChart2,
  FiTarget,
} from "react-icons/fi";

interface ServiceDetail {
  id: number;
  title: string;
  subtitle: string;
  mainPainPoint: string;
  description: string;
  benefits: string[];
  outcomes: string[];
  image: string;
  imageAlt: string;
  accentColor: string;
  icon: React.ElementType;
}

const DETAILED_SERVICES: ServiceDetail[] = [
  {
    id: 1,
    title: "Social Media Management",
    subtitle: "Build an unstoppable online presence",
    mainPainPoint:
      "You're too busy running your business to post consistently. Your competitors are eating your lunch on Instagram, LinkedIn, and TikTok.",
    description:
      "We handle everything—strategy, content creation, scheduling, and community engagement—so your brand stays visible, active, and growing. Our approach isn't just posting; it's building a community that trusts you.",
    benefits: [
      "Daily, consistent posting across all platforms (Instagram, Facebook, LinkedIn, TikTok, Twitter)",
      "Custom content calendar aligned with your business goals and product launches",
      "Engaging copy and captions that attract and convert your ideal audience",
      "Real-time community management and rapid response to comments and DMs",
      "Monthly performance reports showing growth, engagement, and ROI",
      "Trending content strategy to keep your brand relevant and visible",
    ],
    outcomes: [
      "Increase followers 20-40% in the first 90 days",
      "Boost engagement rates and build a loyal, responsive community",
      "Generate qualified leads directly from social platforms",
      "Establish yourself as an authority in your industry",
      "Save 10+ hours per week managing social media",
    ],
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Social media management on mobile devices",
    accentColor: "from-pink-500 to-rose-500",
    icon: FiTrendingUp,
  },
  {
    id: 2,
    title: "Digital Marketing Support",
    subtitle: "Turn strategy into measurable revenue",
    mainPainPoint:
      "You're running ads without knowing what's working. Your conversion rates are flat. You're spending money but not seeing real results.",
    description:
      "We build and manage campaigns that don't just attract eyeballs—they convert them into paying customers. From funnel design to campaign optimization, we make sure every dollar moves the needle.",
    benefits: [
      "Campaign strategy and planning tailored to your business model and target audience",
      "Ad copy and creative development that speaks directly to buyer pain points",
      "Multi-channel campaign management (Google Ads, Facebook, LinkedIn, email funnels)",
      "A/B testing and continuous optimization for maximum ROI",
      "Detailed analytics dashboards tracking cost-per-lead, conversion rates, and revenue impact",
      "Monthly strategy reviews and recommendations based on performance data",
    ],
    outcomes: [
      "Increase conversion rates by 30-50% through strategic optimization",
      "Reduce customer acquisition cost (CAC) by 25-40%",
      "Generate 2-3x ROI on advertising spend within 60 days",
      "Build high-converting sales funnels that work on autopilot",
      "Scale revenue without scaling ad spend proportionally",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Digital marketing analytics and dashboard",
    accentColor: "from-blue-500 to-cyan-500",
    icon: FiBarChart2,
  },
  {
    id: 3,
    title: "Virtual Admin Assistance",
    subtitle: "Reclaim your time and your sanity",
    mainPainPoint:
      "Your inbox has 500 unread emails. You're spending 20+ hours a week on admin work that should take a VA five. You haven't had time to actually lead your business in months.",
    description:
      "We handle the day-to-day operations that drain your energy and kill your productivity. From inbox management to calendar scheduling to data entry, your VA becomes an extension of your team—precise, reliable, and proactive.",
    benefits: [
      "Complete inbox management: sorting, filtering, prioritizing, and drafting responses",
      "Calendar and meeting scheduling, including travel arrangements and prep materials",
      "Customer relationship management (CRM) updates and database maintenance",
      "Document preparation, formatting, and organization",
      "Vendor research and contract comparison",
      "Travel planning, logistics, and expense management",
    ],
    outcomes: [
      "Reclaim 15-25 hours per week for strategic, high-leverage work",
      "Never miss a deadline or important follow-up again",
      "Reduce decision fatigue and mental load significantly",
      "Improve team productivity by having someone manage operational friction",
      "Scale your business without scaling your stress",
    ],
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Virtual assistant managing tasks and calendar",
    accentColor: "from-green-500 to-emerald-500",
    icon: FiClock,
  },
  {
    id: 4,
    title: "Lead Generation & Research",
    subtitle: "Keep your pipeline overflowing",
    mainPainPoint:
      "Your pipeline is running dry. You're spending too much time hunting for prospects instead of closing them. Your sales team is chasing shadows.",
    description:
      "We source, research, and qualify leads so your sales team can focus on closing. Our approach combines targeted research, personalized outreach, and deep prospect intelligence—giving you a constant stream of ready-to-talk opportunities.",
    benefits: [
      "Targeted prospect lists built to your exact ICP (Ideal Customer Profile)",
      "Deep research on company size, decision-makers, pain points, and buying signals",
      "Personalized outreach campaigns with proven conversion messaging",
      "LinkedIn profile optimization and targeted engagement strategy",
      "Email list building and segmentation for marketing campaigns",
      "Competitor intelligence and market trend research",
    ],
    outcomes: [
      "Generate 20-50 qualified leads per month, ready for your sales team",
      "Reduce sales cycle length by 30-40% with better-qualified prospects",
      "Increase close rate by 2-3x with prospects already pre-qualified",
      "Build a predictable, scalable pipeline that doesn't dry up",
      "Let your sales team focus on closing, not hunting",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Lead generation and research process",
    accentColor: "from-purple-500 to-indigo-500",
    icon: FiTarget,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function DetailedServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-white"
    >
      {/* Parallax background effects */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div
          className="absolute rounded-full"
          style={{
            width: 600,
            height: 600,
            left: "-10%",
            top: "10%",
            background:
              "radial-gradient(circle, rgba(54,212,255,0.04) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            right: "-5%",
            bottom: "5%",
            background:
              "radial-gradient(circle, rgba(137,246,239,0.04) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading font-extrabold text-brand-dark mb-4 leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            What Each Service Delivers
          </h2>
          <p className="font-body text-gray-600 max-w-2xl mx-auto text-lg">
            Every service is designed to solve a specific pain point—and to move the needle on what matters most to your business.
          </p>
        </motion.div>

        {/* Service Cards with Detailed Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-20"
        >
          {DETAILED_SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            const serviceId = service.title
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[&]/g, "");

            return (
              <motion.div
                key={service.id}
                id={serviceId}
                variants={itemVariants}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-20"
              >
                {/* Content */}
                <div
                  className={`flex flex-col gap-8 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  {/* Icon & Title */}
                  <div>
                    <div
                      className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.accentColor}`}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="font-heading font-extrabold text-brand-dark text-3xl md:text-4xl mb-2 leading-tight">
                      {service.title}
                    </h3>
                    <p className="font-body text-gray-600 text-lg">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Pain Point Callout */}
                  <div className="relative p-6 border-l-4 border-gray-300 bg-gray-50 rounded-r-lg">
                    <p className="font-body text-gray-700 italic">
                      {service.mainPainPoint}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="font-body text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefits Section */}
                  <div>
                    <h4 className="font-heading font-bold text-brand-dark text-lg mb-4">
                      What's Included
                    </h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 items-start font-body text-gray-600 text-sm"
                        >
                          <FiCheckCircle
                            size={20}
                            className={`text-transparent bg-gradient-to-r ${service.accentColor} bg-clip-text flex-shrink-0 mt-0.5`}
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes Section */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                    <h4 className="font-heading font-bold text-brand-dark text-lg mb-4">
                      What You Get
                    </h4>
                    <ul className="space-y-2">
                      {service.outcomes.map((outcome, idx) => (
                        <li
                          key={idx}
                          className="flex gap-2 items-start font-body text-gray-700 text-sm"
                        >
                          <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.accentColor} flex-shrink-0 mt-2`} />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image */}
                <motion.div
                  className={`relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${service.accentColor} opacity-10`}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24 text-center bg-gradient-to-r from-brand-blue/5 to-cyan-500/5 rounded-2xl p-12 border border-brand-blue/10"
        >
          <h3 className="font-heading font-bold text-brand-dark text-2xl mb-4">
            Ready to get started?
          </h3>
          <p className="font-body text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Let's talk about which service (or combination) will have the biggest impact on your business right now.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-brand-blue to-cyan-500 text-white font-body font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
            Schedule a Discovery Call
          </button>
        </motion.div>
      </div>
    </section>
  );
}
