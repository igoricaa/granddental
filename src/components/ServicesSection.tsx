'use client';

import protetikaImage1 from '@/../public/services/protetika-1.jpg';
import protetikaImage2 from '@/../public/services/protetika-2.jpg';
import hirurgijaImage1 from '@/../public/services/hirurgija-1.jpg';
import hirurgijaImage2 from '@/../public/services/hirurgija-2.webp';
import ServiceItem from './ServiceItem';
import { useInView } from 'react-intersection-observer';

const services = {
  protetika: {
    id: 'protetika',
    subtitle: 'Protetika',
    title: 'Protetika u Grand Dentalu',
    description1:
      'U Grand Dentalu protetika je mnogo više od obnavljanja izgubljenih zuba - to je umetnost vraćanja funkcionalnosti, estetike i samopouzdanja. Sa našim stručnim timom i najmodernijom tehnologijom, pružamo rešenja koja su prilagođena svakom pacijentu, bilo da je reč o krunicama, mostovima ili protezama.',
    description2:
      'Koristimo najkvalitetnije materijale, kako bismo osigurali prirodan izgled i dugotrajnost vašeg novog osmeha. Svaki korak procesa, od prve konsultacije do završne ugradnje, pažljivo je isplaniran kako bi rezultat bio savršen, funkcionalan i besprekorno estetski.',
    description3:
      'Naša stručnost, iskustvo i posvećenost detaljima čine nas liderima u oblasti protetike i Holllywood Smile.',
    buttonText: 'Zakažite pregled',
    image1: protetikaImage1,
    image2: protetikaImage2,
  },
  implantologija: {
    id: 'implantologija',
    subtitle: 'Hirurgija',
    title: 'Hirurgija i implantologija u Grand Dentalu',
    description1:
      'U Grand Dentalu, hirurgija i implantologija predstavljaju srž naše posvećenosti vraćanju zdravlja i funkcionalnosti vašim zubima. Naš tim stručnjaka koristi najmodernije tehnike i opremu kako bi pružio vrhunske rezultate u implantologiji, uključujući All on 6 i All on 4 procedure.',
    description2:
      'Naša stručnost u hirurgiji garantuje da svaka procedura bude sprovedena sa najvišim standardima sigurnosti i efikasnosti. Od prvobitne konsultacije do postoperativne nege, naš tim je tu da vas vodi kroz svaki korak procesa, obezbeđujući da se osećate udobno i sigurno.',
    buttonText: 'Zakažite pregled',
    image1: hirurgijaImage1,
    image2: hirurgijaImage2,
  },
};

const ServicesSection = () => {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });

  return (
    <section className='py-32 px-16 overflow-hidden '>
      <div
        ref={ref}
        className={`max-w-8xl mx-auto flex gap-12 items-center px-16 transition-all duration-1000 ease-in-out ${
          inView
            ? 'translate-y-0 opacity-100 visible'
            : 'translate-y-32 opacity-0 invisible'
        }`}
      >
        <h2 className='text-6xl text-nowrap text-primary-default'>
          Naše usluge
        </h2>
        <p>
          U Grand Dental klinici nudimo širok spektar stomatoloških usluga. Naš
          tim stručnjaka će se pobrinuti da dobijete najbolju moguću uslugu i da
          se osećate prijatno tokom celog procesa.
        </p>
      </div>

      <ServiceItem {...services.protetika} />
      <ServiceItem {...services.implantologija} invert className='mt-56' />
    </section>
  );
};

export default ServicesSection;
