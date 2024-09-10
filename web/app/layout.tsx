import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import VersionDisplay from "./components/VersionDisplay";
import VantaBackground from "./components/common/VantaBackground";
import { AppProvider } from "./context/AppContext";
import React from "react";
import AnimatedCursor from "react-animated-cursor";

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
        {/* <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color="193, 11, 111"
          outerAlpha={0.2}
          innerScale={0.7}
          outerStyle={{
            border: "3px solid var(--cursor-color)",
          }}
          innerStyle={{
            backgroundColor: "var(--cursor-color)",
          }}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            {
              target: ".custom",
            },
          ]}
        /> */}
        <AppProvider>
          <VantaBackground>
            <div className="custom-cursor">
              <div className="relative min-h-screen font-mono">
                {children}
                <VersionDisplay />
              </div>
            </div>
          </VantaBackground>
        </AppProvider>
      </body>
    </html>
  );
}
