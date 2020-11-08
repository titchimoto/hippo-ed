import React from 'react';
import PrimaryButton from '../Button/Button';

import './Section.scss';

import home3 from '../../images/home3.png';

function Section3() {
  return (
    <section className="section__container">
      <div className="section__column-left">
        <div className="section__image-container">
          <img src={home3} alt="section" />
        </div>
      </div>

      <div className="section__column-right flex-between">
        <div className="section__column-tight">
          <div className="section__header-container">
            <h2 className="section__header">
            </h2>
          </div>

          <div className="section__subheader-container">
            <h3 className="section__subheader">
              Unrivaled Educational Excellence
            </h3>

            <div className="section__subheader-underline" />
          </div>

          <div className="section__content">
            Our physician-led education is carefully designed and presented by
            some of the most qualified and passionate faculty in the world. It
            makes the most of your investment, energy, and intellect and delivers
            a lasting impact far beyond CME credit.
          </div>
          <PrimaryButton />
        </div>
      </div>
    </section>
  );
}

export default Section3;