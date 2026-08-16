import { Navbar } from "@/components/navbar";
import { SocialBar } from "@/components/social-bar";
import { AmarismFooter } from "@/components/amarism-footer";

import {
  CalendarDays,
  Utensils,
  HeartPulse,
  Droplets,
  ShieldCheck,
  Target,
  Check,
} from "lucide-react";

const initiatives = [
  {
    icon: Utensils,
    title: "Hunger-Free Communities",
    text: "Localized hunger-free zones through community food distribution drives and emergency assistance.",
    tags: ["SUSTAINED SECURITY", "RISK ANALYSIS"],
  },
  {
    icon: HeartPulse,
    title: "Maternal Nutrition",
    text: "Nutritional supplementation and monitoring for pregnant women and lactating mothers.",
    tags: ["CHILD GROWTH", "NATION BUILDING"],
  },
  {
    icon: Droplets,
    title: "Safe Water Access",
    text: "Water purification awareness and low-cost filtration models in remote tribal settlements.",
    tags: ["PREVENTIVE HEALTHCARE"],
  },
  {
    icon: ShieldCheck,
    title: "Public Awareness",
    text: "Comprehensive campaigns on balanced diet principles, hygiene, and sanitation.",
    tags: ["BEHAVIORAL CHANGE"],
  },
];

const nutritionalRisks = [
  "Kwashiorkor",
  "Marasmus",
  "Scurvy",
  "Rickets",
  "Night Blindness",
  "Anemia",
  "Goiter",
];

const waterRisks = [
  "Cholera",
  "Typhoid",
  "Hepatitis A & E",
  "Diarrhea",
  "Giardiasis",
  "Dysentery",
  "Leptospirosis",
];

const impactPoints = [
  "Hunger-free districts",
  "Reduced malnutrition rates",
  "Stronger child immunity",
  "Decline in preventable diseases",
];

export default function Page() {
  return (
    
    <main className="min-h-screen bg-[#fdfbf5] text-[#081229]">
      <Navbar />
{/* Missions Banner */}
  <section className="w-full overflow-hidden">
    <img
      src="/missions-banner.jpeg"
      alt="Our Missions"
      className="w-full h-[320px] md:h-auto object-cover object-top"
    />
  </section>
      {/* INTRODUCTION */}
      <section className="pt-12 md:pt-40 px-5 md:px-10 pb-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-16">

          {/* LEFT SIDE */}
          <div>
            <div className="w-20 h-20 rounded-[22px] bg-[#fffaf0] border border-[#f1e6c9] shadow-sm flex items-center justify-center mb-6">
              <Utensils className="w-9 h-9 text-[#d8a528]" />
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#081229] mb-5">
              Mission Trupti
            </h1>

            <div className="border-l-4 border-[#d8a528] pl-5 mb-8">
              <p className="text-lg md:text-xl italic text-[#5d6678] leading-8">
                Hunger Eradication,
                <br />
                Nutrition & Community
                <br />
                Health Initiative
              </p>
            </div>

            {/* LAUNCH DATE */}
            <div className="rounded-2xl border border-[#f0dfb4] bg-[#fffdf8] p-6 mb-7">
              <div className="flex items-center gap-4">
                <CalendarDays className="w-8 h-8 text-[#d8a528]" />

                <div>
                  <p className="text-[11px] font-bold tracking-[0.18em] text-[#7c8798] mb-1">
                    LAUNCHED ON
                  </p>

                  <p className="text-2xl md:text-3xl font-serif font-bold text-[#d8a528]">
                    Aug 7, 2026
                  </p>
                </div>
              </div>
            </div>

            {/* CORE OBJECTIVES */}
            <div className="rounded-3xl bg-[#f7f8fa] border border-gray-100 p-6 md:p-7">
              <p className="text-[11px] font-bold tracking-[0.18em] text-[#8290a5] mb-5">
                CORE MISSION OBJECTIVES
              </p>

              <div className="space-y-5">
                {[
                  "Ensure no family sleeps hungry",
                  "Reduce child and maternal malnutrition",
                  "Improve immunity and physical health",
                  "Promote clean drinking water access",
                  "Prevent water-borne diseases",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-[#d8a528] text-sm mt-1">◆</span>

                    <p className="text-[#465268] text-sm md:text-base leading-6 font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <div className="mb-8">
              <span className="inline-flex bg-[#e3ad28] text-white px-5 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-[0.18em] mb-6">
                INTRODUCTION
              </span>

              <p className="text-2xl md:text-4xl font-serif leading-[1.35] text-[#26344d] max-w-4xl">
                Mission Trupti is the humanitarian nutrition and public health
                wing of <span className="font-bold">AMARISM</span> dedicated
                to building a hunger-free, malnutrition-free, and
                disease-resistant society.
              </p>
            </div>

            {/* RATIONALE */}
            <div>
              <div className="flex items-center gap-5 mb-5">
                <h2 className="text-2xl md:text-3xl font-serif font-bold">
                  The Rationale
                </h2>

                <div className="h-px bg-[#e9e2d3] flex-1"></div>
              </div>

              <div className="rounded-[28px] bg-white border border-gray-100 shadow-sm p-7 md:p-9">
                <p className="text-[#536074] text-base md:text-lg leading-8 mb-7">
                  Hunger and malnutrition remain silent crises affecting rural
                  communities, tribal populations, and slum dwellers. Lack of
                  clean drinking water further exposes these communities to
                  severe health risks.
                </p>

                <div className="grid md:grid-cols-2 gap-5">

                  {/* NUTRITIONAL CRISES */}
                  <div className="rounded-3xl bg-[#f8f9fb] p-6">
                    <h3 className="flex items-center gap-3 text-[#29477d] font-bold text-sm md:text-base mb-5">
                      <span className="text-[#d8a528]">●</span>
                      NUTRITIONAL CRISES
                    </h3>

                    <ul className="space-y-3">
                      {nutritionalRisks.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm md:text-base text-[#596579]"
                        >
                          <span className="text-gray-300">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* WATER RISKS */}
                  <div className="rounded-3xl bg-[#f8f9fb] p-6">
                    <h3 className="flex items-center gap-3 text-[#29477d] font-bold text-sm md:text-base mb-5">
                      <span className="text-[#d8a528]">●</span>
                      WATER-BORNE RISKS
                    </h3>

                    <ul className="space-y-3">
                      {waterRisks.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm md:text-base text-[#596579]"
                        >
                          <span className="text-gray-300">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* STRATEGIC INITIATIVES */}
            <div className="mt-12">
              <div className="flex items-center gap-5 mb-6">
                <h2 className="text-2xl md:text-3xl font-serif font-bold">
                  Strategic Initiatives
                </h2>

                <div className="h-px bg-[#e9e2d3] flex-1"></div>
              </div>

              <div className="space-y-5">
                {initiatives.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="bg-white border border-gray-100 rounded-[28px] shadow-sm p-6 md:p-7"
                    >
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#fffaf0] flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#d8a528]" />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-serif font-bold text-[#17243d] mb-2">
                            {item.title}
                          </h3>

                          <p className="text-[#687386] text-sm md:text-base leading-7 mb-4">
                            {item.text}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="bg-[#f1f4f8] text-[#718096] px-3 py-1.5 rounded-md text-[9px] md:text-[10px] font-bold tracking-[0.12em]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LONG TERM IMPACT */}
      <section className="px-5 md:px-10 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[38px] bg-[#274596] overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -left-20 top-20 w-80 h-80 rounded-full border border-white"></div>
              <div className="absolute left-40 top-60 w-96 h-96 rounded-full border border-white"></div>
              <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full border border-white"></div>
            </div>

            <div className="relative z-10 p-8 md:p-14 lg:p-16">
              <div className="flex items-center gap-5 mb-9">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>

                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
                  Long-Term Impact
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
                {impactPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-4 rounded-2xl bg-white/10 border border-white/10 px-5 py-5"
                  >
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>

                    <p className="text-white font-semibold text-sm md:text-base">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* MORAL COMPASS */}
              <div className="mt-10 max-w-3xl rounded-[28px] bg-white/10 border border-white/10 p-7 md:p-10">
                <div className="text-white/30 text-6xl font-serif leading-none mb-3">
                  “
                </div>

                <p className="text-white text-xl md:text-3xl italic font-medium leading-9 md:leading-[1.5]">
                  Serving the hungry is serving humanity. Strengthening
                  immunity strengthens the nation.
                </p>

                <div className="w-12 h-px bg-white/60 mt-7 mb-4"></div>

                <p className="text-white/70 text-[10px] font-bold tracking-[0.25em]">
                  THE MORAL COMPASS
                </p>
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