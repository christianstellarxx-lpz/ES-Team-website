import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";
import SolutionSection from "@/components/SolutionSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | ES Team",
  description:
    "From social media management to virtual admin support — explore every way ES Team helps your business run and grow.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="What We Do"
          title="Every Service Your Business Needs to Grow"
          subtitle="We cover every corner of your digital operations — so you can stop juggling tasks and start focusing on what you do best."
          image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
          imageAlt="Professional working on digital marketing and business strategy"
        />
        <ServicesSection />
        <SolutionSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
