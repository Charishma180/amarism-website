"use client";

import { useState } from "react";
import { Users, Shield, Target } from "lucide-react";

const tabs = [
  { id: "who-we-are", label: "WHO WE ARE" },
  { id: "core-values", label: "OUR CORE VALUES" },
  { id: "governing-body", label: " THE GOVERNING BODY" },
  { id: "impact-roadmap", label: "IMPACT ROADMAP" },
];
const tabImages: Record<string, string> = {
  "who-we-are": "/about-hero.jpeg",
  "core-values": "/about-hero.jpeg",
  "governing-body": "/about-hero.jpeg",
  "impact-roadmap": "/about-hero.jpeg",
};

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("who-we-are");

  return (
    <>
      {/* TOP HERO IMAGE */}
      <div className="relative h-[78vh] md:h-[92vh] overflow-hidden">
        <img
          src={tabImages[activeTab]}
          alt="About Hero"
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#061322]/55"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-16 max-w-5xl">
            <div className="bg-[#0d9488]/20 border border-[#14b89a]/30 backdrop-blur-md text-[#7fffd4] px-5 py-2 rounded-full text-xs font-bold tracking-[0.35em] inline-block mb-8">
  {activeTab === "who-we-are" && "OUR IDENTITY"}
  {activeTab === "core-values" && "PRINCIPLES"}
  {activeTab === "governing-body" && "LEADERSHIP"}
  {activeTab === "impact-roadmap" && "OUR JOURNEY"}
</div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-none">
  {activeTab === "who-we-are" && "Who We Are"}
  {activeTab === "core-values" && "Our Core Values"}
  {activeTab === "governing-body" && "The Governing Body"}
  {activeTab === "impact-roadmap" && "Impact Roadmap"}
</h1>

            <div className="flex items-start gap-4 max-w-3xl">
              <div className="w-1 h-16 bg-[#14b89a] rounded-full mt-1"></div>

              <p className="text-white text-xl md:text-3xl leading-relaxed">
                {activeTab === "who-we-are" &&
                  "A youth-driven movement for dignity and justice."}

                {activeTab === "core-values" &&
                  "Build on Human Dignity,Equality and Costitutional Justice."}

                {activeTab === "governing-body" &&
                  "Visionary Leadership Driving Grassroots changeS."}

                {activeTab === "impact-roadmap" &&
                  "Jourey of hange Across the Grassroots."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TOP TABS */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-max px-6 py-5 text-sm font-semibold tracking-wider transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-[#0d9488] border-b-2 border-[#0d9488]"
                  : "text-gray-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* WHO WE ARE */}
      {activeTab === "who-we-are" && (
        <section className="min-h-screen bg-white px-4 pt-14 pb-10 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-extrabold text-[#020b1f] mb-6 leading-tight">
              Who We Are
            </h2>

            <p className="text-[#1f2937] text-lg md:text-xl leading-9 mb-8 max-w-3xl">
              AMARISM is a non-profit organization registered under the Andhra
              Pradesh Societies Registration Act (Reg. No. 167/2024),
              established in 2024 in Chittoor, Andhra Pradesh. Operating across
              Andhra Pradesh and Tamil Nadu, AMARISM is not merely an
              organization — it is a youth-driven social movement built on the
              belief that independence without equality is incomplete, and
              freedom without dignity is unfinished.
            </p>

            <div className="bg-white border border-gray-200 rounded-[22px] p-6 md:p-8 mb-8 shadow-sm">
              <div className="flex items-center gap-4 mb-5">
                <Users className="w-8 h-8 text-[#087f5b]" />

                <h3 className="text-sm md:text-base font-extrabold tracking-[0.18em] text-[#087f5b] uppercase">
                  Our Foundation
                </h3>
              </div>

              {[
                "AMARISM is a non-profit organization registered under the Andhra Pradesh Societies Registration Act (Reg. No. 167/2024), established in 2024 in Chittoor, Andhra Pradesh. Operating across Andhra Pradesh and Tamil Nadu, AMARISM is not merely an organization — it is a youth-driven social movement built on the belief that independence without equality is incomplete, and freedom without dignity is unfinished.",
                "Born from the collective vision of Vadimgadu Ramu, Vadimgadu Anilkumar, Pillapalem Charishma, Vadimgadu Charan, and fellow students of Madras Christian College and Sri Venkateshwara University, AMARISM emerged from a deep moral awakening. The tragic incident of three children starving to death in the national capital became a turning point — a painful reminder that despite decades of independence, hunger, malnutrition, inequality, and socio-economic injustice still haunt millions of lives in India. That moment transformed concern into commitment.",
              ].map((text, index) => (
                <div key={index}>
                  <p className="text-[#1f2937] text-base md:text-lg leading-8 font-medium mb-6">
                    {text}
                  </p>

                  {index === 0 && <hr className="border-gray-300 my-6" />}
                </div>
              ))}

              <div className="border border-gray-200 rounded-xl px-6 py-5 bg-white shadow-sm">
                <div className="flex gap-4 items-start">
                  <span className="text-6xl leading-none text-[#087f5b] font-serif">
                    “
                  </span>

                  <p className="text-[#111827] italic font-semibold text-base md:text-lg leading-7 mt-2">
                    "No nation is perfect; it needs to be made perfect.
                    <br />
                    Let us contribute towards the perfection of our country."
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mb-8">
              {[
                {
                  title: "The Conviction",
                  icon: Shield,
                  content:
                    "AMARISM stands on a simple yet powerful conviction: No human being deserves to sleep hungry. No child deserves to be denied quality education. No citizen deserves to remain unaware of their rights. The organization works to dismantle barriers created by poverty, ignorance, systemic inequality, and lack of accountability.",
                },
                {
                  title: "Our Movement Reach",
                  icon: Users,
                  count: "250+",
                  label: "Volunteers",
                  content:
                    "Currently in its initial implementation stage, the organization has mobilized more than 250 committed volunteers, with an ambitious goal of building a 1,00,000-strong volunteer movement by 2027. It primarily serves orphan children, government school students, rural youth, below-poverty line families, and tribal communities.",
                },
              ].map((card, index) => {
                const Icon = card.icon;

                return (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <Icon className="w-8 h-8 text-[#087f5b]" />

                      <h3 className="text-sm md:text-base font-extrabold tracking-[0.16em] text-[#087f5b] uppercase">
                        {card.title}
                      </h3>
                    </div>

                    {card.count && (
                      <div className="text-center mb-4">
                        <div className="text-5xl font-extrabold text-[#087f5b] leading-none">
                          {card.count}
                        </div>

                        <p className="text-sm font-extrabold tracking-widest text-[#087f5b] uppercase mt-2">
                          {card.label}
                        </p>
                      </div>
                    )}

                    <p className="text-[#1f2937] text-base leading-7 font-medium">
                      {card.content}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="bg-white border border-gray-200 rounded-[20px] p-6 md:p-7 mb-20 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-5">
                <Target className="w-8 h-8 text-[#087f5b]" />

                <h3 className="text-sm md:text-base font-extrabold tracking-[0.16em] text-[#087f5b] uppercase">
                  Vision 2047 Statement
                </h3>
              </div>

              <p className="text-[#111827] text-lg md:text-xl leading-8 font-bold max-w-3xl relative z-10">
                To build a just, compassionate, and empowered society where
                every individual lives with dignity, equality, and access to
                opportunity — irrespective of socio-economic status — and
                through this collective strength, contribute to the emergence of
                India as a leading nation by 2047.
              </p>
            </div>
          </div>
        </section>
      )}
      {/* CORE VALUES */}
{activeTab === "core-values" && (
  <section className="bg-[#f8fbfb] py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="mb-20">
        <div className="w-16 h-2 bg-[#14b89a] rounded-full mb-8"></div>

        <h1 className="text-5xl md:text-7xl font-bold text-[#020b1f] mb-8">
          Our Core Values
        </h1>

        <p className="text-gray-500 text-lg md:text-2xl leading-relaxed max-w-5xl">
          Our actions are guided by 'Manava Garima' (Human Dignity) and the
          Preamble of our Constitution. We believe that when human dignity is
          protected, national greatness becomes a natural outcome.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            title: "Human Dignity (Manava Garima)",
            text: "We believe that every human being carries inherent dignity. No occupation, economic status, caste, gender, or background can diminish it. Whether a manual worker or a corporate professional — every individual deserves equal respect.",
            
            quote:
              "Humanity is one family (Vasudhaiva Kutumbakam).",
          },

          {
            title: "Constitutional Justice & Equality",
            text: "Guided by the Preamble of the Constitution of India, we strive for Social, Economic, and Political Justice. We work to make Liberty, Equality, and Fraternity a lived reality at the grassroots level.",
            tags: [
              "JUSTICE",
              "LIBERTY",
              "EQUALITY",
              "FRATERNITY",
            ],
          },

          {
            title: "Democratic Participation",
            text: "AMARISM is a democratic organization where every member has a voice. Leadership is earned through service, accountability, and consensus. Internal democracy strengthens external democracy.",
            tags: ["UNITY WITHOUT UNIFORMITY"],
          },

          {
            title: "Education as Liberation",
            text: "Education is the most powerful instrument for social transformation. It must build character, competence, and civic responsibility. Quality education is a right, not a privilege.",
            tags: ["EDUCATE TO EMPOWER"],
          },

          {
            title: "Compassion Rooted in Dharma",
            text: "Service to humanity is the highest duty (Seva Parmo Dharma). Our compassion is structured, sustainable, and accountable — translating empathy into organized action.",
            badge: "सेवा परमो धर्मः",
          },

          {
            title: "Equality Beyond Barriers",
            text: "We stand against discrimination in all forms. Poverty must never suppress talent, and socio-economic status must never determine respect. We strive for a merit-driven, inclusive society.",
          },

          {
            title: "Accountability & Ethics",
            text: "As a non-profit institution, we commit to transparency, integrity, and responsible use of resources. Accountability is the backbone of public trust.",
          },

          {
            title: "Unity for Nation-Building",
            text: "National progress is a shared responsibility of citizens. Like-minded individuals united by purpose can transform society. When dignity is protected, India naturally rises.",
          },

          {
            title: "Holistic Well-Being",
            text: "Development includes physical health, mental strength, and social harmony. We promote resilience and nourishment to build a balanced, strong nation.",
          },

          {
            title: "Innovation with Inclusivity",
            text: "Progress must reach the last person in the last village. Technology and innovation must serve rural and tribal communities, ensuring development is sustainable and practical.",
            tags: ["YOUTH-LED GRASSROOTS INNOVATION"],
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-[32px] shadow-lg p-10 border border-gray-100"
          >
            <div className="w-14 h-2 bg-[#21b894] rounded-full mb-4"></div>

            {item.badge && (
              <p className="text-[#14b89a] text-sm font-bold mb-5">
                {item.badge}
              </p>
            )}

            <h2 className="text-4xl font-bold text-[#081229] leading-tight mb-6">
              {item.title}
            </h2>

            <p className="text-gray-600 text-lg leading-9 mb-8">
              {item.text}
            </p>

            {item.quote && (
              <p className="italic text-gray-400 text-xl mb-8">
                “{item.quote}”
              </p>
            )}

            {item.tags && (
              <div className="flex flex-wrap gap-3">
                {item.tags.map((tag) => (
                  <div
                    key={tag}
                    className="inline-block bg-[#edfdf7] text-[#0f9f78] px-5 py-2 rounded-full text-xs font-bold tracking-[0.15em]"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
)}
            {/* GOVERNING BODY */}
      {activeTab === "governing-body" && (
        <section className="bg-[#f8fafc] py-24 px-6">
          <div className="max-w-7xl mx-auto">

            {/* Heading */}
            <div className="mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-[#081229] mb-6">
                The Governing Body
              </h1>

              <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-4xl">
                Led by professionals and students from elite institutions,
                our governing body combines academic excellence with a deep
                commitment to social impact and community transformation.
              </p>
            </div>

            {/* Main Leadership Card */}
            <div className="bg-white rounded-[40px] shadow-xl p-8 md:p-16 mb-16">

              <p className="text-[#12b886] tracking-[8px] text-sm font-bold mb-8">
                LEADERSHIP PROFILE
              </p>

              <h2 className="text-4xl md:text-6xl italic font-bold text-[#081229] mb-5">
                Vadimgadu Ramu
              </h2>

              <p className="text-gray-400 tracking-[5px] font-bold text-sm mb-10">
                PRESIDENT
              </p>

              <div className="w-20 h-20 rounded-3xl bg-[#081229] flex items-center justify-center text-4xl text-white mb-10">
                🛡️
              </div>

              <p className="text-lg md:text-2xl leading-relaxed text-gray-800 mb-8">
                Vadimgadu Ramu, a Medical Professional Dropout from
                SV Medical College and a Political Science Graduate from
                Acharya Nagarjuna University, brings multidisciplinary
                academic exposure and strong leadership values into Amarism.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8">
                His journey reflects resilience, adaptability, and a
                deep commitment toward youth empowerment, governance,
                and long-term social impact.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                Through grassroots mobilisation, civic awareness,
                and educational initiatives, he continues to guide
                Amarism toward building stronger and more compassionate communities.
              </p>
            </div>
            

            {/* Leadership Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-white rounded-[30px] p-8 shadow-md hover:-translate-y-1 transition-all duration-300">
  <div className="w-16 h-16 rounded-2xl bg-[#eef6ff] flex items-center justify-center text-3xl mb-6">
    📜
  </div>

  <h3 className="text-2xl font-bold text-[#081229] mb-3">
    V. Anil Kumar
  </h3>

  <p className="text-[#12b886] tracking-[3px] font-semibold text-sm">
    GENERAL SECRETARY
  </p>
</div>

              <div className="bg-white rounded-[30px] p-8 shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[#eef6ff] flex items-center justify-center text-3xl mb-6">
                  🏛️
                </div>

                <h3 className="text-2xl font-bold text-[#081229] mb-3">
                  Pillapalem Charishma
                </h3>

                <p className="text-[#12b886] tracking-[3px] font-semibold text-sm">
                  VICE PRESIDENT
                </p>
              </div>

              <div className="bg-white rounded-[30px] p-8 shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[#eef6ff] flex items-center justify-center text-3xl mb-6">
                  🏦
                </div>

                <h3 className="text-2xl font-bold text-[#081229] mb-3">
                  V. Tharun
                </h3>

                <p className="text-[#12b886] tracking-[3px] font-semibold text-sm">
                  TREASURER
                </p>
              </div>

              <div className="bg-white rounded-[30px] p-8 shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[#eef6ff] flex items-center justify-center text-3xl mb-6">
                  🤝
                </div>

                <h3 className="text-2xl font-bold text-[#081229] mb-3">
                  V. Charan Kumar
                </h3>

                <p className="text-[#12b886] tracking-[3px] font-semibold text-sm">
                  ADDL. GENERAL SECRETARY
                </p>
              </div>

            </div>

            {/* Executive Members */}
            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-5">
                <div className="text-3xl">👤</div>

                <div>
                  <h4 className="text-xl font-bold text-[#081229]">
                    T. Jeevana Sri
                  </h4>

                  <p className="text-gray-500 text-sm tracking-wide">
                    EXECUTIVE MEMBER
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-5">
                <div className="text-3xl">👤</div>

                <div>
                  <h4 className="text-xl font-bold text-[#081229]">
                    V. Hari Krishna
                  </h4>

                  <p className="text-gray-500 text-sm tracking-wide">
                    EXECUTIVE MEMBER
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-5">
                <div className="text-3xl">👤</div>

                <div>
                  <h4 className="text-xl font-bold text-[#081229]">
                    Duggu Tejaswini
                  </h4>

                  <p className="text-gray-500 text-sm tracking-wide">
                    EXECUTIVE MEMBER
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-5">
                <div className="text-3xl">👤</div>

                <div>
                  <h4 className="text-xl font-bold text-[#081229]">
                    V. Karthik
                  </h4>

                  <p className="text-gray-500 text-sm tracking-wide">
                    EXECUTIVE MEMBER
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>
      )}
           {/* IMPACT ROADMAP */}
{activeTab === "impact-roadmap" && (
  <section className="min-h-screen bg-white px-4 pt-28 pb-24">
    <div className="max-w-5xl mx-auto">

      <div className="mb-16">
        <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#020b1f] mb-6">
          Impact Roadmap
        </h2>

        <p className="text-gray-600 text-base md:text-lg leading-8 max-w-3xl">
          From Mission Manisha [First Phase] to Project R Kreeda, our timeline
          reflects the{" "}
          <span className="text-[#087f5b] font-semibold">
            dedicated efforts of 250 volunteers
          </span>{" "}
          working for a better tomorrow.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#14b89a]/40 md:-translate-x-1/2"></div>

        {[
          {
            date: "MARCH 31, 2024",
            tag: "LAUNCH",
            title: "Mission Manisha (First Phase) Launch",
            text: "The beginning of a journey towards holistic development, value education and empowering minds for a better society.",
            side: "right",
          },
          {
            date: "AUG 7, 2024",
            tag: "REFORM",
            title: "Project M – A Start",
            text: "Initialization of reform and restoration projects is the first step towards meaningful transformation and lasting impact.",
            side: "left",
          },
          {
            date: "NOV 15, 2024",
            tag: "REFORM",
            title: "Children's Day – Project R Kreeda",
            text: "Promoting sports, play and physical well-being. Reforming young minds through joyful learning and active participation.",
            side: "right",
          },
          {
            date: "APRIL 4, 2025",
            tag: "EDUCATION",
            title: "TO conduct Smart Start syllabus test",
            text: "",
            points: [
              "Academic Excellence",
              "To check and Find our hidden talents students",
              "How They Are studying",
            ],
            place: "ZPHS Pachikapallam",
            note: "With Cooperation T: Rajeswari Madam (Social Teacher)",
            side: "left",
          },
          {
            date: "DEC 25, 2025",
            tag: "[Community]",
            title: "Christmas 2k25",
            text: "Spreading joy, warmth, and smiles with Christmas Santa gifts. Empowering young hearts through love, sharing, and the spirit of togetherness.",
            quote:
              "The best way to cheer yourself is to try to cheer someone else up. – Mark Twain",
            side: "right",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`relative mb-16 md:mb-20 flex ${
              item.side === "left" ? "md:justify-start" : "md:justify-end"
            }`}
          >
            <div className="absolute left-5 md:left-1/2 top-8 w-5 h-5 rounded-full bg-white border-4 border-[#14b89a] shadow-md md:-translate-x-1/2 z-10"></div>

            {index === 1 && (
              <div className="hidden md:block absolute left-1/2 top-6 w-12 h-12 rounded-full bg-[#14b89a] border-[10px] border-white shadow-md -translate-x-1/2 z-20"></div>
            )}

            <div
              className={`ml-14 md:ml-0 w-full md:w-[42%] bg-white border border-gray-100 rounded-[20px] p-6 shadow-sm ${
                item.side === "left" ? "md:mr-auto" : "md:ml-auto"
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="bg-[#e4fff5] text-[#087f5b] px-3 py-1 rounded-md text-[10px] font-extrabold tracking-wider">
                  {item.date}
                </span>

                <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-md text-[10px] font-extrabold tracking-wider">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-xl font-serif font-bold text-[#111827] mb-4">
                {item.title}
              </h3>

              {item.text && (
                <p className="text-gray-600 text-sm md:text-base leading-7">
                  {item.text}
                </p>
              )}

              {item.points && (
                <div className="space-y-2 mt-4">
                  {item.points.map((point, pointIndex) => (
                    <div
                      key={pointIndex}
                      className="flex items-start gap-2 text-sm text-[#111827]"
                    >
                      <span className="mt-1 w-4 h-4 rounded-full bg-purple-700 text-white text-[10px] flex items-center justify-center">
                        ✓
                      </span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              )}

              {item.place && (
                <div className="mt-6 text-purple-800 font-bold text-base">
                  {item.place}
                </div>
              )}

              {item.note && (
                <p className="mt-2 ml-8 text-sm text-[#111827] leading-6">
                  {item.note}
                </p>
              )}

              {item.quote && (
                <p className="mt-6 pt-4 border-t border-gray-100 italic font-semibold text-sm leading-7 text-[#111827]">
                  “{item.quote}”
                </p>
              )}
            </div>
          </div>
        ))}

        <div className="relative z-10 max-w-xl mx-auto bg-[#e8fff4] border border-[#14b89a]/30 rounded-xl px-6 py-5 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#14b89a]/15 text-[#087f5b] flex items-center justify-center text-2xl">
            👥
          </div>

          <div>
            <h3 className="text-[#087f5b] font-bold text-lg">
              250 Volunteers. One Mission.
            </h3>
            <p className="text-[#111827] text-sm">
              Together We Reform. Together We Restore. Together We Rise.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
)}
    </>
  );
}