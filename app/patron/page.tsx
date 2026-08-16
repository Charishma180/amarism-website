"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import jsPDF from "jspdf";

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

export default function PatronPage() {
  const [selectedAmount, setSelectedAmount] = useState("99");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [utrNumber, setUtrNumber] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [receiptData, setReceiptData] = useState<any>(null);

  // --------------------------------------------------
  // DOWNLOAD RECEIPT
  // --------------------------------------------------

  const downloadReceipt = (data: any) => {
    const doc = new jsPDF();

    // Border
    doc.setDrawColor(0, 159, 115);
    doc.setLineWidth(1.5);
    doc.rect(10, 10, 190, 277);

    // Header
    doc.setFillColor(0, 159, 115);
    doc.rect(10, 10, 190, 32, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("AMARISM", 20, 29);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(
      "Building Young Minds Through Smart Interaction",
      20,
      37
    );

    // Title
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("DONATION ACKNOWLEDGEMENT", 45, 58);

    // Details
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");

    doc.text("Receipt No", 20, 82);
    doc.text(`: ${data.receiptNo}`, 65, 82);

    doc.text("Name", 20, 102);
    doc.text(`: ${data.donorName}`, 65, 102);

    doc.text("Mobile", 20, 117);
    doc.text(`: ${data.mobile}`, 65, 117);

    doc.text("Date", 20, 132);
    doc.text(`: ${data.date}`, 65, 132);

    doc.text("Amount", 20, 152);
    doc.text(
      `: Rs. ${Number(data.amount).toLocaleString("en-IN")}`,
      65,
      152
    );

    doc.text("Payment Mode", 20, 167);
    doc.text(": UPI", 65, 167);

    doc.text("UTR Number", 20, 182);
    doc.text(`: ${data.utrNumber}`, 65, 182);

    doc.text("Status", 20, 197);
    doc.text(`: ${data.status}`, 65, 197);

    // Thank you box
    doc.setFillColor(232, 251, 243);
    doc.roundedRect(20, 220, 170, 27, 3, 3, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);

    doc.text(
      "Thank you for supporting AMARISM",
      55,
      232
    );

    doc.text(
      "and creating meaningful impact.",
      55,
      240
    );

    // Footer
    doc.setFont("helvetica", "italic");
    doc.setFontSize(10);

    doc.text(
      "Authorized by AMARISM Foundation",
      20,
      270
    );

    doc.setFont("helvetica", "normal");
    doc.text("www.amarism.org", 145, 270);

    doc.save(`${data.receiptNo}.pdf`);
  };

  // --------------------------------------------------
  // SUBMIT UPI DONATION
  // --------------------------------------------------

  const handleDonationSubmit = async () => {
    if (!auth.currentUser) {
      alert("Please login before submitting your donation.");
      return;
    }

    if (!fullName.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!mobile.trim()) {
      alert("Please enter your mobile number.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(mobile.trim())) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!utrNumber.trim()) {
      alert("Please enter your UTR / transaction number.");
      return;
    }

    // Basic UTR validation
    if (!/^\d{12}$/.test(utrNumber.trim())) {
      alert("Please enter a valid 12-digit UTR / transaction number.");
      return;
    }

    try {
      setSubmitting(true);

      const receiptNo = `AMR-${Date.now()}`;
      const donationDate = new Date().toLocaleDateString("en-IN");

      const donationData = {
        userId: auth.currentUser.uid,
        email: auth.currentUser.email || "",

        receiptNo,

        donorName: fullName.trim(),
        mobile: mobile.trim(),

        amount: Number(selectedAmount),

        paymentMode: "UPI",
        utrNumber: utrNumber.trim(),

        // Admin must verify the payment
        status: "pending",

        donationDate: new Date().toISOString(),

        createdAt: serverTimestamp(),
      };

      await addDoc(
        collection(db, "donations"),
        donationData
      );

      const finalReceiptData = {
        receiptNo,
        date: donationDate,
        donorName: fullName.trim(),
        mobile: mobile.trim(),
        amount: Number(selectedAmount),
        utrNumber: utrNumber.trim(),
        status: "Donation Submitted",
      };

      setReceiptData(finalReceiptData);

      alert(
        "Donation details submitted successfully. AMARISM will verify your UPI transaction."
      );

      setFullName("");
      setMobile("");
      setUtrNumber("");
    } catch (error) {
      console.error("Donation submission error:", error);

      alert(
        "Unable to submit donation details. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#faf9f5] px-4 py-20 md:px-6">

      <section className="mx-auto w-full max-w-5xl">

        {/* ========================================= */}
        {/* HERO */}
        {/* ========================================= */}

        <div className="mb-10 text-center md:text-left">

          <h1 className="font-serif text-4xl font-black italic leading-tight text-[#081229] sm:text-5xl md:text-7xl">
            Your generosity is the
            <br />
            spark of our change.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-500 md:mx-0 md:text-xl">
            Amarism is dedicated to educational empowerment,
            social welfare, and community impact.
          </p>

        </div>

        {/* ========================================= */}
        {/* MAIN CARD */}
        {/* ========================================= */}

        <div className="overflow-hidden rounded-[30px] border bg-white shadow-xl">

          {/* ======================================= */}
          {/* HEADER */}
          {/* ======================================= */}

          <div className="bg-[#e8fbf3] px-5 py-8 text-center md:px-10">

            <p className="text-sm font-bold tracking-widest text-[#009f73]">
              ⭐ FOUNDATION PATRON PROTOCOL ⭐
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold text-[#081229] md:text-4xl">
              Support AMARISM
            </h2>

            <p className="mt-2 text-xs font-bold tracking-widest text-[#009f73]">
              DIRECT UPI DONATION
            </p>

          </div>

          <div className="p-5 md:p-10">

            {/* ===================================== */}
            {/* AMOUNT SELECTION */}
            {/* ===================================== */}

            <p className="mb-5 text-xs font-bold tracking-widest text-gray-400">
              CHOOSE PATRONAGE LEVEL
            </p>

            <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4">

              {amounts.map((amount) => (

                <button
                  key={amount}
                  type="button"
                  onClick={() => setSelectedAmount(amount)}
                  className={`rounded-2xl border px-4 py-5 text-lg font-bold transition-all ${
                    selectedAmount === amount
                      ? "border-[#10b981] bg-[#10b981] text-white shadow-lg"
                      : "border-gray-200 bg-white text-[#081229] hover:border-[#10b981]"
                  }`}
                >
                  ₹{amount}
                </button>

              ))}

            </div>

            {/* ===================================== */}
            {/* UPI QR SECTION */}
            {/* ===================================== */}

            <div className="rounded-[30px] bg-[#081229] px-5 py-8 text-center text-white md:px-10 md:py-10">

              <h3 className="text-2xl font-bold md:text-3xl">
                Donate via UPI
              </h3>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-300 md:text-base">
                Scan the QR code using any UPI application
                and complete your donation.
              </p>

              {/* ================================= */}
              {/* LARGE QR CODE */}
              {/* ================================= */}

              <div className="mt-8 flex justify-center">

                <div className="rounded-3xl bg-white p-5 shadow-2xl">

                  <img
                    src="/upi-qr.png"
                    alt="AMARISM UPI Payment QR Code"
                    className="block h-[320px] w-[320px] min-h-[320px] min-w-[320px] object-contain"
                  />

                </div>

              </div>

              {/* SCAN TEXT */}

              <div className="mt-5 flex items-center justify-center gap-2 text-sm font-medium text-gray-200">

                <span className="text-xl">
                  ▣
                </span>

                <span>
                  Scan & Pay using any UPI app
                </span>

              </div>

              {/* INSTRUCTIONS */}

              <div className="mx-auto mt-7 max-w-2xl rounded-2xl bg-white/10 px-5 py-4 text-sm leading-6 text-gray-200">

                <p>
                  1. Scan the QR code
                </p>

                <p>
                  2. Pay ₹{selectedAmount}
                </p>

                <p>
                  3. Copy your UTR / Transaction Number
                </p>

                <p>
                  4. Enter the details below and submit your donation
                </p>

              </div>

            </div>

            {/* ===================================== */}
            {/* CONFIRM DONATION */}
            {/* ===================================== */}

            <div className="mt-10 rounded-3xl border border-gray-100 bg-white">

              <div className="p-5 md:p-8">

                <h3 className="text-2xl font-bold text-[#081229]">
                  Confirm Your Donation
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Please provide your details and UPI transaction
                  number after completing the payment.
                </p>

                <div className="mt-7 space-y-4">

                  {/* NAME */}

                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) =>
                      setFullName(e.target.value)
                    }
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-[#081229] outline-none transition focus:border-[#10b981] focus:ring-2 focus:ring-[#10b981]/20"
                  />

                  {/* MOBILE */}

                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={mobile}
                    onChange={(e) =>
                      setMobile(
                        e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 10)
                      )
                    }
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-[#081229] outline-none transition focus:border-[#10b981] focus:ring-2 focus:ring-[#10b981]/20"
                  />

                  {/* AMOUNT */}

                  <input
                    type="text"
                    value={`Selected Amount: ₹${selectedAmount}`}
                    readOnly
                    className="w-full rounded-2xl border border-gray-200 bg-gray-100 px-5 py-4 font-bold text-[#081229] outline-none"
                  />

                  {/* UTR */}

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-[#081229]">
                      UTR / Transaction Number
                    </label>

                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="Enter 12-digit UTR number"
                      value={utrNumber}
                      onChange={(e) =>
                        setUtrNumber(
                          e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 12)
                        )
                      }
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-[#081229] outline-none transition focus:border-[#10b981] focus:ring-2 focus:ring-[#10b981]/20"
                    />

                    <p className="mt-2 px-1 text-xs text-gray-400">
                      Enter the UTR / transaction number shown
                      in your UPI payment history.
                    </p>

                  </div>

                  {/* SUBMIT */}

                  <button
                    type="button"
                    onClick={handleDonationSubmit}
                    disabled={submitting}
                    className="w-full rounded-2xl bg-[#009f73] py-5 text-base font-black tracking-widest text-white shadow-lg transition hover:bg-[#008662] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting
                      ? "SUBMITTING..."
                      : "SUBMIT DONATION"}
                  </button>

                  {/* RECEIPT */}

                  {receiptData && (

                    <button
                      type="button"
                      onClick={() =>
                        downloadReceipt(receiptData)
                      }
                      className="w-full rounded-2xl border-2 border-[#081229] bg-[#081229] py-4 font-bold text-white transition hover:bg-[#122347]"
                    >
                      ↓ Download Acknowledgement Receipt
                    </button>

                  )}

                </div>

              </div>

            </div>

            {/* ===================================== */}
            {/* FOOTER NOTE */}
            {/* ===================================== */}

            <div className="mt-8 text-center">

              <p className="text-sm leading-6 text-gray-500">
                🔒 Your donation details are securely stored
                and will be verified by the AMARISM Foundation team.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}