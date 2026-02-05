"use client";

import Image from "next/image";
import logo from "@/images/logo.png";

export default function Footer() {
  return (
    <footer className="">
      <div className="container mx-auto px-5 flex pb-20 justify-between items-center">
        {/* Logo */}
        <Image
          src={logo}
          alt="WarnaGo"
          className="w-32 h-auto max-sm:w-24"
        />
        <p className="font-body text-sm text-gray-500">
          daftar jadi partner:{" "}
          <a
            href="mailto:support@warnago.com"
            className="text-black font-semibold"
          >
            support@warnago.com
          </a>
        </p>
      </div>
    </footer>
  );
}
