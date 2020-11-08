import React from 'react';

import './MainNav.scss';
import logo from '../../images/hippo_logo.svg';
import hamburger from '../../images/hamburger.svg';

function MainNav() {
  return (
    <nav className="main-nav">
      <div className="main-nav__container flex-between">
        <div className="main-nav__hamburger">
          <img src={hamburger} alt="Mobile Menu" />
        </div>
        <div className="main-nav__logo">
          <img src={logo} alt="Hippo Logo" />
        </div>
        <div className="main-nav__actions flex-between">
          <div className="main-nav__products">
            <div className="main-nav__products-large">Products</div>
            <div className="main-nav__products-small">from Hippo</div>
          </div>
          <div className="main-nav__actions-divider"></div>
          <div className="main-nav__signin">
            <button className="main-nav__signin-button">Sign In</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
