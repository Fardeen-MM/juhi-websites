import Logo from './Logo.jsx';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-bone"
    >
      <div className="absolute inset-0 bg-grain-texture opacity-40 pointer-events-none" />

      <div className="absolute top-0 inset-x-0 h-[70%] bg-gradient-to-b from-paper/60 to-transparent pointer-events-none" />

      <div className="relative z-10 min-h-[100svh] flex flex-col justify-between pt-28 md:pt-32 pb-10 md:pb-14">
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-[10px] md:text-[11px] uppercase tracking-widest3 text-maroon/70 mb-8">
            Honoring Heritage, One Bite at a Time
          </p>

          <Logo size="xl" showEst={true} />

          <p className="mt-10 md:mt-14 max-w-xl font-display italic text-lg md:text-xl text-charcoal/80 leading-relaxed">
            A cultural home for the East African Diaspora — coffee pulled slow,
            desserts baked by hand, and stories shared over second cups.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#/shop"
              className="inline-flex items-center justify-center px-8 py-4 text-[11px] uppercase tracking-widest2 bg-maroon text-bone hover:bg-rust transition-colors duration-300"
            >
              Shop the House
            </a>
            <a
              href="#/community"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[11px] uppercase tracking-widest2 border border-maroon text-maroon hover:bg-maroon hover:text-bone transition-colors duration-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current pulse-dot" />
              Join the Conversation
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 px-6 md:px-10 text-[11px] uppercase tracking-widest2 text-maroon/80 border-t border-maroon/15 pt-8">
          <div>
            <p className="text-[9px] text-maroon/50 mb-1">No. 01</p>
            <p>Ethiopian Coffee</p>
          </div>
          <div>
            <p className="text-[9px] text-maroon/50 mb-1">No. 02</p>
            <p>Heirloom Desserts</p>
          </div>
          <div>
            <p className="text-[9px] text-maroon/50 mb-1">No. 03</p>
            <p>Community Events</p>
          </div>
          <div>
            <p className="text-[9px] text-maroon/50 mb-1">No. 04</p>
            <p>Diaspora Stories</p>
          </div>
        </div>
      </div>
    </section>
  );
}
