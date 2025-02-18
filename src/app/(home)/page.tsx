import AboutSection from '@/components/AboutSection';
import BeforeAndAfter from '@/components/BeforeAndAfter';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import DentalTourismSection from '@/components/DentalTourismSection';
import CtaSection from '@/components/CtaSection';
import Gallery from '@/components/gallery';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Gallery className='my-16 sm:my-20 lg:my-28' />
      <ServicesSection className='mb-0 mt-16 sm:mt-24 lg:my-20 px-4 sm:px-8 lg:px-16 overflow-hidden' preview={true}/>
      <BeforeAndAfter className='px-4 sm:px-8 lg:px-0 my-24 sm:my-12 lg:my-28' />
      <DentalTourismSection />
      <CtaSection />
    </main>
  );
}
