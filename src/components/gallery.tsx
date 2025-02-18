import gallery1 from '@/../public/gallery/1.jpeg';
import gallery2 from '@/../public/gallery/2.jpeg';
import gallery3 from '@/../public/gallery/3.jpeg';
import gallery4 from '@/../public/gallery/4.jpeg';
import gallery5 from '@/../public/gallery/5.jpeg';
import gallery6 from '@/../public/gallery/6.jpeg';
import gallery7 from '@/../public/gallery/7.jpeg';

import Image, { StaticImageData } from 'next/image';

interface GalleryImage {
  src: StaticImageData;
  className: string;
  sizes: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: gallery1,
    className: 'col-span-2 sm:col-span-1 row-span-2 ',
    sizes: '25vw',
  },
  {
    src: gallery2,
    className: 'col-span-2 sm:col-span-1 row-span-2 ',
    sizes: '25vw',
  },
  {
    src: gallery3,
    className: 'col-span-2 row-span-2',
    sizes: '50vw',
  },
  {
    src: gallery4,
    className: 'col-span-2 row-span-2',
    sizes: '50vw',
  },
  {
    src: gallery5,
    className: 'col-span-2 sm:col-span-1 row-span-2 lg:row-span-1',
    sizes: '25vw',
  },
  {
    src: gallery7,
    className: 'col-span-2 sm:col-span-1 row-span-4 lg:row-span-2',
    sizes: '25vw',
  },
  {
    src: gallery6,
    className: 'col-span-2 sm:col-span-1 row-span-2 lg:row-span-1',
    sizes: '25vw',
  },
];

export default function Gallery({ className }: { className?: string }) {
  return (
    <div className={`px-4 sm:px-8 lg:px-12 ${className}`}>
      <div className='grid grid-cols-4 auto-rows-[16.5vw] gap-2 lg:gap-4'>
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden ${image.className}`}
          >
            <Image
              src={image.src}
              alt='Grand Dental klinika Beograd'
              fill
              className='object-cover'
              sizes={image.sizes}
            />
            <div className='absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300' />
          </div>
        ))}
      </div>
    </div>
  );
}
