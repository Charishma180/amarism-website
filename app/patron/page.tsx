"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import jsPDF from "jspdf";

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => { open: () => void };
  }
}

export default function PatronPage() {
  const [selectedAmount, setSelectedAmount] = useState("99");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [receiptData, setReceiptData] = useState<any>(null);

  const loadRazorpayCheckout = () =>
    new Promise<boolean>((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

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

  const handleRazorpayPayment = async () => {
    if (!auth.currentUser) {
      alert("Please login before making a donation.");
      return;
    }

    if (!fullName || !mobile) {
      alert("Please fill your name and mobile number.");
      return;
    }

    try {
      setSubmitting(true);

      const orderResponse = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Number(selectedAmount) }),
      });
      const order = await orderResponse.json();

      if (!orderResponse.ok) {
        throw new Error(order.error || "Unable to start payment");
      }

      const checkoutLoaded = await loadRazorpayCheckout();
      if (!checkoutLoaded) {
        throw new Error("Unable to load the payment window. Please try again.");
      }

      const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY;
      if (!key) {
        throw new Error("Payment gateway is not configured");
      }

      const receiptNo = `AMR-${Date.now()}`;
      const donationDate = new Date().toLocaleDateString("en-IN");

      const razorpay = new window.Razorpay({
        key,
        amount: order.amount,
        currency: order.currency,
        name: "AMARISM",
        description: "Patron Donation",
        image: "/amarism-logo.jpeg",
        order_id: order.id,
        prefill: { name: fullName, contact: mobile },
        theme: { color: "#009f73" },
        modal: { ondismiss: () => setSubmitting(false) },
        handler: async (response: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string }) => {
          try {
            const verificationResponse = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                orderId: order.id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
              }),
            });

            if (!verificationResponse.ok) {
              throw new Error("Payment could not be verified");
            }

            const finalReceiptData = {
              receiptNo,
              date: donationDate,
              donorName: fullName,
              mobile,
              amount: Number(selectedAmount),
              utrNumber: response.razorpay_payment_id,
              status: "Payment Verified",
            };

            await addDoc(collection(db, "donations"), {
              userId: auth.currentUser?.uid,
              email: auth.currentUser?.email || "",
              receiptNo,
              donorName: fullName,
              mobile,
              amount: Number(selectedAmount),
              paymentMode: "Razorpay",
              razorpayOrderId: order.id,
              razorpayPaymentId: response.razorpay_payment_id,
              status: "verified",
              donationDate: new Date().toISOString(),
              createdAt: serverTimestamp(),
            });

            setReceiptData(finalReceiptData);
            setFullName("");
            setMobile("");
            alert("Payment successful. Your donation has been verified.");
          } catch (error) {
            console.error(error);
            alert("Payment was completed, but verification failed. Please contact AMARISM with your payment ID.");
          } finally {
            setSubmitting(false);
          }
        },
      });

      razorpay.open();
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : "Something went wrong. Please try again.");
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
              Secure Online Donation
            </h2>

            <p className="text-[#009f73] text-xs font-bold mt-2">
              RAZORPAY SECURE CHECKOUT
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
            <div className="bg-[#081229] rounded-3xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Pay Securely with Razorpay</h3>
              <p className="text-sm leading-6 text-gray-200">
                Choose UPI, cards, net banking, or any payment method enabled in
                the Razorpay checkout window.
              </p>
              <div className="mt-8 rounded-2xl bg-white/10 p-5 text-sm text-gray-200">
                Your payment is verified securely before AMARISM records your
                donation and generates an acknowledgement receipt.
              </div>
            </div>

            <div id="donation-confirm-form">
              <h3 className="text-2xl font-bold text-[#081229] mb-5">
                Confirm Your Donation
              </h3>

              <p className="text-sm text-gray-500 mb-5">
                Enter your details and use Razorpay secure checkout to complete
                your donation.
              </p>

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
                  value={`Selected Amount: ₹${selectedAmount}`}
                  readOnly
                  className="w-full bg-gray-100 rounded-2xl px-6 py-5 outline-none border font-bold text-[#081229]"
                />

                <button
                  onClick={handleRazorpayPayment}
                  disabled={submitting}
                  className="w-full bg-[#009f73] text-white rounded-2xl py-5 font-black tracking-widest text-lg shadow-lg disabled:opacity-60"
                >
                  {submitting ? "OPENING PAYMENT..." : `PAY ₹${selectedAmount} SECURELY`}
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
