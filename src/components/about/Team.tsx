'use client';

import { team } from '@/app/utils/data';
import { useInView } from 'react-intersection-observer';
import Subtitle from '../UI/Subtitle';
import TeamMember from './TeamMember';

const Team = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div className='py-32'>
      <div ref={headerRef} className='max-w-3xl mx-auto flex flex-col items-center'>
        <Subtitle
          className={`${
            headerInView
              ? 'translate-y-0 opacity-100 visible blur-0'
              : 'translate-y-20 opacity-0 invisible blur-[2px]'
          } transition-all duration-[1500ms] ease-in-out`}
        >
          Znanje i iskustvo
        </Subtitle>
        <h2
          className={`text-4xl mt-5 underlined ${
            headerInView
              ? 'translate-y-0 opacity-100 visible'
              : 'translate-y-20 opacity-0 invisible blur-[2px]'
          } transition-all duration-[1500ms] ease-in-out`}
        >
          Naš tim
        </h2>
        <p
          className={`mt-8 bg-primary-default px-4 py-4 text-black ${
            headerInView
              ? 'translate-y-0 opacity-100 visible'
              : 'translate-y-20 opacity-0 invisible blur-[2px]'
          } transition-all duration-[1500ms] ease-in-out`}
        >
          Grand Dental Clinic je tim stručnjaka sa dugogodišnjim iskustvom u
          stomatologiji. Naš tim čine stručnjaci iz različitih oblasti
          stomatologije, koji su posvećeni pružanju najbolje moguće usluge našim
          pacijentima.
        </p>
      </div>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 max-w-8xl mx-auto gap-8 mt-16'>
        {team.map((member, index) => (
          <TeamMember key={index} member={member} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Team;
