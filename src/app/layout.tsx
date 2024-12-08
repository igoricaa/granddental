import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Joan } from 'next/font/google';
import './globals.css';
import { ViewTransitions } from 'next-view-transitions';
import Lenis from '@/components/Lenis';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const joan = Joan({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-joan',
  weight: ['400'],
  style: ['normal'],
});

const brandonRegular = localFont({
  src: './fonts/BrandonText-Regular.woff2',
  variable: '--font-brandon-regular',
  weight: '400',
});
const brandonBold = localFont({
  src: './fonts/BrandonText-Bold.woff2',
  variable: '--font-brandon-bold',
  weight: '700',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://granddental.rs'),
  title: {
    default: 'Grand Dental Clinic',
    template: '%s | Grand Dental Clinic',
  },
  description: 'Stomatološka ordinacija u Beogradu',
  openGraph: {
    title: 'Grand Dental Clinic',
    description: 'Stomatološka ordinacija u Beogradu',
    url: 'https://granddental.rs',
    siteName: 'Grand Dental Clinic',
    locale: 'en_RS',
    type: 'website',
  },
  twitter: {
    title: 'Grand Dental Clinic',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang='sr'>
        <body
          className={`${brandonRegular.variable} ${brandonBold.variable} ${joan.variable} antialiased bg-background`}
        >
          <Lenis>
            <Header />
            {children}
            <Footer />
          </Lenis>
        </body>
      </html>
    </ViewTransitions>
  );
}
