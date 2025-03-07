'use client';

import { useInView } from 'react-intersection-observer';
import Subtitle from '../UI/Subtitle';
import TeamMember from './TeamMember';
import { TeamMemberType } from '@/app/utils/data';
import vladimir from '@/../public/team/dr-vladimir-damnjanovic.jpeg';
import milos from '@/../public/team/dr-milos-petrovic.jpeg';
import jevto from '@/../public/team/dr-jevto-lukic.jpeg';
import katarina from '@/../public/team/dr-katarina-mrkonjic.jpeg';
import natasa from '@/../public/team/dr-natasa-dokic.jpeg';
import olga from '@/../public/team/dr-olga-matic.jpeg';
import ivana from '@/../public/team/dr-ivana-kovacevic.jpeg';
import aleksandra from '@/../public/team/aleksandra-ilic.jpeg';
import bojana from '@/../public/team/bojana-madic.jpeg';
import kristina from '@/../public/team/kristina-djuric.jpeg';
import aleksandar from '@/../public/team/aleksandar-zlatar.jpeg';
import marko from '@/../public/team/marko-savic.jpeg';
import jovana from '@/../public/team/jovana-savic.jpeg';

const team: TeamMemberType[] = [
  {
    name: 'dr Vladimir Damnjanović',
    image: vladimir,
  },
  {
    name: 'dr Miloš Petrović',
    image: milos,
  },
  {
    name: 'dr Jevto Lukić',
    image: jevto,
  },
  {
    name: 'dr Nataša Dokić',
    image: natasa,
  },
  {
    name: 'dr Olga Matić',
    image: olga,
  },
  {
    name: 'dr Ivana Kovačević',
    image: ivana,
  },
  {
    name: 'dr Katarina Mrkonjić',
    image: katarina,
  },
  {
    name: 'Aleksandra Ilić',
    image: aleksandra,
  },
  {
    name: 'Bojana Madić',
    image: bojana,
  },
  {
    name: 'Kristina Đurić',
    image: kristina,
  },
  {
    name: 'Aleksandar Zlatar',
    image: aleksandar,
  },
  {
    name: 'Marko Savić',
    image: marko,
  },
  {
    name: 'Jovana Savić',
    image: jovana,
  },
];

const Team = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.35,
    triggerOnce: true,
  });

  return (
    <div className='py-16 sm:24 lg:py-28'>
      <div
        ref={headerRef}
        className='max-w-3xl mx-auto flex flex-col items-center'
      >
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
          className={`mt-8 bg-containerBg-default px-4 py-4 text-light ${
            headerInView
              ? 'translate-y-0 opacity-100 visible'
              : 'translate-y-20 opacity-0 invisible blur-[2px]'
          } transition-all duration-[1500ms] ease-in-out`}
        >
          Grand Dental klinika okuplja tim stručnjaka sa dugogodišnjim iskustvom
          u svim oblastima stomatologije.
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 max-w-8xl mx-auto gap-2 sm:gap-4 lg:gap-6 mt-12 sm:mt-16'>
        {team.map((member, index) => (
          <TeamMember key={index} member={member} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Team;
