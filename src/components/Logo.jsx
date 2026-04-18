export default function Logo({ className = '', size = 'md', showEst = true, inverted = false }) {
  const color = inverted ? '#f4ede3' : '#7d2411';
  const sizes = {
    sm: { wordmark: 'text-2xl md:text-3xl', ornament: 'w-14', est: 'text-[8px]' },
    md: { wordmark: 'text-4xl md:text-5xl', ornament: 'w-20', est: 'text-[9px]' },
    lg: { wordmark: 'text-6xl md:text-8xl', ornament: 'w-28', est: 'text-[11px]' },
    xl: { wordmark: 'text-[22vw] md:text-[16vw]', ornament: 'w-44 md:w-60', est: 'text-xs' },
  };
  const s = sizes[size] || sizes.md;

  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <svg
        viewBox="0 0 100 18"
        className={`${s.ornament} mb-3 md:mb-4`}
        fill="none"
        aria-hidden="true"
      >
        <line x1="0" y1="9" x2="30" y2="9" stroke={color} strokeWidth="0.6" />
        <line x1="70" y1="9" x2="100" y2="9" stroke={color} strokeWidth="0.6" />
        <ellipse cx="40" cy="9" rx="6" ry="4" stroke={color} strokeWidth="0.8" />
        <ellipse cx="50" cy="9" rx="6" ry="4" stroke={color} strokeWidth="0.8" />
        <ellipse cx="60" cy="9" rx="6" ry="4" stroke={color} strokeWidth="0.8" />
        <circle cx="40" cy="9" r="1.2" fill={color} />
        <circle cx="50" cy="9" r="1.2" fill={color} />
        <circle cx="60" cy="9" r="1.2" fill={color} />
      </svg>

      <h1
        className={`font-wordmark leading-none tracking-tight ${s.wordmark}`}
        style={{ color }}
      >
        nomad house
      </h1>

      {showEst && (
        <p
          className={`mt-3 md:mt-4 uppercase tracking-widest3 ${s.est}`}
          style={{ color }}
        >
          Est. 2026
        </p>
      )}
    </div>
  );
}
