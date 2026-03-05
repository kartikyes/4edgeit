import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import Badge from './Badge';
import Button from './Button';
import MockupPlaceholder from './MockupPlaceHolder';
import { useCountUp } from '../../hooks/useCountUp';
import type { StatItem } from '../../types';

// ─── Types ──────────────────────────────────────────────────────────────────

interface CtaLink {
  label: string;
  href: string;
}

interface HeroSectionProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  proofLine?: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  stats?: StatItem[];
  /** Right-column visual override. Defaults to <MockupPlaceholder />. */
  visual?: ReactNode;
  /** 'compact' = centred, single-column, no visual panel. */
  variant?: 'compact';
}

// ─── Animated stat counter ───────────────────────────────────────────────────

function AnimatedStat({ value, suffix, label }: StatItem) {
  const { count, ref } = useCountUp(value, 2000);

  const display =
    value >= 1_000_000
      ? (count / 1_000_000).toFixed(count % 1_000_000 === 0 ? 0 : 1) + 'M'
      : value >= 1_000
      ? count.toLocaleString()
      : value % 1 !== 0
      ? count === value
        ? value.toString()
        : count.toFixed(1)
      : count.toString();

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl lg:text-3xl font-extrabold font-heading text-white leading-none">
        {display}
        {suffix}
      </div>
      <div className="mt-1 text-xs text-white/60 leading-tight">{label}</div>
    </div>
  );
}



// ─── MetricsVisual (named export used by service pages) ─────────────────────

interface MetricsVisualItem {
  icon: ReactNode;
  label: string;
  value?: string;
}

interface MetricsVisualProps {
  title: string;
  items: MetricsVisualItem[];
}

export function MetricsVisual({ title, items }: MetricsVisualProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-2xl"
    >
      <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-5">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
            className="flex items-center gap-3 rounded-xl bg-white/8 border border-white/10 px-3 py-3 hover:bg-white/12 transition-colors"
          >
            <span className="shrink-0 text-primary">{item.icon}</span>
            <span className="text-xs font-medium text-white/80 leading-snug flex-1">
              {item.label}
            </span>
            {item.value && (
              <span className="text-xs font-bold text-cyan-accent shrink-0">
                {item.value}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function HeroSection({
  badge,
  title,
  titleHighlight,
  subtitle,
  proofLine,
  primaryCta,
  secondaryCta,
  stats,
  visual,
  variant,
}: HeroSectionProps) {
  // ── Compact variant: centred, no right panel ────────────────────────────
  if (variant === 'compact') {
    return (
      <section className="gradient-hero hero-grid-bg relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl mx-auto"
          >
            {badge && (
              <Badge variant="light" size="md" className="mb-5">
                {badge}
              </Badge>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white leading-tight">
              {title}
              {titleHighlight && (
                <>
                  {' '}
                  <span className="text-gradient">{titleHighlight}</span>
                </>
              )}
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>

            {proofLine && (
              <p className="mt-4 text-sm text-white/50 font-mono tracking-wide">
                {proofLine}
              </p>
            )}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-4 justify-center"
            >
              <Button variant="primary" size="lg" href={primaryCta.href}>
                {primaryCta.label}
              </Button>
              {secondaryCta && (
                <Button
                  variant="outline"
                  size="lg"
                  href={secondaryCta.href}
                  className="border-white text-white hover:bg-white hover:text-primary-dark"
                >
                  {secondaryCta.label}
                </Button>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  // ── Standard variant: text-left, visual-right ───────────────────────────
  return (
    <section className="gradient-hero hero-grid-bg relative overflow-hidden pt-28 md:pt-36 lg:pt-40 pb-20 md:pb-28 lg:pb-32">
      {/* Background glow orbs */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-150 w-150 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-100 w-100 rounded-full bg-cyan-accent/8 blur-3xl" />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Left column: text content ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <Badge variant="light" size="md" className="mb-5">
                  {badge}
                </Badge>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl xl:text-6xl font-extrabold font-heading text-white leading-tight"
            >
              {title}
              {titleHighlight && (
                <>
                  <br />
                  <span className="text-gradient">{titleHighlight}</span>
                </>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-base md:text-lg text-white/70 leading-relaxed max-w-xl"
            >
              {subtitle}
            </motion.p>

            {proofLine && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28 }}
                className="mt-4 text-sm text-white/50 font-mono tracking-wide"
              >
                {proofLine}
              </motion.p>
            )}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button variant="primary" size="lg" href={primaryCta.href}>
                {primaryCta.label}
              </Button>
              {secondaryCta && (
                <Button
                  variant="outline"
                  size="lg"
                  href={secondaryCta.href}
                  className="border-white text-white hover:bg-white hover:text-primary-dark"
                >
                  {secondaryCta.label}
                </Button>
              )}
            </motion.div>

            {stats && stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="mt-10 grid gap-x-8 gap-y-4 pt-8 border-t border-white/10"
                style={{ gridTemplateColumns: `repeat(${Math.min(stats.length, 4)}, minmax(0, 1fr))` }}
              >
                {stats.map((s) => (
                  <AnimatedStat key={s.label} {...s} />
                ))}
              </motion.div>
            )}

          </motion.div>

          {/* ── Right column: visual / mockup ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex items-center justify-center w-full lg:-mt-16"
          >
            {visual ?? (
              <MockupPlaceholder
                label="Product Screenshot"
                className="w-full"
              />
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
