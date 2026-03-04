import { useRef } from 'react';
import { useInView } from 'motion/react';

// Derive the margin type directly from useInView's options parameter so this
// hook always stays in sync with Motion's internal typings, no matter what
// the type is named or whether it's publicly exported.
type UseInViewOptions = NonNullable<Parameters<typeof useInView>[1]>;
type MarginType = UseInViewOptions['margin'];

export function useScrollReveal(margin: MarginType = '-100px') {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin });
  return { ref, isInView };
}
