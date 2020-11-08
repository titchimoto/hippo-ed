import React from 'react';
import classnames from 'classnames';
import { useInView } from 'react-intersection-observer';

import './Section.scss';

import home2 from '../../images/home2.png';

function Section2() {

  const [ref, inView] = useInView({ rootMargin: '10px' });

  return (
    <section
      ref={ref}
      className={`
        section__container
        ${classnames({
          'section__animate-in': inView,
          'section__animate-out': !inView 
        })}
      `}
    > 
      <div className="section__column">
        <div className="section__column-tight">
          <div className="section__header-container">
            <h2 className="section__header">
              Education Designed for People Like You
            </h2>
          </div>

          {/* This is a little weird but given the time constraint opting to just
          use an entirely separate DOM element for mobile/desktop to get the correct
          order as per the design. With a little more time, I would use some 
          re-ordering with the flex order property  */}
          <div className="section__image-container hide-desktop">
            <img src={home2} alt="section" />
          </div>

          <div className="section__subheader-container">
            <h3 className="section__subheader">
              Authentic, Engaging, and <em>Human</em>
            </h3>

            <div className="section__subheader-underline" />
          </div>

          <div className="section__content">
            We’re obsessed with making education that respects your time,
            attention span, and humanity. Every piece of education we produce is
            made with intention for a consistently rewarding learning experience.
          </div>
        </div>
      </div>
      
      <div className="section__column">
        <div className="section__image-container hide-mobile">
          <img src={home2} alt="section" />
        </div>
      </div>
    </section>
  );
}

export default Section2;