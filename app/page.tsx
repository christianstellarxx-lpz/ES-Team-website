import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home",
  description: "Transform your business with ES Team's premium virtual assistants and digital marketing experts. Hand-picked professionals who drive results and grow with your business. Start with a free discovery call.",
  keywords: [
    "virtual assistant services",
    "digital marketing agency",
    "business outsourcing",
    "remote team building",
    "entrepreneur support",
    "lead generation services",
    "social media management",
    "content creation",
    "SEO optimization",
    "PPC campaigns"
  ],
  openGraph: {
    title: "ES Team | Premium Virtual Assistance & Digital Marketing Services",
    description: "Transform your business with ES Team's premium virtual assistants and digital marketing experts. Hand-picked professionals who drive results and grow with your business.",
    images: [
      {
        url: "/Hero%20Header.png",
        width: 1200,
        height: 630,
        alt: "ES Team - Virtual Assistance & Digital Marketing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ES Team | Premium Virtual Assistance & Digital Marketing Services",
    description: "Transform your business with ES Team's premium virtual assistants and digital marketing experts. Hand-picked professionals who drive results and grow with your business.",
    images: ["/Hero%20Header.png"],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
