import { LegalPageLayout } from '@/components/ui';

const privacySections = [
  {
    title: 'Information We Collect',
    content: (
      <p>
        This website uses Plausible Analytics to collect anonymous usage data.
        No personal information, cookies, or tracking data is stored or collected
        that can identify individual visitors.
      </p>
    ),
  },
  {
    title: 'Analytics',
    content: (
      <>
        <p>We use Plausible Analytics, a privacy-focused analytics service that:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Does not use cookies</li>
          <li>Does not collect personal data</li>
          <li>Does not track users across websites</li>
          <li>Collects only aggregated, anonymous data</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Contact',
    content: (
      <p>
        When you contact me via email, your email address and any information
        you provide will be used solely to respond to your inquiry and will not
        be shared with third parties.
      </p>
    ),
  },
  {
    title: 'Third-Party Services',
    content: (
      <p>
        This website may contain links to external sites. I am not responsible
        for the privacy practices of other websites.
      </p>
    ),
  },
  {
    title: 'Changes',
    content: (
      <p>
        This privacy policy may be updated from time to time. Any changes will
        be reflected on this page with an updated date.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return <LegalPageLayout title="Privacy Policy" sections={privacySections} />;
}