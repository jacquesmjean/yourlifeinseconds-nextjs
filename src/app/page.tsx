import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'How Many Seconds Have You Lived? | YourLifeInSeconds',
  description:
    'Calculate exactly how many seconds you have lived and how many remain. A free life clock — enter your birthdate and see your real time in under 10 seconds.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'How Many Seconds Have You Lived? | YourLifeInSeconds',
    description:
      'A typical life is 2.5 billion seconds. Find out how many you have left in 10 seconds.',
    url: 'https://yourlifeinseconds.com',
    siteName: 'YourLifeInSeconds',
    type: 'website',
  },
};

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'YourLifeInSeconds Life Clock',
      description:
        'Calculate your life in seconds and discover the true scarcity of time.',
      applicationCategory: 'ProductivityApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@type': 'HowTo',
      name: 'How to Calculate Your Life in Seconds',
      step: [
        {
          '@type': 'HowToStep',
          position: '1',
          name: 'Enter Birthday',
          text: 'Input your birth date into the Life Clock calculator.',
        },
        {
          '@type': 'HowToStep',
          position: '2',
          name: 'Choose Region',
          text: 'Select your country so we can apply the right life expectancy.',
        },
        {
          '@type': 'HowToStep',
          position: '3',
          name: 'See Your Results',
          text: 'Receive your personalized seconds remaining and time breakdown.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How many seconds have I lived?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Roughly 31,536,000 seconds for every year of your age. A 35-year-old has lived about 1.1 billion seconds. For your exact count, enter your birthdate into the Life Clock.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many seconds are in a lifetime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An average 80-year lifespan contains approximately 2,522,880,000 seconds.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many hours are in an average lifetime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'About 700,800 hours in an 80-year life. Around 230,000 are spent sleeping and 90,000 working, leaving roughly 380,000 waking, non-working hours.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many days are in a lifetime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'About 29,220 days in an 80-year life. Each day is 86,400 seconds, the same for everyone.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many seconds are in a year?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'There are 31,536,000 seconds in a standard 365-day year.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is YourLifeInSeconds free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The Life Clock and every tool on the site are free. Your data stays in your browser.',
          },
        },
      ],
    },
    {
      '@type': 'Organization',
      name: 'YourLifeInSeconds',
      url: 'https://yourlifeinseconds.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://yourlifeinseconds.com/api/og',
      },
      sameAs: [
        'https://x.com/yourlifeinseconds',
        'https://instagram.com/yourlifeinseconds',
        'https://linkedin.com/company/yourlifeinseconds',
      ],
    },
    {
      '@type': 'WebSite',
      name: 'YourLifeInSeconds',
      url: 'https://yourlifeinseconds.com',
      description:
        'Discover exactly how many seconds you have lived and how many remain.',
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <HomeContent />
    </>
  );
}

