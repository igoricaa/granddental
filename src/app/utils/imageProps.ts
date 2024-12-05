import { getImageProps } from 'next/image';
import gallery1 from '@/../public/gallery/1.jpeg';
import gallery2 from '@/../public/gallery/2.jpeg';
import gallery3 from '@/../public/gallery/3.jpeg';
import gallery4 from '@/../public/gallery/4.jpeg';
import gallery5 from '@/../public/gallery/5.jpeg';
import gallery6 from '@/../public/gallery/6.jpeg';
import gallery7 from '@/../public/gallery/7.jpeg';
import gallery8 from '@/../public/gallery/8.jpeg';

const common = {
  alt: 'Grand Dental klinika',
  sizes: '33vw',
  fill: true,
};
const {
  props: { srcSet: desktop1 },
} = getImageProps({
  ...common,
  src: gallery1,
});
const {
  props: { srcSet: mobile1, ...rest },
} = getImageProps({
  ...common,
  src: gallery1,
});
const {
  props: { srcSet: desktop2 },
} = getImageProps({
  ...common,
  src: gallery2,
});
const {
  props: { srcSet: mobile2, ...rest2 },
} = getImageProps({
  ...common,
  src: gallery2,
});
const {
  props: { srcSet: desktop3 },
} = getImageProps({
  ...common,
  src: '',
});
const {
  props: { srcSet: mobile3, ...rest3 },
} = getImageProps({
  ...common,
  src: '',
});
const {
  props: { srcSet: desktop4 },
} = getImageProps({
  ...common,
  src: gallery4,
});
const {
  props: { srcSet: mobile4, ...rest4 },
} = getImageProps({
  ...common,
  src: gallery4,
});
const {
  props: { srcSet: desktop5 },
} = getImageProps({
  ...common,
  src: gallery5,
});
const {
  props: { srcSet: mobile5, ...rest5 },
} = getImageProps({
  ...common,
  src: gallery5,
});
const {
  props: { srcSet: desktop6 },
} = getImageProps({
  ...common,
  src: gallery6,
});
const {
  props: { srcSet: mobile6, ...rest6 },
} = getImageProps({
  ...common,
  src: gallery6,
});
const {
  props: { srcSet: desktop7 },
} = getImageProps({
  ...common,
  src: gallery7,
});
const {
  props: { srcSet: mobile7, ...rest7 },
} = getImageProps({
  ...common,
  src: gallery7,
});
const {
  props: { srcSet: desktop8 },
} = getImageProps({
  ...common,
  src: gallery8,
});
const {
  props: { srcSet: mobile8, ...rest8 },
} = getImageProps({
  ...common,
  src: gallery8,
});

const desktopImages = [
  desktop1,
  desktop2,
  desktop3,
  desktop4,
  desktop5,
  desktop6,
  desktop7,
  desktop8,
];
const mobileImages = [
  mobile1,
  mobile2,
  mobile3,
  mobile4,
  mobile5,
  mobile6,
  mobile7,
  mobile8,
];
const restProps = [rest, rest2, rest3, rest4, rest5, rest6, rest7, rest8];

export { desktopImages, mobileImages, restProps };
