"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useRouter } from "next/navigation";

import { auth, db } from "@/lib/firebase";
import { Navbar } from "@/components/navbar";

const admins = [
  "charishmapillapalem@gmail.com",
  "vadimgaduramu@gmail.com",
  "vadimgaduramu7@gmail.com",
];

export default function AdminPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState<any[]>([]);
  const [donations, setDonations] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/signin");
        return;
      }

      const email = user.email?.toLowerCase() || "";

      if (!admins.includes(email)) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      setIsAdmin(true);

      const usersQuery = query(
        collection(db, "users"),
        orderBy("createdAt", "desc")
      );

      const donationsQuery = query(
        collection(db, "donations"),
        orderBy("createdAt", "desc")
      );

      const usersSnapshot = await getDocs(usersQuery);
      const donationsSnapshot = await getDocs(donationsQuery);

      const usersData = usersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const donationsData = donationsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setUsers(usersData);
      setDonations(donationsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const totalUsers = users.length;
  const totalInterns = users.filter((u) => u.role === "intern").length;
  const totalVolunteers = users.filter((u) => u.role === "volunteer").length;
  const totalPatrons = users.filter((u) => u.role === "patron").length;

  const totalDonations = donations.length;
  const totalAmount = donations.reduce(
    (sum, donation) => sum + Number(donation.amount || 0),
    0
  );

  if (loading) {
    return <p className="pt-32 text-center">Loading admin dashboard...</p>;
  }

  if (!isAdmin) {
    return (
      <main className="min-h-screen bg-[#f8fbfb]">
        <Navbar />

        <section className="pt-40 px-6 text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">
            Access Denied
          </h1>

          <p className="text-gray-600">
            This page is available only for AMARISM admins.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8fbfb]">
      <Navbar />

      <section className="pt-32 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#0d9488] font-bold tracking-[0.25em] uppercase mb-4">
            Admin Panel
          </p>

          <h1 className="text-5xl font-bold text-[#081229] mb-10">
            AMARISM Dashboard
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-12">
            {[
              ["Total Users", totalUsers],
              ["Interns", totalInterns],
              ["Volunteers", totalVolunteers],
              ["Patrons", totalPatrons],
              ["Donations", totalDonations],
              ["Amount Raised", `₹${totalAmount}`],
            ].map(([label, value]) => (
              <div
                key={label}
                className="bg-white rounded-3xl shadow-md p-6 border"
              >
                <p className="text-gray-500 text-sm font-semibold mb-3">
                  {label}
                </p>

                <h2 className="text-3xl font-bold text-[#081229]">
                  {value}
                </h2>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-md border overflow-hidden mb-12">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-[#081229]">
                Recent Donations
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#f8fbfb]">
                  <tr>
                    <th className="p-4">Donor</th>
                    <th className="p-4">Mobile</th>
                    <th className="p-4">Amount</th>
                    <th className="p-4">Payment ID</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {donations.length === 0 ? (
                    <tr>
                      <td className="p-4 text-gray-500" colSpan={5}>
                        No donations yet.
                      </td>
                    </tr>
                  ) : (
                    donations.map((donation) => (
                      <tr key={donation.id} className="border-t">
                        <td className="p-4 font-semibold">
                          {donation.donorName || "-"}
                        </td>
                        <td className="p-4">{donation.mobile || "-"}</td>
                        <td className="p-4 font-bold text-[#0d9488]">
                          ₹{donation.amount || 0}
                        </td>
                        <td className="p-4 text-sm">
                          {donation.paymentId || "-"}
                        </td>
                        <td className="p-4 capitalize">
                          {donation.status || "-"}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-md border overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-[#081229]">
                Recent Registrations
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#f8fbfb]">
                  <tr>
                    <th className="p-4">Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Role</th>
                    <th className="p-4">Member ID</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-t">
                      <td className="p-4 font-semibold">
                        {user.fullName || "-"}
                      </td>
                      <td className="p-4">{user.email || "-"}</td>
                      <td className="p-4 capitalize">{user.role || "-"}</td>
                      <td className="p-4 font-bold text-[#0d9488]">
                        {user.memberId || "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}