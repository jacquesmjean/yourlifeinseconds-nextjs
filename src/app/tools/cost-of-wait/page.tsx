import type { Metadata } from 'next';
import CostOfWait from '@/components/tools/CostOfWait';

export const metadata: Metadata = {
  alternates: { canonical: '/tools/cost-of-wait' },
  title: 'The Waiting Tax — What Procrastination Actually Costs',
  description: 'Every day you wait to start, you pay a tax. See the total, watch it tick up by the second, and find out exactly what your delay has cost you so far.',
  openGraph: {
    title: 'The Waiting Tax',
    description: 'See exactly what procrastination has cost you — to the second.',
    url: 'https://yourlifeinseconds.com/tools/cost-of-wait',
    type: 'website',
  },
};

export default function Page() {
  return <CostOfWait />;
}
