"use client";

import { useState } from "react";
import {
  MapPin,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    const text = `Name: ${firstName} ${lastName}
Email: ${email}

Message:
${message}`;

    window.open(
      `https://wa.me/918341390975?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-white pt-28">
        <div className="max-w-7xl mx-auto px-10 py-20 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-lg font-bold text-green-700 uppercase mb-6">
              Reach Out
            </p>

            <h1 className="text-6xl font-extrabold text-[#101828] mb-8">
              Contact Us
            </h1>

            <p className="text-2xl leading-10 text-gray-600 mb-12 max-w-xl">
              Whether you want to volunteer your time, partner with us, or have
              a question, we are here to listen.
            </p>

            <div className="space-y-6">
              <div className="flex gap-6 border rounded-2xl p-7">
                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-red-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#101828]">
                    Headquarters
                  </h3>
                  <p className="text-xl text-gray-600 leading-8">
                    16-07-68/FF-1 ALLAGUNTA,
                    <br />
                    CHITTOOR, Andhrapradesh-517582
                  </p>
                </div>
              </div>

              <div className="flex gap-6 border rounded-2xl p-7">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                  <Mail className="w-7 h-7 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#101828]">
                    Email Support
                  </h3>
                  <p className="text-xl text-gray-600">amarism2025@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-2xl p-8 shadow-sm">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-xl font-bold">First Name</label>
                <Input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First"
                  className="h-14 mt-3 text-lg"
                />
              </div>

              <div>
                <label className="text-xl font-bold">Last Name</label>
                <Input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  className="h-14 mt-3 text-lg"
                />
              </div>
            </div>

            <label className="text-xl font-bold">Email Address</label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="h-14 mt-3 mb-6 text-lg"
            />

            <label className="text-xl font-bold">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              placeholder="How can we help you?"
              className="w-full mt-3 mb-8 rounded-lg border px-4 py-3 text-lg"
            />

            <Button
              onClick={handleSendMessage}
              className="w-full h-14 bg-green-700 hover:bg-green-800 text-white text-xl rounded-lg"
            >
              Send Message
            </Button>
          </div>
        </div>

        <footer className="border-t bg-[#f7fbf8] py-8">
          <div className="max-w-7xl mx-auto px-10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/amarism-logo.jpeg"
                className="w-14 h-14 rounded-full"
              />
              
            </div>

            <div className="flex gap-6">
  <a
    href="https://www.facebook.com/share/14jBLr1k5yv/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Facebook className="w-8 h-8 text-[#12382b] hover:scale-110 transition" />
  </a>

  <a
    href="https://www.instagram.com/amarism_ap?igsh=MTFteGc3YmhhazVreg=="
    target="_blank"
    rel="noopener noreferrer"
  >
    <Instagram className="w-8 h-8 text-[#12382b] hover:scale-110 transition" />
  </a>

  <a
    href="https://wa.me/918341390975"
    target="_blank"
    rel="noopener noreferrer"
  >
    <MessageCircle className="w-8 h-8 text-[#12382b] hover:scale-110 transition" />
  </a>

  <a
    href="https://in.linkedin.com/in/amarism-ap-215964411"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin className="w-8 h-8 text-[#12382b] hover:scale-110 transition" />
  </a>

  <a href="mailto:amarism2025@gmail.com">
    <Mail className="w-8 h-8 text-[#12382b] hover:scale-110 transition" />
  </a>
</div>
          </div>
        </footer>
      </section>
    </>
  );
}