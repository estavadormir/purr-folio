import { Mail, Github } from 'lucide-react';

export const ContactSection = () => (
  <section
    id="contacts"
    data-testid="Contact"
    className="relative flex h-screen w-full flex-col justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"
  >
    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-8 sm:py-12">
      <div className="space-y-8 sm:space-y-12 text-center">
        <div className="space-y-4">
          <div className="space-y-2 flex flex-col items-center">
            <h2 className="title-section">
              Let's work together
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary"></div>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="subtitle">
              I'm always interested in hearing about new opportunities, especially ambitious or large scale projects.
              But even if you just want to say hi, I'll do my best to get back to you!
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8">
          <a
            href="mailto:andrelikescomputers@gmail.com"
            className="group flex items-center justify-center w-16 h-16 text-gray-400 hover:text-accent-secondary transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-8 h-8" />
          </a>

          <a
            href="https://github.com/estavadormir/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-16 h-16 text-gray-400 hover:text-accent-primary transition-all duration-300 hover:scale-110"
          >
            <Github className="w-8 h-8" />
          </a>
        </div>

        <div className="pt-6 mt-6 border-t border-gray-800">
          <div className="text-center space-y-2">
            <p className="body-small text-gray-500">
              © {new Date().getFullYear()} André. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-4 body-small">
              <a
                href="/privacy"
                className="text-gray-600 hover:text-accent-secondary transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-gray-700">•</span>
              <a
                href="/terms"
                className="text-gray-600 hover:text-accent-primary transition-colors"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
