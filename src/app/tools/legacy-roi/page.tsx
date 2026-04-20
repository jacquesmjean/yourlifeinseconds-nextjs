import type { Metadata } from 'next';
import LegacyROI from '@/components/tools/LegacyROI';

export const metadata: Metadata = {
  title: 'Legacy ROI — What Outlives Your Hours',
  description: 'Most people track financial ROI. Almost nobody tracks impact-per-hour. Measure the compound ripple of your time — what outlives the hour you spent.',
  openGraph: {
    title: 'Legacy ROI',
    description: "Track the ripple of your hours, not the return.",
    url: 'https://yourlifeinseconds.com/tools/legacy-roi',
    type: 'website',
  },
};

export default function Page() {
  return <LegacyROI />;
}
