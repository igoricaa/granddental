import AboutSection from '@/components/AboutSection';
import BeforeAndAfter from '@/components/BeforeAndAfter';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import beforeImage from '@/../public/before-and-after/before.webp';
import afterImage from '@/../public/before-and-after/after.webp';
import DentalTourismSection from '@/components/DentalTourismSection';
import CtaSection from '@/components/CtaSection';
import Gallery from '@/components/gallery';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Gallery className='my-16 sm:my-20 lg:my-28' />
      <ServicesSection className='mb-0 mt-16 sm:mt-24 lg:my-20 px-4 sm:px-8 lg:px-16 overflow-hidden ' />
      <BeforeAndAfter beforeImage={beforeImage} afterImage={afterImage} />
      <DentalTourismSection />
      <CtaSection />
    </main>
  );
}
