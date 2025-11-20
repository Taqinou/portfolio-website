import "../styles/globals.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import BackgroundCanvas from "@/components/layout/BackgroundCanvas";
import ScrollToTopButton from "@/components/layout/ScrollToTopButton";
import LanguageSwitch from "@/components/features/LanguageSwitch";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "GAZZOLI Enzo",
  description: "Portfolio présentant mes projets.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://vercel.app" />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-black text-white antialiased">
        <LanguageProvider>
          <BackgroundCanvas />
          <LanguageSwitch />
          <main className="flex-grow w-full relative z-10">
            {children}
          </main>
          <Footer />
          <ScrollToTopButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
