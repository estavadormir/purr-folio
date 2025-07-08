import { SectionTitle, SocialLink } from '@/components/ui';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const ContactSection = () => (
  <section
    id="contacts"
    data-testid="Contact"
    className="z-12 relative flex h-screen w-full flex-col justify-center bg-slate-900"
  >
    <div className="w-full px-4 sm:px-5 max-w-4xl mx-auto">
      <SectionTitle
        title="Contact"
        subtitle="Need some help solving a bug?"
        variant="contact"
      />
      <p className="text-gray-400 text-base sm:text-lg mt-4 mb-6">
        {
          "Pick up a pen, write down your thoughts and reach me out through one of the options below, I'm sure we can work something out."
        }
      </p>
      <div className="flex flex-row items-start sm:items-center gap-4 sm:gap-6 border-t border-tiktokPink pt-4">
        <SocialLink
          href="mailto:andrelikescomputers@gmail.com"
          icon={MdEmail}
          className="text-white text-base sm:text-lg"
        />
        <SocialLink
          href="https://github.com/estavadormir/"
          icon={FaGithub}
          className="text-white text-base sm:text-lg"
        />
      </div>
    </div>
  </section>
);
