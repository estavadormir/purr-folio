import "@hairy-studios/ui/styles.css";
import { Analytics } from "@vercel/analytics/react";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { openGraphImage } from "./shared-metadata";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "400",
});
export const metadata = {
  title: "André - developer",
  description: "Developer with 7 years of experience based in Luxembourg",
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
  },
  openGraph: {
    ...openGraphImage,
    title: "André - developer",
    description: "Developer with 7 years of experience based in Luxembourg",
    siteName: "Professional Portfolio",
    locale: "en_US",
    themeColor: "white",
    url: "https://andrelikescomputers.dev/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experienced Developer in Luxembourg",
    description:
      "Explore the portfolio of a seasoned developer with 7 years of experience in Luxembourg. Find out more about my expertise, projects, and professional journey.",
    images: [
      {
        url: "/snow.jpg",
        width: 800,
        height: 600,
        alt: "Profile picture of the developer.",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Analytics />
      <body className={spaceMono.className}>{children}</body>
    </html>
  );
}
