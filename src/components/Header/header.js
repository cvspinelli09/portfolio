import React from 'react';
import { Link } from 'react-router-dom';

import Img from '../../assets/Logo-Spinelli-Web-Bold.png';

import './header.scss';

const Header = () => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/' >
                <img alt='' src={Img} />
            </Link>
            <div className='header-options'>
                <Link className='option' to='/about' >
                    ABOUT ME
                </Link>
                <Link className='option' to='/portfolio' >
                    PORTFOLIO
                </Link>
                <Link className='option' to='/contact' >
                    CONTACT
                </Link>
            </div>
        </div>
    )
}

export default Header;