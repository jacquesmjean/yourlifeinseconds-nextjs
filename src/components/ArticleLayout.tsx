import Link from "next/link";

interface ArticleLayoutProps {
  category: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  relatedArticles: { title: string; desc: string; slug: string }[];
}

export default function ArticleLayout({
  category,
  title,
  subtitle,
  children,
  relatedArticles,
}: ArticleLayoutProps) {
  return (
    <div className="bg-brand-bg min-h-screen pt-[120px] pb-16">
      <div className="max-w-[800px] mx-auto px-6">
        {/* Back to Insights Link */}
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-accent hover:text-accent-bright transition-colors mb-8 text-sm font-medium"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Insights
        </Link>

        {/* Category Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-dim bg-accent/5 mb-6">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="text-accent text-sm font-semibold">{category}</span>
        </div>

        {/* Article Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-text-secondary mb-12 leading-relaxed">
          {subtitle}
        </p>

        {/* Article Body Content */}
        <div className="prose-like space-y-6 text-text-primary mb-16">
          {children}
        </div>

        {/* Related Articles Section */}
        <div className="mt-20 pt-16 border-t border-subtle">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            Related Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="group p-6 bg-brand-card border border-subtle rounded-lg hover:border-accent-dim hover:bg-brand-card-hover transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {article.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                  Read More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Turn Insight Into Action CTA Section */}
        <div className="mt-20 pt-16 border-t border-subtle">
          <div className="bg-gradient-to-br from-brand-card to-brand-elevated border border-subtle rounded-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Turn Insight Into Action
            </h2>
            <p className="text-text-secondary mb-8 text-lg leading-relaxed">
              Ready to see how much time you have? Calculate your life span and start making every second count.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary CTA Button */}
              <Link
                href="/#life-clock"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-accent-blue text-brand-bg rounded-lg font-semibold hover:shadow-glow-btn-hover transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Calculate My Time
              </Link>

              {/* Secondary Outline Button */}
              <Link
                href="/insights"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Explore More Insights
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
