export const routes = [
  {
    name: 'Početna',
    href: '/',
  },
  {
    name: 'O nama',
    href: '/o-nama',
  },
  {
    name: 'Usluge',
    href: '/usluge',
    submenu: [
      {
        name: 'Implantologija',
        href: '/#implantologija',
      },
      {
        name: 'Protetika',
        href: '/#protetika',
      },
    ],
  },
  {
    name: 'Dentalni turizam',
    href: '/#dentalni-turizam',
  },
  {
    name: 'Kontakt',
    href: '/kontakt',
  },
];

export type TeamMemberType = {
  name: string;
  image: string;
};

export const team: TeamMemberType[] = [
  {
    name: 'dr Bojan Perduv',
    image: '/team/bojan-perduv.jpeg',
  },
  {
    name: 'dr Bojan Perduv',
    image: '/team/bojan-perduv.jpeg',
  },
  {
    name: 'dr Bojan Perduv',
    image: '/team/bojan-perduv.jpeg',
  },
  {
    name: 'dr Bojan Perduv',
    image: '/team/bojan-perduv.jpeg',
  },
  {
    name: 'dr Bojan Perduv',
    image: '/team/bojan-perduv.jpeg',
  },
  {
    name: 'dr Bojan Perduv',
    image: '/team/bojan-perduv.jpeg',
  },
  {
    name: 'dr Bojan Perduv',
    image: '/team/bojan-perduv.jpeg',
  },
  {
    name: 'dr Bojan Perduv',
    image: '/team/bojan-perduv.jpeg',
  },
  {
    name: 'dr Bojan Perduv',
    image: '/team/bojan-perduv.jpeg',
  },
];
