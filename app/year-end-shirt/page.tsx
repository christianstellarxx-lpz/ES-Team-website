import type { Metadata } from "next";
import CareersNavbar from "@/components/CareersNavbar";
import YearEndShirtContent from "@/components/YearEndShirtContent";
import Footer from "@/components/Footer";

// Private page shared directly with the team (linked from /year-end-party only),
// kept out of the site nav, sitemap, and search engines.
export const metadata: Metadata = {
  title: "ES Team Official Polo 2026",
  description: "Order the official ES Team polo for the 2026 Year End Getaway. ₱500 per shirt.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "ES Team Official Polo 2026",
    description: "Wear it with pride. Order your official ES Team polo for the year-end party.",
    images: [{ url: "/year-end-party/shirt.png", alt: "The black ES Team official polo shirt" }],
  },
};

export default function YearEndShirtPage() {
  return (
    <>
      <CareersNavbar />
      <main>
        <YearEndShirtContent />
      </main>
      <Footer />
    </>
  );
}
