import AboutSection from '@/components/AboutSection';
import BeforeAndAfter from '@/components/BeforeAndAfter';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import beforeImage from '@/../public/before-and-after/before.webp';
import afterImage from '@/../public/before-and-after/after.webp';
import DentalTourismSection from '@/components/DentalTourismSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <BeforeAndAfter beforeImage={beforeImage} afterImage={afterImage} width={1000} height={600} />
      <DentalTourismSection />
    </main>
  );
}
