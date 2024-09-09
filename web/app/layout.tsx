import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import VersionDisplay from "./components/VersionDisplay";
import VantaBackground from "./components/common/VantaBackground";
import { AppProvider } from "./context/AppContext";

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
          <VantaBackground>
            <div className="relative min-h-screen font-mono">
              {children}
              <VersionDisplay />
            </div>
          </VantaBackground>
        </AppProvider>
      </body>
    </html>
  );
}
