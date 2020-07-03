import React from "react";
// import { Switch, Route } from "react-router-dom";

import "./portfolio.scss";
import Img1 from '../../assets/web-creation.jpg';
import Img2 from "../../assets/web-dev.jpg";

const PortfolioPage = (props) => {
  return (
    <div className="port-app-container">
      <div className="port-mp">
        <a href="/webcreation">
          <img alt="" src={Img1} />
        </a>
        <h1>Web Creation.</h1>
      </div>
      <div className="port-mp">
        <a href="/webdev">
          <img alt="" src={Img2} />
        </a>
        <h1>Web Development.</h1>
      </div>
    </div>
  );
};

export default PortfolioPage;
