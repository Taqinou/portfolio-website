'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative inline-block mb-6 group">
              <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-lg" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.1, y: -3, rotateX: -3 }}
                className="relative text-sm text-neutral-500 tracking-wide font-light px-3 py-1 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              >
                PORTFOLIO
              </motion.p>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-8xl font-semibold mb-8 leading-[0.95] tracking-tight"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                Enzo
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-4 mb-12"
            >
              <p className="text-xl text-neutral-400 font-light leading-relaxed">
                Junior Developer
              </p>
              <div className="relative max-w-lg">
                <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl" />
                <p className="relative text-base text-neutral-500 font-light leading-relaxed p-4">
                  I’m a french junior developer passionate about video games and interactive experiences. I enjoy creating engaging and immersive projects, whether it’s Unity games or web applications. Curious and motivated, I’m always eager to learn new technologies to improve my skills and share my passion.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/#projects"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-black bg-white rounded-lg overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              >
                <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.5)] group-hover:text-red-800">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="/#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.12] overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
                </div>
                <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(147,51,234,0.5)] group-hover:text-purple-200">Get in Touch</span>
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-neutral-300 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] hover:border-white/[0.1] hover:text-white overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />
                </div>
                <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:text-blue-200">Download CV</span>
              </a>
            </motion.div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="hidden md:flex justify-end"
          >
            <div className="relative w-[500px] h-[500px]">
              {/* Glow effect behind image */}
              <div 
                className="absolute inset-0 rounded-full opacity-30"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
                  filter: 'blur(60px)',
                }}
              />
              
              {/* Image container with gradient overlay */}
              <div className="relative w-full h-full rounded-full overflow-hidden border border-neutral-800/50">
                <Image
                  src="/pic.png"
                  alt="Profile"
                  fill
                  className="object-cover grayscale contrast-110 brightness-90"
                  sizes="500px"
                  priority
                />
                {/* Gradient overlays for B&W effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs text-neutral-600 font-light tracking-wider">SCROLL</p>
          <div className="w-px h-12 bg-gradient-to-b from-neutral-800 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
