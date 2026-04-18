import Reveal from './Reveal.jsx';
import { EVENTS } from '../data/events.js';

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
            <p className="text-[11px] uppercase tracking-widest2 text-maroon/60 mb-4">Events — 05</p>
            <h2 className="font-display font-light text-4xl md:text-6xl text-maroon leading-[1.05] max-w-[16ch]">
              We gather. <span className="italic">Often, and with intent.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="max-w-sm">
            <p className="text-sm text-charcoal leading-relaxed">
              Supper clubs, heritage walks, book club on the last Sunday of the
              month. Here&apos;s what&apos;s next — RSVP from the events page.
            </p>
          </Reveal>
        </div>

        <ul className="divide-y divide-maroon/15 border-y border-maroon/20">
          {upcoming.map((e, i) => {
            const d = formatDate(e.date);
            return (
              <Reveal as="li" key={e.id} delay={i * 60}>
                <a
                  href="#/events"
                  className="grid grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 group items-center"
                >
                  <div className="col-span-3 md:col-span-2">
                    <p className="text-[10px] uppercase tracking-widest2 text-maroon/60">{d.weekday}</p>
                    <p className="font-display text-4xl md:text-5xl text-maroon leading-none mt-1">
                      {d.day}
                    </p>
                    <p className="text-[10px] uppercase tracking-widest2 text-maroon/60 mt-1">{d.month}</p>
                  </div>
                  <div className="col-span-9 md:col-span-6">
                    <p className="text-[10px] uppercase tracking-widest2 text-maroon/60 mb-2">
                      {e.type === 'virtual' ? 'Virtual' : 'In-Person'} · {e.category}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl text-maroon group-hover:italic transition-all">
                      {e.icon} {e.title}
                    </h3>
                    <p className="text-sm text-charcoal/80 mt-1">{e.location}</p>
                  </div>
                  <div className="hidden md:block col-span-3 text-right">
                    <p className="text-[10px] uppercase tracking-widest2 text-maroon/60 mb-1">{e.time}</p>
                    <p className="text-sm text-charcoal">
                      {e.rsvp.spots - e.rsvp.taken > 0
                        ? `${e.rsvp.spots - e.rsvp.taken} spots left`
                        : 'Waitlist open'}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-1 flex md:justify-end">
                    <span className="text-[11px] uppercase tracking-widest2 text-maroon border-b border-maroon">
                      RSVP →
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
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-widest2 text-maroon border-b border-maroon pb-1"
            >
              See the full calendar
              <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
