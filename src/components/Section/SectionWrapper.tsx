import React from 'react';
import classnames from 'classnames'
import { useInView } from 'react-intersection-observer';

import './Section.scss';

type WrapperProps = {
  children?: React.ReactNode;
  padded?: boolean;
}

function SectionWrapper({ children, padded = false }: WrapperProps) {

  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: '20px' });

  return (
    <section
      ref={ref}
      className={`
        section__container
        ${classnames({
          'section__animate-in': inView,
          'section__animate-out': !inView,
          'section__padded': padded
        })}
      `}
    >
      {children}
      </section>
  );

}

export default SectionWrapper;
