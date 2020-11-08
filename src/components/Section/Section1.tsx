import React from 'react';
import PrimaryButton from '../Button/Button';

import './Section.scss';

import home1 from '../../images/home1.png';

function Section1() {
  return (
    <section className="section__container section__padded">
      <div className="section__column-left">
        <div className="section__header-container">
          <h2 className="section__header">
            Learn. Grow.<br />
            Thrive.
          </h2>
        </div>

        <div className="section__image-container">
          <img src={home1} alt="section" />
        </div>
      </div>
      
      <div className="section__column-right padded">
        <div className="section__subheader-container">
          <h3 className="section__subheader">
            At Hippo Education, we believe that medical education should upgrade
            your practice <em>and</em> your life.
          </h3>

          <div className="section__subheader-underline" />
        </div>

        <div className="section__content">
          This lifelong learning should be exciting, and something we look
          forward to. It should connect us to our fellow clinicians and remind
          us, as a community, why we practice medicine, not just how. We exist
          not only to change your practice, but to change your mind about what
          truly great education can achieve.
        </div>

        <div className="section__content">
          If you want to swap CME that merely checks the boxes for a community
          of like-minded people learning, growing, and doing their best work
          together—welcome.You’ve found what you’re looking for.
        </div>

        <div className="section__content">
          <strong>You've found what you're looking for.</strong>
        </div>

        <PrimaryButton />
      </div>
    </section>
  );
}

export default Section1;