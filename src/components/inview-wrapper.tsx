'use client';

import { CSSProperties, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const InViewWrapper = ({
  children,
  threshold = 1,
  duration = 500,
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
      className={`${className} transition-all`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: ease,
        ...(inView ? to : from),
      }}
    >
      {children}
    </div>
  );
};

export default InViewWrapper;
