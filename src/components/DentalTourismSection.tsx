'use client';

import Image from 'next/image';
import dentalTourismImage from '@/../public/belgrade.png';
import marcoDentalLogo from '@/../public/logos/marcodentaltourism-logo.png';
import Subtitle from './UI/Subtitle';
import Button from './UI/Button';
import { useInView } from 'react-intersection-observer';

const DentalTourismSection = () => {
  const { ref, inView } = useInView({ threshold: 0.35, triggerOnce: true });

  return (
    <section
      id='dentalni-turizam'
      ref={ref}
      className='my-24 lg:my-32 px-4 sm:px-8 lg:px-20 pt-24 sm:pt-28 lg:pt-40 pb-16 sm:pb-20 lg:h-[600px] relative flex flex-col lg:flex-row items-center gap-10 overflow-hidden scroll-mt-60'
    >
      <Image
        src={dentalTourismImage}
        alt='Grand Dental klinika dentalni turizam'
        fill
        className='object-cover -z-10'
        sizes='100vw'
      />

      <Image
        src={marcoDentalLogo}
        alt='marco dental tourism'
        width={160}
        height={160}
        className='object-cover'
      />

      <div
        ref={ref}
        className={`max-w-screen-xl transition-all duration-[1500ms] ease-in-out ${
          inView
            ? 'translate-y-0 opacity-100 visible blur-0'
            : 'translate-y-16 opacity-0 invisible blur-[2px]'
        }`}
      >
        <Subtitle>Dentalni turizam</Subtitle>
        <h2 className='text-5xl underlined mt-5'>Dentalni turizam</h2>
        <div className='mt-6'>
          <p>
            Za pacijente iz inostranstva razvili smo jedinstven program
            Dentalnog turizma koji podrazumeva kompletnu organizaciju procesa
            lečenja, boravka i prevoza od/do aerodroma. Naš specijalizovani tim
            je posvećen tome da svaki korak - od vašeg dolaska, do završteka
            tretmana - bude prijatan i pažljivo isplaniran, tako da pacijenti
            budu u potpunosti rasterećeni i opušteni. Slobodno vreme između
            poseta ordinaciji, pacijenti mogu da iskoriste obilazeći
            znamenitosti srpske prestonice. Ordinacija je smeštena u srcu
            Vračara, u jednom od najlepših delova Beograda, u kom ste na korak
            od svih atrakcija ovog grada. Naše osoblje je uvek na raspolaganju
            za dobru preporuku i pomoć.
          </p>
          <p className='mt-4'>
            Uz nas, put do savršenog osmeha je jednostavan i prijatan - samo
            zakoračite!
          </p>
          <Button
            href='https://www.marcodentaltourism.com/'
            className='mt-8'
            externalLink
          >
            Saznajte više
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DentalTourismSection;
