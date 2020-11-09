import React from 'react';

import '../Section.scss';

type HeaderProps = {
  children?: React.ReactNode;
}

function SectionSubHeader({ children }: HeaderProps) {

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
