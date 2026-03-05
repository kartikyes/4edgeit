import { type ReactNode, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router';

interface MegaMenuItem {
  label: string;
  href: string;
  description?: string;
}

interface MegaMenuProps {
  label: string;
  items: MegaMenuItem[];
  mobile?: boolean;
  light?: boolean;
}

export default function MegaMenu({ label, items, mobile = false, light = false }: MegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (mobile) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (mobile) return;
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  if (mobile) {
    return (
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full py-3 text-lg font-semibold text-dark-text"
        >
          {label}
          <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="w-6 h-6" />
          </motion.span>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 1 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pl-4 pb-2 space-y-1">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block py-2 text-medium-gray hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div
      ref={menuRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center gap-1 py-2 text-base lg:text-lg font-medium transition-colors nav-link-underline ${light ? 'text-white/90 hover:text-white' : 'text-dark-text hover:text-primary'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-6 h-6" />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 1, scaleY: 0.95, y: -5 }}
            animate={{ opacity: 1, scaleY: 1, y: 0 }}
            exit={{ opacity: 1, scaleY: 0.95, y: -5 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{ transformOrigin: 'top' }}
            className="absolute top-full left-0 min-w-[280px] mt-1 bg-white rounded-xl shadow-xl border border-border-gray p-3 z-50"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block px-4 py-3 rounded-lg hover:bg-light-gray transition-colors group text-base lg:text-lg"
                onClick={() => setIsOpen(false)}
              >
                <div className="font-medium text-dark-text group-hover:text-primary transition-colors">
                  {item.label}
                </div>
                {item.description && (
                  <div className="text-xs text-medium-gray mt-0.5">{item.description}</div>
                )}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// FAQ Accordion component
interface FAQAccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQAccordion({ question, answer, isOpen, onToggle }: FAQAccordionProps) {
  return (
    <div className="border border-border-gray rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full p-5 md:p-6 text-left hover:bg-light-gray/50 transition-colors"
      >
        <span className="font-semibold text-dark-text pr-4 font-heading">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 1 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 text-medium-gray leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Reusable icon wrapper
interface IconWrapperProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const iconSizeClasses = {
  sm: 'w-10 h-10',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
};

export function IconWrapper({ children, className = '', size = 'md' }: IconWrapperProps) {
  return (
    <div className={`${iconSizeClasses[size]} rounded-xl bg-primary/10 flex items-center justify-center text-primary ${className}`}>
      {children}
    </div>
  );
}
