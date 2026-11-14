import { motion } from 'motion/react';
import { HOW_IT_WORKS_STEPS } from '../constants/offer';

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl"
      >
        <p className="text-xs font-semibold tracking-wider text-sky-300 uppercase">
          How It Works
        </p>
        <h2
          className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl"
          style={{ textWrap: 'balance' }}
        >
          Three straightforward steps to submit your entry
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-300">
          Participation is simple and transparent. Submitting an entry gives you a chance to be considered under the promotional sponsor&apos;s rules—it does not guarantee winning.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {HOW_IT_WORKS_STEPS.map((step, index) => (
          <motion.article
            key={step.number}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.4,
              delay: index * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#091F4E]/80 p-6 transition-transform duration-200 hover:-translate-y-0.5 sm:p-7"
          >
            <div>
              <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-2xl font-semibold text-sky-300 tabular-nums">
                  {step.number}
                </span>
                <span className="text-xs font-medium text-slate-400">
                  {step.note}
                </span>
              </div>

              <h3 className="mt-5 font-display text-lg font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-slate-300 sm:text-base">
                {step.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Clear Verification & Non-Guarantee Disclosure */}
      <div className="mt-8 rounded-xl border border-white/10 bg-[#071940] px-5 py-4 text-sm leading-relaxed text-slate-300 sm:px-6">
        <strong className="font-semibold text-white">Important Notice:</strong>{' '}
        Entering this promotion does not guarantee a $100 PayPal Gift Card, Cash App reward, or any payout. Actual eligibility criteria, sponsor participation rules, and complete offer terms are displayed only after you verify your eligibility on the official offer page.
      </div>
    </section>
  );
}
