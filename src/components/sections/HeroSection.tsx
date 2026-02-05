"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import logo from "@/images/logo.png";
import splash from "@/images/splash.png";
import bgMain from "@/images/bg-main.jpg";

export default function HeroSection() {
  const scrollToPartners = () => {
    document
      .getElementById("partners")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-bg-dark overflow-hidden flex flex-col items-center justify-center">
      {/* Background texture */}
      <Image
        src={bgMain}
        alt=""
        fill
        className="object-cover opacity-30"
        priority
      />

      {/* Splash background */}
      <div className="absolute top-0 left-0 right-0 w-full">
        <Image
          src={splash}
          alt="Paint splash"
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4 mt-32 max-md:mt-24 max-sm:mt-16">
        {/* Logo */}
        <Image
          src={logo}
          alt="WarnaGo"
          className="w-[700px] h-auto max-md:w-64 max-sm:w-48"
          priority
        />

        {/* Tagline pills */}
        <div className="flex flex-wrap justify-center gap-3 max-sm:gap-2">
          <span className="px-6 py-2 text-warnago-red text-shadow-warnago-red rounded-full font-head font-bold text-5xl max-md:text-lg max-sm:text-base max-sm:px-4 max-sm:py-1.5">
            warna Lo!
          </span>
          <span className="px-6 py-2 text-warnago-yellow text-shadow-warnago-yellow rounded-full font-head font-bold text-5xl max-md:text-lg max-sm:text-base max-sm:px-4 max-sm:py-1.5">
            gaya Lo!
          </span>
          <span className="px-6 py-2 text-warnago-green text-shadow-warnago-green rounded-full font-head font-bold text-5xl max-md:text-lg max-sm:text-base max-sm:px-4 max-sm:py-1.5">
            let&apos;s Go!
          </span>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToPartners}
          className="mt-8 px-8 py-4 bg-warnago-green text-white rounded-full font-head font-bold text-lg flex items-center gap-2 hover:bg-warnago-green/90 hover:scale-105 transition-all duration-300 max-sm:px-6 max-sm:py-3 max-sm:text-base"
        >
          Jelajahi
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
