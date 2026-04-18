import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'YourLifeInSeconds.com — Life Productivity Calculator',
  description:
    'Calculate your life in seconds and unlock productivity clarity. Free, private, grounded in WHO life-expectancy data.',
  openGraph: {
    title: 'YourLifeInSeconds.com — Every Second Counts',
    description: 'Calculate how many seconds you have left in your life and optimize your time.',
    url: 'https://yourlifeinseconds.com',
    siteName: 'YourLifeInSeconds.com',
    type: 'website',
  },
};

export default function Home() {
  return <HomeContent />;
}
