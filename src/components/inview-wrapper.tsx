'use client';

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
  from: string;
  to: string;
  className?: string;
}) => {
  const { ref, inView } = useInView({
    threshold: threshold,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${className} transition-all ${inView ? to : from}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: ease,
      }}
    >
      {children}
    </div>
  );
};

export default InViewWrapper;
