import protetikaImage1 from '@/../public/services/protetika-1.jpg';
import protetikaImage2 from '@/../public/services/protetika-2.jpg';
import hirurgijaImage1 from '@/../public/services/hirurgija-1.jpg';
import hirurgijaImage2 from '@/../public/services/hirurgija-2.webp';
import ServiceItem from './ServiceItem';

import InViewWrapper from './inview-wrapper';
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

const ServicesSection = ({
  hasTitle = true,
  className,
}: {
  hasTitle?: boolean;
  className?: string;
}) => {
  return (
    <section className={`${className}`}>
      {hasTitle && (
        <InViewWrapper
          className={`max-w-8xl mx-auto flex flex-col lg:flex-row gap-6 sm:gap-5 lg:gap-12 lg:items-center mb-12 sm:mb-16 lg:mb-0 lg:px-16`}
          from='translate-y-32 opacity-0 invisible blur-[2px]'
          to='translate-y-0 opacity-100 visible blur-0'
          duration={700}
          threshold={0.5}
        >
          <h2 className='text-6xl text-nowrap text-primary-default'>
            Naše usluge
          </h2>

          <p>
            U Grand Dental klinici nudimo širok spektar stomatoloških usluga.
            Naš tim stručnjaka će se pobrinuti da dobijete najbolju moguću
            uslugu i da se osećate prijatno tokom celog procesa.
          </p>
        </InViewWrapper>
      )}

      <ServiceItem {...services.protetika} />
      <ServiceItem {...services.implantologija} invert className='!lg:mt-32' />
    </section>
  );
};

export default ServicesSection;
