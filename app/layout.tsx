import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "For Our Parents | നമ്മുടെ മാതാപിതാക്കൾക്കായി | Dành cho Ba Mẹ",
  description:
    "Helping elders pass the U.S. civics test in their native language. Multilingual English/Malayalam/Gujarati/Vietnamese study tool.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"
        />
        <meta name="theme-color" content="#FFFAF5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body>
        <LanguageProvider>
          <Header />
          <main className="py-6 sm:py-8 pb-20">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
