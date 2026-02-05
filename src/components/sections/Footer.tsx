"use client";

import Image from "next/image";
import logo from "@/images/logo.png";

export default function Footer() {
  return (
    <footer className="">
      <div className="container mx-auto px-5 flex pb-20 justify-between items-center gap-20 max-sm:flex-col">
        {/* Logo */}
        <Image
          src={logo}
          alt="WarnaGo"
          className="w-32 h-auto max-sm:w-24 flex-1 grow-0"
        />
        <p className="font-body text-sm text-gray-500 flex-1 text-right max-sm:text-center">
          Daftar jadi partner:{" "}
          <a
            href="mailto:warnaindahnusadaya@gmail.com"
            className="text-black font-semibold max-sm:block"
          >
            warnaindahnusadaya@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
