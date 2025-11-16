// src/app/layout.tsx
import "./../styles/globals.css";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

export const metadata = {
  title: "Portfolio Unity",
  description: "Portfolio moderne et stylé présentant mes projets Unity.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen">
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
