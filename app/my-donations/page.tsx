"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "@/lib/firebase";
import { Navbar } from "@/components/navbar";
import jsPDF from "jspdf";

export default function MyDonationsPage() {
  const [donations, setDonations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const getReceiptDate = (receiptData: any) => {
    if (receiptData?.createdAt?.seconds) {
      return new Date(receiptData.createdAt.seconds * 1000).toLocaleDateString(
        "en-IN"
      );
    }

    if (receiptData?.donationDate) {
      return new Date(receiptData.donationDate).toLocaleDateString("en-IN");
    }

    return "N/A";
  };

  const downloadReceipt = (receiptData: any) => {
    const doc = new jsPDF();
    const receiptDate = getReceiptDate(receiptData);

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
    doc.text("OFFICIAL DONATION RECEIPT", 52, 55);

    doc.setFillColor(232, 251, 243);
    doc.roundedRect(140, 62, 50, 12, 3, 3, "F");

    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text(receiptData.receiptNo || "AMR-RECEIPT", 148, 70);

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Donor Information", 20, 85);

    doc.setLineWidth(0.3);
    doc.line(20, 88, 190, 88);

    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");

    doc.text("Name", 20, 105);
    doc.text(`: ${receiptData.donorName || "Donor"}`, 55, 105);

    doc.text("Mobile", 20, 120);
    doc.text(`: ${receiptData.mobile || "N/A"}`, 55, 120);

    doc.text("Date", 20, 135);
    doc.text(`: ${receiptDate}`, 55, 135);

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Donation Details", 20, 160);

    doc.line(20, 163, 190, 163);

    const amountText = `Rs. ${Number(receiptData.amount || 0).toLocaleString(
      "en-IN"
    )}`;

    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");

    doc.text("Amount", 20, 180);
    doc.text(`: ${amountText}`, 55, 180);

    doc.text("Payment ID", 20, 195);
    doc.text(`: ${receiptData.paymentId || "N/A"}`, 55, 195);

    doc.text("Order ID", 20, 210);
    doc.text(`: ${receiptData.orderId || "N/A"}`, 55, 210);

    doc.setFillColor(232, 251, 243);
    doc.roundedRect(20, 225, 170, 25, 3, 3, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Thank you for supporting AMARISM and creating impact.", 28, 240);

    doc.setFont("helvetica", "italic");
    doc.setFontSize(10);
    doc.text("Authorized by AMARISM Foundation", 20, 270);

    doc.setFont("helvetica", "normal");
    doc.text("www.amarism.org", 145, 270);

    doc.save(`${receiptData.receiptNo || "AMARISM-RECEIPT"}.pdf`);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);

      if (!user?.email) {
        setDonations([]);
        setLoading(false);
        return;
      }

      const donationsQuery = query(
        collection(db, "donations"),
        where("email", "==", user.email)
      );

      const snapshot = await getDocs(donationsQuery);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setDonations(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="min-h-screen bg-[#f8fbfb]">
      <Navbar />

      <section className="pt-36 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#081229] mb-8">
            My Donations
          </h1>

          {loading ? (
            <p>Loading...</p>
          ) : donations.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 shadow">
              <p>No donations found for this account.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {donations.map((donation) => (
                <div
                  key={donation.id}
                  className="bg-white rounded-2xl shadow p-6"
                >
                  <p>
                    <b>Receipt No:</b> {donation.receiptNo || "N/A"}
                  </p>

                  <p>
                    <b>Date:</b> {getReceiptDate(donation)}
                  </p>

                  <p>
                    <b>Amount:</b> Rs.{" "}
                    {Number(donation.amount || 0).toLocaleString("en-IN")}
                  </p>

                  <p>
                    <b>Payment ID:</b> {donation.paymentId}
                  </p>

                  <p>
                    <b>Status:</b> {donation.status}
                  </p>

                  <button
                    type="button"
                    onClick={() => downloadReceipt(donation)}
                    className="mt-4 bg-[#081229] text-white px-5 py-2 rounded-lg"
                  >
                    Download Receipt
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}