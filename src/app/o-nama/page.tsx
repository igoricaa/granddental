import Bojan from '@/components/about/Bojan';
import Intro from '@/components/about/Intro';
import Team from '@/components/about/Team';
import CtaSection from '@/components/CtaSection';
import Gallery from '@/components/gallery';

const About = () => {
  return (
    <main className='pt-32 sm:pt-40 lg:pt-64 px-4 sm:px-8'>
      <Intro />
      <Bojan />
      <Team />
      <Gallery className='my-8 sm:my-10 lg:my-12 !px-0' />
      <CtaSection />
    </main>
  );
};

export default About;
