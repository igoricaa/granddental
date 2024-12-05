// 'use client';

// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Flip } from 'gsap/Flip';
// import { useGSAP } from '@gsap/react';
// import { desktopImages, restProps } from '@/app/utils/imageProps';
// import { mobileImages } from '@/app/utils/imageProps';
// import { useRef } from 'react';

// gsap.registerPlugin(Flip, ScrollTrigger);

// const BentoGallery = () => {
//   const galleryRef = useRef<HTMLDivElement>(null);
//   const galleryItemRefs = useRef<Array<HTMLDivElement | null>>(
//     Array(8).fill([])
//   );

//   useGSAP(() => {
//     const triggerFlipOnScroll = (
//       galleryEl: any,
//       itemsEls: any,
//       options: any
//     ) => {
//       let settings = {
//         flip: {
//           absoluteOnLeave: false,
//           absolute: false,
//           scale: false,
//           simple: true,
//         },
//         scrollTrigger: {
//           start: 'center center',
//           end: '+=300%',
//         },
//         stagger: 0,
//       };

//       settings = Object.assign({}, settings, options);

//       const gallerySwitchClasses = [
//         'grid-cols-[100vw_100vw_100vw]',
//         'grid-rows-[49.5vh_49.5vh_49.5vh]',
//         'gap-[15vh]',
//       ];

//       const galleryItemClasses = [
//         'contrast-100',
//         'saturate-100',
//         'brightness-100',
//         'opacity-100',
//       ];

//       galleryEl.classList.add(...gallerySwitchClasses);

//       itemsEls.forEach((item: HTMLElement) => {
//         item.classList.add(...galleryItemClasses);
//       });

//       const flipstate = Flip.getState(itemsEls, {
//         props: 'filter, opacity',
//       });

//       galleryEl.classList.remove(...gallerySwitchClasses);

//       itemsEls.forEach((item: HTMLElement) => {
//         item.classList.remove(...galleryItemClasses);
//       });

//       const tl = Flip.to(flipstate, {
//         ease: 'none',
//         absoluteOnLeave: settings.flip.absoluteOnLeave,
//         absolute: settings.flip.absolute,
//         scale: settings.flip.scale,
//         simple: settings.flip.simple,
//         scrollTrigger: {
//           trigger: galleryEl,
//           start: settings.scrollTrigger.start,
//           end: settings.scrollTrigger.end,
//           pin: galleryEl.parentNode,
//           scrub: true,
//         },
//         stagger: settings.stagger,
//       });
//     };

//     const scroll = () => {
//       const gallery = galleryRef.current;
//       if (!gallery || !galleryItemRefs.current.every((ref) => ref !== null))
//         return;

//       triggerFlipOnScroll(
//         gallery,
//         galleryItemRefs.current as HTMLDivElement[],
//         {}
//       );
//     };

//     scroll();
//   }, [galleryRef, galleryItemRefs]);

//   return (
//     <div className='relative w-full h-screen flex items-center justify-center mx-auto my-[40vh] overflow-hidden'>
//       <div
//         className='relative w-full h-full flex-none grid gap-[1vh] grid-cols-[32.5vw_32.5vw_32.5vw] grid-rows-[23vh_23vh_23vh_23vh] items-center justify-center'
//         ref={galleryRef}
//       >
//         {Array.from({ length: 8 }, (_, i) => i).map((index) => (
//           <div
//             ref={(el) => {
//               galleryItemRefs.current[index] = el;
//             }}
//             className={`flex-none rounded-md overflow-hidden relative brightness-100 galleryItem ${
//               index === 0
//                 ? 'col-start-1 col-end-2 row-start-1 row-end-3'
//                 : index === 1
//                 ? 'col-start-2 col-end-3 row-start-1 row-end-2'
//                 : index === 2
//                 ? 'col-start-2 col-end-3 row-start-2 row-end-4 bg-black flex items-center justify-center'
//                 : index === 3
//                 ? 'col-start-3 col-end-3 row-start-1 row-end-3'
//                 : index === 4
//                 ? 'col-start-1 col-end-2 row-start-3 row-end-3'
//                 : index === 5
//                 ? 'col-start-3 col-end-4 row-start-3 row-end-5'
//                 : index === 6
//                 ? 'col-start-1 col-end-2 row-start-4 row-end-5'
//                 : index === 7
//                 ? 'col-start-2 col-end-3 row-start-4 row-end-5'
//                 : ''
//             }`}
//             key={index}
//           >
//             {index !== 2 && (
//               <picture>
//                 <source
//                   media='(min-width: 680px)'
//                   srcSet={desktopImages[index]}
//                 />
//                 <source
//                   media='(max-width: 680px)'
//                   srcSet={mobileImages[index]}
//                 />
//                 <img
//                   {...restProps[index]}
//                   style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                 />
//               </picture>
//             )}
//             {index === 2 && (
//               <img
//                 src='/logos/logo.png'
//                 alt='logo'
//                 className='w-1/2 h-1/2 object-cover'
//               />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BentoGallery;
