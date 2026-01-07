'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { texts } from '@/data/texts';
import {
  ArrowLeft,
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  Code2,
  Gamepad2,
  Sparkles,
  Terminal,
  Wrench,
  Globe,
  ExternalLink,
  Download,
} from 'lucide-react';
import Link from 'next/link';

// ============= CUSTOM HOOKS =============

// Optimized mouse position hook with RAF throttling
function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Cancel previous frame request
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      // Throttle updates with requestAnimationFrame
      rafRef.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return position;
}

// Text scramble hook
function useTextScramble(text: string, trigger: boolean = true) {
  const [displayText, setDisplayText] = useState('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';

  useEffect(() => {
    if (!trigger) return;

    let iteration = 0;
    const finalText = text;

    const interval = setInterval(() => {
      setDisplayText(
        finalText
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return finalText[index];
            }
            if (char === ' ') return ' ';
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      iteration += 1 / 3;

      if (iteration >= finalText.length) {
        clearInterval(interval);
        setDisplayText(finalText);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [text, trigger]);

  return displayText;
}

// ============= MAIN COMPONENT =============

export default function CVPage() {
  const { lang } = useLanguage();
  const t = texts[lang];
  const mousePosition = useMousePosition();
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger animations after mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Text scramble for name
  const scrambledName = useTextScramble('ENZO', isLoaded);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  const skills = [
    {
      icon: Code2,
      title: t.cvSkillsLanguages,
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      level: 90,
    },
    {
      icon: Terminal,
      title: t.cvSkillsEngine,
      items: ['Node.js', 'FastAPI', 'Python', 'REST APIs', 'PostgreSQL', 'Redis'],
      level: 85,
    },
    {
      icon: Wrench,
      title: t.cvSkillsTools,
      items: ['Git', 'VS Code', 'Docker', 'Vercel', 'Postman', 'Render'],
      level: 80,
    },
    {
      icon: Sparkles,
      title: t.cvSkillsOther,
      items: ['Architecture', 'CI/CD', 'Responsive'],
      level: 75,
    },
    { icon: Globe, title: t.cvSkillsSpokenLanguages, items: ['Anglais technique'], level: 70 },
  ];

  const experiences = [
    { title: t.cvExp1Title, company: t.cvExp1Company, date: t.cvExp1Date, desc: t.cvExp1Desc },
    { title: t.cvExp2Title, company: t.cvExp2Company, date: t.cvExp2Date, desc: t.cvExp2Desc },
    { title: t.cvExp3Title, company: t.cvExp3Company, date: t.cvExp3Date, desc: t.cvExp3Desc },
  ];

  const education = [
    { title: t.cvEducation1Title, school: t.cvEducation1School, date: t.cvEducation1Date },
    { title: t.cvEducation2Title, school: t.cvEducation2School, date: t.cvEducation2Date },
  ];

  const interests = [
    { title: t.cvInterest1Title, desc: t.cvInterest1Desc, icon: Gamepad2 },
    { title: t.cvInterest2Title, desc: t.cvInterest2Desc, icon: Code2 },
    { title: t.cvInterest3Title, desc: t.cvInterest3Desc, icon: Sparkles },
  ];

  const projects = [
    {
      title: t.cvProject1Title,
      tech: t.cvProject1Tech,
      desc: t.cvProject1Desc,
      status: t.cvProject1Status,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* ===== CURSOR GLOW EFFECT (Optimized with CSS) ===== */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-none"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.08), transparent 40%)`,
          willChange: 'background',
        }}
      />

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Static gradient orbs (no animation for performance) */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-neutral-500/10 rounded-full blur-[120px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="fixed top-6 left-6 z-50 no-print"
      >
        <Link
          href="/"
          className="group flex items-center gap-2 px-4 py-2 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-full hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
        >
          <ArrowLeft
            size={16}
            className="text-neutral-400 group-hover:text-white transition-colors"
          />
          <span className="text-sm text-neutral-400 group-hover:text-white transition-colors font-light">
            {t.cvBackToPortfolio}
          </span>
        </Link>
      </motion.div>

      {/* Download PDF button */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="fixed top-6 right-30 z-50 no-print"
      >
        <a
          href="/CV_GAZZOLI_Enzo.pdf"
          download="CV_GAZZOLI_Enzo.pdf"
          className="group flex items-center gap-2 px-4 py-2 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-full hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
        >
          <Download
            size={16}
            className="text-neutral-400 group-hover:text-white transition-colors"
          />
          <span className="text-sm text-neutral-400 group-hover:text-white transition-colors font-medium">
            {t.cvDownloadPdf}
          </span>
        </a>
      </motion.div>

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="cv-container relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-24"
      >
        {/* Hero Header with Text Scramble */}
        <motion.header variants={itemVariants} className="cv-header mb-20">
          <div className="relative inline-block mb-4">
            <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-lg" />
            <p className="relative text-sm text-neutral-500 tracking-widest font-light px-3 py-1.5 uppercase">
              {t.cvTitle}
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6">
            <span className="text-white">GAZZOLI</span>
            <br />
            {/* ===== TEXT SCRAMBLE EFFECT ===== */}
            <span className="bg-gradient-to-r from-neutral-300 via-white to-neutral-500 bg-clip-text text-transparent animate-gradient-x font-mono">
              {scrambledName}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-400 font-light tracking-wide">
            {t.cvSubtitle}
          </p>
        </motion.header>

        {/* Profile Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <GlassCard3D>
            <SectionHeader icon={Sparkles} title={t.cvProfileTitle} />
            <p className="text-neutral-300 leading-relaxed font-light text-lg">{t.cvProfileText}</p>
          </GlassCard3D>
        </motion.section>

        {/* Two column layout */}
        <div className="cv-grid grid lg:grid-cols-5 gap-8">
          {/* Left column - Skills & Contact */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact */}
            <motion.section variants={itemVariants}>
              <GlassCard3D>
                <SectionHeader icon={Mail} title={t.cvContactTitle} />
                <div className="space-y-4">
                  <ContactItem
                    icon={Mail}
                    text={t.cvContactEmail}
                    href={`mailto:${t.cvContactEmail}`}
                  />
                  <ContactItem icon={MapPin} text={t.cvContactLocation} />
                </div>
              </GlassCard3D>
            </motion.section>

            {/* Skills with Animated Bars */}
            <motion.section variants={itemVariants}>
              <GlassCard3D>
                <SectionHeader icon={Code2} title={t.cvSkillsTitle} />
                <div className="space-y-6">
                  {skills.map((skill, i) => (
                    <AnimatedSkillBar key={i} {...skill} delay={i * 0.1} />
                  ))}
                </div>
              </GlassCard3D>
            </motion.section>

            {/* Interests */}
            <motion.section variants={itemVariants}>
              <GlassCard3D>
                <SectionHeader icon={Sparkles} title={t.cvInterestsTitle} />
                <div className="space-y-4">
                  {interests.map((interest, i) => (
                    <InterestItem key={i} {...interest} />
                  ))}
                </div>
              </GlassCard3D>
            </motion.section>
          </div>

          {/* Right column - Experience & Education */}
          <div className="lg:col-span-3 space-y-8">
            {/* Education */}
            <motion.section variants={itemVariants}>
              <GlassCard3D>
                <SectionHeader icon={GraduationCap} title={t.cvEducationTitle} />
                <div className="space-y-6">
                  {education.map((edu, i) => (
                    <TimelineItem
                      key={i}
                      title={edu.title}
                      subtitle={edu.school}
                      date={edu.date}
                      isLast={i === education.length - 1}
                    />
                  ))}
                </div>
              </GlassCard3D>
            </motion.section>

            {/* Projects */}
            <motion.section variants={itemVariants}>
              <GlassCard3D>
                <SectionHeader icon={Code2} title={t.cvProjectsTitle} />
                <div className="space-y-4">
                  {projects.map((project, i) => (
                    <div
                      key={i}
                      className="group/project p-4 -m-2 rounded-xl hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-medium text-white group-hover/project:text-white transition-colors">
                          {project.title}
                        </h4>
                        <span className="px-2 py-0.5 text-xs bg-white/10 text-white rounded-full border border-white/20">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 mb-2 font-mono">{project.tech}</p>
                      <p className="text-sm text-neutral-400 font-light leading-relaxed">
                        {project.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </GlassCard3D>
            </motion.section>

            {/* Experience */}
            <motion.section variants={itemVariants}>
              <GlassCard3D>
                <SectionHeader icon={Briefcase} title={t.cvExperienceTitle} />
                <div className="space-y-6">
                  {experiences.map((exp, i) => (
                    <TimelineItem
                      key={i}
                      title={exp.title}
                      subtitle={exp.company}
                      date={exp.date}
                      description={exp.desc}
                      isLast={i === experiences.length - 1}
                    />
                  ))}
                </div>
              </GlassCard3D>
            </motion.section>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ============= 3D GLASS CARD =============
function GlassCard3D({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // More subtle rotation with max limits of ±5 degrees
    setRotateX(Math.max(-5, Math.min(5, -mouseY / 50)));
    setRotateY(Math.max(-5, Math.min(5, mouseX / 50)));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setRotateX(0);
    setRotateY(0);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className="group relative rounded-2xl overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl" />

      {/* Border */}
      <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-white/[0.12] transition-colors duration-500" />

      {/* Hover gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent" />
      </div>

      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{ transform: 'translateZ(10px)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative p-6 md:p-8" style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </motion.div>
  );
}

// ============= ANIMATED SKILL BAR =============
function AnimatedSkillBar({
  icon: Icon,
  title,
  items,
  level,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  items: string[];
  level: number;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="group/skill">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon
            size={14}
            className="text-neutral-500 group-hover/skill:text-white transition-colors"
          />
          <span className="text-sm font-medium text-neutral-300">{title}</span>
        </div>
        <span className="text-xs text-neutral-500">{level}%</span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden mb-2">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-neutral-400 via-neutral-100 to-neutral-500"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {items.map((item, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: delay + 0.5 + i * 0.05 }}
            className="px-2 py-0.5 text-xs bg-white/[0.05] text-neutral-400 rounded-md border border-white/[0.06] hover:border-white/[0.15] hover:text-white transition-all cursor-default"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

// ============= SECTION HEADER =============
function SectionHeader({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.08]">
        <Icon size={16} className="text-neutral-400" />
      </div>
      <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-400 font-medium">{title}</h2>
    </div>
  );
}

// ============= CONTACT ITEM =============
function ContactItem({
  icon: Icon,
  text,
  href,
}: {
  icon: React.ElementType;
  text: string;
  href?: string;
}) {
  const content = (
    <div className="group/item flex items-center gap-3 p-3 -m-3 rounded-xl hover:bg-white/[0.03] transition-colors">
      <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] group-hover/item:border-white/[0.12] transition-colors">
        <Icon
          size={14}
          className="text-neutral-500 group-hover/item:text-neutral-300 transition-colors"
        />
      </div>
      <span className="text-neutral-300 font-light group-hover/item:text-white transition-colors">
        {text}
      </span>
      {href && (
        <ExternalLink
          size={12}
          className="text-neutral-600 group-hover/item:text-neutral-400 transition-colors ml-auto"
        />
      )}
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}

// ============= INTEREST ITEM =============
function InterestItem({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div className="group/interest flex gap-3 p-3 -m-3 rounded-xl hover:bg-white/[0.02] transition-colors">
      <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] h-fit">
        <Icon
          size={14}
          className="text-neutral-500 group-hover/interest:text-white transition-colors"
        />
      </div>
      <div>
        <h4 className="text-sm font-medium text-neutral-300 mb-1">{title}</h4>
        <p className="text-xs text-neutral-500 font-light leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

// ============= TIMELINE ITEM =============
function TimelineItem({
  title,
  subtitle,
  date,
  description,
  isLast,
}: {
  title: string;
  subtitle: string;
  date: string;
  description?: string;
  isLast?: boolean;
}) {
  return (
    <div className="relative pl-6 group/timeline">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[7px] top-8 bottom-0 w-px bg-gradient-to-b from-white/20 to-white/5" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-neutral-700 bg-black group-hover/timeline:border-white/50 group-hover/timeline:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300">
        <div className="absolute inset-1 rounded-full bg-neutral-700 group-hover/timeline:bg-white transition-colors" />
      </div>

      {/* Content */}
      <div className="pb-2">
        <h4 className="text-base font-medium text-white mb-1 group-hover/timeline:text-white transition-colors">
          {title}
        </h4>
        <p className="text-sm text-neutral-400 mb-1">{subtitle}</p>
        <p className="text-xs text-neutral-600 mb-2">{date}</p>
        {description && (
          <p className="text-sm text-neutral-500 font-light leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}
