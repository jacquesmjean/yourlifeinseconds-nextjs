import type { Metadata } from 'next';
import SecondsToFreedom from '@/components/tools/SecondsToFreedom';

export const metadata: Metadata = {
  title: 'Seconds to Freedom — Your Financial Independence Countdown',
  description: 'Financial independence is the day you stop selling your seconds. Calculate the exact number of seconds until you reach FI, using the Trinity 4% rule.',
  openGraph: {
    title: 'Seconds to Freedom',
    description: 'The exact number of seconds until you stop selling them.',
    url: 'https://yourlifeinseconds.com/tools/seconds-to-freedom',
    type: 'website',
  },
};

export default function Page() {
  return <SecondsToFreedom />;
}
