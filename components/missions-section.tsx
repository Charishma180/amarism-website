"use client";

import Link from "next/link";
import { BarChart3, Scale, Utensils, Brain, Beaker } from "lucide-react";


const missions = [
  {
    icon: BarChart3,
    title: "Mission Manisha",
    description:
      "Providing scholarships and digital learning tools to gifted students in rural government schools.",
    link: "/missions/mission-manisha",
  },
  {
   icon: Scale,
title: "Nyaya Sadan",
description:
  "Nyaya Sadan addresses this gap by transforming legal awareness into legal empowerment.",
link: "/missions/nyaya-sadan",
  },
  {
    icon: Utensils,
    title: "Mission Trupti",
    description:
      "Daily nutritional support for the elderly and abandoned, ensuring no one sleeps hungry.",
    link: "/missions/mission-trupti",
  },
  {
    icon: Brain,
    title: "Mission Mano Swasthya",
    description:
      "A strong nation requires not only educated citizens, but emotionally balanced and mentally healthy individuals.",
    link: "/missions/mission-manoswasthya",
  },
  {
  icon: Beaker,
  title: "Mission Jeeva Dhara",
  description:
    "Mission Jeevadhara is the rural innovation and technological empowerment wing dedicated to bringing sustainable solutions.",
 link: "/missions/mission-jeeva-dhara",
},
];

export function MissionsSection() {
  return (
    <section id="missions" className="bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold tracking-wider text-[#0d9488] uppercase">
            Our Core Initiatives
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-[#1a2e5a] mt-2">
            Driving Change Where It Matters
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {missions.map((mission) => {
            const Icon = mission.icon;

            return (
              <div
                key={mission.title}
                className={`bg-white border border-[#1a2e5a]/20 rounded-3xl p-8 hover:border-[#1a2e5a]/40 transition-colors ${
  mission.title === "Mission Jeeva Dhara"
    ? "md:col-span-2 md:max-w-xl md:mx-auto w-full"
    : ""
}`}
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#1a2e5a]" />
                </div>

                <h3 className="text-2xl font-semibold text-[#1a2e5a] mb-3">
                  {mission.title}
                </h3>

                <p className="text-gray-600 text-base mb-5 leading-relaxed">
                  {mission.description}
                </p>

                <Link
                  href={mission.link}
                  className="text-[#1a2e5a] font-medium hover:text-[#0d9488] transition-colors inline-flex items-center gap-2"
                >
                  View Project Details →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}