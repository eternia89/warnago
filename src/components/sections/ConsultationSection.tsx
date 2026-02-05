"use client";

import Image from "next/image";
import { useState } from "react";
import phone from "@/images/phone.png";

export default function ConsultationSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="consultation" className="bg-[#2D2D2D] py-20 max-md:py-16 max-sm:py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12 items-center">
          {/* Phone Image */}
          <div className="flex justify-center max-md:order-2">
            <Image
              src={phone}
              alt="Contact phone"
              className="w-64 h-auto max-md:w-48 max-sm:w-40"
            />
          </div>

          {/* Form */}
          <div className="max-md:order-1">
            <h2 className="font-head font-bold text-3xl text-white mb-2 max-md:text-2xl max-sm:text-xl">
              <span className="text-warnago-cyan">Konsultasi</span> Gratis
            </h2>
            <p className="font-body text-gray-400 mb-8 max-sm:text-sm">
              Hubungi kami untuk konsultasi warna dan jenis cat yang tepat untuk kebutuhan Anda.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Nama lengkap"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 font-body focus:outline-none focus:border-warnago-cyan transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Nomor telepon"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 font-body focus:outline-none focus:border-warnago-cyan transition-colors"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Pesan Anda"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 font-body focus:outline-none focus:border-warnago-cyan transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-warnago-green text-white rounded-lg font-head font-semibold hover:bg-warnago-green/90 hover:scale-[1.02] transition-all duration-300"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
