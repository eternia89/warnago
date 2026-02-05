"use client";

import Image from "next/image";

import logo from "@/images/logo.png";

import Link from "next/link";

export default function NavSection() {
  return (
    <section className="overflow-hidden sticky top-0 z-1 py-8">
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
        <nav className="text-white flex items-center gap-8 font-head font-semibold text-xl">
          <Link href="#">partner</Link>
          <Link href="#">tentang kami</Link>
          <Link href="#">toko</Link>
          <Link href="#">hubungi kami</Link>
        </nav>
      </div>
    </section>
  );
}
