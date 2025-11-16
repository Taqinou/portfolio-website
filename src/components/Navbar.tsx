"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {

  return (
    <nav className="backdrop-blur-md bg-white/5 border-b border-white/10 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          GAZZOLI <span className="text-white">Enzo</span>
        </Link>

        <div className="space-x-6 text-lg flex items-center">
          <Link href="/#projects" className="hover:text-blue-400 transition">Projects</Link>
          <Link href="/#contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
