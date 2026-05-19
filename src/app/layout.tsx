import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Democratic Roach Front | Forward.",
  description: "A youth-driven movement for accountability, merit, transparency, and a stronger India. Not Left. Not Right. Forward.",
  keywords: ["Democratic Roach Front", "DRF", "Youth Movement India", "Political Reform India", "Meritocracy", "Anti-Corruption India"],
  authors: [{ name: "Democratic Roach Front" }],
  openGraph: {
    title: "Democratic Roach Front | Forward.",
    description: "A youth-driven movement for accountability, merit, transparency, and a stronger India. Not Left. Not Right. Forward.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
