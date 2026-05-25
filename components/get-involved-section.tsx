"use client";

import { Handshake, GraduationCap, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const paths = [
  {
    icon: Handshake,
    title: "Volunteer",
    description: "Work on the ground and serve rural communities directly.",
    iconColor: "text-yellow-500",
    iconBg: "bg-yellow-50",
  },
  {
    icon: GraduationCap,
    title: "Internship",
    description: "Gain field experience and academic research opportunities.",
    iconColor: "text-yellow-600",
    iconBg: "bg-yellow-50",
  },
  {
    icon: Building2,
    title: "Patron",
    description: "Join our Advisory Council and provide strategic leadership.",
    iconColor: "text-[#1a2e5a]",
    iconBg: "bg-gray-100",
  },
];

export function GetInvolvedSection() {
  const PatronIcon = paths[2].icon;

  return (
    <section id="get-involved" className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-wider text-[#0d9488] uppercase">
            Join The Movement
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e5a] mt-2">
            Choose Your Path to Impact
          </h2>
        </div>

        {/* Path Cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {paths.slice(0, 2).map((path) => {
            const Icon = path.icon;
            return (
              <div
                key={path.title}
                className="bg-white rounded-xl p-6 text-center shadow-sm"
              >
                <div
                  className={`w-16 h-16 ${path.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon className={`w-8 h-8 ${path.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-[#1a2e5a] mb-2">
                  {path.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6">{path.description}</p>
                <Button className="w-full bg-[#1a2e5a] hover:bg-[#1a2e5a]/90 text-white rounded-full">
                  Enroll Now
                </Button>
              </div>
            );
          })}
        </div>

        {/* Patron Card - Full Width on Mobile */}
        <div className="md:w-1/2">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div
              className={`w-16 h-16 ${paths[2].iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}
            >
              <PatronIcon className={`w-8 h-8 ${paths[2].iconColor}`} />
            </div>
            <h3 className="text-lg font-semibold text-[#1a2e5a] mb-2">
              {paths[2].title}
            </h3>
            <p className="text-gray-600 text-sm mb-6">{paths[2].description}</p>
            <Button className="w-full bg-[#1a2e5a] hover:bg-[#1a2e5a]/90 text-white rounded-full">
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
