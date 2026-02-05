"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import logo from "@/images/logo.png";

import Link from "next/link";

export default function NavSection() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${!isAtTop && isVisible ? "bg-black/80 py-4" : "py-8"} ${
          isMenuOpen ? "max-sm:bg-bg-dark max-sm:h-screen" : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-5">
          <Link
            href="#"
            className="relative flex flex-col items-center gap-8 px-4 max-sm:px-0"
          >
            <Image
              src={logo}
              alt="WarnaGo"
              className="w-[200px] h-auto max-sm:w-[120px]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="text-white flex items-center gap-8 font-head font-semibold text-xl max-lg:text-lg max-lg:gap-4 max-sm:hidden">
            <Link href="#partners">Partner</Link>
            <Link href="#about">Tentang Kami</Link>
            <Link href="#gallery">Toko</Link>
            <Link href="#consultation">Hubungi Kami</Link>
          </nav>

          {/* Burger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hidden max-sm:flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu - Inside Header */}
        <nav
          className={`absolute inset-0 flex-col items-center justify-center gap-8 font-head font-semibold text-2xl text-white sm:hidden ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <Link href="#partners" onClick={handleLinkClick}>
            Partner
          </Link>
          <Link href="#about" onClick={handleLinkClick}>
            Tentang Kami
          </Link>
          <Link href="#gallery" onClick={handleLinkClick}>
            Toko
          </Link>
          <Link href="#consultation" onClick={handleLinkClick}>
            Hubungi Kami
          </Link>
        </nav>
      </header>
    </>
  );
}
