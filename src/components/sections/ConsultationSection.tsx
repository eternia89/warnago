"use client";

import Image from "next/image";
import Link from "next/link";

import phone from "@/images/phone.png";
import instagramIcon from "@/images/instagram.svg";
import tiktokIcon from "@/images/tiktok.svg";

export default function ConsultationSection() {
  return (
    <section
      id="consultation"
      className="py-20 max-md:py-16 max-sm:py-12"
    >
      <div className="container mx-auto px-5">
        <div className="flex gap-10">
          <div className="flex items-center gap-12 bg-warnago-yellow rounded-[30px] overflow-clip h-[400px] w-2/3">
            {/* Phone Image */}
            <div className="flex justify-center max-md:order-2 self-end">
              <Image
                src={phone}
                alt="Contact phone"
                className="w-[200px] h-auto"
              />
            </div>

            <div className="">
              <h2 className="font-head font-semibold text-5xl text-[#445F07] mb-2 max-md:text-2xl max-sm:text-xl">
                Konsultasi Gratis
              </h2>
              <p className="font-body text-[#11528C] mb-8 text-2xl pt-4">
                Konsultasi cat dengan ahli kami, <br />
                tersedia setiap hari sampai malam.
              </p>
              <div className="flex items-center gap-8">
                <button className="px-12 py-3 bg-warnago-green text-white rounded-[10px_3px_15px_5px] font-head font-semibold text-xl flex items-center gap-2 hover:bg-warnago-green/90 hover:scale-105 transition-all duration-300 max-sm:px-6 max-sm:py-3 max-sm:text-base">
                  Whatsapp
                </button>
                <Link
                  href="https://instagram.com/warnago"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-6 flex items-center justify-center "
                >
                  <Image
                    src={instagramIcon}
                    alt="Instagram"
                    className="size-full "
                  />
                </Link>
                <Link
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
                </Link>
              </div>
            </div>
          </div>
          <div className="h-[400px] bg-white w-1/3 rounded-[30px]">
            asd
          </div>
        </div>
      </div>
    </section>
  );
}
