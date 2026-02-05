"use client";

import Image from "next/image";
import Link from "next/link";

import phone from "@/images/phone.png";
import instagramIcon from "@/images/instagram.svg";
import { useInView } from "@/hooks/useInView";

export default function ConsultationSection() {
  const { ref, isInView } = useInView<HTMLElement>({
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      id="consultation"
      className="py-20 max-md:py-16 max-sm:py-12"
    >
      <div className="container mx-auto px-5">
        <div className="flex gap-10 max-lg:flex-col">
          <div
            className={`flex items-center gap-12 bg-warnago-yellow rounded-[30px] overflow-clip h-[400px] max-sm:h-auto w-2/3 max-lg:w-full max-sm:flex-col max-sm:items-center max-sm:gap-0 transition-all duration-700 hover:shadow-2xl ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Phone Image */}
            <div className="flex justify-center max-sm:order-2 self-end max-sm:mx-auto">
              <Image
                src={phone}
                alt="Contact phone"
                width={200}
                height={400}
                loading="lazy"
                className="w-[200px] h-auto mix-blend-darken max-sm:w-[120px] hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="max-sm:order-1 p-8">
              <h2 className="font-head font-semibold text-5xl text-[#445F07] mb-2 max-sm:text-2xl">
                Konsultasi Gratis
              </h2>
              <p className="font-body text-[#11528C] mb-8 text-2xl pt-4 max-sm:text-lg">
                Konsultasi cat dengan ahli kami, <br />
                tersedia setiap hari sampai malam.
              </p>
              <div className="flex items-center gap-8">
                <Link
                  href="https://wa.me/6281118888096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-3 bg-warnago-green text-white rounded-[10px_3px_15px_5px] font-head font-semibold text-xl flex items-center gap-2 hover:bg-warnago-green/90 hover:scale-105 transition-all duration-300 max-sm:px-6 max-sm:py-3 max-sm:text-base relative overflow-clip border border-black/30 shadow-lg btn-pulse"
                >
                  <div className="absolute rounded-full size-30 bg-[#3CDD78] -top-18 -left-10"></div>
                  <div className="absolute rounded-full size-30 bg-[#22C35E] -top-16 -left-14"></div>

                  <div className="absolute rounded-full size-30 bg-[#1EAE54] -bottom-20 -right-14"></div>
                  <div className="relative">Whatsapp</div>
                </Link>
                <Link
                  href="https://www.instagram.com/warnago_tokocat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-6 flex items-center justify-center hover:scale-125 transition-transform duration-300"
                >
                  <Image
                    src={instagramIcon}
                    alt="Instagram"
                    className="size-full "
                  />
                </Link>
                {/* <Link
                  href="https://tiktok.com/@warnago"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-6 flex items-center justify-center "
                >
                  <Image
                    src={tiktokIcon}
                    alt="TikTok"
                    className="size-full"
                  />
                </Link> */}
              </div>
            </div>
          </div>
          <div
            className={`h-[400px] w-1/3 rounded-[30px] overflow-hidden max-lg:w-full transition-all duration-700 delay-200 hover:shadow-2xl ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0621853362645!2d106.6510272!3d-6.2555382999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb0008d467b9%3A0xc062f92b85d8a278!2sToko%20Cat%20Warna%20Go!5e0!3m2!1sen!2sid!4v1770300261695!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Toko Cat WarnaGo"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
