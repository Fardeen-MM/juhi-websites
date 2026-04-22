import { PixelStar } from './Pixel.jsx';

const PHRASES = [
  'Honoring heritage · one bite at a time',
  'Est. 2026',
  'Somali-led · diaspora-wide',
  'Bun · Shaah · Xalwo',
  'Order online · pickup E8 · deliver London',
  'Community is the product',
];

export default function Marquee() {
  const loop = [...PHRASES, ...PHRASES];
  return (
    <div className="relative bg-maroon text-bone overflow-hidden border-y-2 border-maroon">
      <div className="flex marquee-track whitespace-nowrap py-4 will-change-transform">
        {loop.map((p, i) => (
          <span
            key={i}
            className="inline-flex items-center font-pixelbold text-[10px] md:text-[11px] uppercase tracking-widest2 shrink-0"
          >
            <span className="mx-10">{p}</span>
            <PixelStar size={10} className="text-y2klime" />
          </span>
        ))}
      </div>
    </div>
  );
}
