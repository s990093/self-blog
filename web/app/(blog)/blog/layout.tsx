import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "blog",
  description: "blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`antialiased`}>{children}</div>;
}
