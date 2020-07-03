import React from 'react';
// import { Link } from 'react-router-dom';

import Img from '../../assets/Logo-Spinelli-Web-Bold.png';
import HamburgerButton from '../SideDrawer/Hamburger-button';

import './header.scss';

const Header = (props) => {
    return (
      <header>
        <nav className="header">
          <div className="burger">
            <HamburgerButton click={props.drawerClickHandler} />
          </div>
          <div className="logo-container">
            <a href="/">
              <img alt="" src={Img} />
            </a>
          </div>
          <div className="spacer" />
          <div className="header-options">
            <div className="option">
              <a href="/about">ABOUT ME</a>
            </div>
            <div className="option">
              <a href="/portfolio">PORTFOLIO</a>
            </div>
            <div className="option">
              <a href="/contact">CONTACT</a>
            </div>
          </div>
        </nav>
      </header>
    );
}

export default Header;