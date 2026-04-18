import { useEffect, useState } from 'react';

const LINKS = [
  { label: 'Shop', href: '#/shop' },
  { label: 'Community', href: '#/community' },
  { label: 'Events', href: '#/events' },
  { label: 'Journal', href: '#/journal' },
  { label: 'About', href: '#/about' },
];

export default function Nav({ route = 'home' }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = route === 'home';
  const onDarkHero = isHome && !scrolled;

  const baseText = onDarkHero ? 'text-bone' : 'text-maroon';
  const bg = scrolled
    ? 'bg-bone/90 backdrop-blur-md border-b border-maroon/10'
    : 'bg-transparent';

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${bg} ${baseText}`}>
      <div className="flex items-center justify-between px-5 md:px-10 py-5">
        <a
          href="#/"
          className="font-wordmark text-xl md:text-2xl tracking-tight"
          onClick={() => setOpen(false)}
        >
          nomad house
        </a>

        <nav className="hidden md:flex items-center gap-9 text-[11px] uppercase tracking-widest2">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="opacity-80 hover:opacity-100 transition-opacity duration-500"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5 text-[11px] uppercase tracking-widest2">
          <a
            href="#/community"
            className="inline-flex items-center gap-2 opacity-80 hover:opacity-100"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sage pulse-dot" />
            <span>247 in Discord</span>
          </a>
          <a
            href="#/shop"
            className="border border-current px-4 py-2 hover:bg-maroon hover:text-bone hover:border-maroon transition-colors duration-300"
          >
            Shop
          </a>
        </div>

        <button
          className="md:hidden inline-flex flex-col gap-1.5 py-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[1.5px] bg-current transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-current transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ${open ? 'max-h-[520px]' : 'max-h-0'} ${scrolled ? '' : 'bg-bone/95 backdrop-blur-md'} border-t border-maroon/10`}
      >
        <nav className="px-6 py-8 flex flex-col gap-5 text-maroon">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#/community"
            onClick={() => setOpen(false)}
            className="mt-4 text-[11px] uppercase tracking-widest2 inline-flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sage pulse-dot" />
            247 members in Discord
          </a>
        </nav>
      </div>
    </header>
  );
}
