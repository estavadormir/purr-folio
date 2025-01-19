import { SectionTitle, SocialLink } from '@/components/ui';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';

export const ContactSection = () => (
  <section
    id="contacts"
    data-testid="Contact"
    className="z-12 relative flex h-screen w-full flex-col justify-center bg-slate-900 px-10 xl:min-h-screen"
  >
    <SectionTitle
      title="Contact"
      subtitle="Need some help solving a bug?"
      variant="contact"
    />
    <p className="text-left text-gray-400 text-lg max-w-4xl mt-2">
      Pick up a pen, write down your thoughts and reach me out through one of
      the options below, I'm sure we can work something out.
    </p>
    <div
      className={twMerge(
        'flex items-baseline space-y-4',
        'border-tiktokPink border-b-2 py-3'
      )}
    >
      <SocialLink
        href="mailto:andrelikescomputers@gmail.com"
        icon={MdEmail}
        className="text-white"
      >
        E-mail
      </SocialLink>
      <SocialLink
        href="https://www.linkedin.com/in/andrelikescomputers/"
        icon={FaLinkedin}
        className="text-white"
      />
      <SocialLink
        href="https://github.com/estavadormir/"
        icon={FaGithub}
        className="text-white"
      />
    </div>
  </section>
);
