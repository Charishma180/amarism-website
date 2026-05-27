"use client";

import { Navbar } from "@/components/navbar";
import { SocialBar } from "@/components/social-bar";
import { AmarismFooter } from "@/components/amarism-footer";

export default function VolunteerPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      <section className="bg-white min-h-screen md:grid md:grid-cols-[40%_60%] overflow-hidden">
        <div className="bg-[#082f73] text-white px-6 py-12 md:px-16 md:py-16 flex flex-col justify-center">
          <span className="bg-white/15 px-5 py-3 rounded-xl text-sm font-bold w-fit mb-8">
            DRIVING IMPACT
          </span>

          <h1 className="font-serif italic text-4xl md:text-7xl font-black leading-tight mb-8">
            Be the <br />
            bridge to <br />
            transformation.
          </h1>

          <p className="text-base md:text-xl leading-8 max-w-sm mb-10">
            Join Amarism in contributing towards social awareness, rural empowerment,
            and educational growth.
          </p>

          <div className="space-y-5 max-w-sm">
            <div className="bg-white/10 rounded-3xl p-5 md:p-6">
              <div className="text-3xl mb-3">🤍</div>
              <h3 className="font-bold mb-3">IMPACT DRIVEN</h3>
              <p className="text-white/85 leading-7">
                Work on projects that create lasting change.
              </p>
            </div>

            <div className="bg-white/10 rounded-3xl p-5 md:p-6">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="font-bold mb-3">GLOBAL NETWORK</h3>
              <p className="text-white/85 leading-7">
                Connect with like-minded individuals across sectors.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-6 py-12 md:py-20 bg-white">
          <div className="bg-white rounded-[48px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-8 md:p-16 w-full max-w-xl text-center">
            <div className="text-7xl mb-6">🔐</div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#081229] mb-5">
              Start Your Journey
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-8 mb-8">
              To enroll as a volunteer, please first create an account or sign in.
            </p>

            <div className="flex flex-col gap-4 justify-center mb-8">
              <a
                href="/signin"
                className="w-full bg-[#082f73] text-white px-6 py-4 rounded-2xl font-bold text-center"
              >
                LOGIN TO CONTINUE
              </a>

              <a
                href="/signup"
                className="w-full border border-gray-300 text-[#081229] px-6 py-4 rounded-2xl font-bold text-center"
              >
                CREATE ACCOUNT
              </a>
            </div>

            <p className="text-gray-600 text-sm md:text-base">
              Already have an account?{" "}
              <a href="/signin" className="text-[#082f73] font-bold underline">
                SIGN IN HERE
              </a>
            </p>
          </div>
        </div>
      </section>

      <AmarismFooter />
      <SocialBar />
    </main>
  );
}