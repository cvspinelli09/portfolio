import React from 'react';


import './Hamburger-button.scss';

const HamburgerButton = props => {
    return (
      <button className='toggle-button' onClick={props.click} >
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
      </button>
    );
}

export default HamburgerButton;