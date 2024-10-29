'use client';

import Image from 'next/image';
import Button from './UI/Button';
import ctaImage1 from '@/../public/contact-1.jpeg';
import ctaImage2 from '@/../public/contact-2.jpeg';
import { useInView } from 'react-intersection-observer';

const CtaSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section
      ref={ref}
      className='my-32 px-10 py-56 relative flex flex-col items-center justify-center max-w-8xl mx-auto'
    >
      <Image
        src={ctaImage1}
        alt='cta'
        width={400}
        height={400}
        className={`absolute top-8 left-0 object-cover max-h-[400px] transition-all duration-1000 ease-in-out ${
          inView
            ? 'translate-x-0 opacity-100 visible'
            : '-translate-x-80 opacity-0 invisible'
        }`}
      />
      <Image
        src={ctaImage2}
        alt='cta'
        width={400}
        height={400}
        className={`absolute bottom-8 right-0 object-cover max-h-[400px] transition-all duration-1000 ease-in-out ${
          inView
            ? 'translate-y-0 opacity-100 visible'
            : '-translate-y-80 opacity-0 invisible'
        }`}
      />
      <h2
        className={`text-5xl underlined tworows text-center transition-all duration-1000 ease-in-out ${
          inView
            ? 'translate-y-0 opacity-100 visible'
            : 'translate-y-80 opacity-0 invisible'
        }`}
      >
        Zakoračite u svet savršenog osmeha - zakažite online
        <br />
        pregled i krenite ka svom Hollywood Smile-u već danas!
      </h2>
      <p
        ref={ref}
        className={`mt-10 text-2xl transition-all duration-1000 ease-in-out ${
          inView
            ? 'translate-y-0 opacity-100 visible'
            : 'translate-y-80 opacity-0 invisible'
        }`}
      >
        Ukoliko imate bilo kva pitanja slobodno nas kontaktirajte!
      </p>
      <Button
        href='/kontakt'
        className={`mx-auto mt-12 !transition-all !duration-1000 ease-in-out ${
          inView
            ? 'translate-y-0 opacity-100 visible'
            : 'translate-y-80 opacity-0 invisible'
        }`}
      >
        Kontaktirajte nas
      </Button>
    </section>
  );
};

export default CtaSection;
