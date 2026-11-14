export function LegalSection() {
  return (
    <section className="border-t border-white/10 bg-[#06173C] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
            Legal &amp; Compliance
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Privacy Policy &amp; Sponsor Terms Overview
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-slate-300 sm:text-base">
            Review our privacy practices, illustrative card disclosure, and promotional terms directly below.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Privacy Policy */}
          <article
            id="privacy"
            className="rounded-2xl border border-white/10 bg-[#091F4E]/80 p-6 sm:p-8"
          >
            <h3 className="font-display text-xl font-bold text-white">
              Privacy Policy
            </h3>
            <p className="mt-1 text-xs font-medium text-slate-400">
              Last Updated: November 2026 · Independent Promotional Portal
            </p>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300">
              <div>
                <h4 className="font-semibold text-white">
                  1. Information Practices on This Landing Page
                </h4>
                <p className="mt-1">
                  This promotional page does not collect, store, or request PayPal passwords, Cash App PINs, banking credentials, Social Security numbers, or payment card information. Clicking any 3D card or CTA button redirects you to the third-party sponsor's website.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  2. Third-Party Offer Redirects &amp; Cookies
                </h4>
                <p className="mt-1">
                  Outbound links may include standard campaign attribution parameters. Once redirected, any information you choose to provide is governed directly by the sponsor&apos;s published privacy policy on that destination page.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  3. Data Protection &amp; Opt-Out Rights
                </h4>
                <p className="mt-1">
                  United States residents may exercise applicable state privacy rights directly through the contact and opt-out controls provided by the third-party sponsor before submitting registration details.
                </p>
              </div>
            </div>
          </article>

          {/* Terms & Conditions */}
          <article
            id="terms"
            className="rounded-2xl border border-white/10 bg-[#091F4E]/80 p-6 sm:p-8"
          >
            <h3 className="font-display text-xl font-bold text-white">
              Terms &amp; Conditions
            </h3>
            <p className="mt-1 text-xs font-medium text-slate-400">
              US Residents Only · Independent Promotion Disclosure
            </p>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300">
              <div>
                <h4 className="font-semibold text-white">
                  1. No Guarantee of Reward &amp; Illustrative Visuals
                </h4>
                <p className="mt-1">
                  Entry does not guarantee a $100 PayPal Gift Card, $100 or $50 Cash App reward, or any payout. All 3D cards displayed on this page are illustrative promotional designs only and are not issued or redeemable gift cards.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  2. Trademark &amp; Non-Affiliation Notice
                </h4>
                <p className="mt-1">
                  This is an independent promotion unless explicitly authorized. PayPal® is a registered trademark of PayPal, Inc. and Cash App® is a registered trademark of Block, Inc. Neither PayPal, Inc. nor Block, Inc. sponsors, endorses, or administers this promotion.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  3. Eligibility &amp; Sponsor Terms
                </h4>
                <p className="mt-1">
                  Open only to legal United States residents aged 18 or older. Actual eligibility criteria, official sponsor rules, and offer terms are available on the sponsor's destination page; review them before participating. Void where prohibited by law.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
