import type { Metadata, Viewport } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://esteam.com"), // Replace with your actual domain
  title: {
    default: "ES Team | Premium Virtual Assistance & Digital Marketing Services",
    template: "%s | ES Team"
  },
  description: "Transform your business with ES Team's premium virtual assistants and digital marketing experts. Hand-picked professionals who drive results and grow with your business. Free discovery call available.",
  keywords: [
    "virtual assistant",
    "digital marketing",
    "social media management",
    "lead generation",
    "virtual admin",
    "entrepreneur support",
    "business growth",
    "outsourcing",
    "remote team",
    "content creation",
    "SEO services",
    "PPC advertising",
    "email marketing",
    "CRM management",
    "data entry",
    "customer support"
  ],
  authors: [{ name: "ES Team" }],
  creator: "ES Team",
  publisher: "ES Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://esteam.com",
    title: "ES Team | Premium Virtual Assistance & Digital Marketing Services",
    description: "Transform your business with ES Team's premium virtual assistants and digital marketing experts. Hand-picked professionals who drive results and grow with your business.",
    siteName: "ES Team",
    images: [
      {
        url: "/Hero%20Header.png",
        width: 1200,
        height: 630,
        alt: "ES Team - Virtual Assistance & Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ES Team | Premium Virtual Assistance & Digital Marketing Services",
    description: "Transform your business with ES Team's premium virtual assistants and digital marketing experts. Hand-picked professionals who drive results and grow with your business.",
    images: ["/Hero%20Header.png"],
    creator: "@esteam",
    site: "@esteam",
  },
  alternates: {
    canonical: "https://esteam.com",
  },
  category: "business",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0F172A", // brand-dark color
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ES Team",
    "url": "https://esteam.com",
    "logo": "https://esteam.com/logo.png",
    "description": "Premium virtual assistance and digital marketing services for growing businesses. Hand-picked professionals who drive results and scale with your business.",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX", // Replace with actual phone
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://twitter.com/esteam",
      "https://linkedin.com/company/esteam",
      "https://facebook.com/esteam"
    ],
    "serviceType": [
      "Virtual Assistance",
      "Digital Marketing",
      "Social Media Management",
      "Lead Generation",
      "Content Creation",
      "SEO Services",
      "PPC Advertising",
      "Email Marketing"
    ],
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "ES Team Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Virtual Assistance",
            "description": "Professional virtual assistants to handle administrative tasks, customer support, and business operations."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "Comprehensive digital marketing services including SEO, PPC, social media, and content marketing."
          }
        }
      ]
    }
  };

  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
