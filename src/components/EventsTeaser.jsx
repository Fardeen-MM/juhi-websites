import Reveal from './Reveal.jsx';
import { EVENTS } from '../data/events.js';
import { PixelStar, PixelArrow } from './Pixel.jsx';

function formatDate(iso) {
  const d = new Date(iso);
  return {
    month: d.toLocaleString('en-GB', { month: 'short' }).toUpperCase(),
    day: d.getDate(),
    weekday: d.toLocaleString('en-GB', { weekday: 'short' }).toUpperCase(),
  };
}

export default function EventsTeaser() {
  const upcoming = EVENTS.slice(0, 4);
  return (
    <section id="events" className="relative bg-paper py-28 md:py-40">
      <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16 md:mb-20">
          <Reveal>
            <p className="font-pixelbold text-[10px] uppercase tracking-widest2 text-maroon/70 mb-4 inline-flex items-center gap-2">
              <PixelStar size={10} className="text-maroon animate-sparkle" /> Events — 05
            </p>
            <h2 className="font-display font-light text-4xl md:text-6xl text-maroon leading-[1.05] max-w-[16ch]">
              We gather <span className="italic">in borrowed rooms.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="max-w-sm">
            <p className="text-sm text-charcoal leading-relaxed">
              Supper clubs at Dalston Curve, bun ceremonies at The Africa Centre,
              book club on Zoom. Here&apos;s what&apos;s next — RSVP from the events page.
            </p>
          </Reveal>
        </div>

        <ul className="divide-y-2 divide-maroon/15 border-y-2 border-maroon/20">
          {upcoming.map((e, i) => {
            const d = formatDate(e.date);
            return (
              <Reveal as="li" key={e.id} delay={i * 60}>
                <a
                  href="#/events"
                  className="grid grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 group items-center"
                >
                  <div className="col-span-3 md:col-span-2">
                    <p className="font-pixelbold text-[9px] uppercase tracking-widest2 text-maroon/60">{d.weekday}</p>
                    <p className="font-display text-4xl md:text-5xl text-maroon leading-none mt-1">
                      {d.day}
                    </p>
                    <p className="font-pixelbold text-[9px] uppercase tracking-widest2 text-maroon/60 mt-1">{d.month}</p>
                  </div>
                  <div className="col-span-9 md:col-span-6">
                    <p className="font-pixelbold text-[9px] uppercase tracking-widest2 text-maroon/60 mb-2">
                      {e.type === 'virtual' ? 'Virtual' : 'In-Person'} · {e.category}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl text-maroon group-hover:italic transition-all">
                      {e.icon} {e.title}
                    </h3>
                    <p className="text-sm text-charcoal/80 mt-1">{e.venue}</p>
                  </div>
                  <div className="hidden md:block col-span-3 text-right">
                    <p className="font-pixelbold text-[9px] uppercase tracking-widest2 text-maroon/60 mb-1">{e.time}</p>
                    <p className="text-sm text-charcoal">
                      {e.rsvp.spots - e.rsvp.taken > 0
                        ? `${e.rsvp.spots - e.rsvp.taken} spots left`
                        : 'Waitlist open'}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-1 flex md:justify-end">
                    <span className="font-pixelbold text-[10px] uppercase tracking-widest2 text-maroon border-b-2 border-maroon inline-flex items-center gap-1">
                      RSVP <PixelArrow size={10} />
                    </span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <a
              href="#/events"
              className="inline-flex items-center gap-3 font-pixelbold text-[11px] uppercase tracking-widest2 text-bone bg-maroon px-6 py-3 pixel-shadow-cream hover:bg-rust transition-colors"
            >
              See the full calendar <PixelArrow size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
