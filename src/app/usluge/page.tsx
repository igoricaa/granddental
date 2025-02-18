import CtaSection from '@/components/CtaSection';
import ServicesSection from '@/components/ServicesSection';
import Subtitle from '@/components/UI/Subtitle';

const Usluge = () => {
  return (
    <main className='pt-32 sm:pt-40 lg:pt-64 px-4 sm:px-8'>
      <section className={`max-w-7xl mx-auto`}>
        <Subtitle>Usluge</Subtitle>
        <h1 className='text-4xl mt-5 underlined'>
          Implantologija i protetika na najvišem nivou
        </h1>
        <div className='bg-containerBg-default px-containerX py-containerY mt-8 max-w-4xl'>
          <p className='text-light'>
            Dobrodošli u svet gde stomatologija postaje umetnost, a vaš osmeh
            pravo remek-delo. Kod nas, implantologija i protetika nisu samo
            medicinske usluge, već luksuzno iskustvo osmišljeno da vam pruži
            besprekoran osmeh koji odiše samopouzdanjem i elegancijom. Naši
            implantati izrađeni su od najkvalitetnijih materijala, garantujući
            savršenu funkcionalnost. U kombinaciji sa precizno izrađenom
            protetikom, svaki osmeh koji kreiramo postaje simbol trajnosti,
            lepote i sofisticiranosti. Lep i srdačan osmeh vaš je najbolji
            saveznik u životu.
          </p>
        </div>
      </section>

      <ServicesSection
        hasTitle={false}
        className='overflow-hidden mt-24 lg:-mt-8 lg:pb-32'
      />

      <CtaSection />
    </main>
  );
};

export default Usluge;
