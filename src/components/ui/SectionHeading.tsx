import Badge from './Badge';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  /* Non-light: brand deep-blue heading. Light (dark bg): white. */
  const titleColor = light ? 'text-white' : 'text-heading';
  const subtitleColor = light ? 'text-white/80' : 'text-medium-gray';

  return (
    <div className={`max-w-8xl mb-10 md:mb-14 ${alignClass} ${className}`}>
      {badge && (
        <div className={`mb-4 ${align === 'center' ? 'flex justify-center' : ''}`}>
          <Badge variant={light ? 'light' : 'primary'} size="md">
            {badge}
          </Badge>
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg md:text-xl leading-relaxed ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
