import React from 'react';

import './SideDrawer.scss';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
      <nav className={drawerClasses}>
        <ul>
          <li>
            <a href="/about">About Me</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
}

export default SideDrawer;