"use client";
import { useState } from "react";
import { MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactSection() {
  const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const handleSendMessage = () => {
  const text = `
Name: ${firstName} ${lastName}
Email: ${email}

Message:
${message}
  `;

  const whatsappNumber = "8341390975";

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
};
  return (
  <section
    id="contact"
    className="relative py-20 px-4 bg-white overflow-hidden"
  >
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Column - Contact Info */}
          <div>
            <span className="text-sm font-semibold tracking-wider text-[#0d9488] uppercase">
              Reach Out
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e5a] mt-2 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-8">
              Whether you want to volunteer your time, partner with us, or have
              a question, we are here to listen.
            </p>

            {/* Headquarters */}
            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="w-4 h-4 text-red-500" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1a2e5a]">Headquarters</h3>
                <p className="text-gray-600 text-sm">
                  16-07-68/FF-1 ALLAGUNTA,
                  <br />
                  CHITTOOR,Andhrapradesh -517582
                </p>
              </div>
            </div>

            {/* Email Support */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                <Mail className="w-4 h-4 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1a2e5a]">Email Support</h3>
                <p className="text-gray-600 text-sm">amarism2025@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1.5">
                    First Name
                  </label>
                  <Input
                    placeholder="First"
                    className="bg-white border-gray-200"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1.5">
                    Last Name
                  </label>
                  <Input
                    placeholder="Last Name"
                    className="bg-white border-gray-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1.5">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="name@example.com"
                  className="bg-white border-gray-200"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d9488]"
                />
              </div>

              <Button
  type="button"
  onClick={handleSendMessage}
                className="w-full bg-[#0d9488] hover:bg-[#0d9488]/90 text-white rounded-full"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
    </section>
  );
}
