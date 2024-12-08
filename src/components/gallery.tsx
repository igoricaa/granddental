// import BlurFade from "@/components/magicui/blur-fade";
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
  aspectRatio?: string;
  className?: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: gallery1,
    className: 'col-span-1 row-span-2 ',
  },
  {
    src: gallery2,
    className: 'col-span-1 row-span-2 ',
  },
  {
    src: gallery3,
    className: 'col-span-2 row-span-2',
  },
  {
    src: gallery4,
    className: 'col-span-2 row-span-2',
  },
  {
    src: gallery5,
    className: 'col-span-1 row-span-1',
  },
  {
    src: gallery7,
    className: 'col-span-1 row-span-2',
  },
  {
    src: gallery6,
    className: 'col-span-1 row-span-1',
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
              className='object-cover transition-transform duration-300 hover:scale-110'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
            <div className='absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300' />
          </div>
        ))}
      </div>
    </div>
  );
}
