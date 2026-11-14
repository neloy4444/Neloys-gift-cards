import { OFFER_URL } from '../constants/offer';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030D24] text-slate-300">
      {/* Closing Conversion Banner */}
      <div className="border-b border-white/10 bg-gradient-to-r from-[#041230] via-[#092356] to-[#041230]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
          <div className="max-w-xl">
            <h2
              className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl"
              style={{ textWrap: 'balance' }}
            >
              Ready to check eligibility for your chance?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
              Open to eligible US residents 18+. Entry does not guarantee a reward.
            </p>
          </div>

          <a
            href={OFFER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-glow-button inline-flex min-h-13 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#0066CC] via-[#0080FF] to-[#00A8E8] px-7 py-3.5 font-display text-base font-bold tracking-wide text-white whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
          >
            CLAIM YOUR CHANCE →
          </a>
        </div>
      </div>

      {/* Quiet Compliance Footer */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-base font-bold text-white">
              US Rewards Spotlight
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Independent Promotional Showcase · US Residents 18+ Only
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#featured-cards" className="transition-colors hover:text-white">
              Featured Cards
            </a>
            <a href="#how-it-works" className="transition-colors hover:text-white">
              How It Works
            </a>
            <a href="#about-offer" className="transition-colors hover:text-white">
              About This Offer
            </a>
            <a href="#eligibility" className="transition-colors hover:text-white">
              Eligibility
            </a>
            <a href="#faq" className="transition-colors hover:text-white">
              FAQ
            </a>
            <a href="#privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#terms" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </a>
          </nav>
        </div>

        <div className="mt-6 space-y-2 text-xs leading-relaxed text-slate-400">
          <p>
            Important Disclosure: All 3D PayPal and Cash App cards displayed on this website are illustrative promotional designs only and are not issued, active, or redeemable gift cards. This is an independent promotion and is not affiliated with, sponsored by, or endorsed by PayPal, Inc. or Block, Inc. (Cash App). PayPal® and Cash App® are registered trademarks of their respective owners. Entry does not guarantee a reward; actual eligibility requirements and sponsor terms are displayed only upon verification. Never share your account passwords or banking credentials.
          </p>
          <p>
            © {new Date().getFullYear()} US Rewards Spotlight. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
