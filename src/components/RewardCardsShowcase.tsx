import { motion } from 'motion/react';
import { OFFER_URL, PROMO_CARDS } from '../constants/offer';
import { InteractiveCard3D } from './InteractiveCard3D';

export function RewardCardsShowcase() {
  return (
    <section
      id="featured-cards"
      className="relative border-y border-white/10 bg-[#06173C] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between gap-4 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-sky-300 uppercase">
              Featured Promotional Cards
            </p>
            <h2
              className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl"
              style={{ textWrap: 'balance' }}
            >
              Interactive 3D PayPal &amp; Cash App Reward Concepts
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-300 sm:text-base">
              Select any card below to visit the verified promotional offer page. All cards shown are illustrative promotional designs only—not issued or redeemable gift cards.
            </p>
          </div>

          <a
            href={OFFER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-xl border border-sky-400/35 bg-[#0070BA]/20 px-5 py-2.5 font-display text-sm font-semibold text-sky-200 transition-colors duration-150 hover:bg-[#0070BA]/35 hover:text-white whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
          >
            CLAIM YOUR CHANCE →
          </a>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {PROMO_CARDS.map((card, index) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: index * 0.09,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#091F4E]/75 p-5 sm:p-6"
            >
              <div>
                <InteractiveCard3D
                  variant={card.id}
                  floatDelay={`${index * 0.65}s`}
                  className="max-w-[360px] py-2"
                />

                <div className="mt-6 flex items-baseline justify-between border-t border-white/10 pt-4">
                  <h3 className="font-display text-lg font-bold text-white">
                    {card.amount} {card.brandLabel} Concept
                  </h3>
                  <span className="text-xs font-medium text-sky-300">
                    US Residents 18+
                  </span>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {card.description}
                </p>
              </div>

              <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-4">
                <p className="text-xs leading-relaxed text-slate-400">
                  {card.caption}
                </p>
                <a
                  href={OFFER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center justify-center rounded-lg bg-white/10 px-4 py-2 font-display text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#0070BA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                >
                  Continue to Offer →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
