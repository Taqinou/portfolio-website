'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  target,
  rel,
}: ButtonProps) {
  const baseClasses = 'group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-lg overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]';
  
  const variantClasses = {
    primary: 'text-black bg-white shadow-lg',
    secondary: 'text-white bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.12]',
    ghost: 'text-neutral-300 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] hover:border-white/[0.1] hover:text-white',
  };

  const gradientClasses = {
    primary: 'from-neutral-100 to-neutral-200',
    secondary: 'from-white/[0.08] via-transparent to-transparent',
    ghost: 'from-white/[0.06] via-transparent to-transparent',
  };

  const glowClasses = {
    primary: 'group-hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.5)] group-hover:text-red-800',
    secondary: 'group-hover:drop-shadow-[0_0_10px_rgba(147,51,234,0.5)] group-hover:text-purple-200',
    ghost: 'group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:text-blue-200',
  };

  const content = (
    <>
      <span className={`relative z-10 transition-all duration-300 ${glowClasses[variant]}`}>
        {children}
      </span>
      <div className={`absolute inset-0 bg-gradient-to-r ${gradientClasses[variant]} opacity-0 group-hover:opacity-100 transition-opacity ${variant === 'primary' ? '' : 'duration-500'}`} />
    </>
  );

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className={classes}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className={classes}
    >
      {content}
    </motion.button>
  );
}
