import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'green';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  icon?: ReactNode;
  loading?: boolean;
  className?: string;
  type?: 'button' | 'submit';
}

const variantClasses: Record<string, string> = {
  primary: 'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg',
  secondary: 'bg-primary-dark text-white hover:bg-primary shadow-md hover:shadow-lg',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  ghost: 'text-primary hover:bg-primary/10',
  green: 'bg-green-accent text-white hover:bg-green-light shadow-md hover:shadow-lg',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  icon,
  loading = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-colors duration-200 cursor-pointer font-body ${variantClasses[variant]} ${sizeClasses[size]} ${loading ? 'opacity-70 pointer-events-none' : ''} ${className}`;

  const content = (
    <>
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {icon && !loading && <span className="shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http');
    if (isExternal) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link to={href} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      disabled={loading}
    >
      {content}
    </motion.button>
  );
}
