import type { Metadata } from 'next';
import DegreeInSeconds from '@/components/tools/DegreeInSeconds';

export const metadata: Metadata = {
  alternates: { canonical: '/tools/degree-in-seconds' },
  title: 'Degree in Seconds — The Honest Cost & Return of a College Degree',
  description: 'Years of life spent, seconds of interest paid, lifetime return earned. Calculate the true lifetime ROI of a degree — tuition, opportunity cost, and earnings premium.',
  openGraph: {
    title: 'Degree in Seconds',
    description: 'The real cost of a degree — in hours of your life.',
    url: 'https://yourlifeinseconds.com/tools/degree-in-seconds',
    type: 'website',
  },
};

export default function Page() {
  return <DegreeInSeconds />;
}
