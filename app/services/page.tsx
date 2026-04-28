import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import DetailedServicesSection from "@/components/DetailedServicesSection";
import SolutionSection from "@/components/SolutionSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | Virtual Assistance & Digital Marketing Solutions",
  description: "Comprehensive business services including virtual assistance, digital marketing, social media management, lead generation, content creation, SEO, and PPC advertising. Scale your business with expert support.",
  keywords: [
    "virtual assistance services",
    "digital marketing services",
    "social media management",
    "lead generation",
    "content creation services",
    "SEO services",
    "PPC advertising",
    "email marketing",
    "CRM management",
    "business process outsourcing",
    "remote administrative support"
  ],
  openGraph: {
    title: "Professional Services | ES Team - Virtual Assistance & Digital Marketing",
    description: "From social media management to virtual admin support — explore every way ES Team helps your business run and grow. Comprehensive digital solutions for scaling businesses.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
        width: 800,
        height: 600,
        alt: "Professional working on digital marketing and business strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Services | ES Team - Virtual Assistance & Digital Marketing",
    description: "From social media management to virtual admin support — explore every way ES Team helps your business run and grow.",
    images: ["https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"],
  },
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
        <DetailedServicesSection />
        <SolutionSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
