"use client";

import { Handshake, GraduationCap, Building2 } from "lucide-react";

const paths = [
  {
    icon: Handshake,
    title: "Volunteer",
    description:
      "Work on the ground and serve rural communities directly.",
    iconColor: "text-yellow-500",
    iconBg: "bg-yellow-50",
    link: "/missions/mission-manisha#volunteer-enrollment",
  },
  {
    icon: GraduationCap,
    title: "Internship",
    description:
      "Gain field experience and academic research opportunities.",
    iconColor: "text-yellow-600",
    iconBg: "bg-yellow-50",
    link: "/missions/mission-manisha#internship-enrollment",
  },
  {
    icon: Building2,
    title: "Patron",
    description:
      "Join our Advisory Council and provide strategic leadership.",
    iconColor: "text-[#1a2e5a]",
    iconBg: "bg-gray-100",
   link: "/patron",
  },
];

export function GetInvolvedSection() {
  const PatronIcon = paths[2].icon;

  return (
    <section id="get-involved" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-[3px] text-[#0d9488] uppercase">
            Join The Movement
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-[#1a2e5a] mt-3">
            Choose Your Path to Impact
          </h2>

          <p className="text-gray-500 mt-5 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Become part of a youth-driven movement dedicated to education,
            empowerment, innovation, and social transformation.
          </p>
        </div>

        {/* Top Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {paths.slice(0, 2).map((path) => {
            const Icon = path.icon;

            return (
              <div
                key={path.title}
                className="bg-white rounded-3xl p-8 md:p-10 text-center shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-20 h-20 ${path.iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <Icon className={`w-10 h-10 ${path.iconColor}`} />
                </div>

                <h3 className="text-2xl font-bold text-[#1a2e5a] mb-4">
                  {path.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8 text-base">
                  {path.description}
                </p>

                <a
                  href={path.link}
                  className="block w-full bg-[#1a2e5a] hover:bg-[#10213f] text-white rounded-full py-4 text-base font-semibold transition-all duration-300"
                >
                  Enroll Now
                </a>
              </div>
            );
          })}
        </div>

        {/* Patron Card Center */}
        <div className="md:max-w-xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-10 text-center shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            <div
              className={`w-20 h-20 ${paths[2].iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}
            >
              <PatronIcon className={`w-10 h-10 ${paths[2].iconColor}`} />
            </div>

            <h3 className="text-2xl font-bold text-[#1a2e5a] mb-4">
              {paths[2].title}
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              {paths[2].description}
            </p>

            <a
              href={paths[2].link}
              className="block w-full bg-[#1a2e5a] hover:bg-[#10213f] text-white rounded-full py-4 text-base font-semibold transition-all duration-300"
            >
              Enroll Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}