'use client';

import Image from 'next/image';
import Button from './UI/Button';
import ctaImage1 from '@/../public/contact-1.jpeg';
import ctaImage2 from '@/../public/contact-2.jpeg';
import { useInView } from 'react-intersection-observer';

const CtaSection = ({ className }: { className?: string }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section
      ref={ref}
      className={`my-28 px-10 py-60 sm:py-64 lg:py-56 relative flex flex-col items-center justify-center max-w-8xl mx-auto ${className}`}
    >
      <div
        className={`absolute -top-4 sm:-top-16 lg:top-8 left-4 sm:left-8 lg:left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 2xl:w-[400px] 2xl:h-[400px] max-h-[400px] transition-all duration-[1500ms] ease-in-out ${
          inView
            ? 'translate-x-0 opacity-100 visible blur-0'
            : '-translate-x-80 opacity-0 invisible blur-[2px]'
        }`}
      >
        <Image
          src={ctaImage1}
          alt='cta'
          fill
          sizes='(max-width: 1024px) 256px, 400px'
          className='object-cover'
        />
      </div>
      <div
        className={`absolute -bottom-4 sm:-bottom-16 lg:bottom-8 right-4 sm:right-8 lg:right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 2xl:w-[400px] 2xl:h-[400px] max-h-[400px] transition-all duration-[1500ms] ease-in-out ${
          inView
            ? 'translate-y-0 opacity-100 visible blur-0'
            : '-translate-y-80 opacity-0 invisible blur-[2px]'
        }`}
      >
        <Image
          src={ctaImage2}
          alt='cta'
          fill
          sizes='(max-width: 1024px) 256px, 400px'
          className='object-cover'
        />
      </div>
      <h2
        className={`text-5xl underlined tworows text-center transition-all duration-[1500ms] ease-in-out ${
          inView
            ? 'translate-y-0 opacity-100 visible blur-0'
            : 'translate-y-80 opacity-0 invisible blur-[2px]'
        }`}
      >
        Zakoračite u svet savršenog osmeha
        {/* - zakažite online
        <br />
        pregled i krenite ka svom Hollywood Smile-u već danas! */}
      </h2>
      <p
        ref={ref}
        className={`text-center mt-6 sm:mt-6 lg:mt-10 text-2xl transition-all duration-[1500ms] ease-in-out ${
          inView
            ? 'translate-y-0 opacity-100 visible blur-0'
            : 'translate-y-80 opacity-0 invisible blur-[2px]'
        }`}
      >
        Ukoliko imate bilo kakva pitanja slobodno nas kontaktirajte!
      </p>
      <Button
        href='/kontakt'
        className={`mx-auto mt-8 sm:mt-10 lg:mt-12 !transition-all !duration-[1500ms] ease-in-out ${
          inView
            ? 'translate-y-0 opacity-100 visible blur-0'
            : 'translate-y-80 opacity-0 invisible blur-[2px]'
        }`}
      >
        Kontaktirajte nas
      </Button>
    </section>
  );
};

export default CtaSection;
