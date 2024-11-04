import Bojan from '@/components/about/Bojan';
import Intro from '@/components/about/Intro';
import Team from '@/components/about/Team';
import CtaSection from '@/components/CtaSection';

const About = () => {
  return (
    <main className='pt-64 px-4 md:px-8'>
      <Intro />
      <Bojan />
      <Team />
      <CtaSection />
    </main>
  );
};

export default About;
