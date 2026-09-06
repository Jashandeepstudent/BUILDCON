import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const archivo = localFont({
  src: "./fonts/Archivo-Variable.ttf",
  variable: "--font-archivo",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Indian Buildcon — RMC Plant | M25 Ready Mix Concrete, Jammu",
  description:
    "Indian Buildcon supplies M25-grade ready-mix concrete from our Schwing Stetter batching plant near Bari Brahmana, Jammu. Open 24/7, reliable fleet, on-time pours.",
  keywords: [
    "ready mix concrete Jammu",
    "RMC plant Jammu",
    "M25 concrete",
    "Schwing Stetter",
    "Bari Brahmana concrete supplier",
    "Indian Buildcon",
  ],
  openGraph: {
    title: "Indian Buildcon — RMC Plant",
    description:
      "Top-quality M25 ready-mix concrete, 24/7 operations, reliable fleet. Serving builders across Jammu.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
