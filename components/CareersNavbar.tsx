import Image from "next/image";
import Link from "next/link";

export default function CareersNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0A0A0A]/70 shadow-lg shadow-black/20">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 h-16 flex items-center justify-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="ES Team logo"
            width={36}
            height={36}
            className="object-contain"
            priority
          />
          <span className="font-heading font-bold text-xl">
            <span className="bg-gradient-to-r from-brand-blue to-brand-aqua bg-clip-text text-transparent">ES</span>
            <span className="text-white">Team.Work</span>
          </span>
        </Link>
      </nav>
    </header>
  );
}
