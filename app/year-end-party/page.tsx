import type { Metadata } from "next";
import CareersNavbar from "@/components/CareersNavbar";
import YearEndPartyContent from "@/components/YearEndPartyContent";
import Footer from "@/components/Footer";

// Private page shared directly with the VAs — intentionally not linked from
// the site nav, footer, or sitemap, and kept out of search engines.
export const metadata: Metadata = {
  title: "2nd Annual ES Team Year End Getaway",
  description: "Register for the 2nd Annual ES Team Year End Getaway — Dec. 12–14, 2026 at Davao Bamboo Sanctuary and Ecological Park.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "2nd Annual ES Team Year End Getaway · Dec. 12–14, 2026",
    description: "Davao Bamboo Sanctuary and Ecological Park. Register and upload your payment receipt to reserve your spot.",
    images: [{ url: "/year-end-party/main.jpg", width: 1080, height: 1080, alt: "ES Team at the 1st Year End Party" }],
  },
};

export default function YearEndPartyPage() {
  return (
    <>
      <CareersNavbar />
      <main>
        <YearEndPartyContent />
      </main>
      <Footer />
    </>
  );
}
