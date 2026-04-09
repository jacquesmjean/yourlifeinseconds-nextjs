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
  metadataBase: new URL("https://yourlifeinseconds.com"),
  title: {
    default: "YourLifeInSeconds — See Your Life in Real Time",
    template: "%s | YourLifeInSeconds",
  },
  description:
    "Discover exactly how many seconds you've lived and how many remain. A free life clock that turns your time into numbers you can't ignore.",
  authors: [{ name: "Jacques M. Jean" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "YourLifeInSeconds — See Your Life in Real Time",
    description:
      "How many seconds have you lived? How many remain? Find out in 10 seconds.",
    url: "https://yourlifeinseconds.com",
    siteName: "YourLifeInSeconds",
    type: "website",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "YourLifeInSeconds — See Your Life in Real Time",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YourLifeInSeconds — See Your Life in Real Time",
    description: "How many seconds do you have left? Find out.",
    images: ["/api/og"],
    creator: "@yourlifeinseconds",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
  },
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
