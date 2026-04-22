import Reveal from './Reveal.jsx';

const VOICES = [
  {
    quote:
      'I come for the coffee. I stay for the silence between conversations.',
    name: 'Aarav R.',
    note: 'Writer — regular since 2021',
  },
  {
    quote:
      'They know my order. They also know when not to ask.',
    name: 'Meher S.',
    note: 'Thursday mornings, window seat',
  },
  {
    quote:
      'A cup here tastes like being remembered.',
    name: 'Farhan K.',
    note: 'Illustrator — member, vol. II',
  },
];

const GATHERINGS = [
  {
    date: 'Sat · 03 May',
    title: 'Cupping — Yirgacheffe, Spring Lot',
    time: '4pm',
    spots: '8 seats',
  },
  {
    date: 'Thu · 08 May',
    title: 'Pastry Circle, with Juhi',
    time: '11am',
    spots: '6 seats',
  },
  {
    date: 'Sun · 18 May',
    title: 'Slow Reading — hosted with Paperback',
    time: '3pm',
    spots: 'Open door',
  },
  {
    date: 'Fri · 23 May',
    title: 'Ethiopia Harvest Dinner',
    time: '7pm',
    spots: 'By RSVP',
  },
];

export default function Community() {
  return (
    <section id="community" className="relative bg-stone py-28 md:py-40">
      <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20 mb-20 md:mb-24">
          <Reveal className="lg:col-span-8">
            <p className="text-[11px] uppercase tracking-widest2 text-terracotta mb-4">
              Coffee Community — 03
            </p>
            <h2 className="font-display font-light text-4xl md:text-6xl text-espresso max-w-[16ch] leading-[1.05]">
              Regulars, wanderers, and{' '}
              <span className="italic text-terracotta">the quietly curious.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-4 lg:self-end">
            <p className="text-[15px] text-cocoa/85 leading-[1.8] max-w-md">
              A house is only a house until people arrive. Ours fills, slowly — with writers,
              roasters, students, and strangers who&apos;ve become familiar. We keep a seat
              for you.
            </p>
          </Reveal>
        </div>

        {/* Feature image + side notes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
          <Reveal className="lg:col-span-8">
            <figure className="relative overflow-hidden aspect-[16/10] bg-sand">
              <img
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=2000&q=80"
                alt="A long table, two cups, slow afternoon."
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1800ms] ease-soft hover:scale-[1.03]"
              />
              <figcaption className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest2 text-bone/90">
                Tuesday cupping · last winter
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-4 flex flex-col justify-between gap-10">
            <Reveal delay={100}>
              <div className="border-t border-terracotta/30 pt-6">
                <p className="text-[10px] uppercase tracking-widest2 text-terracotta mb-3">
                  A note on the house
                </p>
                <p className="font-display italic text-2xl md:text-3xl text-espresso leading-[1.25]">
                  &ldquo;We don&apos;t rush the pour. Same goes for the people.&rdquo;
                </p>
                <p className="mt-4 text-[11px] uppercase tracking-widest2 text-mocha">
                  Juhi, founder
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <dl className="grid grid-cols-2 gap-y-8 gap-x-6 border-t border-terracotta/30 pt-6">
                <div>
                  <dt className="text-[10px] uppercase tracking-widest2 text-terracotta mb-2">
                    Mornings kept
                  </dt>
                  <dd className="font-display text-3xl md:text-4xl text-espresso tabular-nums">
                    1,842
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-widest2 text-terracotta mb-2">
                    Cuppings hosted
                  </dt>
                  <dd className="font-display text-3xl md:text-4xl text-espresso tabular-nums">
                    42
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-widest2 text-terracotta mb-2">
                    Members, vol. II
                  </dt>
                  <dd className="font-display text-3xl md:text-4xl text-espresso tabular-nums">
                    108
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-widest2 text-terracotta mb-2">
                    Regulars, named
                  </dt>
                  <dd className="font-display text-3xl md:text-4xl text-espresso tabular-nums">
                    ∞
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>

        {/* Voices */}
        <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {VOICES.map((v, i) => (
            <Reveal key={v.name} delay={i * 100}>
              <figure className="border-t border-espresso/15 pt-8 h-full flex flex-col">
                <span
                  aria-hidden
                  className="font-display text-terracotta text-5xl leading-none mb-4"
                >
                  &ldquo;
                </span>
                <blockquote className="font-display italic text-xl md:text-[22px] text-espresso leading-[1.45]">
                  {v.quote}
                </blockquote>
                <figcaption className="mt-auto pt-10">
                  <p className="font-display text-lg text-espresso">{v.name}</p>
                  <p className="text-[11px] uppercase tracking-widest2 text-mocha mt-1">
                    {v.note}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Gatherings */}
        <div className="mt-24 md:mt-32 border-t border-espresso/15 pt-12 md:pt-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <Reveal>
              <p className="text-[11px] uppercase tracking-widest2 text-terracotta mb-4">
                Gatherings, this season
              </p>
              <h3 className="font-display font-light text-3xl md:text-5xl text-espresso max-w-[18ch] leading-[1.05]">
                Small rooms, <span className="italic">smaller groups.</span>
              </h3>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-sm text-mocha max-w-sm leading-relaxed">
                A handful of evenings for members and friends. Reservations open two weeks
                ahead, by invitation or email.
              </p>
            </Reveal>
          </div>

          <ul className="divide-y divide-espresso/15">
            {GATHERINGS.map((g, i) => (
              <Reveal key={g.title} delay={i * 60}>
                <li className="group grid grid-cols-12 items-baseline gap-4 py-6 md:py-8">
                  <span className="col-span-3 md:col-span-2 text-[11px] md:text-xs uppercase tracking-widest2 text-terracotta tabular-nums">
                    {g.date}
                  </span>
                  <span className="col-span-9 md:col-span-7 font-display text-xl md:text-2xl text-espresso transition-colors duration-500 group-hover:text-terracotta">
                    {g.title}
                  </span>
                  <span className="hidden md:block col-span-1 text-sm text-mocha tabular-nums">
                    {g.time}
                  </span>
                  <span className="col-span-12 md:col-span-2 md:text-right text-[11px] uppercase tracking-widest2 text-mocha">
                    {g.spots}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={200}>
            <div className="mt-14 md:mt-20 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
              <a
                href="mailto:house@nomadhouse.cafe"
                className="inline-flex items-center gap-3 bg-terracotta text-bone px-7 py-4 text-[11px] uppercase tracking-widest2 transition-colors duration-500 hover:bg-espresso"
              >
                Reserve a seat
                <span aria-hidden>→</span>
              </a>
              <p className="text-[11px] uppercase tracking-widest2 text-mocha">
                Or write in — house@nomadhouse.cafe
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
