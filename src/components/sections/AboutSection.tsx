"use client";

import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-bg-light py-20 max-md:py-16 max-sm:py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-head font-bold text-3xl text-bg-dark mb-6 max-md:text-2xl max-sm:text-xl">
          Tentang kami
        </h2>

        <p className="font-body text-lg text-gray-700 leading-relaxed mb-8 max-md:text-base max-sm:text-sm">
          WarnaGo adalah toko cat terpercaya yang menyediakan berbagai pilihan cat berkualitas dari brand-brand ternama.
          Kami berkomitmen memberikan pengalaman berbelanja cat yang mudah, nyaman, dan menyenangkan dengan layanan konsultasi gratis untuk membantu Anda memilih warna dan jenis cat yang tepat.
        </p>

        <a
          href="#consultation"
          className="inline-flex items-center gap-2 font-head font-semibold text-warnago-cyan hover:text-warnago-cyan/80 transition-colors"
        >
          Konsultasi sekarang
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
