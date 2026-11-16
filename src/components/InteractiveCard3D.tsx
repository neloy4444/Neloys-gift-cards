import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react';
import { type CSSProperties, type MouseEvent } from 'react';
import { OFFER_URL, type PromoCardVariant } from '../constants/offer';

interface InteractiveCard3DProps {
  variant: PromoCardVariant;
  restingTiltDeg?: number;
  floatDelay?: string;
  showOrbitalArcs?: boolean;
  className?: string;
}

export function InteractiveCard3D({
  variant,
  restingTiltDeg = 0,
  floatDelay = '0s',
  showOrbitalArcs = false,
  className = '',
}: InteractiveCard3DProps) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 220, damping: 22, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [11, -11]);
  const rotateY = useTransform(smoothX, [0, 1], [-13, 13]);

  const glareX = useTransform(smoothX, [0, 1], ['0%', '100%']);
  const glareY = useTransform(smoothY, [0, 1], ['0%', '100%']);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.34) 0%, rgba(255, 255, 255, 0.08) 38%, transparent 72%)`;

  const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const isPayPal = variant === 'paypal-100';
  const isCash100 = variant === 'cashapp-100';
  const amountValue = variant === 'cashapp-50' ? '50' : '100';
  const brandTitle = isPayPal ? 'PAYPAL' : 'CASH APP';

  const cardSurfaceClass = isPayPal
    ? 'border-sky-200/40 bg-gradient-to-br from-[#002868]/95 via-[#005EB8]/95 to-[#009CDE]/95 card-glow-blue'
    : isCash100
      ? 'border-emerald-200/40 bg-gradient-to-br from-[#034020]/95 via-[#00A83F]/95 to-[#00D64F]/95 card-glow-green'
      : 'border-teal-200/40 bg-gradient-to-br from-[#042F2E]/95 via-[#047857]/95 to-[#10B981]/95 card-glow-green';

  const ambientAuraClass = isPayPal
    ? 'bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.45)_0%,rgba(0,112,186,0.24)_45%,transparent_75%)]'
    : isCash100
      ? 'bg-[radial-gradient(circle_at_center,rgba(16,232,108,0.38)_0%,rgba(0,168,63,0.22)_45%,transparent_75%)]'
      : 'bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.35)_0%,rgba(4,120,87,0.2)_45%,transparent_75%)]';

  const floatStyle = {
    '--float-duration': '6.2s',
    '--float-delay': floatDelay,
  } as CSSProperties;

  return (
    <div
      className={`relative mx-auto flex w-full items-center justify-center ${className}`}
      style={{ perspective: '1200px' }}
    >
      {/* Ambient glowing aura */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-2 rounded-full blur-2xl ${ambientAuraClass}`}
      />

      {/* Optional orbital light arcs (used in Hero focal centerpiece) */}
      {showOrbitalArcs && (
        <svg
          aria-hidden="true"
          viewBox="0 0 520 360"
          fill="none"
          className="pointer-events-none absolute -inset-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)] opacity-90"
        >
          <defs>
            <linearGradient id="hero-arc-cyan" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
              <stop offset="35%" stopColor="#7DD3FC" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#E0F2FE" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#009CDE" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="hero-arc-soft" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0" />
              <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 48 258 C 145 318, 378 300, 466 150"
            stroke="url(#hero-arc-cyan)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M 62 110 C 170 28, 392 38, 462 178"
            stroke="url(#hero-arc-soft)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="446" cy="144" r="3" fill="#E0F2FE" />
          <circle cx="88" cy="272" r="2.2" fill="#7DD3FC" />
        </svg>
      )}

      {/* Floating wrapper */}
      <div style={floatStyle} className="animate-card-float w-full">
        <motion.a
          href={OFFER_URL}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          aria-label={`Explore $${amountValue} ${brandTitle} illustrative promotional offer (opens in new tab)`}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.028 }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            rotateX,
            rotateY,
            rotate: restingTiltDeg,
            transformStyle: 'preserve-3d',
          }}
          className="group block w-full cursor-pointer rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300 sm:rounded-[22px]"
        >
          <div
            className={`relative aspect-[1.6/1] w-full overflow-hidden rounded-2xl border p-5 text-white backdrop-blur-md transition-shadow duration-200 sm:rounded-[22px] sm:p-7 ${cardSurfaceClass}`}
          >
            {/* Dynamic cursor-tracking glossy reflection */}
            <motion.div
              aria-hidden="true"
              style={{ background: glareBackground }}
              className="pointer-events-none absolute inset-0 z-10 opacity-75 transition-opacity duration-200 group-hover:opacity-100"
            />

            {/* Glossy glass edge & internal depth */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/10 to-white/25 sm:rounded-[22px]"
            />

            {/* Brand-specific subtle geometric pattern */}
            {isPayPal ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 400 250"
                fill="none"
                className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
              >
                <path
                  d="M -20 190 Q 130 120 260 175 T 430 110"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M -20 212 Q 145 148 275 198 T 430 138"
                  stroke="white"
                  strokeWidth="1"
                />
              </svg>
            ) : isCash100 ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 400 250"
                fill="none"
                className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
              >
                <circle cx="330" cy="60" r="95" stroke="white" strokeWidth="1.25" />
                <circle cx="330" cy="60" r="65" stroke="white" strokeWidth="1" />
                <path d="M -20 205 L 420 140" stroke="white" strokeWidth="1" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 400 250"
                fill="none"
                className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
              >
                <path
                  d="M 20 240 L 140 20 M 95 240 L 215 20 M 170 240 L 290 20 M 245 240 L 365 20"
                  stroke="white"
                  strokeWidth="1"
                />
              </svg>
            )}

            {/* Animated specular light sweep */}
            <div
              aria-hidden="true"
              className="animate-sheen pointer-events-none absolute inset-y-0 z-10 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent"
            />

            {/* Card Content Layer with 3D Z-elevation */}
            <div
              className="relative z-20 flex h-full flex-col justify-between"
              style={{ transform: 'translateZ(26px)' }}
            >
              {/* Top Row: Emblem + Brand + Metallic Chip */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  {isPayPal ? (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 32 32"
                      className="h-7 w-7 sm:h-8 sm:w-8"
                      fill="none"
                    >
                      <path
                        d="M11.2 6h7.4c4.1 0 6.6 2.1 5.9 6-.6 3.7-3.4 5.7-7.4 5.7h-2.4l-1.3 7.3H8.7L11.2 6Z"
                        fill="#FFFFFF"
                        fillOpacity="0.96"
                      />
                      <path
                        d="M14.3 10.6h6.4c3.4 0 5.5 1.8 4.9 5.1-.6 3.2-2.9 4.9-6.3 4.9h-2.1l-1.1 6.2h-4.1l2.3-16.2Z"
                        fill="#7DD3FC"
                        fillOpacity="0.78"
                      />
                    </svg>
                  ) : (
                    <div
                      aria-hidden="true"
                      className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/95 font-display text-base font-extrabold text-[#008A38] shadow-sm sm:h-8 sm:w-8 sm:text-lg"
                    >
                      $
                    </div>
                  )}
                  <span className="font-display text-base font-extrabold tracking-wide text-white sm:text-lg">
                    {brandTitle}
                  </span>
                </div>

                {/* Metallic EMV-style chip */}
                <div
                  aria-hidden="true"
                  className="flex h-7 w-10 items-center justify-center rounded-md border border-white/35 bg-white/15 backdrop-blur-sm sm:h-8 sm:w-11"
                >
                  <div className="grid h-4 w-6 grid-cols-3 gap-0.5 opacity-75 sm:h-5 sm:w-7">
                    <span className="rounded-[1px] border border-white/60" />
                    <span className="rounded-[1px] border border-white/60" />
                    <span className="rounded-[1px] border border-white/60" />
                  </div>
                </div>
              </div>

              {/* Center Row: Bold Denomination */}
              <div className="my-auto pt-1">
                <div className="font-display text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_14px_rgba(0,15,40,0.45)] tabular-nums sm:text-5xl">
                  <span className="mr-1 align-top text-xl font-bold text-white/85 sm:text-2xl">
                    $
                  </span>
                  {amountValue}
                </div>
              </div>

              {/* Bottom Row: Illustrative label & action cue */}
              <div className="flex items-end justify-between border-t border-white/20 pt-2.5">
                <div className="flex flex-col">
                  <span className="font-display text-sm font-semibold tracking-wide text-white sm:text-base">
                    Digital Reward Concept
                  </span>
                  <span className="text-[11px] font-medium text-white/80">
                    Illustrative design · Not redeemable
                  </span>
                </div>

                <span className="text-xs font-semibold tracking-wide text-white/95 transition-transform duration-150 group-hover:translate-x-0.5 whitespace-nowrap">
                  Enter →
                </span>
              </div>
            </div>
          </div>
        </motion.a>
      </div>
    </div>
  );
}
