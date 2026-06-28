"use client";

import { useState } from "react";
import Image from "next/image";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import jsPDF from "jspdf";

export default function PatronPage() {
  const [selectedAmount, setSelectedAmount] = useState("99");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [utrNumber, setUtrNumber] = useState("");
  const [screenshotUrl, setScreenshotUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [receiptData, setReceiptData] = useState<any>(null);
  const [showConfirmForm, setShowConfirmForm] = useState(false);

  const amounts = ["99", "199", "299", "499", "999", "1499", "1999", "2499", "2999", "4999"];

  const handleUpiPayment = () => {
    const upiId = "vmbunny@ibl";
    const payeeName = "AMARISM";

    const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
      payeeName
    )}&am=${selectedAmount}&cu=INR&tn=${encodeURIComponent("AMARISM Donation")}`;

    setShowConfirmForm(true);

    setTimeout(() => {
      document.getElementById("donation-confirm-form")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 500);

    window.location.href = upiUrl;
  };

  const downloadReceipt = (data: any) => {
    const doc = new jsPDF();

    doc.setDrawColor(0, 159, 115);
    doc.setLineWidth(1.5);
    doc.rect(10, 10, 190, 277);

    doc.setFillColor(0, 159, 115);
    doc.rect(10, 10, 190, 30, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("AMARISM", 20, 28);

    doc.setFontSize(11);
    doc.text("Building Young Minds Through Smart Interaction", 20, 35);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("DONATION ACKNOWLEDGEMENT", 45, 55);

    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");

    doc.text("Receipt No", 20, 80);
    doc.text(`: ${data.receiptNo}`, 65, 80);

    doc.text("Name", 20, 100);
    doc.text(`: ${data.donorName}`, 65, 100);

    doc.text("Mobile", 20, 115);
    doc.text(`: ${data.mobile}`, 65, 115);

    doc.text("Date", 20, 130);
    doc.text(`: ${data.date}`, 65, 130);

    doc.text("Amount", 20, 150);
    doc.text(`: Rs. ${Number(data.amount).toLocaleString("en-IN")}`, 65, 150);

    doc.text("Payment Mode", 20, 165);
    doc.text(": UPI", 65, 165);

    doc.text("UTR Number", 20, 180);
    doc.text(`: ${data.utrNumber}`, 65, 180);

    doc.text("Status", 20, 195);
    doc.text(`: ${data.status}`, 65, 195);

    doc.setFillColor(232, 251, 243);
    doc.roundedRect(20, 220, 170, 25, 3, 3, "F");

    doc.setFont("helvetica", "bold");
    doc.text("Thank you for supporting AMARISM and creating impact.", 28, 235);

    doc.setFont("helvetica", "italic");
    doc.setFontSize(10);
    doc.text("Authorized by AMARISM Foundation", 20, 270);

    doc.setFont("helvetica", "normal");
    doc.text("www.amarism.org", 145, 270);

    doc.save(`${data.receiptNo}.pdf`);
  };

  const handleSubmitDonation = async () => {
    if (!auth.currentUser) {
      alert("Please login before submitting donation details.");
      return;
    }

    if (!fullName || !mobile || !selectedAmount || !utrNumber) {
      alert("Please fill name, mobile number, amount and UTR number.");
      return;
    }

    try {
      setSubmitting(true);

      const receiptNo = `AMR-${Date.now()}`;
      const donationDate = new Date().toLocaleDateString("en-IN");

      const finalReceiptData = {
        receiptNo,
        date: donationDate,
        donorName: fullName,
        mobile,
        amount: Number(selectedAmount),
        utrNumber,
        status: "Pending Verification",
      };

      await addDoc(collection(db, "donations"), {
        userId: auth.currentUser.uid,
        email: auth.currentUser.email || "",
        receiptNo,
        donorName: fullName,
        mobile,
        amount: Number(selectedAmount),
        paymentMode: "UPI",
        utrNumber,
        screenshotUrl,
        status: "pending",
        donationDate: new Date().toISOString(),
        createdAt: serverTimestamp(),
      });

      setReceiptData(finalReceiptData);
      alert("Donation details submitted successfully.");

      setFullName("");
      setMobile("");
      setUtrNumber("");
      setScreenshotUrl("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="bg-[#faf9f5] min-h-screen px-5 py-20">
      <section className="max-w-6xl mx-auto">
        <h1 className="font-serif italic text-5xl md:text-7xl font-black text-[#081229] leading-tight mb-8">
          Your generosity is the <br /> spark of our change.
        </h1>

        <p className="text-gray-500 text-xl leading-8 max-w-2xl mb-10">
          Amarism is dedicated to educational empowerment, social welfare, and
          community impact.
        </p>

        <div className="bg-white rounded-[36px] p-6 md:p-12 shadow-xl border">
          <div className="bg-[#e8fbf3] rounded-3xl p-8 text-center mb-10">
            <p className="text-[#009f73] font-bold tracking-widest text-sm">
              ⭐ FOUNDATION PATRON PROTOCOL ⭐
            </p>

            <h2 className="text-2xl font-serif font-bold mt-3">
              Donate via UPI
            </h2>

            <p className="text-[#009f73] text-xs font-bold mt-2">
              MANUAL VERIFICATION ENABLED
            </p>
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
                    ? "bg-[#10b981] text-white"
                    : "bg-white border text-[#081229]"
                }`}
              >
                ₹{amount}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="bg-[#081229] rounded-3xl p-6 text-center text-white">
              <h3 className="text-2xl font-bold mb-3">Scan QR to Pay</h3>

              <div className="bg-white rounded-2xl p-4 inline-block">
                <Image
                  src="/amarism-qr.png"
                  alt="AMARISM UPI QR"
                  width={260}
                  height={480}
                  className="rounded-xl"
                />
              </div>

              <p className="mt-5 text-sm text-gray-200">
                Scan using PhonePe, Google Pay, Paytm, BHIM or any UPI app.
              </p>

              <button
                onClick={handleUpiPayment}
                className="mt-6 w-full bg-[#009f73] text-white rounded-2xl py-4 font-bold"
              >
                Pay ₹{selectedAmount} via UPI App
              </button>
            </div>

            <div id="donation-confirm-form">
              <h3 className="text-2xl font-bold text-[#081229] mb-5">
                Confirm Your Donation
              </h3>

              {!showConfirmForm && (
                <p className="text-sm text-gray-500 mb-5">
                  After completing payment, fill this form with your UTR number
                  to generate your donation record.
                </p>
              )}

              <div className="space-y-5">
                <input
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-gray-50 rounded-2xl px-6 py-5 outline-none border"
                />

                <input
                  placeholder="Mobile Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full bg-gray-50 rounded-2xl px-6 py-5 outline-none border"
                />

                <input
                  placeholder="UPI Transaction / UTR Number"
                  value={utrNumber}
                  onChange={(e) => setUtrNumber(e.target.value)}
                  className="w-full bg-gray-50 rounded-2xl px-6 py-5 outline-none border"
                />

                <input
                  placeholder="Payment Screenshot URL (optional)"
                  value={screenshotUrl}
                  onChange={(e) => setScreenshotUrl(e.target.value)}
                  className="w-full bg-gray-50 rounded-2xl px-6 py-5 outline-none border"
                />

                <button
                  onClick={handleSubmitDonation}
                  disabled={submitting}
                  className="w-full bg-[#009f73] text-white rounded-2xl py-5 font-black tracking-widest text-lg shadow-lg disabled:opacity-60"
                >
                  {submitting ? "SUBMITTING..." : "SUBMIT DONATION DETAILS"}
                </button>

                {receiptData && (
                  <button
                    onClick={() => downloadReceipt(receiptData)}
                    className="w-full bg-[#081229] text-white rounded-2xl py-4 font-bold"
                  >
                    Download Acknowledgement Receipt
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}