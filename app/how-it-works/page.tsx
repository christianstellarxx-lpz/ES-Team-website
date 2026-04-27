import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ProcessSection from "@/components/ProcessSection";
import WhyUsSection from "@/components/WhyUsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How It Works | 4-Step Process to Build Your Virtual Team",
  description: "From your first discovery call to a fully onboarded VA — learn exactly how ES Team matches and supports you every step of the way. Transparent process for hiring virtual assistants and digital marketing experts.",
  keywords: [
    "how virtual assistance works",
    "hiring process virtual assistant",
    "onboarding virtual team",
    "business process outsourcing steps",
    "remote team building process",
    "virtual assistant matching",
    "digital marketing team setup",
    "business scaling process"
  ],
  openGraph: {
    title: "How It Works | 4-Step Process to Build Your Virtual Team",
    description: "From your first discovery call to a fully onboarded VA — learn exactly how ES Team matches and supports you every step of the way.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
        width: 800,
        height: 600,
        alt: "Team planning and mapping out a workflow process",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works | 4-Step Process to Build Your Virtual Team",
    description: "From your first discovery call to a fully onboarded VA — learn exactly how ES Team matches and supports you every step of the way.",
    images: ["https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"],
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="The Process"
          title="From Discovery Call to Dream Team in 4 Simple Steps"
          subtitle="Our process is built around clarity, fit, and long-term success — not just fast placements."
          image="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
          imageAlt="Team planning and mapping out a workflow process"
        />
        <ProcessSection />
        <WhyUsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
