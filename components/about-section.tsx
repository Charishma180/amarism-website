"use client";

import { useState } from "react";
import { Users, Shield } from "lucide-react";

const tabs = [
  { id: "who-we-are", label: "WHO WE ARE" },
  { id: "core-values", label: "OUR CORE VALUES" },
  { id: "governing-body", label: "THE GOVERNING BODY" },
  { id: "impact-roadmap", label: "IMPACT ROADMAP" },
];

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("who-we-are");

  return (
    <>
      {/* TOP TABS */}
      <div className="bg-white border-b border-gray-200 sticky top-[72px] z-20">
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
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e5a] mb-6">
              Who We Are
            </h2>

            <p className="text-gray-700 leading-relaxed mb-10">
              AMARISM is a non-profit organization registered under the Andhra
              Pradesh Societies Registration Act (Reg. No. 167/2024), established in
              2024 in Chittoor, Andhra Pradesh. Operating across Andhra Pradesh and
              Tamil Nadu, AMARISM is not merely an organization — it is a
              youth-driven social movement built on the belief that independence
              without equality is incomplete, and freedom without dignity is
              unfinished.
            </p>

            {/* Our Foundation Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#0d9488]/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#0d9488]" />
                </div>

                <h3 className="text-sm font-semibold tracking-wider text-[#0d9488] uppercase">
                  Our Foundation
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                AMARISM is a non-profit organization registered under the Andhra
                Pradesh Societies Registration Act (Reg. No. 167/2024), established
                in 2024 in Chittoor, Andhra Pradesh. Operating across Andhra Pradesh
                and Tamil Nadu, AMARISM is not merely an organization — it is a
                youth-driven social movement built on the belief that independence
                without equality is incomplete, and freedom without dignity is
                unfinished.
              </p>

              <hr className="border-gray-200 my-6" />

              <p className="text-gray-700 leading-relaxed">
                Born from the collective vision of Vadimgadu Ramu, Vadimgadu
                Anilkumar, Pillapalem Charishma, Vadimgadu Charan, and fellow
                students of Madras Christian College and Sri Venkateshwara
                University, AMARISM emerged from a deep moral awakening. The tragic
                incident of three children starving to death in the national capital
                became a turning point — a painful reminder that despite decades of
                independence, hunger, malnutrition, inequality, and socio-economic
                injustice still haunt millions of lives in India. That moment
                transformed concern into commitment.
              </p>
            </div>

            {/* Quote Block */}
            <div className="bg-[#0d9488]/5 border-l-4 border-[#0d9488] rounded-r-xl p-6 mb-10">
              <p className="text-lg italic text-gray-700">
                <span className="text-4xl text-[#0d9488] leading-none font-serif">
                  "
                </span>
                <span className="italic">
                  No nation is perfect; it needs to be made perfect. Let us
                  contribute towards the perfection of our country.
                </span>
              </p>
            </div>

            {/* Two Column Cards */}
            <div className="grid md:grid-cols-2 gap-4 mb-10">

              {/* Conviction */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#1a2e5a]/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#1a2e5a]" />
                  </div>

                  <h3 className="text-sm font-semibold tracking-wider text-[#1a2e5a] uppercase">
                    The Conviction
                  </h3>
                </div>

                <p className="text-gray-700 leading-relaxed text-sm">
                  AMARISM stands on a simple yet powerful conviction: No human being
                  deserves to sleep hungry. No child deserves to be denied quality
                  education. No citizen deserves to remain unaware of their rights.
                  The organization works to dismantle barriers created by poverty,
                  ignorance, systemic inequality, and lack of accountability.
                </p>
              </div>

              {/* Movement Reach */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0d9488]/10 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#0d9488]" />
                  </div>

                  <h3 className="text-sm font-semibold tracking-wider text-[#0d9488] uppercase">
                    Our Movement Reach
                  </h3>
                </div>

                <div className="text-center mb-4">
                  <span className="text-4xl font-bold text-[#1a2e5a]">
                    250+
                  </span>

                  <p className="text-sm font-semibold text-[#0d9488] uppercase tracking-wider">
                    Volunteers
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed text-sm">
                  Currently in its initial implementation stage, the organization
                  has mobilized more than 250 committed volunteers, with an
                  ambitious goal of building a 1,00,000-strong volunteer movement by
                  2027.
                </p>
              </div>

            </div>

            {/* Vision */}
            <div className="bg-[#0d9488]/5 rounded-2xl p-6 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#0d9488]/20 rounded-lg flex items-center justify-center">
                  🌍
                </div>

                <h3 className="text-sm font-semibold tracking-wider text-[#0d9488] uppercase">
                  Vision 2047 Statement
                </h3>
              </div>

              <p className="text-[#1a2e5a] font-semibold leading-relaxed">
                To build a just, compassionate, and empowered society where every
                individual lives with dignity, equality, and access to opportunity
                irrespective of socio-economic status and contribute toward the
                emergence of India as a leading nation by 2047.
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

              <p className="text-gray-500 text-lg md:text-2xl leading-relaxed max-w-4xl">
                Our actions are guided by Human Dignity and constitutional values.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

              {[
                "Human Dignity",
                "Constitutional Justice",
                "Democratic Participation",
                "Education as Liberation",
                "Compassion Rooted in Dharma",
                "Equality Beyond Barriers",
                "Accountability & Ethics",
                "Unity for Nation Building",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[28px] shadow-lg p-10 border border-gray-100"
                >
                  <div className="w-12 h-2 bg-[#21b894] rounded-full mb-6"></div>

                  <h2 className="text-3xl font-bold text-[#1b2d3d] mb-6">
                    {item}
                  </h2>

                  <p className="text-gray-600 text-lg leading-8">
                    AMARISM promotes dignity, justice, empowerment,
                    accountability, equality, and sustainable transformation.
                  </p>
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
            <div className="grid md:grid-cols-3 gap-8 mb-12">

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
        <section className="bg-white py-24 px-6">
          <div className="max-w-7xl mx-auto">

            {/* Heading */}
            <div className="mb-20">
              <div className="w-16 h-2 bg-[#14b89a] rounded-full mb-8"></div>

              <h1 className="text-5xl md:text-7xl font-bold text-[#081229] mb-8">
                Impact Roadmap
              </h1>

              <p className="text-gray-500 text-lg md:text-2xl leading-relaxed max-w-4xl">
                AMARISM’s roadmap is designed to create measurable,
                sustainable and people-centered social transformation
                through education, dignity, justice and empowerment.
              </p>
            </div>

            {/* Roadmap Cards */}
            <div className="grid md:grid-cols-2 gap-8">

              {/* Card 1 */}
              <div className="bg-[#f8fafc] rounded-[32px] p-10 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-6">📚</div>

                <h2 className="text-3xl font-bold text-[#081229] mb-5">
                  Education & Skill Development
                </h2>

                <p className="text-gray-600 text-lg leading-8">
                  Strengthening government school education, digital literacy,
                  leadership training and career guidance for rural and
                  economically disadvantaged youth.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#f8fafc] rounded-[32px] p-10 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-6">⚖️</div>

                <h2 className="text-3xl font-bold text-[#081229] mb-5">
                  Legal Awareness & Justice
                </h2>

                <p className="text-gray-600 text-lg leading-8">
                  Expanding legal literacy and citizen rights awareness
                  through Nyaya Sadan initiatives and accessible legal aid
                  support systems.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#f8fafc] rounded-[32px] p-10 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-6">🍛</div>

                <h2 className="text-3xl font-bold text-[#081229] mb-5">
                  Hunger & Food Security
                </h2>

                <p className="text-gray-600 text-lg leading-8">
                  Eliminating hunger through community-driven food support,
                  nutrition programs and sustainable food accessibility
                  initiatives for vulnerable communities.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-[#f8fafc] rounded-[32px] p-10 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-6">🧠</div>

                <h2 className="text-3xl font-bold text-[#081229] mb-5">
                  Mental Wellness & Social Health
                </h2>

                <p className="text-gray-600 text-lg leading-8">
                  Creating awareness around emotional well-being,
                  mental health support, youth counseling and
                  community resilience programs.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-[#f8fafc] rounded-[32px] p-10 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-6">🌱</div>

                <h2 className="text-3xl font-bold text-[#081229] mb-5">
                  Sustainable Rural Development
                </h2>

                <p className="text-gray-600 text-lg leading-8">
                  Supporting villages through water conservation,
                  sanitation, environmental sustainability and
                  community-led development initiatives.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-[#081229] rounded-[32px] p-10 shadow-xl text-white">
                <div className="text-5xl mb-6">🇮🇳</div>

                <h2 className="text-3xl font-bold mb-5">
                  Vision India 2047
                </h2>

                <p className="text-lg leading-8 text-gray-300">
                  AMARISM envisions contributing toward a compassionate,
                  empowered and equitable India by mobilizing youth,
                  strengthening communities and promoting constitutional values.
                </p>

                <div className="mt-8 inline-block bg-[#12b886] text-white px-5 py-3 rounded-xl font-semibold tracking-wide">
                  BUILDING THE FUTURE TOGETHER
                </div>
              </div>

            </div>

          </div>
        </section>
      )}
    </>
  );
}