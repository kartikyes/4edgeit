import type { ReactNode } from 'react'
import { motion } from 'motion/react'

interface MockupPlaceholderProps {
  /** Descriptive text shown inside the placeholder */
  label?: string
  className?: string
  /** Optional overlay content (e.g. floating stat cards) */
  children?: ReactNode
}

/**
 * Animated placeholder card for device-mockup images.
 * Extracted because the identical pattern appeared in multiple pages.
 */
const MockupPlaceholder = ({
  label = 'Laptop & Phone Mockup Area',
  className = '',
  children,
}: MockupPlaceholderProps) => (
  <motion.div
    initial={{ opacity: 1, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.1, boxShadow: '0 12px 32px rgba(0,0,0,0.13)' }}
    className={`relative w-full aspect-square md:aspect-4/3 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col ${className}`}
  >
    <div className="absolute inset-0 bg-gray-100 rounded-3xl shadow-xl border border-gray-200 overflow-hidden flex items-center justify-center">
      <span className="text-gray-400 font-medium">{label}</span>
    </div>
    {children}
  </motion.div>
)

export default MockupPlaceholder
