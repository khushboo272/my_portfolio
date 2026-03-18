import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Khushboo Gupta | Full Stack Developer",
  description:
    "Explore the portfolio of Khushboo Gupta, a Full Stack Developer specializing in React.js, Next.js, Node.js, and AI-powered system development. Building scalable, user-centric web applications.",
  keywords: [
    "Khushboo Gupta",
    "Full Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "Node.js Developer",
    "Software Engineer",
    "TypeScript Developer",
  ],
  authors: [{ name: "Khushboo Gupta" }],
  openGraph: {
    title: "Khushboo Gupta | Personal Portfolio",
    description:
      "Full Stack Developer — Building scalable web applications and AI-powered platforms.",
    url: "https://khushboogupta.vercel.app",
    siteName: "Khushboo Gupta Portfolio",
    images: [
      {
        url: "/assets/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Khushboo Gupta Portfolio Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/assets/logo/logo.png",
    apple: "/assets/logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="text-white">
          <div className="container">{children}</div>
        </main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
