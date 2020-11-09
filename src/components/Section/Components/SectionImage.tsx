import React from 'react';

type Props = {
  src: string;
}

function SectionImage({ src }: Props) {
  return (
    <div className="section__image-container">
      <img src={src} alt="section" />
    </div>
  );
}

export default SectionImage;
