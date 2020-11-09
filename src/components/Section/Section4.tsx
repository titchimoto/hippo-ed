import React from 'react';
import SectionWrapper from './SectionWrapper';
import SectionSubHeader from './Components/SectionSubHeader';
import SectionImage from './Components/SectionImage';
import SectionContent from './Components/SectionContent';

import './Section.scss';
import home4 from '../../images/home4.png';

function Section4() {

  return (
    <SectionWrapper>
      <div className="section__column flex-between">
        <div className="section__column-tight">
          <SectionSubHeader>
            However and Whenever Your Need It
          </SectionSubHeader>

          <SectionContent>
            Get education that seamlessly fits into your busy life with
            convenient, tech-forward podcasts, video lectures, and articles, all
            on the go from your phone or tablet.
          </SectionContent>
        </div>
      </div>

      <div className="section__column">
        <SectionImage src={home4} />
      </div>
    </SectionWrapper>
  );
}

export default Section4;