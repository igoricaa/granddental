import Subtitle from '@/components/UI/Subtitle';
import Image from 'next/image';
import hollywoodSmile1 from '@/../public/hollywoodsmile/1.jpg';
import hollywoodSmile2 from '@/../public/hollywoodsmile/2.jpg';
import Button from '@/components/UI/Button';
import CtaSection from '@/components/CtaSection';
import InViewWrapper from '@/components/inview-wrapper';
import BeforeAndAfter from '@/components/BeforeAndAfter';

const HollywoodSmile = () => {
  return (
    <main className='pt-32 sm:pt-40 lg:pt-64 px-4 sm:px-8'>
      <div className='max-w-8xl mx-auto pb-16 lg:min-w-[500px] lg:max-w-5xl'>
        <Subtitle>Hollywood Smile</Subtitle>
        <h1 className='text-4xl mt-5 underlined'>Moć savršenog osmeha</h1>
        <div className='flex flex-col gap-16 justify-between mt-8'>
          <div className='bg-containerBg-default px-containerX py-containerY  mx-auto'>
            <p className='text-light'>
              Zamislite osmeh koji oduzima dah - osmeh koji zrači savršenstvom,
              elegancijom i vedrinom. Kod nas, Hollywood Smile terapija nije
              samo dentalni tretman; to je transformativno iskustvo kojim se
              pacijentima vraća samopouzdanje koje čini osnovu za kreiranje
              kvalitetnijeg načina života. Za samo 5 do 7 radnih dana, naši
              vrhunski stručnjaci kreiraju personalizovani osmeh iz vaših snova,
              kombinujući najnaprednije tehnike i savremene materijale. Proces
              počinje pažljivom pripremom zuba, nakon čega sledi proba estetskog
              prototipa - to je faza rada u kojoj ste i vi kreator. Zajedno
              biramo oblik, veličinu i nijansu vaših novih zuba, kako bi svaki
              detalj bio savršeno usklađen s vašim željama i jedinstvenim
              karakteristikama.
            </p>
            <p className='text-light mt-4'>
              {' '}
              Kada ste potpuno zadovoljni izgledom prototipa, prelazimo na probu
              full cirkon krunica - najsavremenijih i najluksuznijih materijala
              u svetu dentalne estetike. Na kraju, predajemo finalni rad -
              besprekorno izrađen, funkcionalan i dugotrajan- osmeh koji ne samo
              da oduševljava, već i osigurava maksimalnu udobnost. I to nije
              kraj. Nakon završetka terapije, tu smo za sve vaše potrebe kroz
              redovne kontrole i negu, jer verujemo da vaš osmeh zaslužuje
              stalnu pažnju.
            </p>
            <p className='text-light mt-4 '>
              {' '}
              Hollywood Smile terapija je više od stomatologije - to nauka, nega
              i umetnost u jednom.
            </p>
            <p className='text-light mt-4'>
              Dozvolite nam da zajedno kreiramo osmeh koji će govoriti za vas.
              Jer lep osmeh ostavlja najbolji prvi utisak!
            </p>
            <Button href='/kontakt' className={`mt-6 sm:mt-8`}>
              Zakažite pregled
            </Button>
          </div>
          <div className='flex flex-col lg:flex-row gap-x-4 gap-y-6 w-full overflow-hidden '>
            <InViewWrapper
              from='translate-x-32 lg:translate-x-0 lg:translate-y-16 opacity-0 invisible blur-[2px]'
              to='translate-x-0 lg:translate-y-0 opacity-100 visible blur-0'
              duration={700}
              threshold={0.5}
              className='w-full'
            >
              <div className='relative w-full aspect-[1024/646]'>
                <Image
                  src={hollywoodSmile1}
                  alt='Hollywood Smile'
                  priority
                  fill
                  sizes='(max-width: 1024px) 100vw, 600px'
                  className='object-cover'
                />
              </div>
            </InViewWrapper>
            <InViewWrapper
              from='-translate-x-32 lg:translate-x-0 lg:translate-y-16 opacity-0 invisible blur-[2px]'
              to='translate-x-0 lg:translate-y-0 opacity-100 visible blur-0'
              duration={700}
              threshold={0.5}
              className='w-full'
            >
              <div className='relative w-full aspect-[1024/646]'>
                <Image
                  src={hollywoodSmile2}
                  alt='Hollywood Smile'
                  priority
                  fill
                  sizes='(max-width: 1024px) 100vw, 600px'
                  className='object-cover'
                />
              </div>
            </InViewWrapper>
          </div>

          {/* <div className='lg:hidden flex flex-col gap-y-6 w-full overflow-hidden'>
            <InViewWrapper
              from='translate-x-32 opacity-0 invisible blur-[2px] lg:translate-x-0 lg:opacity-100 lg:visible lg:blur-0'
              to='translate-x-0 opacity-100 visible blur-0'
              duration={700}
              threshold={0.5}
            >
              <div className='relative w-full aspect-[1024/610]'>
                <Image
                  src={hollywoodSmile1}
                  alt='Hollywood Smile'
                  fill
                  sizes='100vw'
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
                  src={hollywoodSmile2}
                  alt='Hollywood Smile'
                  fill
                  sizes='100vw'
                  className='object-cover'
                />
              </div>
            </InViewWrapper>
          </div> */}
        </div>
      </div>

      <BeforeAndAfter className='px-4 sm:px-8 lg:px-0 mt-8 pb-24 sm:pb-32 lg:pb-20 sm:my-12 lg:my-28' />

      <CtaSection />
    </main>
  );
};

export default HollywoodSmile;
