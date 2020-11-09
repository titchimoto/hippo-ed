import React from 'react';

type HeaderProps = {
  src: string;
}

function SectionImage({ src }: HeaderProps) {

  return (
    <div className="section__image-container">
      <img src={src} alt="section" />
    </div>
  );
}

export default SectionImage;
