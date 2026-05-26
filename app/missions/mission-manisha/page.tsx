"use client";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Navbar } from "@/components/navbar";
import { SocialBar } from "@/components/social-bar";
import { AmarismFooter } from "@/components/amarism-footer";


export default function MissionManishaPage() {
  const handleGoogleSignup = () => {
  window.location.href = "/login";
};
  const [selectedRole, setSelectedRole] = useState("patron");
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await setDoc(doc(db, "users", userCredential.user.uid), {
      fullName,
      email,
      username,
      role: selectedRole,
      createdAt: new Date(),
    });

    alert("Account created successfully!");
  } catch (error: any) {
    alert(error.message);
  }
};

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* PAGE 1 - INTRO */}
      <section
       id="internship-enrollment">
        <div className="grid lg:grid-cols-[38%_62%] min-h-[720px]">
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
                Please sign in to apply for our internship program. This allows
                us to track your application status and upload necessary
                academic documents.
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

      {/* PAGE 2 - DETAILS */}
      <section className="bg-[#fbfaf7] px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between bg-white rounded-2xl shadow-sm px-6 py-4 mb-14">
            <span className="font-bold text-[#082452]">
              ⊕ EXPLORE MISSIONS
            </span>

            <button className="bg-[#082f73] text-white px-6 py-3 rounded-xl font-bold">
              JUMP TO INITIATIVE ▼
            </button>
          </div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-12">
            <aside className="space-y-8">
              <div className="w-20 h-20 rounded-3xl bg-purple-50 border border-purple-200 flex items-center justify-center text-4xl shadow-sm">
                📖
              </div>

              <div>
                <h1 className="text-5xl font-bold text-[#082452] leading-tight">
                  Mission <br /> Manisha
                </h1>

                <p className="mt-6 border-l-4 border-purple-500 pl-5 text-gray-600 italic text-lg leading-8">
                  Bridging the structural gap in educational empowerment
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h3 className="text-sm font-bold text-[#082452] tracking-widest mb-6">
                  CORE MISSION OBJECTIVES
                </h3>

                {[
                  "Reduce academic performance gap",
                  "Provide structured academic mentoring",
                  "Offer global career exposure",
                  "Create district-level model schools",
                  "Enable free residential excellence",
                ].map((item) => (
                  <p key={item} className="text-gray-700 mb-4 leading-7">
                    <span className="text-purple-600 mr-2">◆</span>
                    {item}
                  </p>
                ))}
              </div>
            </aside>

            <section>
              <span className="bg-purple-600 text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest">
                INTRODUCTION
              </span>

              <p className="text-2xl md:text-3xl text-[#082452] font-serif leading-relaxed mt-8 max-w-4xl">
                Poverty must never suppress talent.{" "}
                <span className="text-purple-700 font-bold">
                  Mission Manisha
                </span>{" "}
                is our flagship initiative aimed at dismantling educational
                inequality between corporate and government school students.
              </p>

              <h2 className="text-3xl font-bold text-[#082452] mt-12 mb-5">
                The Rationale
              </h2>

              <p className="text-gray-600 text-lg leading-8 max-w-4xl mb-10">
                Significant disparities exist between private corporate schools
                and government institutions. Rural students often lack
                contextualized mentoring and career counseling.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-14">
                {[
                  {
                    title: "STRUCTURAL GAPS",
                    points: [
                      "Limited career guidance",
                      "Academic mentoring deficit",
                      "Capacity & resources gap",
                      "Socio-economic barriers",
                    ],
                  },
                  {
                    title: "SUSTAINED PATH",
                    points: [
                      "Scalable solutions",
                      "Community impact circles",
                      "Peer-led journeys",
                      "Rural youth",
                    ],
                  },
                ].map((box) => (
                  <div
                    key={box.title}
                    className="bg-white rounded-3xl shadow-lg p-8"
                  >
                    <h3 className="text-purple-700 font-bold tracking-widest mb-5">
                      ◆ {box.title}
                    </h3>

                    <ul className="space-y-4 text-gray-700">
                      {box.points.map((p) => (
                        <li key={p}>• {p}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

             <h2 className="text-3xl font-bold text-[#082452] mb-8">
                Strategic Initiatives
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-14">
                {[
                  {
                    icon: "🏫",
                    title: "CLC Modelling",
                    desc: "Community Learning Centers in slums and villages to support school syllabus and personalized mentoring.",
                    badges: ["30 STUDENTS/CENTER", "VOLUNTEER SUPERVISION"],
                  },
                  {
                    icon: "🏫",
                    title: "District Model Schools",
                    desc: "Institutional residential schools with international standards and advanced infrastructure.",
                    badges: ["5000 STUDENT CAPACITY", "50% ST RESERVATION"],
                  },
                  {
                    icon: "👤",
                    title: "Career Counselling",
                    desc: "Helping rural students understand global opportunities and navigate competitive exam pathways.",
                    badges: ["COMPETITIVE AWARENESS"],
                  },
                  {
                    icon: "🧪",
                    title: "STEM Excellence",
                    desc: "Fostering research-oriented learning through digital classrooms and modern labs.",
                    badges: ["INTERNATIONAL STANDARDS"],
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-3xl shadow-lg p-8"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-3xl mb-5">
                      {item.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-[#082452] mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-7 mb-6">
                      {item.desc}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {item.badges.map((badge) => (
                        <span
                          key={badge}
                          className="bg-[#eef2ff] text-[#082f73] px-4 py-2 rounded-lg text-xs font-bold"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>


              <div className="bg-[#082f73] text-white rounded-[32px] p-10 md:p-14 shadow-2xl">
                <h2 className="text-3xl font-bold mb-8">
                  🎯 Long-Term Impact
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {[
                      "First-generation graduates",
                      "Break intergenerational poverty",
                      "Build rural leadership",
                      "National transformation",
                    ].map((item) => (
                      <div
                        key={item}
                        className="bg-white/10 rounded-xl px-5 py-4"
                      >
                        ✓ {item}
                      </div>
                    ))}
                  </div>

                  <div className="bg-white/10 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">

  {/* BIG QUOTE */}
  <div className="absolute top-6 left-6 text-7xl text-white/20 font-serif leading-none">
    “
  </div>

  <div className="pt-12">
    <p className="text-2xl italic leading-relaxed text-white">
      Education is the strongest defense of a nation.
    </p>
  </div>

  {/* SMALL LINE */}
  <div className="mt-10">
    <div className="w-20 h-[2px] bg-white/30 mb-3"></div>

    <p className="text-xs tracking-[0.3em] uppercase text-white/70">
      THE MORAL COMPASS
    </p>
  </div>
</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* SIGN UP SECTION */}
      <section className="bg-gradient-to-b from-white to-[#eaf6ff] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#082f73] rounded-[36px] p-8 md:p-12 text-white shadow-2xl mb-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              Join the <span className="text-yellow-400">Legacy</span>
              <br />
              of Impact.
            </h2>

            <p className="text-white/85 text-lg leading-8 mt-5 max-w-xl">
              Choose your role and start making a difference with Amarism
              Foundation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                id: "patron",
                icon: "👤",
                title: "Register as a Patron",
                desc: "Support our mission and be a part of lasting impact.",
              },
              {
                id: "volunteer",
                icon: "👥",
                title: "Register as a Volunteer",
                desc: "Give your time and skills to bring real change in communities.",
              },
              {
                id: "intern",
                icon: "🎓",
                title: "Register as an Intern",
                desc: "Learn, grow and contribute through meaningful experiences.",
              },
            ].map((item) => {
              const active = selectedRole === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedRole(item.id)}
                  className={`bg-white rounded-3xl p-8 shadow-lg border-2 cursor-pointer transition-all duration-300 ${
                    active
                      ? "border-blue-500 scale-[1.02]"
                      : "border-transparent hover:border-gray-200"
                  }`}
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl">
                        {item.icon}
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-[#081229] mb-3">
                          {item.title}
                        </h3>

                        <p className="text-gray-600 text-lg leading-8">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold transition-all ${
                        active
                          ? "bg-blue-500 border-blue-500 text-white"
                          : "border-gray-300 text-transparent"
                      }`}
                    >
                      ✓
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            id="signup-section"
            className="max-w-xl mx-auto bg-white rounded-[40px] shadow-2xl p-8 md:p-12"
          >
            <h2 className="text-4xl font-bold text-center text-[#081229] mb-2">
              Sign Up!
            </h2>

            <p className="text-center text-gray-500 mb-10">
              Let’s create an impact together.
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-[#081229] mb-2">
                  FULL NAME
                </label>
                <input
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none"
  placeholder="Enter your full name"
/>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#081229] mb-2">
                  EMAIL ADDRESS
                </label>
                <input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none"
  placeholder="Enter your email address"
/>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#081229] mb-2">
                  USERNAME
                </label>
                <input
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none"
  placeholder="Choose a username"
/>
              </div>

             <div>
  <label className="block text-sm font-bold text-[#081229] mb-2">
    PASSWORD
  </label>

  <div className="relative">
    <input
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full rounded-xl border border-gray-200 px-5 py-4 pr-12 outline-none"
  placeholder="Create a strong password"
  type={showPassword ? "text" : "password"}
/>

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
    >
      {showPassword ? "🙈" : "👁️"}
    </button>
  </div>
</div>
<button
  type="button"
  onClick={handleSignup}
  className="w-full bg-[#082f73] text-white py-4 rounded-xl font-bold hover:bg-[#061f4d] transition-all"
>
  SIGN UP
</button>

              <div className="text-center text-gray-400 text-sm">
                OR CONTINUE WITH
              </div>

              <button
                type="button"
                onClick={handleGoogleSignup}
                className="w-full border border-gray-200 rounded-xl py-4 font-semibold text-[#081229] flex items-center justify-center gap-3"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-6 h-6"
                />
                Continue with Google
              </button>

              <p className="text-center text-gray-600">
                Already have an account?{" "}
                <a
                  href="/signin"
                  className="text-[#082f73] font-bold hover:underline"
                >
                  Sign In
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FINAL JOURNEY SECTION */}
      
<section
id="volunteer-enrollment"
 className="bg-white px-4 py-16 md:px-0 md:py-0 md:min-h-screen md:grid md:grid-cols-[40%_60%] overflow-hidden">
  <div className="bg-[#082f73] text-white rounded-[32px] md:rounded-none px-6 py-12 md:px-16 md:py-16 flex flex-col justify-center">
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
      and educational growth. Every volunteer is a cornerstone of our foundation.
    </p>

    <div className="space-y-5 max-w-sm">
      <div className="bg-white/10 rounded-3xl p-5 md:p-6">
        <div className="text-3xl mb-3">🤍</div>
        <h3 className="font-bold mb-3">IMPACT DRIVEN</h3>
        <p className="text-white/85 leading-7">
          Work on projects that create lasting and measurable change.
        </p>
      </div>

      <div className="bg-white/10 rounded-3xl p-5 md:p-6">
        <div className="text-3xl mb-3">👥</div>
        <h3 className="font-bold mb-3">GLOBAL NETWORK</h3>
        <p className="text-white/85 leading-7">
          Connect with like-minded individuals and leaders across sectors.
        </p>
      </div>
    </div>
  </div>

  <div className="flex items-center justify-center px-0 md:px-6 py-12 md:py-20 bg-white">
    <div className="bg-white rounded-[36px] md:rounded-[48px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-6 md:p-16 w-full max-w-md md:max-w-xl text-center">
      <div className="text-6xl md:text-7xl mb-6">🔐</div>

      <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#081229] mb-5">
        Start Your Journey
      </h2>

      <p className="text-gray-600 text-base md:text-lg leading-8 mb-8">
        To enroll as a volunteer, please first create an account or sign in to
        your dashboard. This helps us maintain secure and accurate records.
      </p>

      <div className="flex flex-col gap-4 justify-center mb-8">
        <a
          href="/signin"
          className="w-full bg-[#082f73] text-white px-6 py-4 rounded-2xl font-bold text-center"
        >
          LOGIN TO CONTINUE
        </a>

        <button
          onClick={() => {
            document
              .getElementById("signup-section")
              ?.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          className="w-full border border-gray-300 text-[#081229] px-6 py-4 rounded-2xl font-bold text-center"
        >
          CREATE ACCOUNT
        </button>
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