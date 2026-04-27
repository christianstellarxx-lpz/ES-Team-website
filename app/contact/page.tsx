import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ContactContent from "@/components/ContactContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Book a Free Discovery Call | Start Growing Your Business Today",
  description: "Schedule your free 30-minute discovery call with ES Team. No commitment, no pressure — just clarity on how we can help your business grow with virtual assistance and digital marketing.",
  keywords: [
    "free discovery call",
    "business consultation",
    "virtual assistant consultation",
    "digital marketing consultation",
    "business growth strategy",
    "free business advice",
    "entrepreneur coaching",
    "business scaling consultation"
  ],
  openGraph: {
    title: "Book Your Free Discovery Call | ES Team",
    description: "Schedule your free 30-minute discovery call with ES Team. No commitment, no pressure — just clarity on how we can help your business grow.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
        width: 800,
        height: 600,
        alt: "Video call and remote communication with a professional team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Your Free Discovery Call | ES Team",
    description: "Schedule your free 30-minute discovery call with ES Team. No commitment, no pressure — just clarity on how we can help your business grow.",
    images: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"],
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Get Started"
          title="Book Your Free Discovery Call"
          subtitle="30 minutes. No pressure. No commitment. Just a real conversation about your business and how we can help."
          image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
          imageAlt="Video call and remote communication with a professional team"
        />
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
