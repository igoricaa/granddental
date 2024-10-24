import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Joan } from 'next/font/google';
import './globals.css';

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
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${brandonRegular.variable} ${brandonBold.variable} ${joan.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
