import React from "react";

import "./homePage2.scss";
import Img from "../../assets/Logo-alone.png";

const HomePage = (props) => {
  console.log(props);
  return (
    <div className="hp-app-container">
      <div className='hp-container'>
        <div className="hp-left-side-container">
          <p className="hp-one">Where</p>
          <h1>
            Web Creation<strong>{" "}&</strong>
          </h1>
          <h1>
            Web Development
          </h1>
          <p className="hp-two">Come together.</p>
        </div>
        <div className="hp-right-side-container">
          <img alt="" src={Img} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
