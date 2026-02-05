"use client";

import Image from "next/image";
import brandDulux from "@/images/brand-dulux.png";
import brandMowilex from "@/images/brand-mowilex.png";
import brandPropan from "@/images/brand-propan.png";
import brandJotun from "@/images/brand-jotun.png";
import brandNippon from "@/images/brand-nippon.png";
import brandAquaproof from "@/images/brand-aquaproof.png";

const partners = [
  { name: "Dulux", logo: brandDulux },
  { name: "Mowilex", logo: brandMowilex },
  { name: "Propan", logo: brandPropan },
  { name: "Jotun", logo: brandJotun },
  { name: "Nippon Paint", logo: brandNippon },
  { name: "Aquaproof", logo: brandAquaproof },
];

export default function PartnerSection() {
  return (
    <section id="partners" className="bg-white py-20 max-md:py-16 max-sm:py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-head font-bold text-3xl text-center text-bg-dark mb-12 max-md:text-2xl max-sm:text-xl max-sm:mb-8">
          Partner resmi
        </h2>

        <div className="grid grid-cols-3 max-md:grid-cols-2 gap-8 max-sm:gap-4 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="w-full h-24 max-sm:h-16 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                className="max-h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
