import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-bg-secondary border-t border-subtle pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand + Social */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 no-underline">
              <span className="flex items-center justify-center w-9 h-9 bg-gradient-accent rounded-lg text-brand-bg text-sm font-bold">
                LS
              </span>
              <span className="text-lg font-bold text-text-primary tracking-tight">
                Your Life <span className="text-accent">In Seconds</span>
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-2">
              A perspective platform for time and life. Count your seconds. See where they go. Meet others counting theirs differently.
            </p>
            <p className="text-text-secondary text-sm font-semibold mb-5">
              Built in Texas and Haiti.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/yourlifeinseconds"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-brand-card border border-subtle hover:border-accent-dim hover:text-accent text-text-muted transition-all"
                aria-label="Follow on X"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/yourlifeinseconds"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-brand-card border border-subtle hover:border-accent-dim hover:text-accent text-text-muted transition-all"
                aria-label="Follow on Instagram"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/yourlifeinseconds"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-brand-card border border-subtle hover:border-accent-dim hover:text-accent text-text-muted transition-all"
                aria-label="Follow on LinkedIn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-text-primary mb-5 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 list-none">
              <li><Link href="/" className="text-sm text-text-secondary hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/tools" className="text-sm text-text-secondary hover:text-accent transition-colors">Tools</Link></li>
              <li><Link href="/membership" className="text-sm text-text-secondary hover:text-accent transition-colors">Circle</Link></li>
              <li><Link href="/insights" className="text-sm text-text-secondary hover:text-accent transition-colors">Library</Link></li>
              <li><Link href="/tools/legacy-letter" className="text-sm text-text-secondary hover:text-accent transition-colors">Letter</Link></li>
              <li><Link href="/about" className="text-sm text-text-secondary hover:text-accent transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-text-primary mb-5 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 list-none">
              <li><Link href="/mission" className="text-sm text-text-secondary hover:text-accent transition-colors">Mission</Link></li>
              <li><Link href="/about" className="text-sm text-text-secondary hover:text-accent transition-colors">Founder</Link></li>
              <li><Link href="/contact" className="text-sm text-text-secondary hover:text-accent transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-sm text-text-secondary hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-text-secondary hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Membership */}
          <div>
            <h4 className="text-sm font-bold text-text-primary mb-5 uppercase tracking-wider">Membership</h4>
            <p className="text-text-secondary text-sm mb-4 leading-relaxed">
              First 100 members get Curious at <strong className="text-text-primary">$3/mo for life</strong>. Limited seats.
            </p>
            <Link
              href="/membership"
              className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-semibold text-sm rounded-lg hover:shadow-glow transition-all"
            >
              Become a Member &rarr;
            </Link>

            <div className="mt-6 pt-4 border-t border-subtle">
              <p className="text-text-muted text-xs mb-1">General Inquiries</p>
              <a href="mailto:hello@yourlifeinseconds.com" className="text-text-primary text-sm font-semibold hover:text-accent transition-colors">
                hello@yourlifeinseconds.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center pt-8 border-t border-subtle">
          <p className="text-[13px] text-text-muted">
            &copy; 2026 Your Life In Seconds. A perspective platform for time and life.
          </p>
        </div>
      </div>
    </footer>
  );
}

