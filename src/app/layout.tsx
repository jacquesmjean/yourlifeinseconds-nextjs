import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "YourLifeInSeconds — See Your Life in Real Time",
    template: "%s | YourLifeInSeconds",
  },
  description:
    "Discover exactly how many seconds you've lived, how many remain, and what your time is really worth. The #1 Life Productivity & Financial Clarity tool.",
  keywords: [
    "life in seconds",
    "seconds in a lifetime",
    "how many seconds have I lived",
    "time calculator",
    "life clock",
    "financial clarity",
  ],
  authors: [{ name: "Jacques M. Jean" }],
  openGraph: {
    title: "YourLifeInSeconds — See Your Life in Real Time",
    description:
      "How many seconds have you lived? How many remain? Discover your Time Scarcity Score.",
    url: "https://www.yourlifeinseconds.com",
    siteName: "YourLifeInSeconds",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YourLifeInSeconds — See Your Life in Real Time",
    description: "Discover your Time Scarcity Score. Every second counts.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
