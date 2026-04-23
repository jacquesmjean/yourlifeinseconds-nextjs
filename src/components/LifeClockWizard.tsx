'use client';

import React, { useState, useEffect, useRef } from 'react';
import LifeInWeeksGrid from '@/components/LifeInWeeksGrid';
import LifeComparisons from '@/components/LifeComparisons';
// Inline SVG icon components (no external dependency)
type IconProps = { className?: string; size?: number };
const ChevronRight = ({ className = '', size = 20 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
);
const ChevronLeft = ({ className = '', size = 20 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
);
const Share2 = ({ className = '', size = 20 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
);
const Linkedin = ({ className = '', size = 20 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
);
const Twitter = ({ className = '', size = 20 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const Copy = ({ className = '', size = 20 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
);
const Check = ({ className = '', size = 20 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
);
const Zap = ({ className = '', size = 20 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const Download = ({ className = '', size = 20 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
);
const ShareIcon = ({ className = '', size = 20 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
);

type ShareVariant = 0 | 1 | 2;
const SHARE_VARIANTS: { label: string; build: (remaining: string, percent: number) => string }[] = [
  {
    label: "Shocking",
    build: (r) => `I have ${r} seconds left. That's less than I thought.`,
  },
  {
    label: "Reflective",
    build: (_r, p) => `I'm ${Math.round(p)}% through my life. How far are you?`,
  },
  {
    label: "Direct",
    build: (r) => `I just saw my life in seconds: ${r} left. Calculate yours.`,
  },
];

interface CountUpValue {
  target: number;
  current: number;
}

// Light haptic pulse for touch feedback on mobile.
const haptic = (ms = 10) => {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    try { navigator.vibrate(ms); } catch { /* noop */ }
  }
};

const COUNTRIES = [
  { name: 'Afghanistan', code: 'AF', lifeExpectancy: 62.0 },
  { name: 'Albania', code: 'AL', lifeExpectancy: 79.1 },
  { name: 'Algeria', code: 'DZ', lifeExpectancy: 76.9 },
  { name: 'Andorra', code: 'AD', lifeExpectancy: 84.0 },
  { name: 'Angola', code: 'AO', lifeExpectancy: 61.6 },
  { name: 'Antigua and Barbuda', code: 'AG', lifeExpectancy: 79.0 },
  { name: 'Argentina', code: 'AR', lifeExpectancy: 77.3 },
  { name: 'Armenia', code: 'AM', lifeExpectancy: 75.6 },
  { name: 'Australia', code: 'AU', lifeExpectancy: 83.0 },
  { name: 'Austria', code: 'AT', lifeExpectancy: 81.8 },
  { name: 'Azerbaijan', code: 'AZ', lifeExpectancy: 73.0 },
  { name: 'Bahamas', code: 'BS', lifeExpectancy: 73.8 },
  { name: 'Bahrain', code: 'BH', lifeExpectancy: 79.0 },
  { name: 'Bangladesh', code: 'BD', lifeExpectancy: 73.1 },
  { name: 'Barbados', code: 'BB', lifeExpectancy: 79.4 },
  { name: 'Belarus', code: 'BY', lifeExpectancy: 74.8 },
  { name: 'Belgium', code: 'BE', lifeExpectancy: 81.8 },
  { name: 'Belize', code: 'BZ', lifeExpectancy: 74.5 },
  { name: 'Benin', code: 'BJ', lifeExpectancy: 59.8 },
  { name: 'Bhutan', code: 'BT', lifeExpectancy: 72.0 },
  { name: 'Bolivia', code: 'BO', lifeExpectancy: 71.5 },
  { name: 'Bosnia and Herzegovina', code: 'BA', lifeExpectancy: 77.4 },
  { name: 'Botswana', code: 'BW', lifeExpectancy: 66.2 },
  { name: 'Brazil', code: 'BR', lifeExpectancy: 76.0 },
  { name: 'Brunei', code: 'BN', lifeExpectancy: 75.7 },
  { name: 'Bulgaria', code: 'BG', lifeExpectancy: 75.1 },
  { name: 'Burkina Faso', code: 'BF', lifeExpectancy: 59.3 },
  { name: 'Burundi', code: 'BI', lifeExpectancy: 61.7 },
  { name: 'Cabo Verde', code: 'CV', lifeExpectancy: 73.1 },
  { name: 'Cambodia', code: 'KH', lifeExpectancy: 70.1 },
  { name: 'Cameroon', code: 'CM', lifeExpectancy: 60.3 },
  { name: 'Canada', code: 'CA', lifeExpectancy: 82.1 },
  { name: 'Central African Republic', code: 'CF', lifeExpectancy: 54.4 },
  { name: 'Chad', code: 'TD', lifeExpectancy: 53.0 },
  { name: 'Chile', code: 'CL', lifeExpectancy: 80.7 },
  { name: 'China', code: 'CN', lifeExpectancy: 78.2 },
  { name: 'Colombia', code: 'CO', lifeExpectancy: 77.3 },
  { name: 'Comoros', code: 'KM', lifeExpectancy: 66.1 },
  { name: 'Congo (Republic)', code: 'CG', lifeExpectancy: 64.6 },
  { name: 'Costa Rica', code: 'CR', lifeExpectancy: 80.4 },
  { name: 'Croatia', code: 'HR', lifeExpectancy: 78.9 },
  { name: 'Cuba', code: 'CU', lifeExpectancy: 79.4 },
  { name: 'Cyprus', code: 'CY', lifeExpectancy: 80.6 },
  { name: 'Czechia', code: 'CZ', lifeExpectancy: 79.4 },
  { name: 'Democratic Republic of the Congo', code: 'CD', lifeExpectancy: 59.2 },
  { name: 'Denmark', code: 'DK', lifeExpectancy: 81.5 },
  { name: 'Djibouti', code: 'DJ', lifeExpectancy: 67.1 },
  { name: 'Dominica', code: 'DM', lifeExpectancy: 74.4 },
  { name: 'Dominican Republic', code: 'DO', lifeExpectancy: 74.1 },
  { name: 'Ecuador', code: 'EC', lifeExpectancy: 77.3 },
  { name: 'Egypt', code: 'EG', lifeExpectancy: 71.8 },
  { name: 'El Salvador', code: 'SV', lifeExpectancy: 73.3 },
  { name: 'Equatorial Guinea', code: 'GQ', lifeExpectancy: 60.6 },
  { name: 'Eritrea', code: 'ER', lifeExpectancy: 66.3 },
  { name: 'Estonia', code: 'EE', lifeExpectancy: 78.9 },
  { name: 'Eswatini', code: 'SZ', lifeExpectancy: 57.5 },
  { name: 'Ethiopia', code: 'ET', lifeExpectancy: 66.6 },
  { name: 'Fiji', code: 'FJ', lifeExpectancy: 67.9 },
  { name: 'Finland', code: 'FI', lifeExpectancy: 82.1 },
  { name: 'France', code: 'FR', lifeExpectancy: 82.8 },
  { name: 'Gabon', code: 'GA', lifeExpectancy: 66.5 },
  { name: 'Gambia', code: 'GM', lifeExpectancy: 62.6 },
  { name: 'Georgia', code: 'GE', lifeExpectancy: 73.8 },
  { name: 'Germany', code: 'DE', lifeExpectancy: 81.5 },
  { name: 'Ghana', code: 'GH', lifeExpectancy: 64.1 },
  { name: 'Greece', code: 'GR', lifeExpectancy: 81.5 },
  { name: 'Grenada', code: 'GD', lifeExpectancy: 74.4 },
  { name: 'Guatemala', code: 'GT', lifeExpectancy: 71.0 },
  { name: 'Guinea', code: 'GN', lifeExpectancy: 59.3 },
  { name: 'Guinea-Bissau', code: 'GW', lifeExpectancy: 59.7 },
  { name: 'Guyana', code: 'GY', lifeExpectancy: 65.7 },
  { name: 'Haiti', code: 'HT', lifeExpectancy: 63.2 },
  { name: 'Honduras', code: 'HN', lifeExpectancy: 75.1 },
  { name: 'Hungary', code: 'HU', lifeExpectancy: 76.9 },
  { name: 'Iceland', code: 'IS', lifeExpectancy: 82.7 },
  { name: 'India', code: 'IN', lifeExpectancy: 70.8 },
  { name: 'Indonesia', code: 'ID', lifeExpectancy: 71.8 },
  { name: 'Iran', code: 'IR', lifeExpectancy: 77.3 },
  { name: 'Iraq', code: 'IQ', lifeExpectancy: 72.4 },
  { name: 'Ireland', code: 'IE', lifeExpectancy: 82.3 },
  { name: 'Israel', code: 'IL', lifeExpectancy: 82.8 },
  { name: 'Italy', code: 'IT', lifeExpectancy: 82.6 },
  { name: 'Ivory Coast', code: 'CI', lifeExpectancy: 58.6 },
  { name: 'Jamaica', code: 'JM', lifeExpectancy: 75.3 },
  { name: 'Japan', code: 'JP', lifeExpectancy: 84.6 },
  { name: 'Jordan', code: 'JO', lifeExpectancy: 74.2 },
  { name: 'Kazakhstan', code: 'KZ', lifeExpectancy: 73.2 },
  { name: 'Kenya', code: 'KE', lifeExpectancy: 66.7 },
  { name: 'Kiribati', code: 'KI', lifeExpectancy: 66.9 },
  { name: 'Kuwait', code: 'KW', lifeExpectancy: 78.8 },
  { name: 'Kyrgyzstan', code: 'KG', lifeExpectancy: 71.5 },
  { name: 'Laos', code: 'LA', lifeExpectancy: 68.0 },
  { name: 'Latvia', code: 'LV', lifeExpectancy: 75.5 },
  { name: 'Lebanon', code: 'LB', lifeExpectancy: 79.1 },
  { name: 'Lesotho', code: 'LS', lifeExpectancy: 53.1 },
  { name: 'Liberia', code: 'LR', lifeExpectancy: 64.1 },
  { name: 'Libya', code: 'LY', lifeExpectancy: 73.0 },
  { name: 'Liechtenstein', code: 'LI', lifeExpectancy: 82.7 },
  { name: 'Lithuania', code: 'LT', lifeExpectancy: 76.4 },
  { name: 'Luxembourg', code: 'LU', lifeExpectancy: 82.6 },
  { name: 'Madagascar', code: 'MG', lifeExpectancy: 65.1 },
  { name: 'Malawi', code: 'MW', lifeExpectancy: 62.9 },
  { name: 'Malaysia', code: 'MY', lifeExpectancy: 75.3 },
  { name: 'Maldives', code: 'MV', lifeExpectancy: 79.7 },
  { name: 'Mali', code: 'ML', lifeExpectancy: 59.3 },
  { name: 'Malta', code: 'MT', lifeExpectancy: 82.6 },
  { name: 'Marshall Islands', code: 'MH', lifeExpectancy: 65.3 },
  { name: 'Mauritania', code: 'MR', lifeExpectancy: 64.4 },
  { name: 'Mauritius', code: 'MU', lifeExpectancy: 74.2 },
  { name: 'Mexico', code: 'MX', lifeExpectancy: 74.8 },
  { name: 'Micronesia', code: 'FM', lifeExpectancy: 67.9 },
  { name: 'Moldova', code: 'MD', lifeExpectancy: 72.2 },
  { name: 'Monaco', code: 'MC', lifeExpectancy: 86.0 },
  { name: 'Mongolia', code: 'MN', lifeExpectancy: 70.0 },
  { name: 'Montenegro', code: 'ME', lifeExpectancy: 76.0 },
  { name: 'Morocco', code: 'MA', lifeExpectancy: 74.3 },
  { name: 'Mozambique', code: 'MZ', lifeExpectancy: 58.1 },
  { name: 'Myanmar', code: 'MM', lifeExpectancy: 66.5 },
  { name: 'Namibia', code: 'NA', lifeExpectancy: 63.7 },
  { name: 'Nauru', code: 'NR', lifeExpectancy: 63.6 },
  { name: 'Nepal', code: 'NP', lifeExpectancy: 70.9 },
  { name: 'Netherlands', code: 'NL', lifeExpectancy: 82.0 },
  { name: 'New Zealand', code: 'NZ', lifeExpectancy: 82.3 },
  { name: 'Nicaragua', code: 'NI', lifeExpectancy: 74.5 },
  { name: 'Niger', code: 'NE', lifeExpectancy: 62.2 },
  { name: 'Nigeria', code: 'NG', lifeExpectancy: 52.7 },
  { name: 'North Korea', code: 'KP', lifeExpectancy: 71.9 },
  { name: 'North Macedonia', code: 'MK', lifeExpectancy: 75.8 },
  { name: 'Norway', code: 'NO', lifeExpectancy: 83.0 },
  { name: 'Oman', code: 'OM', lifeExpectancy: 78.4 },
  { name: 'Pakistan', code: 'PK', lifeExpectancy: 66.4 },
  { name: 'Palau', code: 'PW', lifeExpectancy: 70.0 },
  { name: 'Palestine', code: 'PS', lifeExpectancy: 74.1 },
  { name: 'Panama', code: 'PA', lifeExpectancy: 79.1 },
  { name: 'Papua New Guinea', code: 'PG', lifeExpectancy: 65.4 },
  { name: 'Paraguay', code: 'PY', lifeExpectancy: 72.3 },
  { name: 'Peru', code: 'PE', lifeExpectancy: 77.0 },
  { name: 'Philippines', code: 'PH', lifeExpectancy: 70.2 },
  { name: 'Poland', code: 'PL', lifeExpectancy: 78.5 },
  { name: 'Portugal', code: 'PT', lifeExpectancy: 81.3 },
  { name: 'Qatar', code: 'QA', lifeExpectancy: 80.0 },
  { name: 'Romania', code: 'RO', lifeExpectancy: 76.6 },
  { name: 'Russia', code: 'RU', lifeExpectancy: 72.7 },
  { name: 'Rwanda', code: 'RW', lifeExpectancy: 66.7 },
  { name: 'Saint Kitts and Nevis', code: 'KN', lifeExpectancy: 71.7 },
  { name: 'Saint Lucia', code: 'LC', lifeExpectancy: 76.0 },
  { name: 'Saint Vincent and the Grenadines', code: 'VC', lifeExpectancy: 74.0 },
  { name: 'Samoa', code: 'WS', lifeExpectancy: 73.3 },
  { name: 'San Marino', code: 'SM', lifeExpectancy: 84.0 },
  { name: 'São Tomé and Príncipe', code: 'ST', lifeExpectancy: 70.1 },
  { name: 'Saudi Arabia', code: 'SA', lifeExpectancy: 77.1 },
  { name: 'Senegal', code: 'SN', lifeExpectancy: 67.9 },
  { name: 'Serbia', code: 'RS', lifeExpectancy: 75.9 },
  { name: 'Seychelles', code: 'SC', lifeExpectancy: 74.2 },
  { name: 'Sierra Leone', code: 'SL', lifeExpectancy: 54.7 },
  { name: 'Singapore', code: 'SG', lifeExpectancy: 84.9 },
  { name: 'Slovakia', code: 'SK', lifeExpectancy: 77.5 },
  { name: 'Slovenia', code: 'SI', lifeExpectancy: 81.6 },
  { name: 'Solomon Islands', code: 'SB', lifeExpectancy: 70.7 },
  { name: 'Somalia', code: 'SO', lifeExpectancy: 56.1 },
  { name: 'South Africa', code: 'ZA', lifeExpectancy: 65.3 },
  { name: 'South Korea', code: 'KR', lifeExpectancy: 83.3 },
  { name: 'South Sudan', code: 'SS', lifeExpectancy: 55.0 },
  { name: 'Spain', code: 'ES', lifeExpectancy: 83.4 },
  { name: 'Sri Lanka', code: 'LK', lifeExpectancy: 77.0 },
  { name: 'Sudan', code: 'SD', lifeExpectancy: 65.3 },
  { name: 'Suriname', code: 'SR', lifeExpectancy: 72.3 },
  { name: 'Sweden', code: 'SE', lifeExpectancy: 83.1 },
  { name: 'Switzerland', code: 'CH', lifeExpectancy: 83.8 },
  { name: 'Syria', code: 'SY', lifeExpectancy: 72.1 },
  { name: 'Taiwan', code: 'TW', lifeExpectancy: 80.4 },
  { name: 'Tajikistan', code: 'TJ', lifeExpectancy: 70.7 },
  { name: 'Tanzania', code: 'TZ', lifeExpectancy: 66.7 },
  { name: 'Thailand', code: 'TH', lifeExpectancy: 77.7 },
  { name: 'Timor-Leste', code: 'TL', lifeExpectancy: 69.5 },
  { name: 'Togo', code: 'TG', lifeExpectancy: 61.6 },
  { name: 'Tonga', code: 'TO', lifeExpectancy: 71.1 },
  { name: 'Trinidad and Tobago', code: 'TT', lifeExpectancy: 73.3 },
  { name: 'Tunisia', code: 'TN', lifeExpectancy: 77.1 },
  { name: 'Turkey', code: 'TR', lifeExpectancy: 78.6 },
  { name: 'Turkmenistan', code: 'TM', lifeExpectancy: 69.3 },
  { name: 'Tuvalu', code: 'TV', lifeExpectancy: 64.5 },
  { name: 'Uganda', code: 'UG', lifeExpectancy: 63.4 },
  { name: 'Ukraine', code: 'UA', lifeExpectancy: 72.0 },
  { name: 'United Arab Emirates', code: 'AE', lifeExpectancy: 78.6 },
  { name: 'United Kingdom', code: 'GB', lifeExpectancy: 81.2 },
  { name: 'United States', code: 'US', lifeExpectancy: 78.9 },
  { name: 'Uruguay', code: 'UY', lifeExpectancy: 77.9 },
  { name: 'Uzbekistan', code: 'UZ', lifeExpectancy: 71.7 },
  { name: 'Vanuatu', code: 'VU', lifeExpectancy: 70.3 },
  { name: 'Vatican City', code: 'VA', lifeExpectancy: 84.0 },
  { name: 'Venezuela', code: 'VE', lifeExpectancy: 72.0 },
  { name: 'Vietnam', code: 'VN', lifeExpectancy: 73.7 },
  { name: 'Yemen', code: 'YE', lifeExpectancy: 66.1 },
  { name: 'Zambia', code: 'ZM', lifeExpectancy: 62.5 },
  { name: 'Zimbabwe', code: 'ZW', lifeExpectancy: 61.3 },
];

import {
  encodeLifeClockPayload,
  type LifeClockPayload,
} from '@/lib/lifeClockPayload';
import { encodeShortCode } from '@/lib/shortCode';
import { track, Events } from '@/lib/analytics';

const HOURLY_WORTH = 28.85;

interface LifeClockWizardProps {
  initialPayload?: LifeClockPayload;
}

export default function LifeClockWizard({ initialPayload }: LifeClockWizardProps = {}) {
  const [step, setStep] = useState(initialPayload ? 2 : 1);
  const [dateOfBirth, setDateOfBirth] = useState(initialPayload?.dob ?? '');
  const [timeOfBirth, setTimeOfBirth] = useState(initialPayload?.tob ?? '12:00');
  const [selectedCountry, setSelectedCountry] = useState(initialPayload?.country ?? 'US');
  const [gender, setGender] = useState<'male' | 'female' | 'average'>(
    initialPayload?.gender ?? 'average'
  );

  const [liveSeconds, setLiveSeconds] = useState(0);
  const [results, setResults] = useState<{
    totalSeconds: number;
    usedSeconds: number;
    remainingSeconds: number;
    scarcityScore: number;
    yearsRemaining: number;
    monthsRemaining: number;
    weeksRemaining: number;
    daysRemaining: number;
    hoursRemaining: number;
    minutesRemaining: number;
    birthTime: Date;
    lifeExpectancy: number;
  } | null>(null);

  const [animatedValues, setAnimatedValues] = useState<{
    usedSeconds: CountUpValue;
    remainingSeconds: CountUpValue;
    scarcityScore: CountUpValue;
  }>({
    usedSeconds: { target: 0, current: 0 },
    remainingSeconds: { target: 0, current: 0 },
    scarcityScore: { target: 0, current: 0 },
  });

  const [copied, setCopied] = useState(false);
  const [shareVariant, setShareVariant] = useState<ShareVariant>(0);
  const [downloading, setDownloading] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const animationFrameRef = useRef<number>();
  // Live values for the count-up animation. Kept in a ref so the rAF loop
  // can check progress synchronously, independent of React's batched state
  // updates (which previously caused the animation to stall after 1–2 frames
  // and leave users looking at 4–10% of the real numbers).
  const animProgressRef = useRef({
    usedSeconds: 0,
    remainingSeconds: 0,
    scarcityScore: 0,
  });

  useEffect(() => {
    // Feature-detect Web Share API with file support.
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      setCanNativeShare(true);
    }
  }, []);

  // Auto-detect country via server-side geo proxy (progressive enhancement).
  useEffect(() => {
    if (initialPayload?.country) return; // shared link already set
    const controller = new AbortController();
    fetch('/api/geo', { signal: controller.signal })
      .then((r) => r.json())
      .then((data: { country: string | null }) => {
        if (data.country) {
          const match = COUNTRIES.find((c) => c.code === data.country);
          if (match) setSelectedCountry(match.code);
        }
      })
      .catch(() => { /* keep default */ });
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Calculate adjusted life expectancy based on gender
  const getAdjustedLifeExpectancy = (baseExpectancy: number, selectedGender: string): number => {
    if (selectedGender === 'male') return baseExpectancy - 2.5;
    if (selectedGender === 'female') return baseExpectancy + 2.5;
    return baseExpectancy;
  };

  // Calculate time breakdown
  const calculateTimeBreakdown = (birthDate: Date, deathDate: Date) => {
    let remaining = deathDate.getTime() - birthDate.getTime();

    const years = Math.floor(remaining / (1000 * 60 * 60 * 24 * 365.25));
    remaining -= years * (1000 * 60 * 60 * 24 * 365.25);

    const months = Math.floor(remaining / (1000 * 60 * 60 * 24 * 30.44));
    remaining -= months * (1000 * 60 * 60 * 24 * 30.44);

    const weeks = Math.floor(remaining / (1000 * 60 * 60 * 24 * 7));
    remaining -= weeks * (1000 * 60 * 60 * 24 * 7);

    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    remaining -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(remaining / (1000 * 60 * 60));
    remaining -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(remaining / (1000 * 60));

    return { years, months, weeks, days, hours, minutes };
  };

  // Auto-calculate if an initial payload was provided (shared link)
  useEffect(() => {
    if (initialPayload?.dob) {
      // defer one tick so state is initialized
      const t = setTimeout(() => handleCalculate(), 0);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle calculate
  const handleCalculate = () => {
    if (!dateOfBirth) return;

    const [hours, minutes] = timeOfBirth.split(':').map(Number);
    const birthDate = new Date(dateOfBirth);
    birthDate.setHours(hours, minutes, 0, 0);

    const country = COUNTRIES.find((c) => c.code === selectedCountry);
    const lifeExpectancy = getAdjustedLifeExpectancy(
      country?.lifeExpectancy || 78,
      gender
    );

    const deathDate = new Date(birthDate);
    deathDate.setFullYear(deathDate.getFullYear() + Math.floor(lifeExpectancy));
    deathDate.setMonth(
      deathDate.getMonth() + Math.round((lifeExpectancy % 1) * 12)
    );

    const now = new Date();
    const totalSeconds = Math.floor((deathDate.getTime() - birthDate.getTime()) / 1000);
    const usedSeconds = Math.floor((now.getTime() - birthDate.getTime()) / 1000);
    const remainingSeconds = totalSeconds - usedSeconds;
    const scarcityScore = (usedSeconds / totalSeconds) * 100;

    const breakdown = calculateTimeBreakdown(now, deathDate);

    setResults({
      totalSeconds,
      usedSeconds,
      remainingSeconds: Math.max(0, remainingSeconds),
      scarcityScore: Math.min(100, scarcityScore),
      yearsRemaining: breakdown.years,
      monthsRemaining: breakdown.months,
      weeksRemaining: breakdown.weeks,
      daysRemaining: breakdown.days,
      hoursRemaining: breakdown.hours,
      minutesRemaining: breakdown.minutes,
      birthTime: birthDate,
      lifeExpectancy,
    });

    // Initialize animated values (start at 0, rAF loop will count up to target)
    animProgressRef.current = {
      usedSeconds: 0,
      remainingSeconds: 0,
      scarcityScore: 0,
    };
    setAnimatedValues({
      usedSeconds: { target: usedSeconds, current: 0 },
      remainingSeconds: { target: Math.max(0, remainingSeconds), current: 0 },
      scarcityScore: { target: Math.min(100, scarcityScore), current: 0 },
    });

    track(Events.CALC_COMPLETED, {
      country: country?.name || selectedCountry,
      gender,
      age_bucket: Math.floor(usedSeconds / (365.25 * 86400 * 10)) * 10, // 0, 10, 20, 30...
    });

    setStep(3);
  };

  // Live seconds counter
  useEffect(() => {
    if (step !== 3 || !results) return;

    const interval = setInterval(() => {
      const now = new Date();
      const elapsed = Math.floor((now.getTime() - results.birthTime.getTime()) / 1000);
      setLiveSeconds(elapsed);
    }, 1000);

    return () => clearInterval(interval);
  }, [step, results]);

  // Count-up animation for metrics.
  //
  // Runs a ~900ms ease-out reveal from 0 → target on each of the three metric
  // cards. Uses performance.now() for a time-based animation (resilient to
  // frame-rate drops) and writes progress to a ref so the rAF loop's "are we
  // done?" check is fully synchronous, independent of React's state batching.
  //
  // Previous implementation read `hasMore` from a closure that depended on a
  // React setState updater running synchronously. Under React 18 concurrent
  // rendering inside requestAnimationFrame that updater is deferred, so the
  // loop exited after 1–2 frames and the numbers froze at 4–10% of target.
  useEffect(() => {
    if (step !== 3 || !results) return;

    const targets = {
      usedSeconds: results.usedSeconds,
      remainingSeconds: Math.max(0, results.remainingSeconds),
      scarcityScore: Math.min(100, results.scarcityScore),
    };

    const DURATION_MS = 900;
    const startTime = typeof performance !== 'undefined' ? performance.now() : Date.now();
    let stillAnimating = true;

    // easeOutCubic for a natural deceleration at the end.
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (now: number) => {
      if (!stillAnimating) return;

      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / DURATION_MS);
      const eased = ease(t);

      animProgressRef.current = {
        usedSeconds: targets.usedSeconds * eased,
        remainingSeconds: targets.remainingSeconds * eased,
        scarcityScore: targets.scarcityScore * eased,
      };

      setAnimatedValues({
        usedSeconds: { target: targets.usedSeconds, current: animProgressRef.current.usedSeconds },
        remainingSeconds: { target: targets.remainingSeconds, current: animProgressRef.current.remainingSeconds },
        scarcityScore: { target: targets.scarcityScore, current: animProgressRef.current.scarcityScore },
      });

      if (t < 1 && stillAnimating) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Snap to exact final values so we never show rounding drift.
        animProgressRef.current = { ...targets };
        setAnimatedValues({
          usedSeconds: { target: targets.usedSeconds, current: targets.usedSeconds },
          remainingSeconds: { target: targets.remainingSeconds, current: targets.remainingSeconds },
          scarcityScore: { target: targets.scarcityScore, current: targets.scarcityScore },
        });
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      stillAnimating = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [step, results]);

  // Format large numbers
  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US');
  };

  // Build a shareable URL that encodes the inputs so the recipient
  // auto-loads the same result. Prefers the compact /s/<code> form
  // (8 chars), falls back to the full /me?r=<base64> for edge cases.
  const buildShareUrl = (): string => {
    const origin =
      typeof window !== 'undefined'
        ? window.location.origin
        : 'https://yourlifeinseconds.com';
    const shortCode = encodeShortCode({
      dob: dateOfBirth,
      country: selectedCountry,
      gender,
    });
    if (shortCode) return `${origin}/s/${shortCode}`;
    const payload = encodeLifeClockPayload({
      dob: dateOfBirth,
      tob: timeOfBirth,
      country: selectedCountry,
      gender,
    });
    return `${origin}/me?r=${payload}`;
  };

  // Build the OG image URL for the current result (for download + preview).
  const buildOgUrl = (absolute = false): string => {
    if (!results) return '/api/og';
    const rel = `/api/og?r=${results.remainingSeconds}&p=${results.scarcityScore.toFixed(1)}`;
    if (!absolute || typeof window === 'undefined') return rel;
    return `${window.location.origin}${rel}`;
  };

  // Generate share text using the selected variant.
  const generateShareText = (): string => {
    if (!results) return '';
    return SHARE_VARIANTS[shareVariant].build(
      formatNumber(results.remainingSeconds),
      results.scarcityScore
    );
  };

  // Download the OG card as a PNG the user can post to IG, TikTok, etc.
  const handleDownload = async () => {
    if (!results) return;
    haptic();
    try {
      setDownloading(true);
      const res = await fetch(buildOgUrl());
      if (!res.ok) throw new Error(`OG fetch failed: ${res.status}`);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `your-life-in-seconds-${results.remainingSeconds}.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Download failed', err);
    } finally {
      setDownloading(false);
    }
  };

  // Native Web Share — opens the OS share sheet. On mobile this unlocks
  // WhatsApp, Messages, IG DMs, Threads, TikTok, etc. in a single tap.
  const handleNativeShare = async () => {
    if (!results || typeof navigator === 'undefined' || !navigator.share) return;
    haptic();
    track(Events.SHARE_CLICKED, { platform: 'native', variant: shareVariant });
    const text = generateShareText();
    const url = buildShareUrl();
    try {
      // Try sharing with the PNG card if supported.
      const ogRes = await fetch(buildOgUrl());
      if (ogRes.ok && typeof navigator.canShare === 'function') {
        const blob = await ogRes.blob();
        const file = new File([blob], 'your-life-in-seconds.png', { type: 'image/png' });
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: 'Your Life In Seconds',
            text,
            url,
            files: [file],
          });
          return;
        }
      }
      await navigator.share({ title: 'Your Life In Seconds', text, url });
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        // eslint-disable-next-line no-console
        console.error('Share failed', err);
      }
    }
  };

  // Share handlers
  const handleShare = (platform: string) => {
    haptic();
    track(
      platform === 'copy' ? Events.SHARE_COPIED : Events.SHARE_CLICKED,
      { platform, variant: shareVariant }
    );
    const text = generateShareText();
    const url = buildShareUrl();

    switch (platform) {
      case 'linkedin':
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          '_blank'
        );
        break;
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            text
          )}&url=${encodeURIComponent(url)}`,
          '_blank'
        );
        break;
      case 'copy':
        navigator.clipboard.writeText(`${text} ${url}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
  };

  const handleRestart = () => {
    setStep(1);
    setDateOfBirth('');
    setTimeOfBirth('12:00');
    setSelectedCountry('US');
    setGender('average');
    setResults(null);
    setLiveSeconds(0);
  };

  return (
    <section id="life-clock" className="bg-brand-bg py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-gradient mb-4 text-4xl font-bold">
            How Many Seconds Do You Have Left?
          </h2>
          <p className="text-text-secondary text-lg">
            Discover your life in seconds and make every moment count
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {[1, 2, 3].map((stepNum) => (
              <div
                key={stepNum}
                className={`flex flex-col items-center ${
                  stepNum !== 3 ? 'flex-1' : ''
                }`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-mono font-bold transition-all ${
                    stepNum <= step
                      ? 'bg-gradient-to-r from-accent to-accent-bright text-brand-bg'
                      : 'border-2 border-border-subtle bg-brand-card text-text-secondary'
                  }`}
                >
                  {stepNum}
                </div>
                <span
                  className={`mt-2 text-xs font-medium ${
                    stepNum <= step ? 'text-accent' : 'text-text-muted'
                  }`}
                >
                  {stepNum === 1 && 'Birthday'}
                  {stepNum === 2 && 'Region'}
                  {stepNum === 3 && 'Results'}
                </span>
              </div>
            ))}
          </div>
          <div className="h-1 bg-brand-card rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-accent to-accent-bright transition-all duration-300"
              style={{ width: `${(step - 1) * 50 + 50}%` }}
            />
          </div>
        </div>

        {/* Step 1: Birthday */}
        {step === 1 && (
          <div className="rounded-xl border border-border-subtle bg-brand-card p-8 shadow-glow">
            <h2 className="mb-6 text-2xl font-bold text-text-primary">
              When Were You Born?
            </h2>

            <div className="space-y-6">
              {/* Date Input */}
              <div>
                <label className="mb-3 block text-sm font-medium text-text-primary">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="w-full rounded-lg border border-border-subtle bg-brand-input px-4 py-3 font-mono text-text-primary placeholder-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-20 transition-all"
                />
              </div>

              {/* Time Input */}
              <div>
                <label className="mb-3 block text-sm font-medium text-text-primary">
                  Time of Birth <span className="text-text-muted">(optional)</span>
                </label>
                <input
                  type="time"
                  value={timeOfBirth}
                  onChange={(e) => setTimeOfBirth(e.target.value)}
                  className="w-full rounded-lg border border-border-subtle bg-brand-input px-4 py-3 font-mono text-text-primary placeholder-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-20 transition-all"
                />
              </div>

              {/* Continue Button */}
              <button
                onClick={() => { haptic(); setStep(2); }}
                disabled={!dateOfBirth}
                className={`press-active mt-8 w-full rounded-lg py-3 font-semibold transition-all flex items-center justify-center gap-2 ${
                  dateOfBirth
                    ? 'bg-gradient-to-r from-accent to-accent-bright text-brand-bg hover:shadow-glow-strong'
                    : 'bg-brand-elevated text-text-muted cursor-not-allowed'
                }`}
              >
                Continue <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Region */}
        {step === 2 && (
          <div className="rounded-xl border border-border-subtle bg-brand-card p-8 shadow-glow">
            <h2 className="mb-6 text-2xl font-bold text-text-primary">
              Where Are You From?
            </h2>

            <div className="space-y-6">
              {/* Country Select */}
              <div>
                <label className="mb-3 block text-sm font-medium text-text-primary">
                  Country
                </label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full rounded-lg border border-border-subtle bg-brand-input px-4 py-3 text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-20 transition-all appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2300d4aa' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center',
                    paddingRight: '36px',
                  }}
                >
                  {COUNTRIES.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name} ({country.lifeExpectancy} years)
                    </option>
                  ))}
                </select>
              </div>

              {/* Gender Radio Buttons */}
              <div>
                <label className="mb-3 block text-sm font-medium text-text-primary">
                  Gender
                </label>
                <div className="flex gap-4 flex-wrap">
                  {['male', 'female', 'average'].map((g) => (
                    <label
                      key={g}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="gender"
                        value={g}
                        checked={gender === g}
                        onChange={(e) =>
                          setGender(e.target.value as 'male' | 'female' | 'average')
                        }
                        className="h-4 w-4 cursor-pointer accent-accent"
                      />
                      <span className="text-text-primary capitalize">{g}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Button Group */}
              <div className="mt-8 flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 rounded-lg border border-border-subtle bg-brand-elevated py-3 font-semibold text-text-primary hover:bg-brand-card transition-all flex items-center justify-center gap-2"
                >
                  <ChevronLeft size={20} /> Back
                </button>
                <button
                  onClick={() => { haptic(); handleCalculate(); }}
                  className="press-active flex-1 rounded-lg bg-gradient-to-r from-accent to-accent-bright py-3 font-semibold text-brand-bg hover:shadow-glow-strong transition-all flex items-center justify-center gap-2"
                >
                  Calculate My Life <Zap size={20} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Results Dashboard */}
        {step === 3 && results && (
          <div className="space-y-8">
            {/* Live Seconds Counter */}
            <div className="rounded-xl border border-border-accent-dim bg-gradient-to-br from-brand-elevated to-brand-card p-8 shadow-glow-strong">
              <div className="text-center">
                <p className="text-text-secondary mb-2">Seconds Since Birth</p>
                <p className="font-mono text-5xl font-bold text-gradient">
                  {formatNumber(liveSeconds)}
                </p>
                <p className="mt-2 text-text-muted text-sm">
                  Updating in real-time
                </p>
              </div>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Seconds Used */}
              <div className="rounded-lg border border-border-subtle backdrop-blur-md bg-brand-card/80 p-6">
                <p className="text-text-secondary mb-2 text-sm font-medium">
                  Seconds Used
                </p>
                <p className="font-mono text-3xl font-bold text-accent">
                  {formatNumber(Math.floor(animatedValues.usedSeconds.current))}
                </p>
              </div>

              {/* Seconds Remaining */}
              <div className="rounded-lg border border-border-subtle backdrop-blur-md bg-brand-card/80 p-6">
                <p className="text-text-secondary mb-2 text-sm font-medium">
                  Seconds Remaining
                </p>
                <p className="font-mono text-3xl font-bold text-accent-bright">
                  {formatNumber(Math.floor(animatedValues.remainingSeconds.current))}
                </p>
              </div>

              {/* Time Scarcity Score */}
              <div className="rounded-lg border border-border-subtle backdrop-blur-md bg-brand-card/80 p-6">
                <p className="text-text-secondary mb-2 text-sm font-medium">
                  Time Scarcity Score
                </p>
                <p className="font-mono text-3xl font-bold text-accent-blue">
                  {Math.floor(animatedValues.scarcityScore.current)}%
                </p>
              </div>

              {/* Hourly Worth */}
              <div className="rounded-lg border border-border-subtle backdrop-blur-md bg-brand-card/80 p-6">
                <p className="text-text-secondary mb-2 text-sm font-medium">
                  Hourly Worth
                </p>
                <p className="font-mono text-3xl font-bold text-text-primary">
                  ${HOURLY_WORTH.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Life Progress Bar */}
            <div className="rounded-lg border border-border-subtle bg-brand-card p-6">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-text-secondary font-medium">Life Progress</p>
                <p className="font-mono text-sm text-accent">
                  {Math.floor(animatedValues.scarcityScore.current)}% lived
                </p>
              </div>
              <div className="h-3 rounded-full bg-brand-bg overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent via-accent-bright to-accent-blue transition-all duration-300"
                  style={{
                    width: `${Math.floor(animatedValues.scarcityScore.current)}%`,
                  }}
                />
              </div>
            </div>

            {/* Time Breakdown Grid */}
            <div className="rounded-lg border border-border-subtle bg-brand-card p-6">
              <p className="text-text-secondary font-medium mb-4">
                Time Remaining
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Years', value: results.yearsRemaining },
                  { label: 'Months', value: results.monthsRemaining },
                  { label: 'Weeks', value: results.weeksRemaining },
                  { label: 'Days', value: results.daysRemaining },
                  { label: 'Hours', value: results.hoursRemaining },
                  { label: 'Minutes', value: results.minutesRemaining },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="font-mono text-2xl font-bold text-accent">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Life Comparisons (viral hook) */}
            <LifeComparisons
              remainingSeconds={results.remainingSeconds}
              yearsRemaining={results.yearsRemaining}
            />

            {/* Life in Weeks grid (viral visualization) */}
            <LifeInWeeksGrid
              birthDate={results.birthTime}
              lifeExpectancyYears={results.lifeExpectancy}
            />

            {/* Share Section */}
            <div className="rounded-xl border border-accent-dim bg-gradient-to-br from-accent/5 to-brand-card p-6">
              <p className="text-text-primary font-semibold mb-1">Share Your Results</p>
              <p className="text-text-muted text-xs mb-5">
                Pick a message, then post it anywhere.
              </p>

              {/* Variant picker */}
              <div className="flex gap-2 mb-3 flex-wrap" role="tablist" aria-label="Share message style">
                {SHARE_VARIANTS.map((v, i) => (
                  <button
                    key={v.label}
                    role="tab"
                    aria-selected={shareVariant === i}
                    onClick={() => setShareVariant(i as ShareVariant)}
                    className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-all ${
                      shareVariant === i
                        ? 'bg-accent text-brand-bg border-accent'
                        : 'bg-transparent text-text-secondary border-subtle hover:border-accent-dim'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>

              {/* Preview */}
              <div className="bg-brand-bg border border-subtle rounded-lg p-4 mb-5">
                <p className="text-text-primary text-sm leading-relaxed">
                  &ldquo;{generateShareText()}&rdquo;
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 flex-wrap">
                {canNativeShare && (
                  <button
                    onClick={handleNativeShare}
                    className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-blue text-brand-bg px-4 py-2 font-semibold hover:shadow-glow transition-all"
                  >
                    <ShareIcon size={18} /> Share
                  </button>
                )}
                <button
                  onClick={handleDownload}
                  disabled={downloading}
                  className="flex items-center gap-2 rounded-lg bg-brand-elevated px-4 py-2 text-text-primary hover:border-accent border border-subtle transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Download size={18} />
                  {downloading ? 'Preparing…' : 'Save image'}
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="flex items-center gap-2 rounded-lg bg-brand-elevated px-4 py-2 text-text-primary hover:border-accent border border-subtle transition-all"
                >
                  <Linkedin size={18} /> LinkedIn
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="flex items-center gap-2 rounded-lg bg-brand-elevated px-4 py-2 text-text-primary hover:border-accent border border-subtle transition-all"
                >
                  <Twitter size={18} /> X
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="flex items-center gap-2 rounded-lg bg-brand-elevated px-4 py-2 text-text-primary hover:border-accent border border-subtle transition-all"
                >
                  {copied ? (
                    <>
                      <Check size={18} className="text-accent" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={18} /> Copy link
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Upsell Card — membership CTA */}
            <div className="rounded-xl border border-border-accent-dim bg-gradient-to-br from-brand-elevated to-brand-card p-6 shadow-glow">
              <div className="flex gap-6">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    You&apos;ve seen your seconds. Now what?
                  </h3>
                  <p className="text-text-secondary mb-4 text-sm">
                    Counting is the first step. The Circle is where people decide what to do with what they see — together.
                  </p>
                  <ul className="space-y-2 mb-4">
                    {[
                      'Unlimited access to all ten tools',
                      'Perspective Partners — matched with someone living differently',
                      'Monthly Fireside sessions — eight people, one real question',
                    ].map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-text-secondary text-sm"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/membership"
                    className="inline-block rounded-lg bg-gradient-to-r from-accent to-accent-bright px-6 py-2 font-semibold text-brand-bg hover:shadow-glow transition-all"
                  >
                    Become a Member — from $5/mo
                  </a>
                </div>
                <div className="hidden sm:flex items-center justify-center">
                  <Zap className="h-12 w-12 text-accent opacity-20" />
                </div>
              </div>
            </div>

            {/* Restart Button */}
            <button
              onClick={handleRestart}
              className="w-full rounded-lg border border-border-subtle bg-brand-elevated py-3 font-semibold text-text-primary hover:bg-brand-card transition-all"
            >
              Start Over
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

