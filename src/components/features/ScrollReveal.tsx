'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal, scrollRevealVariants, ScrollRevealVariant } from '@/hooks/useScrollReveal';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  variant?: ScrollRevealVariant;
}

export default function ScrollReveal({
  children,
  delay = 0,
  variant = 'fadeUp',
}: ScrollRevealProps) {
  const { ref, isInView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      variants={scrollRevealVariants[variant]}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
