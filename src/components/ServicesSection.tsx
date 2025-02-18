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
    description: [
      'Protetika nije samo nadoknada izgubljenih zuba - to je umetnost vraćanja potpune funkcionalnosti, besprekornog izgleda i samopouzdanja. Svaki osmeh koji kreiramo rezultat je znanja i iskustva, najsavremenije tehnologije i individualnog pristupa koji osigurava besprekoran ishod.',
      'Bilo da vam je potrebna zamena jednog zuba ili kompletna rekonstrukcija osmeha, nudimo protetska rešenja najviše klase - krunice, mostove, proteze i kompletne Hollywood Smile transformacije. Koristimo najkvalitetnije materijale koji garantuju prirodan izgled, kvalitet, funkcionalnost, dugotrajnost i savršeno se uklapaju sa vašim licem.',
      'Stručnost našeg osoblja, iskustvo i posvećenost detaljima izdvajaju nas kao lidere u oblasti protetike i Hollywood Smile tretmana. Kod nas ne dobijate samo novi osmeh - dobijate sigurnost, samopouzdanje i kvalitet koji traje.',
    ],
    buttonText: 'Zakažite pregled',
    image1: protetikaImage1,
    image2: protetikaImage2,
  },
  implantologija: {
    id: 'implantologija',
    subtitle: 'Hirurgija',
    title: 'Hirurgija i implantologija u Grand Dentalu',
    description: [
      'Preciznost, stručnost i vrhunska tehnologija - to su temelji na kojima gradimo svaki hirurški i implantološki zahvat u Grand Dentalu. Kada je reč o obnovi izgubljenih zuba, kompromisi ne postoje. Zato koristimo najsavremenije metode i materijale kako bismo osigurali dugotrajna, sigurna i estetski besprekorna rešenja.',
      'Specijalizovani smo za najnaprednije implantološke procedure, uključujući All on 4 i All on 6 tehnike, koji omogućavaju potpunu rekonstrukciju osmeha uz maksimalnu stabilnost i prirodan osećaj. Svaka intervencija je pažljivo planirana, a naši pacijenti prolaze kroz proces sa punim poverenjem, znajući da su u rukama vrhunskih stručnjaka. Od prvog pregleda do završne faze oporavka, naš tim je posvećen vašem komforu, sigurnosti i savršenom rezultatu.',
    ],
    buttonText: 'Zakažite pregled',
    image1: hirurgijaImage2,
    image2: hirurgijaImage1,
  },
  svesnaSedacija: {
    id: 'svesnaSedacija',
    subtitle: 'Svesna sedacija',
    title: 'Svesna sedacija: Bez stresa i straha',
    description: [
      'Zamislite stomatološki tretman koji prolazi bez stresa, nelagodnosti ili straha. Svesna sedacija u našoj ordinaciji osmišljena je da vam pruži upravo to - potpuno opušteno i prijatno iskustvo tokom svakog zahvata.',
      'Ovaj inovativni pristup koristi bezbednu i pažljivo doziranu kombinaciju lekova koja vas uvodi u stanje duboke relaksacije, dok ste i dalje svesni svog okruženja i sposobni da komunicirate sa našim timom. Savršeno je rešenje za pacijente koji osećaju anksioznost pri poseti stomatologu, imaju potrebu za obimnijim zahvatima ili jednostavno žele maksimalan komfor.',
      'Kod nas, vaše iskustvo je na prvom mestu. Pre svakog tretmana, naši stručnjaci pažljivo procenjuju vaše zdravstveno stanje i prilagođavaju proceduru kako bi bila potpuno bezbedna i u skladu sa vašim potrebama.',
      'Zaboravite na neprijatnosti i strahove - stomatološki zahvati mogu biti bezbolno i prijatno iskustvo. Prepustite se našoj brizi i otkrijte novu dimenziju stomatološke nege.',
    ],
    buttonText: 'Zakažite pregled',
    image1: hirurgijaImage2,
    image2: hirurgijaImage1,
  },
};

const ServicesSection = ({
  hasTitle = true,
  className,
  preview = false,
}: {
  hasTitle?: boolean;
  className?: string;
  preview?: boolean;
}) => {
  return (
    <section className={`${className}`}>
      {hasTitle && (
        <InViewWrapper
          className={`max-w-8xl mx-auto flex flex-col lg:flex-row gap-6 sm:gap-5 lg:gap-12 lg:items-center mb-8 sm:mb-16 lg:mb-0 lg:px-16`}
          from='translate-y-32 opacity-0 invisible blur-[2px]'
          to='translate-y-0 opacity-100 visible blur-0'
          duration={700}
          threshold={0.5}
        >
          <h2 className='text-6xl text-nowrap text-primary-default'>
            Naše usluge
          </h2>

          <p>
            U Grand Dental klinici nudimo širok spektar stomatoloških usluga.Naš
            tim stručnjaka će se pobrinuti da dobijete najbolju moguću negu i da
            se osećate prijatno tokom procesa lečenja.
          </p>
        </InViewWrapper>
      )}

      <ServiceItem {...services.protetika} />
      <ServiceItem
        {...services.implantologija}
        invert
        className='!mt-16 sm:!mt-0 lg:!mt-32'
      />
      {!preview && <ServiceItem {...services.svesnaSedacija} />}
    </section>
  );
};

export default ServicesSection;
