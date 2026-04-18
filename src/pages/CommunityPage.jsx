import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';

const CHANNELS = [
  { name: '#welcome', desc: 'Start here. Introduce yourself.', members: 247 },
  { name: '#kitchen-talk', desc: 'Recipes debated, tips shared.', members: 189 },
  { name: '#listening-room', desc: 'Playlists, new releases, oldies.', members: 142 },
  { name: '#diaspora-stories', desc: 'The long-form channel.', members: 167 },
  { name: '#language-exchange', desc: 'Amharic · Swahili · Somali.', members: 131 },
  { name: '#events-london', desc: 'Meet-ups, walks, supper clubs.', members: 154 },
  { name: '#art-gallery', desc: 'Share what you\'re making.', members: 98 },
  { name: '#football', desc: 'Monday morning post-mortems.', members: 112 },
];

const FEATURED_THREADS = [
  {
    channel: '#kitchen-talk',
    title: 'The Great Mandazi Debate: cardamom or no?',
    replies: 47,
    by: 'Aminah',
    snippet:
      '"My mother\'s recipe doesn\'t call for cardamom, but half the house disagrees. Let\'s settle this."',
  },
  {
    channel: '#diaspora-stories',
    title: 'First time back home in 14 years',
    replies: 33,
    by: 'Daniel',
    snippet:
      '"Landing in Addis, the smell of eucalyptus hit me before I even left the plane..."',
  },
  {
    channel: '#listening-room',
    title: 'April playlist: Teddy Afro deep cuts',
    replies: 21,
    by: 'Ibrahim',
    snippet: '"For the homesick, the heartbroken, and everyone in between."',
  },
];

export default function CommunityPage() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        no="02"
        eyebrow="The Community"
        title="Pull up a chair."
        italic="The coffee is hot."
        subtitle="Our Discord is where the diaspora gathers between visits. 247 members and growing — diaspora by heritage or by heart, all welcome."
      />

      <section className="bg-bone py-16 md:py-20">
        <div className="px-6 md:px-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-4">
            <div className="bg-paper border border-maroon/15 p-6 md:p-8">
              <p className="text-[10px] uppercase tracking-widest2 text-maroon/60 mb-4">Live</p>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-sage pulse-dot" />
                <p className="font-display text-3xl text-maroon">247 online</p>
              </div>
              <p className="text-sm text-charcoal/85 leading-relaxed">
                Daily chatter across twelve channels — recipes, music, politics
                (lightly), language practice, and the running joke about who gets
                to claim pilau.
              </p>
              <a
                href="#/community"
                className="mt-6 inline-flex w-full items-center justify-center px-6 py-3.5 text-[11px] uppercase tracking-widest2 bg-maroon text-bone hover:bg-rust transition-colors duration-300"
              >
                Join the Discord
              </a>
            </div>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl text-maroon mb-3">
                What happens inside.
              </h2>
              <p className="text-sm text-charcoal/80 max-w-xl">
                Channel names shown — message contents blurred out of respect
                for members.
              </p>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CHANNELS.map((c, i) => (
                <Reveal key={c.name} delay={(i % 4) * 60}>
                  <div className="bg-paper border border-maroon/15 p-5">
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <p className="font-mono text-maroon">{c.name}</p>
                      <p className="text-[10px] uppercase tracking-widest2 text-maroon/60">
                        {c.members}
                      </p>
                    </div>
                    <p className="text-[13px] text-charcoal/75">{c.desc}</p>
                    <div className="mt-4 space-y-1.5">
                      <div className="h-2 w-full bg-maroon/10 rounded-sm" />
                      <div className="h-2 w-5/6 bg-maroon/10 rounded-sm" />
                      <div className="h-2 w-4/6 bg-maroon/10 rounded-sm" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-12">
            <Reveal>
              <p className="text-[11px] uppercase tracking-widest2 text-maroon/60 mb-3">
                Featured conversations · updated weekly
              </p>
              <h2 className="font-display font-light text-3xl md:text-5xl text-maroon max-w-[18ch] leading-tight">
                Threads we <span className="italic">keep coming back to.</span>
              </h2>
            </Reveal>
          </div>
          <ul className="divide-y divide-maroon/15 border-y border-maroon/20">
            {FEATURED_THREADS.map((t, i) => (
              <Reveal as="li" key={t.title} delay={i * 80}>
                <a href="#/community" className="grid grid-cols-12 gap-4 md:gap-8 py-7 md:py-9 group">
                  <div className="col-span-12 md:col-span-3">
                    <p className="font-mono text-sm text-maroon">{t.channel}</p>
                    <p className="text-[11px] uppercase tracking-widest2 text-charcoal/60 mt-1">
                      Started by {t.by}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-7">
                    <h3 className="font-display text-xl md:text-2xl text-maroon group-hover:italic transition-all">
                      {t.title}
                    </h3>
                    <p className="text-[13px] text-charcoal/80 mt-2 italic">{t.snippet}</p>
                  </div>
                  <div className="col-span-12 md:col-span-2 md:text-right">
                    <p className="text-[11px] uppercase tracking-widest2 text-maroon/60">
                      {t.replies} replies
                    </p>
                    <p className="text-[11px] uppercase tracking-widest2 text-maroon mt-2 border-b border-maroon inline-block">
                      Read →
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-rust text-cream py-24 md:py-32">
        <div className="px-6 md:px-10 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[11px] uppercase tracking-widest2 text-gold mb-5">
                Share your story
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display font-light text-4xl md:text-5xl leading-tight">
                My Diaspora <span className="italic">Story.</span>
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-8 text-[15px] leading-relaxed text-cream/85 max-w-md">
                Selected stories get published on our journal (with your
                permission). We&apos;re looking for honest, specific, and kind
                — and we pay a small honorarium for pieces we run.
              </p>
            </Reveal>
          </div>

          <Reveal delay={180} className="lg:col-span-7">
            {submitted ? (
              <div className="bg-cream text-rust p-8 md:p-10 border border-gold/40">
                <p className="text-[11px] uppercase tracking-widest2 text-maroon/60 mb-4">
                  Received with thanks
                </p>
                <h3 className="font-display text-3xl text-maroon mb-3">
                  We&apos;ll read slowly, and reply within two weeks.
                </h3>
                <p className="text-charcoal/80">
                  In the meantime — come say hello in the Discord.
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="bg-rust border border-cream/20 p-6 md:p-10 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <label className="flex flex-col gap-2">
                    <span className="text-[11px] uppercase tracking-widest2 text-gold">Your name</span>
                    <input
                      required
                      type="text"
                      className="bg-transparent border-b border-cream/30 py-2 focus:outline-none focus:border-gold placeholder:text-cream/40"
                      placeholder="How you sign letters"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-[11px] uppercase tracking-widest2 text-gold">Heritage</span>
                    <input
                      required
                      type="text"
                      className="bg-transparent border-b border-cream/30 py-2 focus:outline-none focus:border-gold placeholder:text-cream/40"
                      placeholder="Somali-British, Ethiopian-Canadian..."
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-[11px] uppercase tracking-widest2 text-gold">Story title</span>
                  <input
                    required
                    type="text"
                    className="bg-transparent border-b border-cream/30 py-2 focus:outline-none focus:border-gold placeholder:text-cream/40"
                    placeholder='"On the long way home..."'
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[11px] uppercase tracking-widest2 text-gold">The story (draft or full)</span>
                  <textarea
                    required
                    rows="6"
                    className="bg-transparent border border-cream/30 p-4 focus:outline-none focus:border-gold placeholder:text-cream/40 resize-none"
                    placeholder="Take your time."
                  />
                </label>
                <label className="flex items-start gap-3 text-[13px] text-cream/75">
                  <input type="checkbox" required className="mt-1 accent-gold" />
                  <span>
                    You can publish this with my name (or a pseudonym, if I ask).
                  </span>
                </label>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3.5 text-[11px] uppercase tracking-widest2 bg-bone text-maroon hover:bg-gold hover:text-rust transition-colors duration-300"
                >
                  Send story
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <section className="bg-bone py-20 md:py-28">
        <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
          <Reveal>
            <h2 className="font-display font-light text-3xl md:text-5xl text-maroon leading-tight max-w-[20ch]">
              Customer gallery. <span className="italic">Tag #nomadhousehome.</span>
            </h2>
          </Reveal>
          <p className="mt-6 text-[15px] text-charcoal/85 max-w-xl">
            Snaps from members — orders on breakfast tables, supper club tables,
            and occasionally the bathroom floor (no judgement). Monthly community
            pick featured on the homepage.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {[
              'photo-1509440159596-0249088772ff',
              'photo-1511920170033-f8396924c348',
              'photo-1445116572660-236099ec97a0',
              'photo-1504711434969-e33886168f5c',
              'photo-1529390079861-591de354faf5',
              'photo-1499636136210-6f4ee915583e',
              'photo-1530023367847-a683933f4172',
              'photo-1568051243851-f9b136146e97',
              'photo-1601001815894-4bb6c81416d7',
              'photo-1461023058943-07fcbe16d735',
              'photo-1501747315-124a0eaca060',
              'photo-1584917865442-de89df76afd3',
            ].map((id, i) => (
              <Reveal key={id} delay={(i % 6) * 40}>
                <div className="aspect-square overflow-hidden bg-sand">
                  <img
                    src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=80`}
                    alt="Community submission"
                    loading="lazy"
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
