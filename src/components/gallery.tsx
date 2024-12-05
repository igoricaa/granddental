// import BlurFade from "@/components/magicui/blur-fade";
import gallery1 from '@/../public/gallery/1.jpeg';
import gallery2 from '@/../public/gallery/2.jpeg';
import gallery3 from '@/../public/gallery/3.jpeg';
import gallery4 from '@/../public/gallery/4.jpeg';
import gallery5 from '@/../public/gallery/5.jpeg';
import gallery6 from '@/../public/gallery/6.jpeg';

import Image from 'next/image';

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

export function Gallery({ className }: { className?: string }) {
  return (
    <section id='photos' className={className}>
      <div className='columns-2 gap-4 sm:columns-3'>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <Image
              className='mb-4 size-full object-contain'
              src={imageUrl}
              alt={`Grand Dental Klinika - ordinacija`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
