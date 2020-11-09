import React from 'react';

import '../Section.scss';

type Props = {
  children?: React.ReactNode;
}

function SectionSubHeader({ children }: Props) {
  return (
    <div className="section__subheader-container">
      <h3 className="section__subheader">
        {children}
      </h3>
      <div className="section__subheader-underline" />
    </div>
  );
}

export default SectionSubHeader;
