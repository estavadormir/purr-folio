import { Inter, Space_Mono, JetBrains_Mono } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600'],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: '400',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-code',
  weight: ['300', '400', '500'],
});
export const metadata: Metadata = {
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

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script defer data-domain="andrelikescomputers.dev" src="https://coffee.hairybulbs.com/js/script.js"></script>
      </head>
      <body className={`${inter.variable} ${spaceMono.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
