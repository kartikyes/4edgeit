import { useCountUp } from '../../hooks/useCountUp';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  light?: boolean;
}

export default function StatCounter({ value, suffix = '', label, light = false }: StatCounterProps) {
  const { count, ref } = useCountUp(value);

  return (
    <div ref={ref} className="text-center px-4">
      <div className={`font-mono text-4xl md:text-5xl lg:text-6xl font-bold ${light ? 'text-white' : 'text-primary'}`}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className={`mt-2 text-base md:text-lg font-medium ${light ? 'text-white/80' : 'text-medium-gray'}`}>
        {label}
      </div>
    </div>
  );
}
