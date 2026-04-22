import Reveal from './Reveal.jsx';
import { POSTS } from '../data/journal.js';
import { PixelStar, PixelArrow } from './Pixel.jsx';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function JournalTeaser() {
  const [featured, ...rest] = POSTS;
  const grid = rest.slice(0, 3);

  return (
    <section id="journal" className="relative bg-bone py-28 md:py-40">
      <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16 md:mb-20">
          <Reveal>
            <p className="font-pixelbold text-[10px] uppercase tracking-widest2 text-maroon/70 mb-4 inline-flex items-center gap-2">
              <PixelStar size={10} className="text-maroon animate-sparkle" /> The Journal — 06
            </p>
            <h2 className="font-display font-light text-4xl md:text-6xl text-maroon leading-[1.05] max-w-[16ch]">
              Stories worth <span className="italic">a second cup.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="max-w-sm">
            <p className="text-sm text-charcoal leading-relaxed">
              Ingredient notes, diaspora essays, and the occasional playlist.
              Published on Saturdays, slow-read on Sundays.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <a href="#/journal" className="block group">
              <div className="relative overflow-hidden aspect-[4/3] bg-sand group-hover:glow-ember transition-all duration-500">
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1600ms] ease-soft group-hover:scale-[1.03]"
                />
                <span className="absolute top-5 left-5 font-pixelbold text-[9px] uppercase tracking-widest2 text-bone bg-maroon px-3 py-1.5 pixel-shadow-cream">
                  Featured · {featured.series}
                </span>
              </div>
              <div className="mt-6">
                <p className="font-pixelbold text-[9px] uppercase tracking-widest2 text-maroon/60 mb-2">
                  {formatDate(featured.date)} · {featured.readTime}
                </p>
                <h3 className="font-display text-3xl md:text-4xl text-maroon leading-tight group-hover:italic transition-all">
                  {featured.title}
                </h3>
                <p className="mt-4 text-[15px] text-charcoal/85 leading-relaxed max-w-2xl">
                  {featured.excerpt}
                </p>
                <p className="mt-4 font-pixelbold text-[9px] uppercase tracking-widest2 text-maroon/70">
                  By {featured.author}
                </p>
              </div>
            </a>
          </Reveal>

          <div className="lg:col-span-5 flex flex-col divide-y-2 divide-maroon/15 border-y-2 border-maroon/15">
            {grid.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <a href="#/journal" className="block py-7 group">
                  <p className="font-pixelbold text-[9px] uppercase tracking-widest2 text-maroon/60 mb-2">
                    {p.series}
                  </p>
                  <h4 className="font-display text-xl md:text-2xl text-maroon leading-snug group-hover:italic transition-all">
                    {p.title}
                  </h4>
                  <p className="mt-2 text-sm text-charcoal/75 leading-relaxed line-clamp-2">
                    {p.excerpt}
                  </p>
                  <p className="mt-3 font-pixelbold text-[9px] uppercase tracking-widest2 text-charcoal/50">
                    {formatDate(p.date)} · {p.readTime}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200}>
          <div className="mt-16 text-center">
            <a
              href="#/journal"
              className="inline-flex items-center gap-3 font-pixelbold text-[11px] uppercase tracking-widest2 text-bone bg-maroon px-6 py-3 pixel-shadow-cream hover:bg-rust transition-colors"
            >
              Read the journal <PixelArrow size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
