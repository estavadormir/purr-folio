import { LegalPageLayout } from '@/components/ui';

const termsSections = [
  {
    title: 'Acceptance of Terms',
    content: (
      <p>
        By accessing and using this website, you accept and agree to be bound by
        these Terms of Use. If you do not agree to these terms, please do not
        use this website.
      </p>
    ),
  },
  {
    title: 'Use License',
    content: (
      <>
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
      </>
    ),
  },
  {
    title: 'Content',
    content: (
      <p>
        The materials on this website are provided on an 'as is' basis. I make
        no warranties, expressed or implied, and hereby disclaim all other warranties
        including, without limitation, implied warranties or conditions of merchantability,
        fitness for a particular purpose, or non-infringement of intellectual property.
      </p>
    ),
  },
  {
    title: 'Limitations',
    content: (
      <p>
        In no event shall André or its suppliers be liable for any damages
        (including, without limitation, damages for loss of data or profit, or
        due to business interruption) arising out of the use or inability to use
        the materials on this website.
      </p>
    ),
  },
  {
    title: 'Accuracy of Materials',
    content: (
      <p>
        The materials appearing on this website could include technical, typographical,
        or photographic errors. I do not warrant that any of the materials on its
        website are accurate, complete, or current.
      </p>
    ),
  },
  {
    title: 'Links',
    content: (
      <p>
        I have not reviewed all of the sites linked to this website and am not
        responsible for the contents of any such linked site. The inclusion of
        any link does not imply endorsement of the site by me.
      </p>
    ),
  },
  {
    title: 'Modifications',
    content: (
      <p>
        I may revise these terms of service for its website at any time without
        notice. By using this website, you are agreeing to be bound by the then
        current version of these terms of service.
      </p>
    ),
  },
  {
    title: 'Governing Law',
    content: (
      <p>
        These terms and conditions are governed by and construed in accordance
        with the laws of Luxembourg and you irrevocably submit to the exclusive
        jurisdiction of the courts in that state or location.
      </p>
    ),
  },
];

export default function TermsPage() {
  return <LegalPageLayout title="Terms of Use" sections={termsSections} />;
}