"use client";

import Image from "next/image";
import image1 from "@/images/image-1.jpg";
import image2 from "@/images/image-2.jpg";
import image3 from "@/images/image-3.jpg";
import image4 from "@/images/image-4.jpg";
import image5 from "@/images/image-5.jpg";
import bgMain from "@/images/bg-main.jpg";

export default function BentoGridSection() {
  return (
    <section
      id="gallery"
      className="bg-bg-dark py-20 max-md:py-16 max-sm:py-12 relative"
    >
      <Image
        src={bgMain}
        alt="Colorful paint texture background"
        fill
        className="bg-cover"
        priority
      />
      <div className="container mx-auto px-5 relative">
        <div className="grid grid-cols-[1fr_1.5fr_1fr] max-lg:grid-cols-[1fr_1fr] gap-10">
          {/* Row 1 */}
          {/* Cell 1: image-1 (machines) */}
          <div className="bento-card relative rounded-[0_400px_400px_0] overflow-hidden h-[320px]">
            <Image
              src={image1}
              alt="Mowilex color mixing machines"
              fill
              className="object-cover"
            />
          </div>

          {/* Cell 2: image-2 (storefront) */}
          <div className="bento-card relative rounded-[300px_300px_0_0] overflow-hidden h-[320px]">
            <Image
              src={image2}
              alt="Store front exterior"
              fill
              className="object-cover"
            />
          </div>

          {/* Cell 3: pink background */}
          <div className="bento-card  bg-bento-pink rounded-[0_180px_0_180px] aspect-square max-md:hidden flex items-center justify-center text-white p-10 text-center font-head font-medium text-xl h-[320px]">
            one-stop-solution untuk kebutuhan cat dan perlengkapan
            anda
          </div>

          {/* Row 2 */}
          {/* Cell 4: lime background */}
          <div className="bento-card bg-warnago-green rounded-[0_0_0_180px] aspect-square max-md:hidden flex items-center justify-center text-white p-10 text-center font-head font-medium text-xl h-[320px]">
            one-stop-solution untuk kebutuhan cat dan perlengkapan
            anda
          </div>

          {/* Cell 5: tagline text */}
          <div className="bento-card text-white rounded-2xl h-[320px] flex items-center justify-center p-6">
            <p className="font-head font-semibold text-5xl text-center leading-snug">
              Belanja cat jadi{" "}
              <span className="text-warnago-red">mudah,</span>{" "}
              <span className="text-warnago-yellow">nyaman,</span> dan{" "}
              <span className="text-warnago-green">menyenangkan</span>
              .
            </p>
          </div>

          {/* Cell 6: image-4 (swatches) */}
          <div className="bento-card relative rounded-[400px_0_0_400px] overflow-hidden h-[320px]">
            <Image
              src={image3}
              alt="Paint color swatches"
              fill
              loading="lazy"
              className="object-cover"
            />
          </div>

          {/* Row 3 */}
          {/* Cell 7: image-5 (shelves) */}
          <div className="bento-card relative rounded-[180px_0_180px_0] overflow-hidden h-[320px] ">
            <Image
              src={image4}
              alt="Paint cans on shelves"
              fill
              loading="lazy"
              className="object-cover"
            />
          </div>

          {/* Cell 8: yellow background */}
          <div className="bento-card bg-warnago-yellow mx-auto rounded-[0_400px_400px_0] aspect-square max-md:hidden flex items-center justify-center text-[#987D01] p-10 text-center font-head font-medium text-xl h-[320px]">
            Display produk modern memudahkan Anda menemukan pilihan
            warna yang tepat
          </div>

          {/* Cell 9: image-3 (interior) */}
          <div className="bento-card relative rounded-[0_240px_0_0] overflow-hidden h-[320px]  max-md:hidden">
            <Image
              src={image5}
              alt="Store interior counter"
              fill
              loading="lazy"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
