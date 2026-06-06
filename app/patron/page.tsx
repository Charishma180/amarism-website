"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import jsPDF from "jspdf";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function PatronPage() {
  const [selectedAmount, setSelectedAmount] = useState("99");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [receiptData, setReceiptData] = useState<any>(null);

  const amounts = [
    "99",
    "199",
    "299",
    "499",
    "999",
    "1499",
    "1999",
    "2499",
    "2999",
    "4999",
  ];

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const existingScript = document.querySelector(
        'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
      );

      if (existingScript) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const downloadReceipt = (receiptData: any) => {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text("AMARISM", 20, 25);

    doc.setFontSize(16);
    doc.text("Donation Receipt", 20, 40);

    doc.setFontSize(11);
    doc.text(`Receipt No: ${receiptData.receiptNo}`, 20, 60);
    doc.text(`Date: ${receiptData.date}`, 20, 70);
    doc.text(`Donor Name: ${receiptData.donorName}`, 20, 85);
    doc.text(`Mobile: ${receiptData.mobile}`, 20, 95);
    doc.text(`Amount: Rs. ${receiptData.amount}`, 20, 110);
    doc.text(`Payment ID: ${receiptData.paymentId}`, 20, 125);
    doc.text(`Order ID: ${receiptData.orderId}`, 20, 135);

    doc.setFontSize(12);
    doc.text("Thank you for supporting AMARISM.", 20, 155);

    doc.save(`${receiptData.receiptNo}.pdf`);
  };

  const handlePayment = async () => {
    if (!fullName || !mobile) {
      alert("Please enter full name and mobile number");
      return;
    }

    const scriptLoaded = await loadRazorpayScript();

    if (!scriptLoaded) {
      alert("Razorpay SDK failed to load. Check your internet connection.");
      return;
    }

    const response = await fetch("/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: Number(selectedAmount) }),
    });

    const order = await response.json();

    if (!order.id) {
      alert("Unable to create payment order");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      amount: order.amount,
      currency: "INR",
      name: "AMARISM",
      description: "Patron Contribution",
      order_id: order.id,

      handler: async function (response: any) {
        const receiptNo = `AMR-${Date.now()}`;
        const donationDate = new Date().toLocaleDateString("en-IN");

        const finalReceiptData = {
          receiptNo,
          date: donationDate,
          donorName: fullName,
          mobile,
          amount: selectedAmount,
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id,
        };

        await addDoc(collection(db, "donations"), {
          receiptNo,
          donorName: fullName,
          mobile,
          amount: Number(selectedAmount),
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id,
          signature: response.razorpay_signature,
          mode: "test",
          status: "success",
          createdAt: serverTimestamp(),
        });

        setReceiptData(finalReceiptData);

        alert("Donation Successful ❤️ Now you can download your receipt.");
      },

      prefill: {
        name: fullName,
        contact: mobile,
      },

      theme: {
        color: "#009f73",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

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
          Amarism is dedicated to hunger eradication, rural empowerment, and
          legal aid. Every rupee you contribute goes directly to the field.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            ["🍚", "₹500", "Provides nutrition for a family for a week."],
            ["📚", "₹1500", "Supports a student's education kits."],
            ["⚕️", "₹5000", "Funds a rural medical camp session."],
            ["🏛️", "Premium", "Joins our Advisory Council patronage."],
          ].map(([icon, title, desc]) => (
            <div
              key={title}
              className="bg-white rounded-3xl p-8 border shadow-sm"
            >
              <div className="text-4xl mb-5">{icon}</div>
              <h3 className="text-2xl font-bold text-[#081229] mb-2">
                {title}
              </h3>
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
              🔐 Secure Test Payment
            </h2>

            <p className="text-[#009f73] text-xs font-bold mt-2">
              RAZORPAY TEST MODE
            </p>
          </div>

          <div className="space-y-6 mb-10">
            <input
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full bg-gray-50 rounded-2xl px-6 py-5 outline-none"
            />

            <input
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
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
              </button>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mb-8">
            This is Razorpay test mode. No real money will be deducted.
          </p>

          <button
            onClick={handlePayment}
            className="w-full bg-[#009f73] text-white rounded-2xl py-5 font-black tracking-widest text-lg shadow-lg"
          >
            PAY WITH RAZORPAY →
          </button>

          {receiptData && (
            <button
              onClick={() => downloadReceipt(receiptData)}
              className="mt-5 w-full bg-[#081229] text-white rounded-2xl py-4 font-bold"
            >
              Download Receipt
            </button>
          )}
        </div>
      </section>
    </main>
  );
}