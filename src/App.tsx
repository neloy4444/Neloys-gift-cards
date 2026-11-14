/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AboutAndEligibilitySection } from './components/AboutAndEligibilitySection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { LegalSection } from './components/LegalSection';
import { Navbar } from './components/Navbar';
import { RewardCardsShowcase } from './components/RewardCardsShowcase';

export default function App() {
  return (
    <div className="min-h-screen bg-[#04102B] text-slate-100">
      <Navbar />
      <main>
        <HeroSection />
        <RewardCardsShowcase />
        <HowItWorksSection />
        <AboutAndEligibilitySection />
        <FaqSection />
        <LegalSection />
      </main>
      <Footer />
    </div>
  );
}
