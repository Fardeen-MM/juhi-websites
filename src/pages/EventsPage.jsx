import { useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import { EVENTS, PAST_EVENTS, TESTIMONIALS, PARTNERS } from '../data/events.js';
import { PixelStar, PixelHeart, PixelArrow } from '../components/Pixel.jsx';

const TYPE_FILTERS = ['All', 'Virtual', 'In-Person'];
const CATEGORY_FILTERS = ['All', 'Food', 'Art', 'Sports & Fitness', 'Business'];

function formatDate(iso) {
  const d = new Date(iso);
  return {
    full: d.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    day: d.getDate(),
    month: d.toLocaleString('en-GB', { month: 'short' }).toUpperCase(),
    weekday: d.toLocaleString('en-GB', { weekday: 'short' }).toUpperCase(),
  };
}

function CalendarView({ events }) {
  const first = new Date('2026-05-01');
  const startDay = (first.getDay() + 6) % 7;
  const daysIn = new Date(2026, 5, 0).getDate();
  const cells = [];
  for (let i = 0; i < startDay; i++) cells.push(null);
  for (let d = 1; d <= daysIn; d++) cells.push(d);

  const eventByDay = useMemo(() => {
    const map = {};
    events.forEach((e) => {
      const d = new Date(e.date);
      if (d.getFullYear() === 2026 && d.getMonth() === 4) {
        map[d.getDate()] = e;
      }
    });
    return map;
  }, [events]);

  return (
    <div className="bg-paper border-2 border-maroon/30 p-5 md:p-8 pixel-shadow">
      <div className="flex items-baseline justify-between mb-6">
        <p className="font-display text-2xl md:text-3xl text-maroon">May 2026</p>
        <p className="font-pixelbold text-[10px] uppercase tracking-widest2 text-maroon/60">
          {Object.keys(eventByDay).length} events
        </p>
      </div>
      <div className="grid grid-cols-7 gap-1 md:gap-2 text-center">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
          <div
            key={d}
            className="font-pixelbold text-[9px] uppercase tracking-widest2 text-maroon/50 pb-2"
          >
            {d}
          </div>
        ))}
        {cells.map((c, i) => {
          if (c === null) return <div key={`e${i}`} />;
          const ev = eventByDay[c];
          return (
            <div
              key={c}
              className={`aspect-square flex flex-col items-center justify-center text-sm border-2 ${
                ev
                  ? 'bg-maroon text-bone border-maroon'
                  : 'border-maroon/10 text-charcoal/60'
              }`}
            >
              <span className="font-display text-base md:text-lg">{c}</span>
              {ev && <span className="text-[9px] md:text-[10px] opacity-80">{ev.icon}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function EventCard({ e, onRsvp, rsvped }) {
  const d = formatDate(e.date);
  const spotsLeft = e.rsvp.spots - e.rsvp.taken;
  const full = spotsLeft <= 0;
  return (
    <article className="group bg-paper border-2 border-maroon/20 flex flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden bg-sand">
        <img
          src={e.image}
          alt={e.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1600ms] ease-soft group-hover:scale-[1.04]"
        />
        <span className="absolute top-4 left-4 font-pixelbold text-[10px] uppercase tracking-widest2 text-bone bg-maroon px-3 py-1.5 pixel-shadow-cream">
          {e.type === 'virtual' ? 'Virtual' : 'In-Person'}
        </span>
        <div className="absolute bottom-4 left-4 bg-bone text-maroon px-4 py-2 flex items-baseline gap-2 pixel-shadow">
          <span className="font-display text-2xl leading-none">{d.day}</span>
          <span className="font-pixelbold text-[9px] uppercase tracking-widest2">{d.month}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col grow">
        <p className="font-pixelbold text-[9px] uppercase tracking-widest2 text-maroon/60 mb-2">
          {d.full} · {e.time}
        </p>
        <h3 className="font-display text-2xl text-maroon leading-tight">
          {e.icon} {e.title}
        </h3>
        <p className="mt-2 text-sm text-charcoal/75">
          <span className="font-pixelbold text-[10px] uppercase tracking-widest2 text-maroon/70">Venue · </span>
          {e.venue}
        </p>
        <p className="text-xs text-charcoal/60">{e.location}</p>
        <p className="mt-4 text-[14px] text-charcoal/85 leading-relaxed grow">{e.blurb}</p>

        <div className="mt-5">
          <div className="flex items-center gap-3 mb-3 font-pixelbold text-[9px] uppercase tracking-widest2 text-maroon/70">
            <span>{full ? 'Full' : `${spotsLeft} / ${e.rsvp.spots}`}</span>
            <span className="flex-1 h-[3px] bg-maroon/10 relative overflow-hidden">
              <span
                className="absolute inset-y-0 left-0 bg-maroon"
                style={{ width: `${(e.rsvp.taken / e.rsvp.spots) * 100}%` }}
              />
            </span>
          </div>
          <button
            onClick={() => onRsvp(e.id)}
            disabled={rsvped}
            className={`w-full px-5 py-3 font-pixelbold text-[11px] uppercase tracking-widest2 transition-colors duration-300 ${
              rsvped
                ? 'bg-sage/30 text-maroon border-2 border-sage cursor-default'
                : full
                  ? 'border-2 border-maroon text-maroon hover:bg-maroon hover:text-bone'
                  : 'bg-maroon text-bone hover:bg-rust pixel-shadow-cream'
            }`}
          >
            {rsvped ? 'You\'re in ✓' : full ? 'Join waitlist' : 'RSVP'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function EventsPage() {
  const [type, setType] = useState('All');
  const [cat, setCat] = useState('All');
  const [rsvped, setRsvped] = useState(new Set());

  const filtered = useMemo(() => {
    return EVENTS.filter((e) => {
      const typeOk =
        type === 'All' ||
        (type === 'Virtual' && e.type === 'virtual') ||
        (type === 'In-Person' && e.type === 'in-person');
      const catOk = cat === 'All' || e.category === cat;
      return typeOk && catOk;
    });
  }, [type, cat]);

  const onRsvp = (id) => setRsvped((prev) => new Set(prev).add(id));

  return (
    <>
      <PageHeader
        no="03"
        eyebrow="Events · hosted around town"
        title="We gather."
        italic="Often."
        subtitle="We don't have a shop yet — so we partner with beloved London spaces. Supper clubs at Dalston Curve Garden, bun ceremonies at The Africa Centre, book club on Zoom. RSVP below."
      />

      <section className="bg-bone py-12 md:py-16">
        <div className="px-6 md:px-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <CalendarView events={filtered} />
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <p className="font-pixelbold text-[9px] uppercase tracking-widest2 text-maroon/60 mb-3 inline-flex items-center gap-2">
                <PixelStar size={10} className="text-maroon" /> Filter · Format
              </p>
              <div className="flex flex-wrap gap-2">
                {TYPE_FILTERS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`px-4 py-2 font-pixelbold text-[10px] uppercase tracking-widest2 border-2 transition-colors duration-300 ${
                      type === t
                        ? 'bg-maroon text-bone border-maroon'
                        : 'border-maroon/30 text-maroon hover:border-maroon'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-pixelbold text-[9px] uppercase tracking-widest2 text-maroon/60 mb-3 inline-flex items-center gap-2">
                <PixelStar size={10} className="text-maroon" /> Filter · Category
              </p>
              <div className="flex flex-wrap gap-2">
                {CATEGORY_FILTERS.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCat(c)}
                    className={`px-4 py-2 font-pixelbold text-[10px] uppercase tracking-widest2 border-2 transition-colors duration-300 ${
                      cat === c
                        ? 'bg-maroon text-bone border-maroon'
                        : 'border-maroon/30 text-maroon hover:border-maroon'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-paper border-2 border-maroon/20 p-5 mt-auto pixel-shadow">
              <p className="font-pixelbold text-[9px] uppercase tracking-widest2 text-maroon/60 mb-2 inline-flex items-center gap-2">
                <PixelHeart size={10} className="text-maroon animate-sparkle" /> Recurring
              </p>
              <p className="font-display text-xl text-maroon leading-tight">
                Every 2nd Saturday — Ingredient cook-along. Check back the week before.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-10 md:mb-14">
            <Reveal>
              <p className="font-pixelbold text-[10px] uppercase tracking-widest2 text-maroon/60 mb-3 inline-flex items-center gap-2">
                <PixelStar size={10} className="text-maroon animate-sparkle" /> Upcoming — {filtered.length}
              </p>
              <h2 className="font-display font-light text-3xl md:text-5xl text-maroon leading-tight">
                What&apos;s <span className="italic">next.</span>
              </h2>
            </Reveal>
          </div>

          {filtered.length === 0 ? (
            <p className="text-charcoal/70 italic">Nothing matching those filters yet — try widening.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((e, i) => (
                <Reveal key={e.id} delay={(i % 3) * 80}>
                  <EventCard e={e} onRsvp={onRsvp} rsvped={rsvped.has(e.id)} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-bone py-20 md:py-28">
        <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-10">
            <Reveal>
              <p className="font-pixelbold text-[10px] uppercase tracking-widest2 text-maroon/60 mb-3 inline-flex items-center gap-2">
                <PixelHeart size={10} className="text-maroon" /> Partner venues
              </p>
              <h2 className="font-display font-light text-3xl md:text-5xl text-maroon leading-tight max-w-[20ch]">
                The spaces that <span className="italic">hold us.</span>
              </h2>
            </Reveal>
          </div>
          <p className="max-w-xl text-[15px] text-charcoal/85 leading-relaxed mb-10">
            Until we have our own four walls, these are the kitchens, gardens,
            and studios that open their doors. Some partner with us seasonally,
            some on every date.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="bg-paper border-2 border-maroon/20 p-5 flex flex-col gap-1 pixel-shadow"
              >
                <p className="font-pixelbold text-[9px] uppercase tracking-widest2 text-maroon/60">
                  {p.area}
                </p>
                <p className="font-display text-lg text-maroon leading-tight">{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rust text-cream py-20 md:py-28">
        <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.by} delay={i * 80}>
                <figure className="border-t border-cream/20 pt-6">
                  <blockquote className="font-display text-xl md:text-2xl italic leading-snug">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 font-pixelbold text-[9px] uppercase tracking-widest2 text-gold">
                    {t.by}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone py-20 md:py-28">
        <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-12">
            <Reveal>
              <p className="font-pixelbold text-[10px] uppercase tracking-widest2 text-maroon/60 mb-3 inline-flex items-center gap-2">
                <PixelStar size={10} className="text-maroon" /> Past Events · the receipts
              </p>
              <h2 className="font-display font-light text-3xl md:text-5xl text-maroon leading-tight">
                What we&apos;ve <span className="italic">already cooked.</span>
              </h2>
            </Reveal>
          </div>

          <div className="space-y-16">
            {PAST_EVENTS.map((e) => (
              <Reveal key={e.id}>
                <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-maroon/15 pt-10">
                  <div className="lg:col-span-4">
                    <p className="font-pixelbold text-[9px] uppercase tracking-widest2 text-maroon/60 mb-3">
                      {new Date(e.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                    <h3 className="font-display text-3xl text-maroon leading-tight">{e.title}</h3>
                    <blockquote className="mt-6 font-display italic text-xl text-charcoal/90 leading-snug">
                      &ldquo;{e.quote}&rdquo;
                    </blockquote>
                    <p className="mt-3 font-pixelbold text-[9px] uppercase tracking-widest2 text-maroon/70">
                      — {e.quoteBy}
                    </p>
                  </div>
                  <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    {e.photos.map((src, i) => (
                      <div
                        key={src}
                        className={`overflow-hidden bg-sand ${i === 0 ? 'aspect-[4/5]' : 'aspect-square'}`}
                      >
                        <img
                          src={src}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 text-center">
            <a
              href="mailto:gatherings@nomadhouse.co"
              className="inline-flex items-center gap-3 font-pixelbold text-[11px] uppercase tracking-widest2 text-bone bg-maroon px-6 py-3 pixel-shadow-cream hover:bg-rust transition-colors"
            >
              Host us at your space <PixelArrow size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
