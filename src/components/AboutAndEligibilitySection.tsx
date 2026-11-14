import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { ELIGIBILITY_REQUIREMENTS, OFFER_URL } from '../constants/offer';

export function AboutAndEligibilitySection() {
  return (
    <section className="border-y border-white/10 bg-[#06173C] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* About This Offer (7 Columns) */}
          <motion.div
            id="about-offer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#091F4E]/80 p-6 sm:p-8 lg:col-span-7"
          >
            <div>
              <p className="text-xs font-semibold tracking-wider text-rose-300 uppercase">
                About This Offer
              </p>
              <h2
                className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl"
                style={{ textWrap: 'balance' }}
              >
                Independent US Promotional Campaign Disclosure
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                <p>
                  This promotional showcase invites eligible United States residents to participate for a chance to qualify for digital reward offers—including our featured{' '}
                  <strong className="font-semibold text-white">$100 PayPal</strong> and{' '}
                  <strong className="font-semibold text-white">$100 / $50 Cash App</strong>{' '}
                  illustrative promotional concepts.
                </p>
                <p>
                  <strong className="font-semibold text-white">Illustrative Designs Only:</strong>{' '}
                  All 3D cards displayed across this page are artistic promotional illustrations created to represent the campaign theme. They are not issued, active, or redeemable gift cards.
                </p>
                <p>
                  <strong className="font-semibold text-white">No Official Affiliation:</strong>{' '}
                  This is an independent promotion. PayPal® is a registered trademark of PayPal, Inc., and Cash App® is a registered trademark of Block, Inc. Neither company sponsors, endorses, or administers this promotional page.
                </p>
              </div>
            </div>

            {/* Security & Credential Protection Block */}
            <div className="mt-8 rounded-xl border border-white/10 bg-[#051434] p-5">
              <div className="flex items-start gap-3.5">
                <ShieldCheck
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-display text-sm font-bold text-white sm:text-base">
                    Credential Safety Promise
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">
                    You will never be asked here for your PayPal password, Cash App PIN, banking login, or credit card security codes. Never share sensitive financial credentials on any promotional form.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Eligibility Requirements (5 Columns) */}
          <motion.div
            id="eligibility"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#091F4E]/80 p-6 sm:p-8 lg:col-span-5"
          >
            <div>
              <p className="text-xs font-semibold tracking-wider text-sky-300 uppercase">
                Eligibility Requirements
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white">
                Who Can Participate
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Basic qualification standards apply before full sponsor offer terms are unlocked.
              </p>

              <ul className="mt-6 space-y-4">
                {ELIGIBILITY_REQUIREMENTS.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-sky-400"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-white/10 pt-5">
              <a
                href={OFFER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-[#0070BA] px-5 py-3 font-display text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#0086DE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                Verify Eligibility &amp; Continue →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
