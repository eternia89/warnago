"use client";

import Image from "next/image";
import brandDulux from "@/images/brand-dulux.png";
import brandMowilex from "@/images/brand-mowilex.png";
import brandPropan from "@/images/brand-propan.png";
import brandJotun from "@/images/brand-jotun.png";
import brandNippon from "@/images/brand-nippon.png";
import brandAquaproof from "@/images/brand-aquaproof.png";
import { useInView } from "@/hooks/useInView";

const partners = [
  { name: "Dulux", logo: brandDulux },
  { name: "Mowilex", logo: brandMowilex },
  { name: "Propan", logo: brandPropan },
  { name: "Jotun", logo: brandJotun },
  { name: "Nippon Paint", logo: brandNippon },
  { name: "Aquaproof", logo: brandAquaproof },
];

export default function PartnerSection() {
  const { ref, isInView } = useInView<HTMLElement>({
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      id="partners"
      className="bg-bg-dark pt-20 pb-32 max-sm:pb-16"
    >
      <div className="container mx-auto px-6 w-[1000px] max-w-full">
        <h2
          className={`font-head font-bold text-5xl text-center text-warnago-yellow mb-12 max-md:text-2xl max-sm:text-xl max-sm:mb-8 transition-all duration-700 ${
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Partner resmi
        </h2>

        <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`w-full flex items-center justify-center transition-all duration-500 hover:brightness-150 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isInView
                  ? `${index * 100 + 200}ms`
                  : "0ms",
              }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="max-h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
