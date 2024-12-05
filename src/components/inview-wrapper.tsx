'use client';

import { CSSProperties, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const InViewWrapper = ({
  children,
  threshold = 1,
  duration = 0.5,
  ease = 'ease-in-out',
  from,
  to,
  className,
}: {
  children: React.ReactNode;
  threshold?: number;
  duration?: number;
  ease?: string;
  from: CSSProperties;
  to: CSSProperties;
  className?: string;
}) => {
  const { ref, inView } = useInView({
    threshold: threshold,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${className} ${inView ? to : from} transition-all`}
      style={{
        transitionDuration: `${duration}s`,
        transitionTimingFunction: ease,
      }}
    >
      {children}
    </div>
  );
};

export default InViewWrapper;
