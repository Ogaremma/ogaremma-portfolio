import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ogar Emma | Software Engineer · Web3 Developer · Product Builder",
  description: "Software engineer and Web3 developer building practical products, blockchain infrastructure, and developer tools. 3 years experience with Next.js, React, TypeScript, Solidity, Python, and blockchain technologies.",
  keywords: ["Software Engineer", "Web3 Developer", "Blockchain", "Next.js", "React", "TypeScript", "Solidity", "Python", "Product Builder"],
  authors: [{ name: "Ogar Emma" }],
  creator: "Ogar Emma",
  publisher: "Ogar Emma",
  robots: "index, follow",
  openGraph: {
    title: "Ogar Emma | Software Engineer · Web3 Developer · Product Builder",
    description: "Software engineer and Web3 developer building practical products, blockchain infrastructure, and developer tools.",
    type: "website",
    locale: "en_US",
    siteName: "Ogar Emma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ogar Emma | Software Engineer · Web3 Developer · Product Builder",
    description: "Software engineer and Web3 developer building practical products, blockchain infrastructure, and developer tools.",
    creator: "@Web3Launcher",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#07142F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-royal-navy">{children}</body>
    </html>
  );
}