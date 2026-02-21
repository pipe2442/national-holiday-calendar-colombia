import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

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
    default: "Calendario oficial de festivos en Colombia 2026",
    template: "%s | Festivos Colombia",
  },
  description:
    "Consulta el calendario completo de días festivos y feriados en Colombia 2026, incluyendo puentes festivos y fechas oficiales según la ley colombiana.",
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
    title: "Calendario oficial de festivos en Colombia 2026",
    description:
      "Festivos Colombia 2026: calendario de días feriados y fechas oficiales. Incluye puentes festivos.",
    siteName: "Festivos Colombia",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Calendario oficial de festivos en Colombia 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calendario oficial de festivos en Colombia 2026",
    description:
      "Festivos Colombia 2026: calendario de días feriados y fechas oficiales. Incluye puentes festivos.",
    images: ["/twitter-image"],
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
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
