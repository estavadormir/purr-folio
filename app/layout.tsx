import { ErrorBoundary } from '@/components';
import { Space_Mono } from 'next/font/google';
import './globals.css';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: '400',
});
export const metadata = {
  title: 'André - frontend developer',
  description:
    'Frontend developer with 7 years of experience based in Luxembourg',
  openGraph: {
    title: 'André - frontend developer',
    description:
      'Frontend developer with 7 years of experience based in Luxembourg',
    siteName: 'Professional Portfolio',
    locale: 'en_US',
    url: 'https://andrelikescomputers.dev/',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/48385244?s=400&u=31940a136947684b2d4efaf691039281ee0f3787&v=4',
        width: 460,
        height: 460,
        alt: 'Profile picture of the developer.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experienced frontend Developer in Luxembourg',
    description:
      'Explore the portfolio of a seasoned developer with 7 years of experience in Luxembourg. Find out more about my expertise, projects, and professional journey.',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/48385244?s=400&u=31940a136947684b2d4efaf691039281ee0f3787&v=4',
        width: 460,
        height: 460,
        alt: 'Profile picture of the developer.',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <ErrorBoundary>
        <body className={spaceMono.className}>{children}</body>
      </ErrorBoundary>
    </html>
  );
}
