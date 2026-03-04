import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import type { CardVariant } from '../../types';

interface CardProps {
  variant?: CardVariant;
  children: ReactNode;
  className?: string;
  highlighted?: boolean;
  onClick?: () => void;
}

/* White-surface card with brand palette.
   baseClasses owns: bg, radius, shadow, text floor.
   variantStyles owns: border, padding, top-accent colour.
*/
const baseClasses = [
  'bg-white rounded-2xl',
  'shadow-[0_2px_8px_rgba(0,55,100,0.07),0_1px_2px_rgba(0,0,0,0.04)]',
  'transition-shadow duration-300',
  'text-sm',
].join(' ');

const variantStyles: Record<CardVariant, string> = {
  feature:      'border border-border-gray border-t-[3px] border-t-primary      p-5 md:p-7',
  'case-study': 'border border-border-gray border-t-[3px] border-t-cyan-accent  p-5 md:p-7',
  pricing:      'border-2                  border-t-[3px] border-t-primary      p-5 md:p-7',
  industry:     'border border-border-gray border-t-[3px] border-t-green-accent p-5 md:p-7',
  resource:     'border border-border-gray border-t-[3px] border-t-primary      p-4 md:p-6',
};

export default function Card({
  variant = 'feature',
  children,
  className = '',
  highlighted = false,
  onClick,
}: CardProps) {
  const borderHighlight = highlighted
    ? 'border-primary shadow-lg ring-2 ring-primary/20'
    : variant === 'pricing'
      ? 'border-border-gray'
      : '';

  return (
    <motion.div
      className={`${baseClasses} ${variantStyles[variant]} ${borderHighlight} ${className}`}
      whileHover={{ y: -5, boxShadow: '0 16px 36px rgba(0,174,239,0.15), 0 2px 8px rgba(0,0,0,0.07)' }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
