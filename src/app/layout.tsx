import type { Metadata } from 'next';
import { Joan, Nunito } from 'next/font/google';
import './globals.css';
import { ViewTransitions } from 'next-view-transitions';
import Lenis from '@/components/Lenis';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/splash-screen';

const joan = Joan({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-joan',
  weight: ['400'],
  style: ['normal'],
});

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
  weight: ['400', '700'],
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
          className={`${nunito.variable} ${joan.variable} antialiased bg-background`}
        >
          <Lenis>
            <SplashScreen />
            <Header />
            {children}
            <Footer />
          </Lenis>
        </body>
      </html>
    </ViewTransitions>
  );
}
