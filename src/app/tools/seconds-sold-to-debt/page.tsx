import type { Metadata } from 'next';
import SecondsSoldToDebt from '@/components/tools/SecondsSoldToDebt';

export const metadata: Metadata = {
  alternates: { canonical: '/tools/seconds-sold-to-debt' },
  title: 'Seconds Sold to Debt — How Much of Your Life Does Debt Cost?',
  description: 'Every dollar of debt is seconds of your life owed. Calculate the real price of your debt — principal, interest, and your liberation date — at your hourly wage.',
  openGraph: {
    title: 'Seconds Sold to Debt',
    description: 'The seconds of your life you owe to debt, at your hourly rate.',
    url: 'https://yourlifeinseconds.com/tools/seconds-sold-to-debt',
    type: 'website',
  },
};

export default function Page() {
  return <SecondsSoldToDebt />;
}
