"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

import { auth, db } from "@/lib/firebase";
import { Navbar } from "@/components/navbar";

const admins = [
  "charishmapillapalem@gmail.com",
  "vadimgaduramu@gmail.com",
];

export default function ProfilePage() {
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/signin");
        return;
      }

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setUserData(userSnap.data());
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    alert("Logged out successfully!");
    router.push("/");
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f8fbfb]">
        <Navbar />
        <p className="pt-32 text-center">Loading profile...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8fbfb]">
      <Navbar />

      <section className="pt-36 px-6 pb-20">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#1a2e5a] text-white flex items-center justify-center text-4xl font-bold">
              {userData?.fullName?.charAt(0) || "U"}
            </div>

            <h1 className="text-3xl font-bold text-[#081229] mt-4 text-center">
              {userData?.fullName || "User"}
            </h1>

            <p className="text-gray-500 text-center">{userData?.email}</p>

            <div className="mt-4 flex gap-3 flex-wrap justify-center">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold capitalize">
                {userData?.role || "Member"}
              </span>

              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                {userData?.memberId || "ID Pending"}
              </span>
            </div>
          </div>

          <div className="mt-8 border-t pt-6 space-y-4">
            <div className="flex justify-between gap-4">
              <span className="font-medium text-gray-500">Name</span>
              <span className="font-semibold text-right">
                {userData?.fullName || "Not available"}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="font-medium text-gray-500">Email</span>
              <span className="font-semibold text-right break-all">
                {userData?.email || "Not available"}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="font-medium text-gray-500">Role</span>
              <span className="font-semibold capitalize">
                {userData?.role || "Not available"}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="font-medium text-gray-500">Member ID</span>
              <span className="font-semibold">
                {userData?.memberId || "Not available"}
              </span>
            </div>
          </div>

          {admins.includes(userData?.email?.toLowerCase() || "") && (
            <a
              href="/admin"
              className="block mt-8 w-full bg-[#081229] hover:bg-[#10264d] text-white py-3 rounded-xl font-bold text-center transition"
            >
              Open Admin Dashboard
            </a>
          )}

          <button
            onClick={handleLogout}
            className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-bold transition"
          >
            Logout
          </button>
        </div>
      </section>
    </main>
  );
}