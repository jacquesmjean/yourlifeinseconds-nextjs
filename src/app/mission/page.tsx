import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Mission — Life Clarity for Millions',
  description:
    'We bring life clarity to millions by transforming complex emotional, financial, and life decisions into simple, human-centered tools that restore dignity, stability, and hope.',
};

const coreValues = [
  {
    icon: '💎',
    title: 'Simplicity',
    description: 'Solve with clarity, not complexity',
  },
  {
    icon: '🤝',
    title: 'Dignity',
    description: 'Every life deserves respect and peace',
  },
  {
    icon: '📊',
    title: 'Truth',
    description: 'Real numbers, real insights, real guidance',
  },
  {
    icon: '❤️',
    title: 'Humanity',
    description: 'Lead with compassion, not judgment',
  },
  {
    icon: '🚀',
    title: 'Empowerment',
    description: 'Give people tools to rebuild, grow, and thrive',
  },
  {
    icon: '🎯',
    title: 'Purpose',
    description: 'Help every person align their life with what matters most',
  },
];

export default function MissionPage() {
  return (
    <main className="bg-brand-bg min-h-screen">
      {/* Page Header */}
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-text-secondary uppercase mb-4">
              OUR MISSION
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-gradient">Life Clarity</span>
              <br />
              for Millions
            </h1>
          </div>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <blockquote className="bg-brand-card border border-subtle rounded-2xl p-12 text-center">
            <p className="text-2xl sm:text-3xl font-semibold text-text-primary leading-relaxed">
              To bring life clarity to millions by transforming complex emotional, financial, and life decisions into{' '}
              <span className="text-gradient">simple, human-centered tools</span> that restore dignity, stability, and
              hope.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-2">Our Core Values</h2>
            <div className="h-1 w-24 bg-text-gradient rounded-full"></div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="bg-brand-card border border-subtle rounded-xl p-6 hover:border-accent-dim hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{value.title}</h3>
                <p className="text-text-secondary leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-brand-bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-8">
            Stop Drifting.
            <br />
            Start Designing.
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#life-clock"
              className="inline-flex items-center justify-center px-8 py-4 bg-text-gradient text-white font-semibold rounded-lg hover:shadow-glow transition-all duration-300"
            >
              Analyze My Time
            </Link>
            <Link
              href="/membership"
              className="inline-flex items-center justify-center px-8 py-4 border border-accent-dim text-accent font-semibold rounded-lg hover:bg-brand-card transition-all duration-300"
            >
              Become a Member →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
