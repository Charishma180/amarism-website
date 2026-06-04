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
    return <p className="pt-32 text-center">Loading profile...</p>;
  }

  return (
    <main className="min-h-screen bg-[#f8fbfb]">
      <Navbar />

      <section className="pt-36 px-6">
        <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-[#081229] text-center mb-8">
            My Profile
          </h1>

          <div className="space-y-4 text-lg">
            <p>
              <b>Name:</b> {userData?.fullName}
            </p>

            <p>
              <b>Email:</b> {userData?.email}
            </p>

            <p>
              <b>Role:</b> {userData?.role}
            </p>

            <p>
              <b>Member ID:</b> {userData?.memberId}
            </p>
          </div>

          {/* ADMIN DASHBOARD BUTTON */}
          {admins.includes(userData?.email?.toLowerCase()) && (
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