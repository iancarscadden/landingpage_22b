import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import "./fonts.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "22b",
  description: "Welcome to 22b's official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased font-helvetica-neue`}
      >
        {children}
      </body>
    </html>
  );
}
