import "../styles/globals.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import BackgroundCanvas from "@/components/BackgroundCanvas";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Portfolio Unity",
  description: "Portfolio moderne présentant mes projets Unity, web et autres.",
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
      </body>
    </html>
  );
}
