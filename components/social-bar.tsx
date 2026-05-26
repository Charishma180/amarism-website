"use client";

import {
  Linkedin,
  Mail,
  Facebook,
  MessageCircleMore,
  Instagram,
} from "lucide-react";

export function SocialBar() {
  return (
   <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
  <div className="bg-[#2d2d2d] rounded-2xl shadow-2xl py-2 px-3">
    <div className="flex items-center justify-center gap-3">

          {/* LinkedIn */}
          <a
            href="Check out Amarism AP’s profile on LinkedIn https://in.linkedin.com/in/amarism-ap-215964411"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 rounded-2xl bg-[#0077b5]/15 hover:bg-[#0077b5] transition-all duration-300 flex items-center justify-center"
          >
            <Linkedin className="w-5 h-5 text-[#0077b5] group-hover:text-white transition-colors" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://api.whatsapp.com/send?phone=918341390975"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-9 h-9 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366] transition-all duration-300 flex items-center justify-center"
          >
<img
  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
  alt="WhatsApp"
  className="w-5 h-5"
/>          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/amarism_ap?igsh=MTFteGc3YmhhazVreg=="
            target="_blank"
            rel="noopener noreferrer"
            className="group w-9 h-9 rounded-xl bg-pink-500/15 hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] transition-all duration-300 flex items-center justify-center"
          >
            <Instagram className="w-5 h-5 text-pink-400 group-hover:text-white transition-colors" />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/14jBLr1k5yv/"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-9 h-9 rounded-xl bg-[#1877f2]/15 hover:bg-[#1877f2] transition-all duration-300 flex items-center justify-center"
          >
            <Facebook className="w-5 h-5 text-[#1877f2] group-hover:text-white transition-colors" />
          </a>

          {/* Gmail */}
          <a
            href="mailto:amarism2025@gmail.com"
            className="group w-12 h-12 rounded-2xl bg-[#ea4335]/15 hover:bg-[#ea4335] transition-all duration-300 flex items-center justify-center"
          >
            <Mail className="w-5 h-5 text-[#ea4335] group-hover:text-white transition-colors" />
          </a>

        </div>
      </div>
    </div>
  );
}