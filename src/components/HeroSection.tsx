import { Flag, Lock, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { OFFER_URL } from '../constants/offer';
import { FloatingParticles } from './FloatingParticles';
import { PayPalGiftCard } from './PayPalGiftCard';

const TRUST_HIGHLIGHTS = [
  { icon: Zap, label: 'Simple Entry' },
  { icon: Lock, label: 'Secure & Private' },
  { icon: Flag, label: 'US Residents Only' },
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#04102B] text-white"
    >
      {/* American Flag-Inspired Dark Navy Backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Deep dark navy blue gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030D24] via-[#071A42] to-[#06173C]" />

        {/* Subtle American flag-inspired waving crimson & white stripes */}
        <div
          className="absolute inset-0 opacity-28"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-8deg, rgba(185,28,28,0.85) 0px, rgba(185,28,28,0.85) 36px, rgba(255,255,255,0.22) 36px, rgba(255,255,255,0.22) 72px)',
            maskImage:
              'radial-gradient(ellipse 80% 85% at 78% 52%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.45) 55%, transparent 90%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 85% at 78% 52%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.45) 55%, transparent 90%)',
          }}
        />

        {/* Upper-left navy canton with subtle star pattern */}
        <svg
          viewBox="0 0 420 260"
          className="absolute top-0 left-0 h-[340px] w-[520px] opacity-22"
          fill="white"
        >
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 6 }).map((__, col) => {
              const cx = 34 + col * 64 + (row % 2 === 1 ? 32 : 0);
              const cy = 30 + row * 48;
              return (
                <polygon
                  key={`${row}-${col}`}
                  points={`${cx},${cy - 8} ${cx + 2.4},${cy - 2.4} ${cx + 8},${cy - 2.4} ${cx + 3.4},${cy + 1.2} ${cx + 5},${cy + 7} ${cx},${cy + 3.6} ${cx - 5},${cy + 7} ${cx - 3.4},${cy + 1.2} ${cx - 8},${cy - 2.4} ${cx - 2.4},${cy - 2.4}`}
                />
              );
            }),
          )}
        </svg>

        {/* Measured dark navy contrast scrim & seamless bottom blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030D24]/95 via-[#041230]/75 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#06173C] to-transparent" />
      </div>

      {/* Subtle Floating Particles */}
      <FloatingParticles />

      {/* Main Hero Container */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Headline, Copy, Trust Highlights & Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:col-span-7 lg:text-left"
          >
            <p className="mb-4 text-xs font-semibold tracking-wider text-sky-300 uppercase sm:text-sm">
              Gift Drop USA · Independent Promotional Information
            </p>

            <h1
              className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]"
              style={{ textWrap: 'balance' }}
            >
              Explore Promotional Reward Opportunities
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg lg:mx-0">
              Explore illustrative PayPal- and Cash App-themed reward concepts. Follow the link to review the independent sponsor’s current offer details, eligibility rules, and requirements before deciding whether to participate.
            </p>

            {/* Trust Highlights (Zero-Pill Unboxed Row) */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-sky-100 lg:justify-start">
              {TRUST_HIGHLIGHTS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 shrink-0 text-sky-300" aria-hidden="true" />
                    <span className="whitespace-nowrap">{item.label}</span>
                    {idx < TRUST_HIGHLIGHTS.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="hidden pl-4 text-white/30 sm:inline"
                      >
                        ·
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bright Blue Primary CTA Button */}
            <div className="mt-8 flex flex-col items-center lg:items-start">
              <a
                href={OFFER_URL}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="cta-glow-button group relative inline-flex min-h-14 w-full max-w-sm items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#0066CC] via-[#0080FF] to-[#00A8E8] px-8 py-4 font-display text-base font-bold tracking-wide text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300 sm:w-auto sm:min-w-[300px] sm:text-lg"
              >
                <span
                  aria-hidden="true"
                  className="animate-sheen pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
                <span className="relative z-10 whitespace-nowrap">
                  CLAIM YOUR CHANCE →
                </span>
              </a>

              <p className="mt-3.5 max-w-lg text-xs leading-relaxed text-slate-300">
                Cards shown are illustrative promotional designs, not issued or redeemable gift cards. Entry does not guarantee a reward.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Clickable 3D $100 PayPal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <PayPalGiftCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
