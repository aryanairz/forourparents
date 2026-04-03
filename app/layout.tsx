import type { Metadata } from "next";
import { Source_Serif_4, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import Header from "@/components/Header";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif",
  weight: ["400", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["400", "700"],
});

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
    <html
      lang="en"
      className={`${sourceSerif.variable} ${dmSans.variable} ${jetBrainsMono.variable}`}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"
        />
        <meta name="theme-color" content="#FAFAF7" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${dmSans.className} bg-bg text-text-body`}>
        <LanguageProvider>
          <a href="#main-content" className="skip-to-content">Skip to content</a>
          <Header />
          <main id="main-content" className="py-6 sm:py-8 pb-20">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
