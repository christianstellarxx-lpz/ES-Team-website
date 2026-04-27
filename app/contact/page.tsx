import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ContactContent from "@/components/ContactContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Book a Free Call | ES Team",
  description:
    "Schedule your free 30-minute discovery call with ES Team. No commitment, no pressure — just clarity on how we can help your business grow.",
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
