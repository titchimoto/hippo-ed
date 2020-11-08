import React from 'react';
import SectionWrapper from './SectionWrapper';

import './Section.scss';
import home4 from '../../images/home4.png';

function Section4() {

  return (
    <SectionWrapper>
      <div className="section__column flex-between">
        <div className="section__column-tight">
          <div className="section__subheader-container">
            <h3 className="section__subheader">
              However and Whenever Your Need It
            </h3>

            <div className="section__subheader-underline" />
          </div>

          <div className="section__content">
            Get education that seamlessly fits into your busy life with
            convenient, tech-forward podcasts, video lectures, and articles, all
            on the go from your phone or tablet.
          </div>
        </div>
      </div>

      <div className="section__column">
        <div className="section__image-container">
          <img src={home4} alt="section" />
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Section4;