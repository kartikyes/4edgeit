import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react'

const SCALE_FACTOR = 0.04
const STACK_PEEK_PX = 18

interface CardWrapperProps {
  children: ReactNode
  index: number
  total: number
  scrollYProgress: MotionValue<number>
  topOffset: number
  cardHeight: string // <-- 1. Add this prop
}

function CardWrapper({
  children,
  index,
  total,
  scrollYProgress,
  topOffset,
  cardHeight, // <-- 2. Destructure it
}: CardWrapperProps) {
  const isLast = index === total - 1
  const scaleInputRange = isLast ? [0, 1] : [(index + 1) / total, 1]
  const scaleOutputRange = isLast ? [1, 1] : [1, 1 - (total - 1 - index) * SCALE_FACTOR]

  const yInputRange = isLast ? [0, 1] : [(index + 1) / total, 1]
  const yOutputRange = isLast ? ['0%', '0%'] : ['0%', '-2.5%']

  const scale = useTransform(scrollYProgress, scaleInputRange, scaleOutputRange)
  const y = useTransform(scrollYProgress, yInputRange, yOutputRange)

  return (
    <div
      className="sticky"
      style={{ 
        top: topOffset + index * STACK_PEEK_PX, 
        zIndex: index + 1,
        height: cardHeight // <-- 3. Give the wrapper the physical scroll height
      }}
    >
      <motion.div style={{ scale, y }} className="origin-top pb-5">
        {children}
      </motion.div>
    </div>
  )
}

export interface StackedCardProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => ReactNode
  heightMultiplier?: number
  topOffset?: number
  className?: string
}

export default function StackedCard<T>({
  items,
  renderItem,
  heightMultiplier = 1.25,
  topOffset = 88,
  className = '',
}: StackedCardProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress scoped to this container only.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // 4. Calculate height once here
  const cardHeight = `${heightMultiplier * 100}vh` 

  return (
    <div
      ref={containerRef}
      // 5. Remove the inline style height from here! 
      // The wrappers will naturally give the container the exact right height.
      className={className}
    >
      {items.map((item, i) => (
        <CardWrapper
          key={i}
          index={i}
          total={items.length}
          scrollYProgress={scrollYProgress}
          topOffset={topOffset}
          cardHeight={cardHeight} // <-- 6. Pass it down
        >
          {renderItem(item, i)}
        </CardWrapper>
      ))}
    </div>
  )
}