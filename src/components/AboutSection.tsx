'use client';

import Image from 'next/image';
import Button from './UI/Button';
import aboutImage from '@/../public/about.jpeg';
import Subtitle from './UI/Subtitle';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <section className='max-w-8xl mx-auto py-32 flex justify-between items-center gap-16 px-8'>
      <div
        ref={ref}
        className={`relative flex-1 aspect-[700/467] transition-all duration-[1500ms] ease-in-out ${
          inView
            ? 'translate-y-0 opacity-100 visible'
            : 'translate-y-full opacity-0 invisible'
        }`}
      >
        <Image
          src={aboutImage}
          alt='Grand Dental Klinika - O nama'
          fill
          className='object-cover'
        />
      </div>

      <div
        ref={ref}
        className={`flex-1 transition-all duration-[1500ms] ease-in-out ${
          inView
            ? 'translate-x-0 opacity-100 visible'
            : 'translate-x-full opacity-0 invisible'
        }`}
      >
        <Subtitle>O nama</Subtitle>
        <h2 className='mt-8 text-4xl underlined'>
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
