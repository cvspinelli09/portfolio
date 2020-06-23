import React from 'react';
// import { Switch, Route } from "react-router-dom";
import Particles from 'react-particles-js';

import './homePage.scss';
import Img from '../../assets/Logo-alone.png'


const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

const HomePage = (props) => {
    console.log(props);
    return (
      <div className="hp-app-container">
        <Particles className="particles" params={particlesOptions} />
        <div className='hp-grid'>
          <div className="hp">
            <h1>Web Creation.</h1>
          </div>
          <div className="hp">
            <img alt="" src={Img} />
          </div>
          <div className="hp">
            <h1>Web Development.</h1>
          </div>
        </div>
      </div>
    );
}

export default HomePage;
