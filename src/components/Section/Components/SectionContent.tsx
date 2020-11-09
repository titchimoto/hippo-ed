import React from 'react';

type HeaderProps = {
  children?: React.ReactNode;
}

function SectionContent({ children }: HeaderProps) {

  return (
    <div className="section__content">
      {children}
    </div>
  );
}

export default SectionContent;
