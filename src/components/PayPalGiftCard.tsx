import { InteractiveCard3D } from './InteractiveCard3D';

export function PayPalGiftCard() {
  return (
    <InteractiveCard3D
      variant="paypal-100"
      restingTiltDeg={-3.5}
      showOrbitalArcs
      className="max-w-[440px] py-6 sm:py-10"
    />
  );
}
