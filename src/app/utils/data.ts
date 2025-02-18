import { StaticImageData } from "next/image";

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
    name: 'Hollywood Smile',
    href: '/hollywood-smile',
  },
  {
    name: 'Usluge',
    href: '/usluge',
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

export const beforeAndAfterImages = [
  {
    before: '/before-and-after/1.jpg',
    after: '/before-and-after/2.jpg',
  },
  {
    before: '/before-and-after/3.jpg',
    after: '/before-and-after/4.jpg',
  },
  {
    before: '/before-and-after/5.jpg',
    after: '/before-and-after/6.jpg',
  },
  {
    before: '/before-and-after/7.jpg',
    after: '/before-and-after/8.jpg',
  },
  {
    before: '/before-and-after/9.jpg',
    after: '/before-and-after/10.jpg',
  },
  {
    before: '/before-and-after/11.jpg',
    after: '/before-and-after/12.jpg',
  },
  {
    before: '/before-and-after/13.jpg',
    after: '/before-and-after/14.jpg',
  },
  {
    before: '/before-and-after/15.jpg',
    after: '/before-and-after/16.jpg',
  },
  {
    before: '/before-and-after/17.jpg',
    after: '/before-and-after/18.jpg',
  },
  {
    before: '/before-and-after/19.jpg',
    after: '/before-and-after/20.jpg',
  },
  {
    before: '/before-and-after/21.jpg',
    after: '/before-and-after/22.jpg',
  },
];

export type TeamMemberType = {
  name: string;
  image: StaticImageData;
};


export type ServiceItemProps = {
  id: string;
  subtitle: string;
  title: string;
  description: string[];
  buttonText: string;
  image1?: StaticImageData;
  image2?: StaticImageData;
  invert?: boolean;
  className?: string;
};