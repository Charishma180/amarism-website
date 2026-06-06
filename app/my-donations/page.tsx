"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "@/lib/firebase";
import { Navbar } from "@/components/navbar";

export default function MyDonationsPage() {
  const [donations, setDonations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonations = async () => {
      const user = auth.currentUser;

      if (!user) {
        setLoading(false);
        return;
      }

      const q = query(
        collection(db, "donations"),
        where("email", "==", user.email)
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setDonations(data);
      setLoading(false);
    };

    const unsubscribe = onAuthStateChanged(auth, () => {
      fetchDonations();
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
              <p>No donations found.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {donations.map((donation) => (
                <div
                  key={donation.id}
                  className="bg-white rounded-2xl shadow p-6"
                >
                  <p>
                    <b>Receipt No:</b> {donation.receiptNo}
                  </p>

                  <p>
                    <b>Amount:</b> ₹{donation.amount}
                  </p>

                  <p>
                    <b>Payment ID:</b> {donation.paymentId}
                  </p>

                  <p>
                    <b>Status:</b> {donation.status}
                  </p>

                  <button className="mt-4 bg-[#081229] text-white px-5 py-2 rounded-lg">
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