import React from 'react';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './Components/SectionHeader';
import SectionSubHeader from './Components/SectionSubHeader';
import SectionImage from './Components/SectionImage';
import SectionContent from './Components/SectionContent';

import './Section.scss';
import home2 from '../../images/home2.png';

function Section2() {

  return (
    <SectionWrapper>
      <div className="section__column">
        <div className="section__column-tight">
          <SectionHeader>
            Education Designed for People Like You
          </SectionHeader>

          {/* This is a little weird but given the time constraint opting to just
          use an entirely separate DOM element for mobile/desktop to get the correct
          order as per the design. With a little more time, I would use some 
          re-ordering with the flex order property  */}
          <div className="hide-desktop">
            <SectionImage src={home2} />
          </div>

          <SectionSubHeader>
            Authentic, Engaging, and <em>Human</em>
          </SectionSubHeader>

          <SectionContent>
            We’re obsessed with making education that respects your time,
            attention span, and humanity. Every piece of education we produce is
            made with intention for a consistently rewarding learning experience.
          </SectionContent>
        </div>
      </div>
      
      <div className="section__column">
        <div className="hide-mobile">
          <SectionImage src={home2} />
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Section2;