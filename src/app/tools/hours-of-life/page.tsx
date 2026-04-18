import type { Metadata } from 'next';
import HoursOfLife from '@/components/tools/HoursOfLife';

export const metadata: Metadata = {
  title: 'Hours of Your Life Budget — Every Expense in Hours Worked',
  description: 'Every expense is hours of working life sold. Convert your monthly spending into hours, years, and seconds of life traded — at your net hourly rate.',
  openGraph: {
    title: 'Hours of Your Life Budget',
    description: "Your expenses, priced in the only currency that matters: the hours of life you trade.",
    url: 'https://yourlifeinseconds.com/tools/hours-of-life',
    type: 'website',
  },
};

export default function Page() {
  return <HoursOfLife />;
}
