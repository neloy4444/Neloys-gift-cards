import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { FAQ_ITEMS } from '../constants/offer';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="text-center">
        <p className="text-xs font-semibold tracking-wider text-sky-300 uppercase">
          Frequently Asked Questions
        </p>
        <h2
          className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl"
          style={{ textWrap: 'balance' }}
        >
          Clear answers before you enter
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Review how this independent promotional offer works, why the 3D cards are illustrative only, and when full sponsor terms are displayed.
        </p>
      </div>

      <div className="mt-10 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-[#091F4E]/80">
        {FAQ_ITEMS.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id}>
              <h3>
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-sm font-semibold text-white transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-sky-400 sm:px-6 sm:text-base"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-sky-300' : ''
                    }`}
                  />
                </button>
              </h3>

              {isOpen && (
                <div
                  id={`faq-panel-${item.id}`}
                  className="px-5 pb-5 text-sm leading-relaxed text-slate-300 sm:px-6 sm:text-base"
                >
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
