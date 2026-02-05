"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "@/images/logo.png";
import splash from "@/images/splash.png";
import bgMain from "@/images/bg-main.jpg";
import Link from "next/link";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative h-[90lvh] max-sm:h-[70lvh] bg-bg-dark overflow-hidden flex flex-col items-center justify-center">
      {/* Background texture */}
      <Image
        src={bgMain}
        alt="Colorful paint texture background"
        fill
        className={`bg-top transition-opacity duration-700 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        priority
      />
      <div className="bg-linear-to-t from-bg-dark to-transparent w-full h-[300px] absolute bottom-0 left-0 right-0"></div>

      {/* Splash background */}
      <div
        className={`absolute top-0 left-0 right-0 w-full transition-all duration-700 delay-200 ${
          mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <Image
          src={splash}
          alt="Paint splash"
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-20 px-4 mt-32 max-md:mt-24 max-sm:mt-16">
        <div className="flex flex-col gap-6 items-center">
          <Image
            src={logo}
            alt="WarnaGo"
            className={`w-[700px] h-auto max-md:w-64 max-sm:w-72 transition-all duration-700 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
            priority
          />
          <h1 className="sr-only">
            WarnaGo - Toko Cat Terlengkap di Tangerang Selatan
          </h1>

          {/* Tagline pills */}
          <div className="flex flex-wrap justify-center gap-3 max-sm:gap-2 max-sm:flex-col max-sm:items-center">
            <span
              className={`px-6 py-2 text-warnago-red text-shadow-warnago-red font-head font-bold text-5xl max-sm:text-4xl hover:scale-110 transition-all duration-500 cursor-default ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              warna Lo!
            </span>
            <span
              className={`px-6 py-2 text-warnago-yellow text-shadow-warnago-yellow font-head font-bold text-5xl max-sm:text-4xl hover:scale-110 transition-all duration-500 cursor-default ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              gaya Lo!
            </span>
            <span
              className={`px-6 py-2 text-warnago-green text-shadow-warnago-green font-head font-bold text-5xl max-sm:text-4xl hover:scale-110 transition-all duration-500 cursor-default ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              let&apos;s Go!
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="https://maps.app.goo.gl/hAEGc9fTMUAbCA8UA"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-16 py-5 bg-warnago-blue text-white rounded-[20px_5px_30px_10px] font-head font-bold text-3xl flex items-center gap-2 hover:bg-warnago-blue/90 hover:scale-105 transition-all duration-500 max-sm:px-6 max-sm:py-3 max-sm:text-base relative border border-black/30 overflow-clip shadow-xl btn-pulse ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <div className="absolute rounded-full size-30 bg-[#0CCDFF] -top-18 -left-10"></div>
          <div className="absolute rounded-full size-30 bg-[#00AEFF] -top-16 -left-14"></div>

          <div className="absolute rounded-full size-30 bg-[#1998FF] -bottom-20 -right-14"></div>
          <div className="relative">Lihat toko kami</div>
        </Link>
      </div>
    </section>
  );
}
