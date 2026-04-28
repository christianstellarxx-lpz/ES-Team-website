export const BOOKING_URL = "https://api.leadconnectorhq.com/widget/bookings/discovery-call-jonathan-sarong";

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: "50+", label: "Clients Served" },
  { value: "4.9★", label: "Satisfaction" },
  { value: "30-Day", label: "Onboarding Support" },
];

export interface Service {
  icon: string;
  title: string;
  description: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    icon: "FiInstagram",
    title: "Social Media Management",
    description:
      "Strategy, content creation, scheduling, and community engagement across all your platforms — so your brand stays active and visible.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: "FiTrendingUp",
    title: "Digital Marketing Support",
    description:
      "Campaigns, funnels, and brand visibility strategies that convert attention into paying customers and measurable revenue.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: "FiClipboard",
    title: "Virtual Admin Assistance",
    description:
      "Inbox management, calendar scheduling, data entry, and day-to-day operations handled precisely — so you can lead, not manage.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: "FiUsers",
    title: "Lead Generation & Research",
    description:
      "Targeted outreach campaigns, curated prospect lists, and deep research to keep your pipeline full and your team closing.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We learn about your business, goals, bottlenecks, and the specific support you need to grow.",
  },
  {
    number: "02",
    title: "Candidate Matching",
    description:
      "We present 3–4 hand-picked VA candidates uniquely suited to your industry, workflow, and personality.",
  },
  {
    number: "03",
    title: "Interview & Selection",
    description:
      "You interview them on your terms. We facilitate and advise. You choose who fits your vision best.",
  },
  {
    number: "04",
    title: "30-Day Onboarding",
    description:
      "We stay by your side for the first 30 days to ensure a smooth launch, clear expectations, and early results.",
  },
];

export interface WhyUsItem {
  icon: string;
  title: string;
  description: string;
}

export const WHY_US: WhyUsItem[] = [
  {
    icon: "FiTarget",
    title: "Personalized Matching",
    description:
      "No random assignments. Every VA is rigorously vetted and matched to your specific business needs, industry, and working style.",
  },
  {
    icon: "FiRefreshCw",
    title: "Flexible Engagements",
    description:
      "Project-based or ongoing support with no long-term lock-in. Scale your team up or down as your business evolves.",
  },
  {
    icon: "FiMessageSquare",
    title: "Dedicated Communication",
    description:
      "A real team you can actually reach. No automated responses, no black holes — just reliable humans who care about your outcomes.",
  },
  {
    icon: "FiBarChart2",
    title: "Results You Can Measure",
    description:
      "We focus on outcomes, not just hours logged. If it doesn't move your business forward, we rethink the strategy together.",
  },
];

export interface Testimonial {
  initials: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    initials: "JR",
    name: "Jordan Rivers",
    role: "Founder & CEO",
    company: "Apex Consulting Group",
    quote:
      "Working with ES Team has been a game-changer for my consulting firm. Within the first two weeks, my VA had completely restructured my inbox and was handling client follow-ups better than I ever did. I've reclaimed over 15 hours a week. I finally feel like I'm running my business instead of being buried by it.",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    initials: "MC",
    name: "Maria Chen",
    role: "E-Commerce Entrepreneur",
    company: "Bloom & Co.",
    quote:
      "I was skeptical at first — I'd tried hiring VAs before and it never worked out. ES Team's matching process is genuinely different. They took time to understand my brand before presenting any candidates. My VA has been with me for eight months now and she's practically a co-founder at this point. Couldn't recommend them more.",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    initials: "DT",
    name: "Derek Thompson",
    role: "Business Coach",
    company: "Momentum Coaching",
    quote:
      "ES Team handled my social media, client scheduling, and lead research simultaneously — and did it better than I could have done myself. My engagement is up 40% and I'm booking discovery calls consistently. The 30-day onboarding support made all the difference. They set the whole thing up for success from day one.",
    image: "https://i.pravatar.cc/150?img=12",
  },
];
