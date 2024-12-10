// "use client"
// import { useState } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { SearchProvider } from "@/context/SearchContect";


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

const title = "Gowec Real Estate"
const des = "Find all availiable Lands at affordable prices ranging from low to high"


export const metadata = {
  title: title,
  description: des,
  keywords: `${title}, company, services`,
  openGraph: {
    title: title,
    description: des,
    images: [
      {
        url: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop",
        width: 800,
        height: 600,
        alt: {title},
      },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-full font-geist-sans:n2 font-geist-mono:n1 text-gray-200 bg-gray-100`}
      >
        <SearchProvider>
          <NavBar />
          <main>{children}</main>
        </SearchProvider>
        <Footer />
      </body>
    </html>
  );
}
