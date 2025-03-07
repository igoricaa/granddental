'use client';

import ContactForm from '@/components/ContactForm';
import GoogleMap from '@/components/GoogleMap';
import { Link } from 'next-view-transitions';
import { useState } from 'react';

const Kontakt = () => {
  const [showCopyBanner, setShowCopyBanner] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@granddental.rs');
    setShowCopyBanner(true);
    setTimeout(() => setShowCopyBanner(false), 2000);
  };

  return (
    <main className='pt-32 sm:pt-48 lg:pt-64 pb-36 sm:pb-56 px-4 sm:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16'>
      <div className='bg-containerBg-default p-4 sm:p-8 lg:p-16 text-light h-fit order-2 lg:order-1'>
        <h2 className='text-4xl underlined'>
          Dostupni smo za sva Vaša pitanja 24/7
        </h2>
        <p className='mt-4'>
          Ukoliko imate bilo kakvih pitanja ili nedoumica, slobodno nas
          kontaktirajte putem telefona, email-a ili društvenih mreža.
        </p>
        <div className='relative w-fit'>
          <p
            className='mt-4 cursor-pointer hover:opacity-80 w-fit'
            onClick={handleCopyEmail}
          >
            info@granddental.rs
          </p>
          {showCopyBanner && (
            <div className='absolute -right-20 -top-[2px] bg-accent-default px-2 py-1 text-sm rounded'>
              Copied!
            </div>
          )}
        </div>

        <div className='mt-4 flex flex-col gap-4 order-1 lg:order-2'>
          <a href='tel:00381616589540' className='w-fit'>
            +381 61 6589540
          </a>
          <Link
            href='https://maps.app.goo.gl/oaGSsDv5sXSLcgjx5'
            target='_blank'
            className='w-fit'
          >
            Loznička 13, Beograd
          </Link>
          <Link
            href='https://www.instagram.com/grand_dentaltourism/'
            target='_blank'
            className='font-bold bg-accent-default text-white w-fit px-2 py-1'
          >
            Instagram
          </Link>
        </div>
        <GoogleMap className='aspect-[1435/647] rounded-[30px] mt-10' />
      </div>
      <ContactForm />
    </main>
  );
};

export default Kontakt;
