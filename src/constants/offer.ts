export const OFFER_URL =
  'https://app.trcefy.com/click?pid=2&offer_id=576&sub2=u812837&sub5=s1SUBID1HEREn111';

export type PromoCardVariant = 'paypal-100' | 'cashapp-100' | 'cashapp-50';

export interface PromoCardSpec {
  id: PromoCardVariant;
  brandLabel: string;
  amount: string;
  subtitle: string;
  caption: string;
  description: string;
}

export const PROMO_CARDS: PromoCardSpec[] = [
  {
    id: 'paypal-100',
    brandLabel: 'PayPal',
    amount: '$100',
    subtitle: 'Digital Reward Concept',
    caption: 'Illustrative promotional design · Not an issued or redeemable gift card',
    description:
      'Explore the flagship $100 PayPal-style promotional reward offer for eligible United States residents.',
  },
  {
    id: 'cashapp-100',
    brandLabel: 'Cash App',
    amount: '$100',
    subtitle: 'Digital Reward Concept',
    caption: 'Illustrative promotional design · Not an issued or redeemable gift card',
    description:
      'Review the sponsor's offer page for current eligibility and details about Cash App-inspired $100 promotional reward opportunities.',
  },
  {
    id: 'cashapp-50',
    brandLabel: 'Cash App',
    amount: '$50',
    subtitle: 'Digital Reward Concept',
    caption: 'Illustrative promotional design · Not an issued or redeemable gift card',
    description:
      'Click to review eligibility and sponsor terms for the $50 Cash App-style promotional offer tier.',
  },
];

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
  note: string;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    number: '01',
    title: 'Select a Card or Click Claim Your Chance',
    description:
      'Click any featured promotional card or the main CTA button to open the independent sponsor registration page in a new tab.',
    note: 'External sponsor website',
  },
  {
    number: '02',
    title: 'Review Residency & Eligibility',
    description:
      'Confirm that you meet age and United States residency requirements. Actual offer rules and full sponsor terms are displayed only after verification.',
    note: 'US residents 18+ only',
  },
  {
    number: '03',
    title: 'Complete Sponsor Entry Steps',
    description:
      'Follow the instructions and review all requirements presented on the sponsor's destination page. Entry provides a chance for consideration and does not guarantee a reward.',
    note: 'No account passwords needed',
  },
];

export interface EligibilityItem {
  label: string;
  detail: string;
}

export const ELIGIBILITY_REQUIREMENTS: EligibilityItem[] = [
  {
    label: 'United States Residency',
    detail: 'Open strictly to legal residents physically residing within the 50 United States and the District of Columbia.',
  },
  {
    label: 'Minimum Age Requirement',
    detail: 'Participants must be at least 18 years of age (or the age of majority in their state of residence) at the time of entry.',
  },
  {
    label: 'Valid Contact Verification',
    detail: 'A valid, active email address and accurate basic contact details are required so any reward notification can be delivered.',
  },
  {
    label: 'Sponsor Terms & Conditions',
    detail: 'Read the sponsor's full terms, participation requirements, and reward conditions on the destination page before taking part.',
  },
  {
    label: 'One Entry Per Individual',
    detail: 'Automated entries, duplicate submissions, VPN masking, or proxy traffic may void eligibility under sponsor review.',
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'affiliation',
    question: 'Is this promotion officially affiliated with PayPal or Cash App?',
    answer:
      'No. This is an independent promotional website. PayPal® is a registered trademark of PayPal, Inc., and Cash App® is a registered trademark of Block, Inc. Neither PayPal, Inc. nor Block, Inc. sponsors, endorses, or administers this promotional campaign.',
  },
  {
    id: 'illustrative-cards',
    question: 'Are the 3D cards shown on this page actual issued gift cards?',
    answer:
      'No. All 3D PayPal and Cash App card visuals displayed on this page are illustrative promotional designs only. They do not carry stored value and are not issued or redeemable gift cards.',
  },
  {
    id: 'guarantee',
    question: 'Does entering guarantee that I will receive a $100 or $50 reward?',
    answer:
      'No. Submitting an entry provides an opportunity for a chance to qualify under the sponsor’s promotional rules. Entry does not guarantee a $100 PayPal Gift Card, Cash App reward, or any monetary payout.',
  },
  {
    id: 'credentials',
    question: 'Will I ever be asked for my PayPal password, Cash App PIN, or bank login?',
    answer:
      'Never. You will never be asked on this site to enter your PayPal password, Cash App PIN, banking credentials, or payment card numbers. Never share sensitive account passwords on promotional landing pages.',
  },
  {
    id: 'terms-visibility',
    question: 'Where are the full sponsor eligibility criteria and offer terms displayed?',
    answer:
      'Because offer availability depends on state eligibility and verification status, the complete sponsor terms, participation requirements, and fulfillment rules are displayed on the destination page once verified.',
  },
];
