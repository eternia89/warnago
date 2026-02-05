"use client";

import Image from "next/image";
import logo from "@/images/logo.png";
import instagramIcon from "@/images/instagram.svg";
import whatsappIcon from "@/images/whatsapp.svg";

export default function Footer() {
  return (
    <footer className="bg-bg-dark py-12 max-sm:py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Image
            src={logo}
            alt="WarnaGo"
            className="w-32 h-auto max-sm:w-24"
          />

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/warnago"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Image src={instagramIcon} alt="Instagram" className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Image src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="font-body text-sm text-gray-500">
            &copy; {new Date().getFullYear()} WarnaGo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
