import Subtitle from '@/components/UI/Subtitle';
import Image from 'next/image';
import hollywoodSmile1 from '@/../public/hollywoodsmile/1.jpg';
import hollywoodSmile2 from '@/../public/hollywoodsmile/2.jpg';
import hollywoodSmile3 from '@/../public/hollywoodsmile/3.jpg';
import hollywoodSmile4 from '@/../public/hollywoodsmile/4.jpg';
import Button from '@/components/UI/Button';
import CtaSection from '@/components/CtaSection';
import InViewWrapper from '@/components/inview-wrapper';

const HollywoodSmile = () => {
  return (
    <main className='pt-32 sm:pt-40 lg:pt-64 px-4 sm:px-8'>
      <div className='max-w-8xl mx-auto pb-16'>
        <Subtitle>Hollywood Smile</Subtitle>
        <h1 className='text-4xl mt-5 underlined'>
          Luksuzan Osmeh u Samo 5-7 Radnih Dana
        </h1>
        <div className='flex flex-col lg:flex-row gap-16 justify-between mt-8'>
          <div className='bg-containerBg-default px-containerX py-containerY lg:min-w-[500px] lg:max-w-[750px]'>
            <p className='text-light'>
              Zamislite osmeh koji oduzima dah - osmeh koji zrači savršenstvom,
              elegancijom i samopouzdanjem. Kod nas, Hollywood Smile terapija
              nije samo dentalni tretman; to je transformativno iskustvo koje
              vaš osmeh podiže na nivo glamura vrednog crvenog tepiha. Za samo 5
              do 7 radnih dana, naši vrhunski stručnjaci kreiraju osmeh iz vaših
              snova, kombinujući najnaprednije tehnike i materijale sa detaljima
              prilagođenim isključivo vama. Proces počinje pažljivom pripremom
              zuba, nakon čega sledi proba estetskog prototipa - faza u kojoj
              ste vi kreator. Zajedno biramo oblik, veličinu i nijansu vaših
              novih zuba, kako bi svaki detalj bio savršeno usklađen s vašim
              željama i jedinstvenim karakteristikama.
            </p>
            <p className='text-light mt-4 sm:mt-8'>
              {' '}
              Kada ste potpuno zadovoljni izgledom prototipa, prelazimo na probu
              full cirkon krunica - najsavremenijih i najluksuznijih materijala
              u svetu dentalne estetike. Na kraju, predajemo finalni rad -
              besprekorno izrađen, funkcionalan i dugotrajan osmeh koji ne samo
              da oduševljava, već i osigurava maksimalnu udobnost. I to nije
              kraj. Nakon završetka terapije, tu smo za sve vaše potrebe kroz
              redovne kontrole i negu, jer verujemo da vaš osmeh zaslužuje
              stalnu pažnju. Ovo je više od stomatologije - ovo je umetnost,
              nauka i luksuz spojeni u jedno. Dozvolite nam da zajedno kreiramo
              osmeh koji će govoriti za vas. Jer osmeh nije samo lep; osmeh je
              vaš potpis.
            </p>
            <Button href='/kontakt' className={`mt-6 sm:mt-8`}>
              Zakažite pregled
            </Button>
          </div>
          <div className='hidden lg:flex gap-x-4 w-full'>
            <div className='relative min-w-[220px] w-full lg:max-w-[300px]'>
              <Image
                src={hollywoodSmile1}
                alt='Hollywood Smile'
                priority
                fill
                className='object-cover'
              />
            </div>
            <div className='relative min-w-[220px] w-full lg:max-w-[300px]'>
              <Image
                src={hollywoodSmile2}
                alt='Hollywood Smile'
                priority
                fill
                className='object-cover'
              />
            </div>
          </div>

          <div className='lg:hidden flex flex-col gap-y-6 w-full overflow-hidden'>
            <InViewWrapper
              from='translate-x-32 opacity-0 invisible blur-[2px] lg:translate-x-0 lg:opacity-100 lg:visible lg:blur-0'
              to='translate-x-0 opacity-100 visible blur-0'
              duration={700}
              threshold={0.5}
            >
              <div className='relative w-full aspect-[1024/610]'>
                <Image
                  src={hollywoodSmile3}
                  alt='Hollywood Smile'
                  fill
                  className='object-cover'
                />
              </div>
            </InViewWrapper>
            <InViewWrapper
              from='-translate-x-32 opacity-0 invisible blur-[2px] lg:translate-x-0 lg:opacity-100 lg:visible lg:blur-0'
              to='translate-x-0 opacity-100 visible blur-0'
              duration={700}
              threshold={0.5}
            >
              <div className='relative w-full aspect-[1024/610]'>
                <Image
                  src={hollywoodSmile4}
                  alt='Hollywood Smile'
                  fill
                  className='object-cover'
                />
              </div>
            </InViewWrapper>
          </div>
        </div>
      </div>

      <CtaSection />
    </main>
  );
};

export default HollywoodSmile;
