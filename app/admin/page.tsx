"use client";

import jsPDF from "jspdf";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useRouter } from "next/navigation";
import {
  Users,
  UserCheck,
  HeartHandshake,
  Crown,
  HandCoins,
  IndianRupee,
  Receipt,
  UserPlus,
  MessageSquare,
} from "lucide-react";

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
  const [contacts, setContacts] = useState<any[]>([]);

  const downloadReceipt = (receiptData: any) => {
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
    doc.text("OFFICIAL DONATION RECEIPT", 52, 55);

    doc.setFillColor(232, 251, 243);
    doc.roundedRect(140, 62, 50, 12, 3, 3, "F");

    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text(receiptData.receiptNo || "AMR-RECEIPT", 148, 70);

    doc.setFontSize(14);
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
    doc.text(`: ${new Date().toLocaleDateString("en-IN")}`, 55, 135);

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

      const usersQuery = query(collection(db, "users"), orderBy("createdAt", "desc"));
      const donationsQuery = query(collection(db, "donations"), orderBy("createdAt", "desc"));
      const contactsQuery = query(collection(db, "contacts"), orderBy("createdAt", "desc"));

      const usersSnapshot = await getDocs(usersQuery);
      const donationsSnapshot = await getDocs(donationsQuery);
      const contactsSnapshot = await getDocs(contactsQuery);

      setUsers(usersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setDonations(donationsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setContacts(contactsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const totalUsers = users.length;
  const totalInterns = users.filter((u) => u.role === "intern").length;
  const totalVolunteers = users.filter((u) => u.role === "volunteer").length;
  const totalPatrons = users.filter((u) => u.role === "patron").length;
  const totalDonations = donations.length;
  const totalAmount = donations.reduce((sum, donation) => sum + Number(donation.amount || 0), 0);

  const dashboardCards = [
    { label: "Total Users", value: totalUsers, icon: Users, color: "bg-blue-100 text-blue-700" },
    { label: "Interns", value: totalInterns, icon: UserCheck, color: "bg-indigo-100 text-indigo-700" },
    { label: "Volunteers", value: totalVolunteers, icon: HeartHandshake, color: "bg-green-100 text-green-700" },
    { label: "Patrons", value: totalPatrons, icon: Crown, color: "bg-yellow-100 text-yellow-700" },
    { label: "Donations", value: totalDonations, icon: HandCoins, color: "bg-emerald-100 text-emerald-700" },
    { label: "Amount Raised", value: `₹${totalAmount.toLocaleString("en-IN")}`, icon: IndianRupee, color: "bg-teal-100 text-teal-700" },
    { label: "Messages", value: contacts.length, icon: MessageSquare, color: "bg-pink-100 text-pink-700" },
  ];

  if (loading) return <p className="pt-32 text-center">Loading admin dashboard...</p>;

  if (!isAdmin) {
    return (
      <main className="min-h-screen bg-[#f8fbfb]">
        <Navbar />
        <section className="pt-40 px-6 text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">Access Denied</h1>
          <p className="text-gray-600">This page is available only for AMARISM admins.</p>
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-6 mb-12">
            {dashboardCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.label}
                  className="bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${card.color}`}>
                      <Icon size={20} />
                    </div>
                    <p className="text-gray-500 text-sm font-semibold">{card.label}</p>
                  </div>

                  <h2 className="text-3xl font-bold text-[#081229]">{card.value}</h2>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-3xl shadow-md border overflow-hidden mb-12">
            <div className="p-6 border-b">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-[#081229]">
                <Receipt className="text-[#0d9488]" size={26} />
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
                    <th className="p-4">Receipt</th>
                  </tr>
                </thead>

                <tbody>
                  {donations.length === 0 ? (
                    <tr>
                      <td className="p-4 text-gray-500" colSpan={6}>
                        No donations yet.
                      </td>
                    </tr>
                  ) : (
                    donations.map((donation) => (
                      <tr key={donation.id} className="border-t">
                        <td className="p-4 font-semibold">{donation.donorName || "-"}</td>
                        <td className="p-4">{donation.mobile || "-"}</td>
                        <td className="p-4 font-bold text-[#0d9488]">
                          ₹{Number(donation.amount || 0).toLocaleString("en-IN")}
                        </td>
                        <td className="p-4 text-sm">{donation.paymentId || "-"}</td>
                        <td className="p-4 capitalize">{donation.status || "-"}</td>
                        <td className="p-4">
                          <button
                            type="button"
                            onClick={() => downloadReceipt(donation)}
                            className="bg-[#081229] hover:bg-[#10264d] text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
                          >
                            Download
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-md border overflow-hidden mb-12">
            <div className="p-6 border-b">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-[#081229]">
                <MessageSquare className="text-[#0d9488]" size={26} />
                Recent Messages
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#f8fbfb]">
                  <tr>
                    <th className="p-4">Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Message</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {contacts.length === 0 ? (
                    <tr>
                      <td className="p-4 text-gray-500" colSpan={4}>
                        No messages yet.
                      </td>
                    </tr>
                  ) : (
                    contacts.map((contact) => (
                      <tr key={contact.id} className="border-t align-top">
                        <td className="p-4 font-semibold">
                          {contact.firstName} {contact.lastName}
                        </td>
                        <td className="p-4">{contact.email || "-"}</td>
                        <td className="p-4 max-w-md">{contact.message || "-"}</td>
                        <td className="p-4 capitalize">{contact.status || "new"}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-md border overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-[#081229]">
                <UserPlus className="text-[#0d9488]" size={26} />
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
                      <td className="p-4 font-semibold">{user.fullName || "-"}</td>
                      <td className="p-4">{user.email || "-"}</td>
                      <td className="p-4 capitalize">{user.role || "-"}</td>
                      <td className="p-4 font-bold text-[#0d9488]">{user.memberId || "-"}</td>
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