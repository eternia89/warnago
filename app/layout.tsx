import type { Metadata } from "next";
import { Fredoka, Figtree } from "next/font/google";
import "./globals.css";

const headingFont = Fredoka({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-head",
});

const bodyFont = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "WarnaGo - Toko Cat Terlengkap",
  description: "WarnaGo - Belanja cat jadi mudah, nyaman, dan menyenangkan. Partner resmi Dulux, Mowilex, Propan, Jotun, Nippon Paint, dan Aquaproof.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
