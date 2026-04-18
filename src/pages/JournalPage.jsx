import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import { POSTS, POLLS } from '../data/journal.js';

const SERIES = ['All', 'Ingredient Spotlight Saturdays', 'My Diaspora Story', 'The House Guide'];

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function JournalPage() {
  const [series, setSeries] = useState('All');
  const posts = series === 'All' ? POSTS : POSTS.filter((p) => p.series === series);
  const [featured, ...rest] = posts;

  const [poll, setPoll] = useState(POLLS[0]);
  const [voted, setVoted] = useState(null);
  const totalVotes = poll.options.reduce((a, o) => a + o.votes, 0);

  const vote = (idx) => {
    if (voted !== null) return;
    const next = { ...poll, options: poll.options.map((o, i) => (i === idx ? { ...o, votes: o.votes + 1 } : o)) };
    setPoll(next);
    setVoted(idx);
  };

  return (
    <>
      <PageHeader
        no="04"
        eyebrow="The Journal"
        title="Read slow."
        italic="Read often."
        subtitle="A serialized content hub — Ingredient Spotlight Saturdays, Diaspora Stories on Tuesdays, House Guides when the mood strikes. Audio, video, and the occasional recipe."
      />

      <section className="bg-paper py-10 md:py-14 border-b border-maroon/15">
        <div className="px-6 md:px-10 max-w-[1400px] mx-auto flex flex-wrap gap-2 md:gap-3">
          {SERIES.map((s) => (
            <button
              key={s}
              onClick={() => setSeries(s)}
              className={`px-5 py-2.5 text-[11px] uppercase tracking-widest2 border transition-colors duration-300 ${
                series === s
                  ? 'bg-maroon text-bone border-maroon'
                  : 'border-maroon/30 text-maroon hover:border-maroon'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </section>

      {featured && (
        <section className="bg-bone py-16 md:py-24">
          <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
            <Reveal>
              <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
                <a href="#/journal" className="lg:col-span-7 group block">
                  <div className="relative overflow-hidden aspect-[4/3] bg-sand">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1600ms] ease-soft group-hover:scale-[1.03]"
                    />
                    <span className="absolute top-5 left-5 text-[10px] uppercase tracking-widest2 text-bone bg-maroon px-3 py-1.5">
                      Featured · {featured.series}
                    </span>
                  </div>
                </a>
                <div className="lg:col-span-5">
                  <p className="text-[11px] uppercase tracking-widest2 text-maroon/60 mb-4">
                    {formatDate(featured.date)} · {featured.readTime}
                  </p>
                  <h2 className="font-display font-light text-4xl md:text-5xl text-maroon leading-[1.05]">
                    {featured.title}
                  </h2>
                  <p className="mt-6 text-[15px] text-charcoal/85 leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <p className="mt-6 text-[11px] uppercase tracking-widest2 text-maroon/70">
                    By {featured.author}
                  </p>

                  <div className="mt-8 flex items-center gap-3 bg-paper border border-maroon/15 p-4">
                    <button
                      aria-label="Play audio"
                      className="w-10 h-10 rounded-full bg-maroon text-bone grid place-items-center hover:bg-rust transition-colors"
                    >
                      ▶
                    </button>
                    <div className="flex-1">
                      <p className="text-[11px] uppercase tracking-widest2 text-maroon/60">
                        Audio · narrated by the author
                      </p>
                      <div className="mt-2 h-1 bg-maroon/10 relative overflow-hidden">
                        <div className="absolute inset-y-0 left-0 w-1/3 bg-maroon" />
                      </div>
                    </div>
                    <span className="text-[11px] tabular-nums text-maroon/70">06:42</span>
                  </div>

                  <a
                    href="#/journal"
                    className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-widest2 text-maroon border-b border-maroon pb-1"
                  >
                    Read the piece
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          </div>
        </section>
      )}

      <section className="bg-paper py-16 md:py-24">
        <div className="px-6 md:px-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-[11px] uppercase tracking-widest2 text-maroon/60 mb-3">
                Latest posts
              </p>
              <h2 className="font-display font-light text-3xl md:text-5xl text-maroon leading-tight max-w-[20ch]">
                Field notes, <span className="italic">freshly filed.</span>
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
              {rest.map((p, i) => (
                <Reveal key={p.id} delay={(i % 2) * 80}>
                  <a href="#/journal" className="block group">
                    <div className="relative overflow-hidden aspect-[4/3] bg-sand">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1600ms] ease-soft group-hover:scale-[1.04]"
                      />
                    </div>
                    <p className="mt-5 text-[10px] uppercase tracking-widest2 text-maroon/60">
                      {p.series}
                    </p>
                    <h3 className="font-display text-2xl text-maroon leading-tight mt-2 group-hover:italic transition-all">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-charcoal/80 leading-relaxed line-clamp-2">
                      {p.excerpt}
                    </p>
                    <p className="mt-4 text-[11px] uppercase tracking-widest2 text-charcoal/50">
                      {formatDate(p.date)} · {p.readTime} · {p.author}
                    </p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-10">
            <Reveal>
              <div className="bg-bone border border-maroon/15 p-6">
                <p className="text-[10px] uppercase tracking-widest2 text-maroon/60 mb-2">
                  Reader poll · this week
                </p>
                <h3 className="font-display text-2xl text-maroon mb-5">{poll.question}</h3>
                <ul className="space-y-3">
                  {poll.options.map((o, i) => {
                    const pct = Math.round((o.votes / totalVotes) * 100);
                    return (
                      <li key={o.label}>
                        <button
                          onClick={() => vote(i)}
                          disabled={voted !== null}
                          className={`w-full text-left relative overflow-hidden border ${
                            voted === i
                              ? 'border-maroon'
                              : 'border-maroon/20 hover:border-maroon/50'
                          } ${voted === null ? 'cursor-pointer' : 'cursor-default'}`}
                        >
                          <span
                            className={`absolute inset-y-0 left-0 ${
                              voted === i ? 'bg-maroon/20' : 'bg-maroon/10'
                            } transition-[width]`}
                            style={{ width: voted !== null ? `${pct}%` : '0%' }}
                          />
                          <span className="relative flex items-center justify-between px-4 py-3 text-sm text-maroon">
                            <span>{o.label}</span>
                            <span className="text-[11px] uppercase tracking-widest2 tabular-nums">
                              {voted !== null ? `${pct}%` : '—'}
                            </span>
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-4 text-[11px] uppercase tracking-widest2 text-maroon/60">
                  {totalVotes} votes {voted !== null && '· thanks for voting'}
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-bone border border-maroon/15 p-6">
                <p className="text-[10px] uppercase tracking-widest2 text-maroon/60 mb-3">
                  Recipe submissions
                </p>
                <h3 className="font-display text-2xl text-maroon leading-tight mb-3">
                  What do you make with our products?
                </h3>
                <p className="text-[14px] text-charcoal/80 leading-relaxed">
                  Best submissions get featured. We pay £40 for the ones we run.
                </p>
                <form className="mt-5 space-y-3">
                  <input
                    type="text"
                    placeholder="Recipe name"
                    className="w-full bg-transparent border-b border-maroon/30 py-2 text-maroon placeholder:text-maroon/40 focus:outline-none focus:border-maroon"
                  />
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-maroon/30 py-2 text-maroon placeholder:text-maroon/40 focus:outline-none focus:border-maroon"
                  />
                  <button
                    type="button"
                    className="w-full mt-2 px-5 py-3 text-[11px] uppercase tracking-widest2 border border-maroon text-maroon hover:bg-maroon hover:text-bone transition-colors duration-300"
                  >
                    Attach recipe & send
                  </button>
                </form>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-rust text-cream p-6">
                <p className="text-[10px] uppercase tracking-widest2 text-gold mb-3">
                  The letter
                </p>
                <h3 className="font-display text-2xl leading-tight">
                  Saturdays, delivered.
                </h3>
                <p className="mt-3 text-[14px] text-cream/85 leading-relaxed">
                  One post. One playlist. One recipe. No ads.
                </p>
                <input
                  type="email"
                  placeholder="email@diaspora.home"
                  className="w-full mt-5 bg-transparent border-b border-cream/30 py-2 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold"
                />
                <button className="w-full mt-4 px-5 py-3 text-[11px] uppercase tracking-widest2 bg-bone text-maroon hover:bg-gold hover:text-rust transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
