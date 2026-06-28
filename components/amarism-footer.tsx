"use client";

import Link from "next/link";

export function AmarismFooter() {
  return (
    <footer className="bg-[#1a2e5a] text-white py-8 px-4 pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <img
  src="/amarism-logo.jpeg"
  alt="AMARISM Logo"
  className="w-10 h-10 object-contain"
/>git status

          <span className="text-xl font-bold">AMARISM</span>
        </div>

        <p className="text-center text-white/80 text-sm mb-6 max-w-md mx-auto">
          A youth-driven social movement built on the belief that independence
          without equality is incomplete, and freedom without dignity is
          unfinished.
        </p>

        <div className="flex flex-col items-center gap-3 mb-6">
  <Link href="/about" className="text-white font-semibold hover:text-[#14b89a]">
    About
  </Link>

  <Link href="/#missions" className="text-white font-semibold hover:text-[#14b89a]">
    Missions
  </Link>

  <Link href="/#get-involved" className="text-white font-semibold hover:text-[#14b89a]">
    Get Involved
  </Link>

  <Link href="/gallery" className="text-white font-semibold hover:text-[#14b89a]">
    Gallery
  </Link>

  <Link href="/#contact" className="text-white font-semibold hover:text-[#14b89a]">
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
