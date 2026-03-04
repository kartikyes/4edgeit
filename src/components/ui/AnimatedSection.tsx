import { type ReactNode } from 'react';
import { motion } from 'motion/react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const directionOffset = {
  up:    { x: 0,   y: 40  },
  down:  { x: 0,   y: -40 },
  left:  { x: 40,  y: 0   },
  right: { x: -40, y: 0   },
};

/**
 * Scroll-reveal wrapper.
 *
 * Uses `whileInView` — the canonical Framer Motion approach — instead of the
 * manual `useInView + animate` pattern.  The difference matters for correctness:
 *
 *  ❌ `animate={isInView ? visible : hidden}`
 *     The reactive switch can fire on a stale viewport frame (old scroll Y)
 *     before `useLayoutEffect` has reset scroll to 0, causing elements that
 *     happen to sit in the old viewport to briefly skip their entrance animation.
 *
 *  ✅ `whileInView={visible}` + `viewport={{ once: true }}`
 *     Framer Motion evaluates the viewport internally, after layout is committed,
 *     and coordinates with the parent AnimatePresence context automatically.
 */
export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const { x, y } = directionOffset[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

// Staggered children wrapper — same fix applied: whileInView instead of useInView+animate
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({ children, className = '', staggerDelay = 0.1 }: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Fade + scale reveal — ideal for stat counters & icon cards */
export function FadeScaleItem({ children, className = '' }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, scale: 0.85 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Alternating slide item — odd children slide from left, even from right */
export function AlternatingSlideItem({
  children,
  className = '',
  index = 0,
}: StaggerItemProps & { index?: number }) {
  const fromLeft = index % 2 === 0;
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, x: fromLeft ? -50 : 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      }}
    >
      {children}
    </motion.div>
  );
}
