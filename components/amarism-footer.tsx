"use client";

import Link from "next/link";

export function AmarismFooter() {
  return (
    <footer className="bg-[#1a2e5a] text-white py-8 px-4 pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-xs font-bold">A</span>
          </div>
          <span className="text-xl font-bold">AMARISM</span>
        </div>

        <p className="text-center text-white/80 text-sm mb-6 max-w-md mx-auto">
          A youth-driven social movement built on the belief that independence
          without equality is incomplete, and freedom without dignity is
          unfinished.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
          <Link href="#about" className="hover:text-[#0d9488] transition-colors">
            About
          </Link>
          <Link href="#missions" className="hover:text-[#0d9488] transition-colors">
            Missions
          </Link>
          <Link href="#get-involved" className="hover:text-[#0d9488] transition-colors">
            Get Involved
          </Link>
          <Link href="#gallery" className="hover:text-[#0d9488] transition-colors">
            Gallery
          </Link>
          <Link href="#contact" className="hover:text-[#0d9488] transition-colors">
            Contact
          </Link>
        </div>

        <div className="text-center text-white/60 text-xs">
          <p>&copy; {new Date().getFullYear()} AMARISM. All rights reserved.</p>
          <p className="mt-1">Reg. No. 167/2024 | Chittoor, Andhra Pradesh</p>
        </div>
      </div>
    </footer>
  );
}
