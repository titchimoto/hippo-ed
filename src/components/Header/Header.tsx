import React from 'react';

import './Header.scss';

function Header() {
  return (
    <div className="header-container">
      <h1 className="header-container__headline">
        Empowering the people of medicine through education and community.
      </h1>
      <div className="hide-mobile">
        <button className="button__primary-cta">Explore Our Products</button>
      </div>
    </div>
  )
}

export default Header;
