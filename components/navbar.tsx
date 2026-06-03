"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  UserCircle,
} from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "#about",
    subItems: [
      { name: "What is AMARISM?", href: "/about" },
      { name: "People behind AMARISM", href: "/people-behind-amarism" },
      { name: "Partnered Colleges", href: "/partnered-colleges" },
      { name: "Corporate Partnership", href: "/corporate-partnership" },
    ],
  },
  {
    name: "Missions",
    href: "#missions",
    subItems: [
      { name: "Mission Manisha", href: "/missions/mission-manisha" },
      { name: "Nyaya Sadan", href: "/missions/nyaya-sadan" },
      { name: "Mission Trupti", href: "/missions/mission-trupti" },
      { name: "Mission Manoswasthya", href: "/missions/mission-manoswasthya" },
      { name: "Mission Jeeva Dhara", href: "/missions/mission-jeeva-dhara" },
    ],
  },
  {
    name: "Get Involved",
    href: "#get-involved",
    subItems: [
      { name: "Be a Patron", href: "/patron", highlight: true },
      { name: "Volunteer Enrollment", href: "/volunteer" },
      { name: "Internship Enrollment", href: "/internship" },
    ],
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Legal Aid", href: "#legal-aid" },
  { name: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const toggleExpand = (name: string) => {
    setExpandedItems((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/amarism-logo.jpeg"
              alt="AMARISM Logo"
              className="w-11 h-11 object-contain"
            />

            <span className="text-xl font-bold text-[#1a2e5a]">
              AMARISM
            </span>
          </Link>

          <div className="flex items-center gap-3">
            {user ? (
              <Link href="/profile" aria-label="Profile">
                <UserCircle className="w-9 h-9 text-[#1a2e5a]" />
              </Link>
            ) : (
              <>
                <Link
                  href="/signin"
                  className="hidden md:flex px-4 py-2 rounded-full border border-[#1a2e5a] text-[#1a2e5a] text-sm font-semibold hover:bg-[#1a2e5a] hover:text-white transition"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="hidden md:flex px-4 py-2 rounded-full bg-[#1a2e5a] text-white text-sm font-semibold hover:bg-[#122347] transition"
                >
                  Sign Up
                </Link>
              </>
            )}

            <button
              onClick={() => setIsOpen(true)}
              className="p-2 text-[#1a2e5a]"
              aria-label="Open menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-white overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-bold text-[#1a2e5a]">MENU</span>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-600"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="space-y-0">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100">
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => toggleExpand(item.name)}
                        className="flex items-center justify-between w-full py-4 text-left"
                      >
                        <span className="text-lg font-semibold text-[#1a2e5a]">
                          {item.name}
                        </span>

                        {expandedItems.includes(item.name) ? (
                          <ChevronUp className="w-5 h-5 text-[#1a2e5a]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#1a2e5a]" />
                        )}
                      </button>

                      {expandedItems.includes(item.name) && (
                        <ul className="pb-4 space-y-3 pl-4">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                href={subItem.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-1 text-[#4a7cc9]"
                              >
                                {subItem.highlight && (
                                  <span className="text-yellow-400 mr-1">
                                    &#9733;
                                  </span>
                                )}

                                <span className="before:content-['•'] before:mr-2 before:text-[#4a7cc9]">
                                  {subItem.name}
                                </span>

                                {subItem.highlight && (
                                  <span className="text-yellow-400 ml-1">
                                    &#9733;
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-4 text-lg font-semibold text-[#1a2e5a]"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-8">
              <Link
                href="#get-involved"
                onClick={() => setIsOpen(false)}
                className="block w-full py-3 text-center border-2 border-[#1a2e5a] text-[#1a2e5a] rounded-lg font-semibold hover:bg-[#1a2e5a] hover:text-white transition-colors"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}