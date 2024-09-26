import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppProvider } from "./Context/AppContext";
import React from "react";
// import AnimatedCursor from "react-animated-cursor";
import VersionDisplay from "./components/VersionDisplay";
import CheckBrowser from "./components/Common/CheckBrowser";
import { CircleIcon } from "./components/Animation";

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
  title: "Lai",
  description: "lai blog",
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
        <AppProvider>
          <div className="custom-cursor">
            <div className="relative min-h-screen font-mono">
              {children}
              <VersionDisplay />
              <CircleIcon />
            </div>
          </div>
          <CheckBrowser />
        </AppProvider>
      </body>
    </html>
  );
}
