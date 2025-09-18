import { SectionTitle } from '@/components/ui';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const ContactSection = () => (
  <section
    id="contacts"
    data-testid="Contact"
    className="relative flex h-screen w-full flex-col justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"
  >
    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-8 sm:py-12 text-center">
      <div className="mb-8 sm:mb-12">
        <SectionTitle
          title="Contact"
          subtitle="Need some help solving a bug?"
          variant="contact"
        />
      </div>

      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed">
          {
            "Pick up a pen, write down your thoughts and reach me out through one of the options below, I'm sure we can work something out."
          }
        </p>
      </div>

      <div className="flex flex-row items-center justify-center gap-8">
        <a
          href="mailto:andrelikescomputers@gmail.com"
          className="group flex items-center justify-center w-16 h-16 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-tiktokAqua transition-all duration-300 hover:scale-110"
        >
          <MdEmail className="text-white text-2xl" />
        </a>

        <a
          href="https://github.com/estavadormir/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-16 h-16 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-tiktokPink transition-all duration-300 hover:scale-110"
        >
          <FaGithub className="text-white text-2xl" />
        </a>
      </div>

      <div className="mt-12 pt-8 border-t border-gradient-to-r from-transparent via-white/20 to-transparent">
        <p className="text-gray-500 text-sm">
          Based in Luxembourg 🇱🇺 • Available for remote work worldwide
        </p>
      </div>
    </div>
  </section>
);
