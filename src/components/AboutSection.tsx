'use client';

import Image from 'next/image';
import Button from './UI/Button';
import aboutImage from '@/../public/about.jpeg';
import Subtitle from './UI/Subtitle';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: imageRef, inView: imageInView } = useInView({
    threshold: 0.35,
    triggerOnce: true,
  });

  return (
    <section
      ref={imageRef}
      className='mx-auto py-16 md:py-24 lg:py-28 flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-16 px-4 md:px-8 overflow-hidden'
    >
      <div
        className={`w-full lg:max-w-2xl relative flex-1 aspect-[700/467] transition-all duration-[1500ms] ease-in-out ${
          imageInView
            ? 'translate-y-0 opacity-100 blur-0'
            : 'translate-y-64 opacity-0 blur-[2px]'
        }`}
      >
        <Image
          src={aboutImage}
          alt='Grand Dental Klinika - O nama'
          fill
          sizes='(max-width: 1024px) 100vw, 672px'
          className='object-cover'
        />
      </div>

      <div
        ref={textRef}
        className={`lg:max-w-2xl flex-1 transition-all duration-[1500ms] ease-in-out ${
          textInView
            ? `translate-y-0 lg:translate-x-0 opacity-100 blur-0`
            : `translate-y-80 lg:translate-y-0 lg:translate-x-80 opacity-0 blur-[2px]`
        }`}
      >
        <Subtitle>O nama</Subtitle>
        <h2 className='mt-5 text-4xl underlined'>
          Ko smo mi i zašto nas birate?
        </h2>
        <p className='mt-8'>
          U Grand Dentalu posvećeni smo vrhunskoj stomatološkoj nezi koja
          kombinuje stručnost, inovativne tehnike i najmoderniju opremu. Naš tim
          stručnjaka sa dugogodišnjim iskustvom u različitim oblastima
          stomatologije svakom pacijentu pristupa individualno, osiguravajući
          personalizovan plan lečenja koji odgovara vašim specifičnim potrebama.
        </p>
        <p className='mt-6'>
          Naša ordinacija se ponosi najnovijim tehnologijama i tehnikama koje
          garantuju besprekorne rezultate, bilo da je reč o estetskoj
          stomatologiji, implantologiji ili složenim rekonstrukcijama. Uvek
          težimo savršenstvu, a naši pacijenti mogu biti sigurni da su u rukama
          najboljih.
        </p>
        <p className='mt-6'>
          Verujemo da osmeh može promeniti život, a naša misija je da vam
          omogućimo upravo to - savršen osmeh koji donosi samopouzdanje i
          radost.
        </p>
        <Button href='/kontakt' className='mt-8'>
          Zakažite pregled
        </Button>
      </div>
    </section>
  );
};

export default AboutSection;
