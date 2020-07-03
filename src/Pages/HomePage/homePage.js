import React from 'react';

import './homePage.scss';
import Img from '../../assets/Logo-alone.png'



const HomePage = (props) => {
    console.log(props);
    return (
      <div className="hp-app-container">
        <div className="hp-grid">
          <div className="hp-text">
            <p className="one">Where</p>
            <div className="hp-amber-text">
              <div className='hp-special-web'>
                <h1>
                  Web Creation
                </h1>
                <h1>
                  Web Development
                </h1>
              </div>
            </div>
            <p className="three">Come together.</p>
          </div>
          <div className="hp-logo">
            <img alt="" src={Img} />
          </div>
        </div>
      </div>
    );
}

export default HomePage;
