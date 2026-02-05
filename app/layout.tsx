import type { Metadata, Viewport } from "next";
import { Fredoka, Figtree } from "next/font/google";
import Script from "next/script";
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

const siteUrl = "https://warnago.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "WarnaGo - Toko Cat Terlengkap di Tangerang",
  description:
    "Toko cat premium one-stop solution di Tangerang Selatan. Partner resmi Dulux, Mowilex, Propan, Jotun, Nippon Paint, dan Aquaproof.",
  openGraph: {
    title: "WarnaGo - Toko Cat Terlengkap di Tangerang",
    description:
      "Toko cat premium one-stop solution di Tangerang Selatan. Partner resmi Dulux, Mowilex, Propan, Jotun, Nippon Paint, dan Aquaproof.",
    url: siteUrl,
    siteName: "WarnaGo",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WarnaGo - Toko Cat Terlengkap",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WarnaGo - Toko Cat Terlengkap di Tangerang",
    description:
      "Toko cat premium one-stop solution di Tangerang Selatan. Partner resmi Dulux, Mowilex, Propan, Jotun, Nippon Paint, dan Aquaproof.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1C1A2D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
      >
        {children}
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="3957b691-4c05-4416-96b0-a7449fbc47ba"
        />
      </body>
    </html>
  );
}
