"use client";

import Image from "next/image";
import image1 from "@/images/image-1.jpg";
import image2 from "@/images/image-2.jpg";
import image3 from "@/images/image-3.jpg";
import image4 from "@/images/image-4.jpg";
import image5 from "@/images/image-5.jpg";

export default function BentoGridSection() {
  return (
    <section className="bg-bg-dark py-20 max-md:py-16 max-sm:py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
          {/* Row 1 */}
          {/* Cell 1: image-1 (machines) */}
          <div className="bento-card relative rounded-2xl overflow-hidden aspect-square">
            <Image
              src={image1}
              alt="Mowilex color mixing machines"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-4 left-4 text-white font-head font-semibold text-sm">
              mesin pencampur warna
            </span>
          </div>

          {/* Cell 2: image-2 (storefront) */}
          <div className="bento-card relative rounded-2xl overflow-hidden aspect-square">
            <Image
              src={image2}
              alt="Store front exterior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-4 left-4 text-white font-head font-semibold text-sm">
              toko kami
            </span>
          </div>

          {/* Cell 3: pink background */}
          <div className="bento-card bg-bento-pink rounded-2xl aspect-square max-md:hidden" />

          {/* Row 2 */}
          {/* Cell 4: lime background */}
          <div className="bento-card bg-bento-lime rounded-2xl aspect-square max-sm:hidden" />

          {/* Cell 5: tagline text */}
          <div className="bento-card bg-white rounded-2xl aspect-square flex items-center justify-center p-6">
            <p className="font-head font-bold text-2xl text-bg-dark text-center leading-tight max-md:text-xl max-sm:text-lg">
              Belanja cat jadi{" "}
              <span className="bg-bento-yellow px-1">mudah,</span>{" "}
              <span className="bg-bento-yellow px-1">nyaman,</span> dan menyenangkan.
            </p>
          </div>

          {/* Cell 6: image-4 (swatches) */}
          <div className="bento-card relative rounded-2xl overflow-hidden aspect-square">
            <Image
              src={image4}
              alt="Paint color swatches"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-4 left-4 text-white font-head font-semibold text-sm">
              pilihan warna lengkap
            </span>
          </div>

          {/* Row 3 */}
          {/* Cell 7: image-5 (shelves) */}
          <div className="bento-card relative rounded-2xl overflow-hidden aspect-square">
            <Image
              src={image5}
              alt="Paint cans on shelves"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-4 left-4 text-white font-head font-semibold text-sm">
              stok lengkap
            </span>
          </div>

          {/* Cell 8: yellow background */}
          <div className="bento-card bg-bento-yellow rounded-2xl aspect-square max-sm:hidden" />

          {/* Cell 9: image-3 (interior) */}
          <div className="bento-card relative rounded-2xl overflow-hidden aspect-square max-md:hidden">
            <Image
              src={image3}
              alt="Store interior counter"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-4 left-4 text-white font-head font-semibold text-sm">
              konsultasi di toko
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
