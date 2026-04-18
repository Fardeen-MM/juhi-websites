import Reveal from './Reveal.jsx';

const ACTIVITY = [
  { user: 'Aminah', text: 'just shared her grandmother\'s bajiya recipe in #kitchen-talk', time: '2m' },
  { user: 'Daniel', text: 'started a thread on Ethiopian coffee regions', time: '8m' },
  { user: 'Suheyla', text: 'posted photos from yesterday\'s heritage walk', time: '21m' },
  { user: 'Ibrahim', text: 'dropped a new Amharic playlist in #listening-room', time: '47m' },
];

export default function CommunityTeaser() {
  return (
    <section id="community" className="relative bg-bone py-28 md:py-40">
      <div className="px-6 md:px-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-[11px] uppercase tracking-widest2 text-maroon/60 mb-4">Community — 04</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-light text-4xl md:text-6xl text-maroon leading-[1.05] max-w-[14ch]">
              Pull up a chair. <span className="italic">The coffee is hot.</span>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-8 text-[15px] leading-relaxed text-charcoal max-w-md">
              Our Discord is where the diaspora gathers between visits — recipes
              debated, music swapped, memories mapped. Channels for language
              exchange, cooking, art, and a little football chaos.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-10 inline-flex items-center gap-3 px-5 py-4 bg-paper border border-maroon/15">
              <span className="w-2 h-2 rounded-full bg-sage pulse-dot" />
              <span className="text-[11px] uppercase tracking-widest2 text-maroon">
                247 members in conversation
              </span>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#/community"
                className="inline-flex items-center justify-center px-7 py-4 text-[11px] uppercase tracking-widest2 bg-maroon text-bone hover:bg-rust transition-colors duration-300"
              >
                Join the Conversation
              </a>
              <a
                href="#/community"
                className="inline-flex items-center justify-center px-7 py-4 text-[11px] uppercase tracking-widest2 border border-maroon text-maroon hover:bg-maroon hover:text-bone transition-colors duration-300"
              >
                Read featured threads
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={180} className="lg:col-span-7">
          <div className="bg-paper border border-maroon/15 p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-maroon text-bone grid place-items-center font-wordmark text-sm">n</div>
                <div>
                  <p className="font-display text-lg text-maroon leading-none">nomad house</p>
                  <p className="text-[10px] uppercase tracking-widest2 text-charcoal/60 mt-1">
                    Discord · 12 channels
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-sage">
                <span className="w-1.5 h-1.5 rounded-full bg-sage pulse-dot" />
                Live
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                ['#welcome', '247'],
                ['#kitchen-talk', '89'],
                ['#listening-room', '42'],
                ['#diaspora-stories', '67'],
                ['#language-exchange', '31'],
                ['#events-london', '54'],
              ].map(([name, count]) => (
                <div
                  key={name}
                  className="flex items-center justify-between px-4 py-3 bg-bone/60 border border-maroon/10 text-[13px]"
                >
                  <span className="font-mono text-maroon">{name}</span>
                  <span className="text-[10px] uppercase tracking-widest2 text-charcoal/60">
                    {count} online
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-maroon/15 pt-5">
              <p className="text-[10px] uppercase tracking-widest2 text-maroon/60 mb-4">
                Recent activity
              </p>
              <ul className="space-y-3">
                {ACTIVITY.map((a) => (
                  <li key={a.user} className="flex items-start gap-3 text-sm">
                    <div className="w-7 h-7 rounded-full bg-terracotta/20 text-maroon grid place-items-center text-[11px] font-medium shrink-0">
                      {a.user[0]}
                    </div>
                    <p className="text-charcoal leading-snug">
                      <span className="text-maroon font-medium">{a.user}</span>{' '}
                      {a.text}
                      <span className="text-charcoal/40 ml-2 text-[11px]">{a.time}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
