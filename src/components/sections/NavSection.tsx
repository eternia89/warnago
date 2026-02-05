"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import logo from "@/images/logo.png";

import Link from "next/link";

export default function NavSection() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Track if at top of page
      setIsAtTop(currentScrollY < 10);

      if (currentScrollY < 10) {
        // At the top, always show
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down, hide
        setIsVisible(false);
      } else {
        // Scrolling up, show
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50  transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full "
      } ${!isAtTop && isVisible ? "bg-black/80 py-4" : "py-8"}`}
    >
      <div className="container mx-auto flex items-center justify-between px-5">
        <Link
          href="#"
          className="relative flex flex-col items-center gap-8 px-4"
        >
          <Image
            src={logo}
            alt="WarnaGo"
            className="w-[200px] h-auto"
            priority
          />
        </Link>
        <nav className="text-white flex items-center gap-8 font-head font-semibold text-xl max-lg:text-lg max-lg:gap-4">
          <Link href="#partners">Partner</Link>
          <Link href="#about">Tentang Kami</Link>
          <Link href="#gallery">Toko</Link>
          <Link href="#consultation">Hubungi Kami</Link>
        </nav>
      </div>
    </header>
  );
}
