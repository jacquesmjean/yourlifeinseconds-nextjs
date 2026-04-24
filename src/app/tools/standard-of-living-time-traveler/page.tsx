import type { Metadata } from 'next';
import StandardOfLivingTimeTraveler from '@/components/tools/StandardOfLivingTimeTraveler';

export const metadata: Metadata = {
  alternates: { canonical: '/tools/standard-of-living-time-traveler' },
  title: 'Standard of Living Time-Traveler — What Your Dollar Used to Buy',
  description: 'A dollar is not a dollar. Drag the slider from 1950 to 2050 and watch what your hour of work actually buys across the decades of your life.',
  openGraph: {
    title: 'Standard of Living Time-Traveler',
    description: "Your dollar is not the same dollar it used to be. See the receipt.",
    url: 'https://yourlifeinseconds.com/tools/standard-of-living-time-traveler',
    type: 'website',
  },
};

export default function Page() {
  return <StandardOfLivingTimeTraveler />;
}
