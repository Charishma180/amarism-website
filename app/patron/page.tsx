"use client";

import { useState } from "react";
export default function PatronPage() {
    const [selectedAmount, setSelectedAmount] = useState("99");
  const amounts = ["99", "199", "299", "499", "999", "1499", "1999", "2499", "2999", "4999"];

  return (
    <main className="bg-[#faf9f5] min-h-screen px-5 py-20">
      <section className="max-w-6xl mx-auto">
        <h1 className="font-serif italic text-5xl md:text-7xl font-black text-[#081229] leading-tight mb-8">
          Your generosity is the <br /> spark of our change.
        </h1>

        <button className="w-full bg-[#009f73] text-white py-5 rounded-2xl font-bold shadow-lg mb-10">
          Start Donation Below
        </button>

        <p className="text-gray-500 text-xl leading-8 max-w-2xl mb-10">
          Amarism is dedicated to hunger eradication, rural empowerment, and legal aid.
          Every rupee you contribute goes directly to the field.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            ["🍚", "₹500", "Provides nutrition for a family for a week."],
            ["📚", "₹1500", "Supports a student's education kits."],
            ["⚕️", "₹5000", "Funds a rural medical camp session."],
            ["🏛️", "Premium", "Joins our Advisory Council patronage."],
          ].map(([icon, title, desc]) => (
            <div key={title} className="bg-white rounded-3xl p-8 border shadow-sm">
              <div className="text-4xl mb-5">{icon}</div>
              <h3 className="text-2xl font-bold text-[#081229] mb-2">{title}</h3>
              <p className="text-gray-500">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[36px] p-6 md:p-12 shadow-xl border">
          <div className="bg-[#e8fbf3] rounded-3xl p-8 text-center mb-10">
            <p className="text-[#009f73] font-bold tracking-widest text-sm">
              ⭐ FOUNDATION PATRON PROTOCOL ⭐
            </p>
            <h2 className="text-2xl font-serif font-bold mt-3">
              🔁 Secure Autopay Only
            </h2>
            <p className="text-[#009f73] text-xs font-bold mt-2">
              AUTOMATIC RECURRING CONTRIBUTIONS
            </p>
          </div>

          <div className="space-y-6 mb-10">
            <input
              placeholder="Full Name"
              className="w-full bg-gray-50 rounded-2xl px-6 py-5 outline-none"
            />
            <input
              placeholder="Mobile Number"
              className="w-full bg-gray-50 rounded-2xl px-6 py-5 outline-none"
            />
          </div>

          <p className="text-xs font-bold text-gray-400 tracking-widest mb-5">
            CHOOSE PATRONAGE LEVEL
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-10">
            {amounts.map((amount) => (
  <button
    key={amount}
    onClick={() => setSelectedAmount(amount)}
    className={`rounded-2xl py-6 font-bold text-xl shadow-sm transition-all ${
      selectedAmount === amount
        ? "bg-[#10b981] text-white border-[#10b981]"
        : "bg-white border text-[#081229]"
    }`}
  >
    ₹{amount}

    <p className="text-xs mt-1 opacity-80">
      / AUTOPAY
    </p>
  </button>
))}
          </div>

          <p className="text-center text-gray-400 text-sm mb-8">
            Amount will be auto-debited monthly. Cancel anytime from your account.
          </p>

          <button className="w-full bg-[#009f73] text-white rounded-2xl py-5 font-black tracking-widest text-lg shadow-lg">
            ACTIVATE SECURE AUTOPAY →
          </button>
        </div>
      </section>
    </main>
  );
}