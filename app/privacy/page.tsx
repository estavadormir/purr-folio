import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main className={twMerge('min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900')}>
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-8 sm:py-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-tiktokAqua hover:text-tiktokPink transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="body-small font-medium">Back to portfolio</span>
            </Link>

            <div className="space-y-2">
              <h1 className="title-section">
                Privacy Policy
              </h1>
              <div className="w-16 h-0.5 bg-gradient-to-r from-tiktokPink to-tiktokAqua"></div>
            </div>

            <p className="body-small">
              Last updated: {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-6 body-text">
            <section className="space-y-4">
              <h2 className="text-xl font-medium text-white font-sans">Information We Collect</h2>
              <p>
                This website uses Plausible Analytics to collect anonymous usage data.
                No personal information, cookies, or tracking data is stored or collected
                that can identify individual visitors.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-white font-sans">Analytics</h2>
              <p>
                We use Plausible Analytics, a privacy-focused analytics service that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Does not use cookies</li>
                <li>Does not collect personal data</li>
                <li>Does not track users across websites</li>
                <li>Collects only aggregated, anonymous data</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-white font-sans">Contact</h2>
              <p>
                When you contact me via email, your email address and any information
                you provide will be used solely to respond to your inquiry and will not
                be shared with third parties.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-white font-sans">Third-Party Services</h2>
              <p>
                This website may contain links to external sites. I am not responsible
                for the privacy practices of other websites.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-white font-sans">Changes</h2>
              <p>
                This privacy policy may be updated from time to time. Any changes will
                be reflected on this page with an updated date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}