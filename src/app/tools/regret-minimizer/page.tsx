import type { Metadata } from 'next';
import RegretMinimizer from '@/components/tools/RegretMinimizer';

export const metadata: Metadata = {
  alternates: { canonical: '/tools/regret-minimizer' },
  title: 'The Regret Minimizer — Inverse Bucket List',
  description: 'If your time ended in one hour, who have you not called? Name your three values, see where your week actually goes, and fix the drift.',
  openGraph: {
    title: 'The Regret Minimizer',
    description: "See how much of your remaining life is going to your values vs. maintenance. Fix the drift.",
    url: 'https://yourlifeinseconds.com/tools/regret-minimizer',
    type: 'website',
  },
};

export default function Page() {
  return <RegretMinimizer />;
}
