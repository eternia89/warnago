"use client";

import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import image1 from "@/images/image-1.jpg";
import image2 from "@/images/image-2.jpg";
import image3 from "@/images/image-3.jpg";
import image4 from "@/images/image-4.jpg";
import palette from "@/images/icon-palette.png";
import paint from "@/images/paint.svg";
import harga from "@/images/harga.svg";
import speed from "@/images/speed.svg";
import { useInView } from "@/hooks/useInView";

interface FeatureCard {
  title: ReactNode;
  altTitle: string;
  description: string;
  image: StaticImageData;
}

const featureCards: FeatureCard[] = [
  {
    title: (
      <>
        Pilihan <span className="text-[#00B3FF]">w</span>
        <span className="text-[#00BFA6]">a</span>
        <span className="text-[#FF2D55]">r</span>
        <span className="text-[#7C3AED]">n</span>
        <span className="text-[#00C853]">a</span> Lengkap
      </>
    ),
    altTitle: "Pilihan Warna Lengkap",
    description:
      "Temukan ribuan koleksi warna cat terlengkap untuk menghidupkan suasana ruangan Anda dengan hasil akhir yang memukau dan tahan lama.",
    image: image1,
  },
  {
    title: (
      <>
        Konsultasi{" "}
        <span className="text-[#5AA824] inline-flex items-center">
          warn
          <Image
            src={paint}
            alt="color paint"
            className="mt-2 max-sm:size-4 max-sm:mt-1"
          />
        </span>{" "}
        di toko
      </>
    ),
    altTitle: "Konsultasi warna di toko",
    description:
      "Bingung pilih kombinasi? Tim ahli kami siap membantu Anda menentukan perpaduan warna terbaik yang sesuai dengan estetika karakter hunian.",
    image: image2,
  },
  {
    title: (
      <>
        <span className="text-[#FE5529] inline-flex items-center">
          Harg
          <Image
            src={harga}
            alt="color paint"
            className="mt-2 max-sm:size-4 max-sm:mt-1"
          />
        </span>{" "}
        yang bersaing
      </>
    ),
    altTitle: "Harga yang bersaing",
    description:
      "Nikmati produk berkualitas tinggi dengan harga sangat kompetitif, memberikan solusi hemat dan terbaik untuk hunian anda.",
    image: image3,
  },
  {
    title: (
      <>
        antar{" "}
        <span className="text-[#861C89] inline-flex items-center">
          cep
          <Image
            src={speed}
            alt="color paint"
            className="mt-2 max-sm:size-4 max-sm:mt-1"
          />
          t
        </span>{" "}
        jabodetabek
      </>
    ),
    altTitle: "antar cepat jabodetabek",
    description:
      "Layanan pengiriman super cepat ke seluruh Jabodetabek, memastikan pesanan cat Anda tiba tepat waktu demi kelancaran proyek.",
    image: image4,
  },
];

export default function AboutSection() {
  const { ref: aboutRef, isInView: aboutInView } = useInView<HTMLDivElement>({
    threshold: 0.2,
  });
  const { ref: cardsRef, isInView: cardsInView } = useInView<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section id="about" className="max-md:py-16 max-sm:py-12">
      <div ref={aboutRef} className="container mx-auto px-5 ">
        <div className="flex gap-20 max-lg:flex-col max-lg:gap-10">
          <div
            className={`flex-1 py-20 max-lg:order-2 max-sm:py-0 transition-all duration-700 ${
              aboutInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="font-head font-bold text-5xl  text-warnago-yellow max-md:text-2xl max-sm:text-2xl">
              Tentang Kami
            </h2>

            <p className="font-body text-2xl text-[#11528C] leading-relaxed pt-8 max-sm:pt-4 max-md:text-base max-sm:text-lg">
              Warna Go merupakan toko cat premium dengan konsep
              one-stop solution. Temukan 6 brand cat unggulan dengan
              ribuan pilihan warna, kualitas terjamin, dan harga yang
              bersaing.
            </p>
          </div>
          <div
            className={`flex-1 max-lg:order-1 max-lg:w-full transition-all duration-700 delay-200 ${
              aboutInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-warnago-teal w-[480px] max-w-full mx-auto rounded-[0_0_300px_300px] px-21 pt-10 pb-32 max-sm:px-8 max-sm:pb-16 max-sm:rounded-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="uppercase font-head font-semibold text-[#00997F] tracking-widest text-xl">
                misi kami
              </div>
              <p className="font-head font-semibold text-white text-2xl leading-relaxed pt-4 max-sm:text-xl">
                &ldquo;menjadi partner terpercaya dalam setiap
                perjalanan warna Anda-dari inspirasi hingga hasil
                akhir yang memukau.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sliding Cards */}
      <div ref={cardsRef} className="pt-8 pb-20 max-sm:pt-20 max-sm:pb-8">
        <div className="container mx-auto px-5 mb-8">
          <div
            className={`flex items-center gap-3 transition-all duration-500 ${
              cardsInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Image
              src={palette}
              alt="color palette"
              className="size-10"
            />
            <h3 className="font-head font-semibold text-xl tracking-widest uppercase max-sm:text-sm ">
              one-stop solution untuk kebutuhan cat anda
            </h3>
          </div>
        </div>

        <div className="container mx-auto pl-5 pr-0">
          <div className="overflow-x-auto overflow-y-visible scrollbar-hide snap-x snap-mandatory scroll-smooth">
            <div className="flex gap-8 pr-20 max-sm:pr-5 max-sm:flex-col max-sm:w-full max-sm:gap-4">
              {featureCards.map((card, index) => (
                <div
                  key={index}
                  className={`snap-start shrink-0 w-[380px] max-sm:w-full bg-warnago-yellow rounded-[20px] flex flex-col justify-between hover-lift transition-all duration-500 ${
                    cardsInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: cardsInView
                      ? `${index * 100 + 200}ms`
                      : "0ms",
                  }}
                >
                  <div className="p-9 max-sm:p-4">
                    <h4 className="font-head font-bold text-[40px] leading-[48px] text-bg-dark max-sm:text-2xl">
                      {card.title}
                    </h4>
                    <p className="font-body text-lg pt-4 max-sm:text-base max-sm:pt-2">
                      {card.description}
                    </p>
                  </div>
                  <div className="relative h-[400px] max-sm:h-[200px] overflow-hidden rounded-[20px]">
                    <Image
                      src={card.image}
                      alt={card.altTitle}
                      fill
                      loading="lazy"
                      className="object-cover rounded-[20px] hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
