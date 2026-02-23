import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://festivoscolombia2026.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Festivos Colombia",
  title: {
    default: "Festivos Colombia 2026 – Calendario Oficial y Puentes Festivos",
    template: "%s | Festivos Colombia",
  },
  description:
    "Consulta el calendario completo de festivos en Colombia 2026, incluyendo puentes festivos y fechas oficiales según la ley colombiana. Planifica vacaciones y días libres fácilmente.",
  keywords: [
    "festivos colombia 2026",
    "calendario colombia 2026",
    "dias festivos 2026 colombia",
    "puentes festivos colombia 2026",
    "días feriados colombia 2026",
    "calendario festivos colombia",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "/",
    title: "Festivos Colombia 2026 – Calendario Oficial y Puentes Festivos",
    description:
      "Consulta el calendario completo de festivos en Colombia 2026, incluyendo puentes festivos y fechas oficiales según la ley colombiana.",
    siteName: "Festivos Colombia",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Festivos Colombia 2026 - Calendario oficial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Festivos Colombia 2026 – Calendario Oficial y Puentes Festivos",
    description:
      "Consulta el calendario completo de festivos en Colombia 2026, incluyendo puentes festivos y fechas oficiales según la ley colombiana.",
    images: ["/twitter-image"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "48x48" },
    ],
    apple: [{ url: "/icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
