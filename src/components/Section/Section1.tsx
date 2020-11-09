import React from 'react';
import PrimaryButton from '../Button/Button';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './Components/SectionHeader';
import SectionSubHeader from './Components/SectionSubHeader';
import SectionImage from './Components/SectionImage';
import SectionContent from './Components/SectionContent';

import './Section.scss';
import home1 from '../../images/home1.png';

function Section1() {

  return (
    <SectionWrapper padded>
      <div className="section__column">
        <SectionHeader>
          Learn. Grow.<br />
          Thrive.
        </SectionHeader>

        <SectionImage src={home1} />
      </div>
      
      <div className="section__column padded">
        <SectionSubHeader>
          At Hippo Education, we believe that medical education should upgrade
          your practice <em>and</em> your life.
        </SectionSubHeader>

        <SectionContent>
          This lifelong learning should be exciting, and something we look
          forward to. It should connect us to our fellow clinicians and remind
          us, as a community, why we practice medicine, not just how. We exist
          not only to change your practice, but to change your mind about what
          truly great education can achieve.
        </SectionContent>



        <SectionContent>
          If you want to swap CME that merely checks the boxes for a community
          of like-minded people learning, growing, and doing their best work
          together—welcome.You’ve found what you’re looking for.
        </SectionContent>

        <SectionContent>
          <strong>You've found what you're looking for.</strong>
        </SectionContent>

        <PrimaryButton />
      </div>
    </SectionWrapper>
  );
}

export default Section1;