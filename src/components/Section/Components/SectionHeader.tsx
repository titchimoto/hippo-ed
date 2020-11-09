import React from 'react';

type HeaderProps = {
  children?: React.ReactNode;
}

function SectionHeader({ children }: HeaderProps) {
  return (
    <div className="section__header-container">
      <h2 className="section__header">
        {children}
      </h2>
    </div>
  );
}

export default SectionHeader;
