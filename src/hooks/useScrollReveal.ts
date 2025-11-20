import { useRef } from 'react';
import { useInView } from 'framer-motion';

export type ScrollRevealVariant = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scaleIn';

export const scrollRevealVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
} as const;

interface UseScrollRevealOptions {
  once?: boolean;
}

/**
 * Hook for scroll-triggered animations
 * @param options - Configuration options for the scroll reveal
 * @returns Object containing ref and isInView state
 */
export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { once = true } = options;
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once });

  return { ref, isInView };
}
