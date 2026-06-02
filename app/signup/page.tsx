"use client";

import { useState } from "react";
import Link from "next/link";

import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";

import { auth, db } from "@/lib/firebase";

import { Navbar } from "@/components/navbar";
import { AmarismFooter } from "@/components/amarism-footer";
import { SocialBar } from "@/components/social-bar";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", userCredential.user.uid), {
        fullName,
        email,
        username,
        createdAt: new Date(),
      });

      alert("Account created successfully!");
    } catch (error: any) {
  if (error.code === "auth/popup-closed-by-user") return;

  alert("Invalid credentials");
}
  };

  const handleGoogleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);

      await setDoc(doc(db, "users", result.user.uid), {
        fullName: result.user.displayName,
        email: result.user.email,
        username: result.user.displayName,
        createdAt: new Date(),
      });

      alert("Google Sign Up Successful!");
    } catch (error: any) {
      alert(error.message);
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

          <form
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-sm font-bold text-[#081229] mb-2">
                FULL NAME
              </label>

              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#081229] mb-2">
                EMAIL ADDRESS
              </label>

              <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none"
  placeholder="Enter your email address"
/>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#081229] mb-2">
                USERNAME
              </label>

              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none"
                placeholder="Choose a username"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#081229] mb-2">
                PASSWORD
              </label>

              <div className="relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 pr-12 outline-none"
                  placeholder="Create a strong password"
                  type={showPassword ? "text" : "password"}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSignup}
              className="w-full bg-[#082f73] text-white py-4 rounded-xl font-bold hover:bg-[#061f4d] transition-all"
            >
              SIGN UP
            </button>

            <div className="text-center text-gray-400 text-sm">
              OR CONTINUE WITH
            </div>

            <button
  type="button"
  onClick={handleGoogleSignup}
  className="w-full border border-gray-200 rounded-xl py-4 font-semibold text-[#081229] flex items-center justify-center gap-3"
>
  <img
    src="https://www.svgrepo.com/show/475656/google-color.svg"
    alt="Google"
    className="w-6 h-6"
  />
  Continue with Google
</button>

            <p className="text-center text-gray-600">
              Already have an account?{" "}

              <Link
                href="/signin"
                className="text-[#082f73] font-bold hover:underline"
              >
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