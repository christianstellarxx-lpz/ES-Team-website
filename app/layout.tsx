import type { Metadata } from "next";
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
  title: "ES Team | Virtual Assistance & Digital Marketing",
  description:
    "ES Team connects entrepreneurs and growing businesses with hand-picked virtual assistants who drive results. Book your free discovery call today.",
  keywords:
    "virtual assistant, digital marketing, social media management, lead generation, virtual admin, entrepreneur support",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "ES Team | Virtual Assistance & Digital Marketing",
    description:
      "Your on-demand digital support partner. Hand-picked VAs who grow with your business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
