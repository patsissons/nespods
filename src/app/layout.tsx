import type { Metadata } from "next";
import { Inter as FontSans, Roboto_Mono as FontMono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "NesPods",
  description: "Your favourite nespresso pods ranked and reviewed",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    images: [
      {
        url: "https://nespods.com/og-cover.png",
        width: 1200,
        height: 630,
        alt: "NesPods",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://nespods.com/og-cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen min-w-[320px] bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
