import { type ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'green' | 'cyan' | 'dark' | 'light';
  size?: 'sm' | 'md';
  className?: string;
}

const variantClasses: Record<string, string> = {
  primary: 'bg-primary/10 text-primary',
  green: 'bg-green-accent/10 text-green-accent',
  cyan: 'bg-cyan-accent/10 text-cyan-accent',
  dark: 'bg-primary-dark/10 text-primary-dark',
  light: 'bg-white/15 text-white',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
};

export default function Badge({ children, variant = 'primary', size = 'sm', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center font-semibold uppercase tracking-wider rounded-full font-body ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </span>
  );
}
