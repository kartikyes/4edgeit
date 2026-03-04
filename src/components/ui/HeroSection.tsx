/**
 * HeroSection — Reusable, two-column hero layout
 *
 * Structural guarantee:  text content always on the LEFT, a visual always on the RIGHT.
 * Variation point:       the `visual` prop (slot).  Three ready-made visuals are exported
 *                        as named sub-components so different page groups feel distinct
 *                        without breaking layout consistency.
 *
 * Page-group conventions
 * ─────────────────────────────────────────────────────────────────────────────────────
 *  Home / featured landing  → variant="featured"   + custom visual (DashboardVisual or
 *                                                    fully bespoke JSX passed as visual)
 *  Product pages            → variant="split"      + visual={<DashboardVisual …/>}
 *  Service pages            → variant="split"      + visual={<MetricsVisual …/>}
 *  Info pages (Company, …)  → variant="compact"    (single column; visual not rendered)
 * ─────────────────────────────────────────────────────────────────────────────────────
 */

import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import Badge from './Badge';
import Button from './Button';
import StatCounter from './StatCounter';
import MockupPlaceholder from './MockupPlaceHolder';

// ─── Types ───────────────────────────────────────────────────────────────────

interface CTAButton {
  label: string;
  href: string;
}

export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

/**
 * `featured` → min-h-screen  + 2 equal columns     (home / flagship landing pages)
 * `split`    → min-h-[70vh]  + 2 equal columns     (product & service pages)  ← default
 * `compact`  → min-h-[50vh]  + single left column  (informational pages)
 */
export type HeroVariant = 'featured' | 'split' | 'compact';

export interface HeroSectionProps {
  badge?: string;
  /** Text before the gradient-highlighted portion */
  title: string;
  /** Appended to `title` inside a text-gradient span */
  titleHighlight?: string;
  subtitle?: string;
  proofLine?: string;
  primaryCta?: CTAButton;
  secondaryCta?: CTAButton;
  tertiaryCta?: CTAButton;
  stats?: HeroStat[];
  visual?: ReactNode;
  mockupLabel?: string;
  variant?: HeroVariant;
  showDecorations?: boolean;
  className?: string;
}

const minH: Record<HeroVariant, string> = {
  featured: 'min-h-screen',
  split: 'min-h-[70vh]',
  compact: 'min-h-[50vh]',
};


export default function HeroSection({
  badge,
  title,
  titleHighlight,
  subtitle,
  proofLine,
  primaryCta,
  secondaryCta,
  tertiaryCta,
  stats,
  visual,
  mockupLabel = 'Interactive Preview',
  variant = 'split',
  showDecorations,
  className = '',
}: HeroSectionProps) {
  const isSplit = variant !== 'compact';
  const decorations = showDecorations ?? variant === 'featured';

  return (
    <section
      className={`relative ${minH[variant]} flex items-center gradient-hero hero-grid-bg overflow-hidden ${className}`}
    >
      {/* Floating geometric decorations */}
      {decorations && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          <motion.div
            className="absolute top-20 right-10 w-64 h-64 border border-white/5 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-40 h-40 border border-cyan-accent/10 rotate-45"
            animate={{ rotate: 405 }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute top-1/3 left-1/4 w-3 h-3 bg-cyan-accent/30 rounded-full"
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-2 h-2 bg-green-accent/30 rounded-full"
            animate={{ y: [20, -20, 20] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>
      )}

      {/* Inner container */}
      <div className="max-w-screen-2xl mx-auto px-4 pt-24 pb-12 relative z-10 w-full">
        <div
          className={
            isSplit
              ? 'grid lg:grid-cols-2 gap-12 items-center'
              : 'max-w-4xl'
          }
        >
          {/* ── LEFT: Text content ── */}
          <div>
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge variant="light" size="md">{badge}</Badge>
              </motion.div>
            )}

            <motion.h1
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {title}
              {titleHighlight && (
                <>{' '}<span className="text-gradient">{titleHighlight}</span></>
              )}
            </motion.h1>

            {subtitle && (
              <motion.p
                className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {subtitle}
              </motion.p>
            )}

            {proofLine && (
              <motion.div
                className="mt-4 flex items-center gap-2 text-white/60 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <CheckCircle2 className="w-4 h-4 text-green-accent shrink-0" />
                <span>{proofLine}</span>
              </motion.div>
            )}

            {(primaryCta || secondaryCta || tertiaryCta) && (
              <motion.div
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {primaryCta && (
                  <Button variant="primary" size="lg" href={primaryCta.href}>
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button
                    variant="outline"
                    size="lg"
                    href={secondaryCta.href}
                    className="border-white/30 text-white hover:bg-white hover:text-primary-dark"
                  >
                    {secondaryCta.label}
                  </Button>
                )}
                {tertiaryCta && (
                  <Button variant="ghost" size="lg" href={tertiaryCta.href}>
                    {tertiaryCta.label}
                  </Button>
                )}
              </motion.div>
            )}

            {stats && stats.length > 0 && (
              <motion.div
                className="mt-12 grid gap-6 max-w-lg"
                style={{ gridTemplateColumns: `repeat(${Math.min(stats.length, 4)}, minmax(0,1fr))` }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                {stats.map((s) => (
                  <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} light />
                ))}
              </motion.div>
            )}
          </div>

          {/* ── RIGHT: Visual slot ── */}
          {isSplit && (
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {visual ?? <MockupPlaceholder label={mockupLabel} />}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

interface DashboardVisualProps {
  stats?: Array<{ value: string; label: string; colorClass: string }>;
  bars?: Array<{ label: string; percent: number }>;
  addressBarText?: string;
}

export function DashboardVisual({
  stats = [
    { value: '30,000+', label: 'Active Users',  colorClass: 'bg-cyan-accent/20 text-cyan-accent'  },
    { value: '91.3%',   label: 'Completion',    colorClass: 'bg-green-accent/20 text-green-accent' },
    { value: '99.9%',   label: 'Uptime',        colorClass: 'bg-primary/20 text-primary'           },
  ],
  bars = [
    { label: 'Safety Training',     percent: 91 },
    { label: 'Compliance Module',   percent: 85 },
    { label: 'Leadership Program',  percent: 73 },
    { label: 'Product Knowledge',   percent: 96 },
  ],
  addressBarText = 'k-nest.4edgeit.com/dashboard',
}: DashboardVisualProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-400/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
        <div className="w-3 h-3 rounded-full bg-green-400/70" />
        <div className="flex-1 bg-white/10 rounded h-5 ml-2 flex items-center px-2">
          <span className="text-white/30 text-xs font-mono truncate">{addressBarText}</span>
        </div>
      </div>

      {/* Stat pills */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {stats.map((s) => (
          <div key={s.label} className={`${s.colorClass} rounded-xl p-3 text-center`}>
            <div className="font-mono text-lg font-bold leading-tight">{s.value}</div>
            <div className="text-xs mt-0.5 opacity-70">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Progress bars */}
      <div className="space-y-2.5">
        {bars.map((b, i) => (
          <div key={b.label} className="flex items-center gap-3">
            <div className="w-28 text-xs text-white/40 truncate">{b.label}</div>
            <div className="flex-1 bg-white/10 rounded-full h-2">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-cyan-accent to-primary"
                initial={{ width: 0 }}
                animate={{ width: `${b.percent}%` }}
                transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
              />
            </div>
            <span className="text-xs text-white/40 font-mono w-8">{b.percent}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface MetricsVisualProps {
  title?: string;
  items: Array<{ icon: ReactNode; label: string; value?: string }>;
}

export function MetricsVisual({ title = 'Key Capabilities', items }: MetricsVisualProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <p className="text-white/50 text-sm font-semibold tracking-wider uppercase mb-4">{title}</p>
      <div className="grid grid-cols-2 gap-3">
        {items.slice(0, 6).map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/5"
          >
            <div className="text-cyan-accent shrink-0">{item.icon}</div>
            <div>
              {item.value && (
                <div className="font-mono text-base font-bold text-white leading-tight">
                  {item.value}
                </div>
              )}
              <div className="text-xs text-white/60">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
