import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Why ES Team | ES Team",
  description:
    "See why entrepreneurs and growing businesses trust ES Team for personalized VA matching, flexible engagements, and results that move the needle.",
};

export default function WhyUsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Why Choose Us"
          title="We're Not Just Another VA Agency"
          subtitle="We are the partner that grows with your business — personalized, reliable, and relentlessly results-focused."
          image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
          imageAlt="Business partnership and trust between professionals"
        />
        <WhyUsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
