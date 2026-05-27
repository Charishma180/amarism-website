"use client";

import { Navbar } from "@/components/navbar";
import { SocialBar } from "@/components/social-bar";
import { AmarismFooter } from "@/components/amarism-footer";

export default function InternshipPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      <section className="pt-28 min-h-screen">
        <div className="grid lg:grid-cols-[38%_62%] min-h-screen">
          <div className="bg-gradient-to-b from-[#5c46ff] to-[#4338ca] text-white px-8 md:px-14 py-14 flex flex-col justify-center">
            <span className="bg-white/15 px-5 py-3 rounded-xl text-xs font-bold w-fit mb-8">
              FUTURE LEADERS
            </span>

            <h1 className="font-serif italic text-5xl md:text-7xl font-black tracking-tight leading-none mb-8 text-[#081229]">
              Shape <br />
              the <br />
              future <br />
              through <br />
              research.
            </h1>

            <p className="text-base md:text-lg leading-8 max-w-sm mb-10">
              Our internship program offers academic credit, professional
              mentorship, and the chance to work on large-scale social impact
              projects.
            </p>

            <div className="space-y-5 max-w-sm">
              <div className="bg-white/10 rounded-3xl p-6">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-bold mb-2">MEASURABLE IMPACT</h3>
                <p className="text-white/85 leading-7">
                  Contribute to projects with real data and tangible outcomes.
                </p>
              </div>

              <div className="bg-white/10 rounded-3xl p-6">
                <div className="text-3xl mb-3">🎓</div>
                <h3 className="font-bold mb-2">EXPERT GUIDANCE</h3>
                <p className="text-white/85 leading-7">
                  Learn from industry professionals and research experts.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center px-6 py-16 bg-white">
            <div className="bg-white rounded-[48px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-10 md:p-14 max-w-xl w-full text-center">
              <div className="text-7xl mb-8">👤</div>

              <h2 className="font-serif text-4xl font-bold text-[#081229] mb-6">
                Internship Portal
              </h2>

              <p className="text-gray-600 text-lg leading-8 mb-10">
                Please sign in to apply for our internship program.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/signin"
                  className="bg-[#5141e8] text-white px-8 py-4 rounded-2xl font-bold text-center"
                >
                  LOGIN TO APPLY
                </a>

                <a
                  href="/signup"
                  className="border border-gray-300 text-[#081229] px-8 py-4 rounded-2xl font-bold text-center"
                >
                  CREATE ACCOUNT
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AmarismFooter />
      <SocialBar />
    </main>
  );
}