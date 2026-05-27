"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function SignInPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailAuth = async () => {
    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup successful!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
      }
    }
  };

  const handleGoogleSignin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert("Google Login Successful!");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fbff]">
      <Navbar />

      <section className="pt-32 px-6 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-[#081229] mb-8">
            {isSignup ? "Signup" : "Login"}
          </h1>

          <div className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none"
            />

            <input
              type="password"
              placeholder={isSignup ? "Create password" : "Password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none"
            />

            {!isSignup && (
              <p className="text-center text-sm text-blue-600 cursor-pointer">
                Forgot password?
              </p>
            )}

            <button
              onClick={handleEmailAuth}
              className="w-full bg-[#087bdc] text-white py-3 rounded-md font-semibold"
            >
              {isSignup ? "Signup" : "Login"}
            </button>

            <p className="text-center text-sm text-gray-600">
              {isSignup ? "Already have an account? " : "Don’t have an account? "}
              <button
                onClick={() => setIsSignup(!isSignup)}
                className="text-blue-600 font-medium"
              >
                {isSignup ? "Login" : "Signup"}
              </button>
            </p>

            <div className="flex items-center gap-3">
              <div className="h-px bg-gray-200 flex-1"></div>
              <span className="text-gray-400 text-sm">Or</span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignin}
              className="w-full border border-gray-300 rounded-md py-3 flex items-center justify-center gap-3 text-gray-700"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Login with Google
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}