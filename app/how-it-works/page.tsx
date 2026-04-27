import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ProcessSection from "@/components/ProcessSection";
import WhyUsSection from "@/components/WhyUsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How It Works | ES Team",
  description:
    "From your first discovery call to a fully onboarded VA — learn exactly how ES Team matches and supports you every step of the way.",
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
