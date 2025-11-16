import "../styles/globals.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "GAZZOLI Enzo",
  description: "Portfolio présentant mes projets.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans bg-black text-white antialiased">
        <BackgroundCanvas />
        <main className="flex-grow w-full relative z-10">
          {children}
        </main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
