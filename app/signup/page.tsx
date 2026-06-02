"use client";

import { useState } from "react";
import Link from "next/link";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { doc, setDoc, runTransaction } from "firebase/firestore";
import { useRouter } from "next/navigation";

import { auth, db } from "@/lib/firebase";
import { Navbar } from "@/components/navbar";
import { AmarismFooter } from "@/components/amarism-footer";
import { SocialBar } from "@/components/social-bar";

export default function SignupPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("intern");

  const generateMemberId = async (selectedRole: string) => {
    const counterRef = doc(db, "counters", selectedRole);

    return await runTransaction(db, async (transaction) => {
      const counterDoc = await transaction.get(counterRef);

      if (!counterDoc.exists()) {
        throw new Error("Counter not found");
      }

      const currentNumber = counterDoc.data().lastNumber;
      transaction.update(counterRef, {
        lastNumber: currentNumber + 1,
      });

      const prefix =
        selectedRole === "intern"
          ? "INT"
          : selectedRole === "volunteer"
          ? "VOL"
          : "PAT";

      return `${prefix}-${String(currentNumber).padStart(4, "0")}`;
    });
  };

  const handleSignup = async () => {
    try {
      if (!fullName || !email || !username || !password || !role) {
        alert("Please fill all fields");
        return;
      }

      const memberId = await generateMemberId(role);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", userCredential.user.uid), {
        uid: userCredential.user.uid,
        fullName,
        email,
        username,
        role,
        memberId,
        createdAt: new Date(),
      });

      alert("Account created successfully!");
      router.push("/profile");
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        alert("This email is already registered. Please login.");
      } else if (error.code === "auth/weak-password") {
        alert("Password should be at least 6 characters.");
      } else {
        alert("Signup failed. Please try again.");
      }
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const memberId = await generateMemberId(role);

      await setDoc(doc(db, "users", result.user.uid), {
        uid: result.user.uid,
        fullName: result.user.displayName || fullName,
        email: result.user.email,
        username: result.user.displayName || username,
        role,
        memberId,
        createdAt: new Date(),
      });

      alert("Google Sign Up Successful!");
      router.push("/profile");
    } catch (error: any) {
      if (error.code === "auth/popup-closed-by-user") return;
      alert("Google signup failed. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fbfb]">
      <Navbar />

      <section className="pt-36 pb-24 px-6">
        <div className="max-w-xl mx-auto bg-white rounded-[40px] shadow-2xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-center text-[#081229] mb-2">
            Sign Up!
          </h2>

          <p className="text-center text-gray-500 mb-10">
            Let’s create an impact together.
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <input value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full rounded-xl border px-5 py-4" placeholder="Enter your full name" />

            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border px-5 py-4" placeholder="Enter your email address" />

            <input value={username} onChange={(e) => setUsername(e.target.value)} className="w-full rounded-xl border px-5 py-4" placeholder="Choose a username" />

            <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full rounded-xl border px-5 py-4">
              <option value="intern">Intern</option>
              <option value="volunteer">Volunteer</option>
              <option value="patron">Patron</option>
            </select>

            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border px-5 py-4 pr-12"
                placeholder="Create a strong password"
                type={showPassword ? "text" : "password"}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2">
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            <button type="button" onClick={handleSignup} className="w-full bg-[#082f73] text-white py-4 rounded-xl font-bold">
              SIGN UP
            </button>

            <button type="button" onClick={handleGoogleSignup} className="w-full border rounded-xl py-4 font-semibold">
              Continue with Google
            </button>

            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <Link href="/signin" className="text-[#082f73] font-bold">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </section>

      <AmarismFooter />
      <SocialBar />
    </main>
  );
}