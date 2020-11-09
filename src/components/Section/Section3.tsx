import React from 'react';
import PrimaryButton from '../Button/Button';
import SectionWrapper from './SectionWrapper';
import SectionSubHeader from './Components/SectionSubHeader';
import SectionImage from './Components/SectionImage';
import SectionContent from './Components/SectionContent';

import './Section.scss';
import home3 from '../../images/home3.png';

function Section3() {
  return (
    <SectionWrapper>
      <div className="section__column">
        <SectionImage src={home3} />
      </div>

      <div className="section__column flex-between">
        <div className="section__column-tight">
          <SectionSubHeader>
            Unrivaled Educational Excellence
          </SectionSubHeader>

          <SectionContent>
            Our physician-led education is carefully designed and presented by
            some of the most qualified and passionate faculty in the world. It
            makes the most of your investment, energy, and intellect and delivers
            a lasting impact far beyond CME credit.
          </SectionContent>

          <PrimaryButton />
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Section3;