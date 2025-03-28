'use client';

import Image from 'next/image';
import bojan from '@/../public/team/bojan-perduv.jpeg';
import { useInView } from 'react-intersection-observer';
import Subtitle from '../UI/Subtitle';

const Bojan = () => {
  const { ref, inView } = useInView({ threshold: 0.35, triggerOnce: true });

  return (
    <div
      ref={ref}
      className='mt-16 sm:mt-20 lg:mt-28 lg:grid lg:grid-cols-12 lg:items-center max-w-8xl lg:mx-auto overflow-hidden'
    >
      <div
        className={`lg:col-span-6 max-w-7xl bg-containerBg-default text-light px-containerX py-containerY h-fit ${
          inView
            ? 'translate-y-0 opacity-100 visible blur-0'
            : 'translate-y-80 opacity-0 invisible blur-[2px]'
        } transition-all duration-[1500ms] ease-in-out`}
      >
        <Subtitle>Osnivač</Subtitle>
        <h2 className='text-4xl mt-5 underlined text-white'>dr Bojan Perduv</h2>
        <p className='mt-5'>
          Dr Bojan Perduv je osnivač Grand Dental klinike, stomatolog sa
          višegodišnjim iskustvom u oblasti kompletne oralne rehabilitacije.
        </p>
        <p className='mt-4'>
          Rodjen je u Portugaliji 1.11.1990. godine, završio je studije na
          Stomatološkom fakultetu u Pančevu, a nastavio edukaciju na
          Stomatološkom fakultetu u Portu. U želji da osmisli koncept koji
          povezuje najkvalitetniju stomatološku negu i mogućnosti koje nude
          savremene terapije, dr Perduv je okupio na jednom mestu tim stručnjaka
          sa znanjem i iskustvom u različitim oblastima stomatologije:
          protetici, hirurgiji, endodonciji, ortodonciji, parodontologiji…Tim
          vrhunskih lekara u saradnji sa stručnim asistentima i zubnim
          tehničarima, posvećeno radi na osmišljavanju personalizovanih planova
          terapije za svakog pacijenta.
        </p>
      </div>
      <div
        className={`relative mt-4 sm:mt-0 lg:col-span-5 lg:col-start-7 lg:translate-x-10 lg:min-h-[800px] sm:max-w-96 lg:max-w-none ml-auto lg:ml-0 aspect-[544/800] ${
          inView
            ? 'translate-y-0 sm:-translate-y-8 lg:-translate-y-10 opacity-100 visible blur-0'
            : 'translate-y-80 opacity-0 invisible blur-[2px]'
        } transition-all duration-[1500ms] delay-[400ms] ease-in-out`}
      >
        <Image
          src={bojan}
          alt='Grand Dental klinika dr Bojan Perduv '
          fill
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 384px, 600px'
          priority
          className='object-cover'
        />
      </div>
    </div>
  );
};

export default Bojan;
