"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function SignInPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      router.push("/profile");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      alert("Please enter your email first");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent to your email");
    } catch (error) {
      alert("Unable to send reset link. Please check your email.");
    }
  };

  const handleGoogleSignin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert("Google Login Successful!");
      router.push("/profile");
    } catch (error: any) {
      if (error.code === "auth/popup-closed-by-user") return;
      alert("Unable to sign in with Google. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fbff]">
      <Navbar />

      <section className="pt-32 px-6 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-[#081229] mb-8">
            Login
          </h1>

          <div className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-3 pr-12 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            <button
              type="button"
              onClick={handleForgotPassword}
              className="block mx-auto text-sm text-blue-600 cursor-pointer"
            >
              Forgot password?
            </button>

            <button
              onClick={handleEmailLogin}
              className="w-full bg-[#087bdc] text-white py-3 rounded-md font-semibold"
            >
              Login
            </button>

            <p className="text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <a href="/signup" className="text-blue-600 font-medium">
                Signup
              </a>
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