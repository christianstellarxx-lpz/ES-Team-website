import type { Metadata } from "next";
import CareersNavbar from "@/components/CareersNavbar";
import PageHero from "@/components/PageHero";
import CareersContent from "@/components/CareersContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers | Join Our Virtual Assistant Team | ES Team",
  description: "Are you a skilled virtual assistant ready to do meaningful remote work? Join ES Team — book an intro call, share your resume and portfolio, and meet our team.",
  keywords: [
    "virtual assistant jobs",
    "remote VA careers",
    "work from home virtual assistant",
    "remote work opportunities",
    "virtual assistant hiring",
    "online jobs",
    "freelance virtual assistant",
    "ES Team careers",
  ],
  openGraph: {
    title: "Join Our Team | Virtual Assistant Careers at ES Team",
    description: "We're looking for talented virtual professionals ready to grow with us. Book your intro call, share your CV and portfolio, and let's talk.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
        width: 800,
        height: 600,
        alt: "Team of remote professionals collaborating",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Our Team | Virtual Assistant Careers at ES Team",
    description: "We're looking for talented virtual professionals ready to grow with us. Book your intro call, share your CV and portfolio, and let's talk.",
    images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"],
  },
};

export default function CareersPage() {
  return (
    <>
      <CareersNavbar />
      <main>
        <PageHero
          label="Join Our Team"
          title="Build Your Career as a Virtual Assistant"
          subtitle="We're looking for driven, detail-oriented remote professionals ready to make a real difference for growing businesses around the world."
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
          imageAlt="Team of remote professionals collaborating"
        />
        <CareersContent />
      </main>
      <Footer />
    </>
  );
}
