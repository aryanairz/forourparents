import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Civics Helper | സിവിക്സ് ഹെൽപ്പർ",
  description:
    "A grandma-friendly bilingual civics test helper in English and Malayalam.",
  icons: {
    icon: "/flag.png",
    shortcut: "/flag.png",
    apple: "/flag.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"
        />
        <meta name="theme-color" content="#2563EB" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body>
        <LanguageProvider>
          <Header />
          <main className="max-w-xl mx-auto px-3 sm:px-4 py-4 sm:py-6 pb-20">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
