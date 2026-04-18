const PHRASES = [
  'Honoring heritage, one bite at a time',
  'Est. 2026',
  'Home travels with us',
  'Buna · Shaah · Chai',
  'Dalston · London',
  'Community is the product',
];

export default function Marquee() {
  const loop = [...PHRASES, ...PHRASES];
  return (
    <div className="relative bg-maroon text-bone overflow-hidden border-y border-maroon/50">
      <div className="flex marquee-track whitespace-nowrap py-5 will-change-transform">
        {loop.map((p, i) => (
          <span
            key={i}
            className="inline-flex items-center text-[12px] md:text-[13px] uppercase tracking-widest2 shrink-0"
          >
            <span className="mx-10">{p}</span>
            <span className="opacity-60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
