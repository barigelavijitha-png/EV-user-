import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VoltGrid — EV Charging Network Analytics",
  description:
    "VoltGrid turns raw EV charging sessions into decisions: live network analytics, in-browser cost prediction, and transparent model performance for the Hyderabad charging network.",
  keywords: [
    "EV charging",
    "analytics dashboard",
    "electric vehicle",
    "charging station",
    "cost prediction",
    "energy analytics",
  ],
  authors: [{ name: "VoltGrid" }],
  openGraph: {
    title: "VoltGrid — EV Charging Network Analytics",
    description:
      "Live network analytics, in-browser cost prediction, and transparent model performance for EV charging.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#080e1c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
