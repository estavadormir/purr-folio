import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
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
                Terms of Use
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
              <h2 className="text-xl font-medium text-white font-sans">Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by
                these Terms of Use. If you do not agree to these terms, please do not
                use this website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-white font-sans">Use License</h2>
              <p>
                Permission is granted to temporarily view the materials on this website
                for personal, non-commercial transitory viewing only. This is the grant
                of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-white font-sans">Content</h2>
              <p>
                The materials on this website are provided on an 'as is' basis. I make
                no warranties, expressed or implied, and hereby disclaim all other warranties
                including, without limitation, implied warranties or conditions of merchantability,
                fitness for a particular purpose, or non-infringement of intellectual property.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-white font-sans">Limitations</h2>
              <p>
                In no event shall André or its suppliers be liable for any damages
                (including, without limitation, damages for loss of data or profit, or
                due to business interruption) arising out of the use or inability to use
                the materials on this website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-white font-sans">Accuracy of Materials</h2>
              <p>
                The materials appearing on this website could include technical, typographical,
                or photographic errors. I do not warrant that any of the materials on its
                website are accurate, complete, or current.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-white font-sans">Links</h2>
              <p>
                I have not reviewed all of the sites linked to this website and am not
                responsible for the contents of any such linked site. The inclusion of
                any link does not imply endorsement of the site by me.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-white font-sans">Modifications</h2>
              <p>
                I may revise these terms of service for its website at any time without
                notice. By using this website, you are agreeing to be bound by the then
                current version of these terms of service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-white font-sans">Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance
                with the laws of Luxembourg and you irrevocably submit to the exclusive
                jurisdiction of the courts in that state or location.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}