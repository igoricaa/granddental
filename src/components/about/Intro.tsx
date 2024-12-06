'use client';

import { useInView } from 'react-intersection-observer';
import Subtitle from '../UI/Subtitle';

const Intro = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`max-w-7xl mx-auto ${
        inView
          ? 'opacity-100 visible translate-y-0 blur-0'
          : 'opacity-0 invisible translate-y-20 blur-[2px]'
      } transition-all duration-[1500ms] ease-in-out`}
    >
      <Subtitle>O nama</Subtitle>
      <h1 className='text-4xl mt-5 underlined'>Ko smo mi?</h1>
      <div className='flex flex-col sm:flex-row gap-8 justify-between mt-8'>
        <p className='bg-containerBg-default px-4 sm:px-8 py-4 sm:py-8 text-light'>
          U Grand Dentalu posvećeni smo vrhunskoj stomatološkoj nezi koja
          kombinuje stručnost, inovativne tehnike i najmoderniju opremu. Naš tim
          stručnjaka sa dugogodišnjim iskustvom u različitim oblastima
          stomatologije svakom pacijentu pristupa individualno, osiguravajući
          personalizovan plan lečenja koji odgovara vašim specifičnim potrebama.
        </p>
        <p className='bg-containerBg-default px-4 sm:px-8 py-4 sm:py-8 text-light'>
          {' '}
          Naša ordinacija se ponosi najnovijim tehnologijama i tehnikama koje
          garantuju besprekorne rezultate, bilo da je reč o estetskoj
          stomatologiji, implantologiji ili složenim rekonstrukcijama. Uvek
          težimo savršenstvu, a naši pacijenti mogu biti sigurni da su u rukama
          najboljih. Verujemo da osmeh može promeniti život, a naša misija je da
          vam omogućimo upravo to - savršen osmeh koji donosi samopouzdanje i
          radost.
        </p>
      </div>

      <h2 className='text-2xl px-4 sm:px-8 py-6 sm:py-8 bg-primary-default text-black text-end mt-14 w-fit ml-auto'>
        "Stručnost, posvećenost, savršenstvo. Naš tim stvara osmehe koji menjaju
        živote."
      </h2>
    </div>
  );
};

export default Intro;
