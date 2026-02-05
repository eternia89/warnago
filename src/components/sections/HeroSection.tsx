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
        <div className="flex flex-col items-center">
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
            <div className="relative">Lokasi toko kami</div>
          </Link>
          <span className="text-white/80 w-[300px] mx-auto text-center pt-8 text-lg max-sm:text-sm">
            Jl. Raya Serpong No.KM7 No.1-3, <br />
            Kota Tangerang Selatan
            <br />
            <span className="flex items-center gap-2 justify-center pt-2">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 fill-white/80"
              >
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>0811 1888 8096</span>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
