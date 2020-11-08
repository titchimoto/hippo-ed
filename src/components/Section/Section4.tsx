import React from 'react';

import './Section.scss';

import home4 from '../../images/home4.png';

function Section4() {
  return (
    <section className="section__container">
      <div className="section__column-left flex-between">
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

      <div className="section__column-right">
        <div className="section__image-container">
          <img src={home4} alt="section" />
        </div>
      </div>
    </section>
  );
}

export default Section4;