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
    <main className='bg-[rgba(78,78,78,1)] -z-50'>
      <Hero />
      <AboutSection />
      <Gallery className='my-28' />
      <ServicesSection className='pb-0 pt-16 sm:py-24 lg:py-20 px-4 sm:px-8 lg:px-16 overflow-hidden ' />
      <BeforeAndAfter beforeImage={beforeImage} afterImage={afterImage} />
      <DentalTourismSection />
      <CtaSection/>
    </main>
  );
}
