'use client';

import { useInView } from 'react-intersection-observer';
import Subtitle from '../UI/Subtitle';
import Image from 'next/image';
import aboutImage from '@/../public/grand-dental-o-nama.jpg';

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
      <h1 className='text-4xl mt-5 underlined'>Upoznajte Grand Dental tim</h1>
      <div className='mt-8 lg:mt-0 flex flex-col'>
        <div className='order-1 lg:order-2 relative w-full aspect-[700/467] lg:max-w-[700px] lg:mt-8'>
          <Image src={aboutImage} alt='Grand Dental - O nama' fill priority />
        </div>
        <div className='grid grid-cols-2 gap-8 justify-between mt-8 order-2 lg:order-1'>
          <TextContainer className='col-span-2 lg:col-span-1'>
            <p>
              U Grand Dental klinici posvećeni smo vrhunskoj stomatološkoj nezi
              koja kombinuje stručnost, inovativne tehnike i najmoderniju
              opremu. Naš tim stručnjaka sa dugogodišnjim iskustvom u različitim
              oblastima stomatologije svakom pacijentu pristupa individualno,
              osiguravajući personalizovan plan lečenja koji odgovara vašim
              specifičnim potrebama. potrebama.
            </p>
          </TextContainer>
          <TextContainer className='col-span-2 lg:col-span-1'>
            <p>
              Bilo da je reč o estetskoj stomatologiji, implantologiji ili
              kompleksnim rekonstrukcijama, kod nas ćete pronaći savršen spoj
              vrhunske tehnologije i preciznosti. Uvek težimo savršenstvu u
              radu, osluškujući želje i potrebe naših pacijenata.
            </p>
            <p className='mt-4'>
              Verujemo da osmeh može da promeni život, a naša misija je da vam
              omogućimo upravo to - savršen osmeh koji donosi samopouzdanje i
              radost.
            </p>
          </TextContainer>
        </div>
      </div>

      <h2 className='text-2xl px-4 sm:px-8 py-6 sm:py-8 bg-primary-default text-black text-end mt-14 w-fit ml-auto'>
        "Stručnost, posvećenost, savršenstvo. Naš tim stvara osmehe koji menjaju
        živote."
      </h2>
    </div>
  );
};

export default Intro;

const TextContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`bg-containerBg-default px-containerX py-containerY text-light ${className}`}
    >
      {children}
    </div>
  );
};
