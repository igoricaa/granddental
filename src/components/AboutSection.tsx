'use client';

import Image from 'next/image';
import Button from './UI/Button';
import aboutImage from '@/../public/grand-dental-o-nama.jpg';
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
      className='mx-auto my-16 sm:mt-24 sm:mb-16 lg:my-28 flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-8 overflow-hidden'
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
          quality={100}
          sizes='(max-width: 1024px) 100vw, 700px'
          className='object-cover object-top'
        />
      </div>

      <div
        ref={textRef}
        className={`lg:max-w-2xl flex-1 bg-containerBg-default px-containerX py-containerY transition-all duration-[1500ms] ease-in-out ${
          textInView
            ? `translate-y-0 lg:translate-x-0 opacity-100 blur-0`
            : `translate-y-80 lg:translate-y-0 lg:translate-x-80 opacity-0 blur-[2px]`
        }`}
      >
        <Subtitle>O nama</Subtitle>
        <h2 className='mt-5 text-4xl underlined'>
          Zašto je Grand Dental najbolji izbor?
        </h2>
        <p className='mt-8'>
          U Grand Dental klinici posvećeni smo vrhunskoj stomatološkoj nezi koja
          kombinuje stručnost, inovativne tehnike i najmoderniju opremu. Naš tim
          stručnjaka sa dugogodišnjim iskustvom u različitim oblastima
          stomatologije svakom pacijentu pristupa individualno, osiguravajući
          personalizovan plan lečenja koji odgovara vašim specifičnim potrebama.
        </p>
        <p className='mt-6'>
          Bilo da je reč o estetskoj stomatologiji, implantologiji ili
          kompleksnim rekonstrukcijama, kod nas ćete pronaći savršen spoj
          vrhunske tehnologije i preciznosti. Uvek težimo savršenstvu u radu,
          osluškujući želje i potrebe naših pacijenata.
        </p>
        <p className='mt-6'>
          Verujemo da osmeh može da promeni život, a naša misija je da vam
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
