import React from "react";
// import { Switch, Route } from "react-router-dom";

import "./portfolio.scss";
import Img from "../../assets/Logo-alone.png";
import Img1 from '../../assets/web-creation.jpg';
import Img2 from "../../assets/web-dev.jpg";

const PortfolioPage = (props) => {
  return (
    <div className="port-app-container">
      <div className="port-grid">
        <div className="port-mp">
          <img
            alt=""
            src={Img1}
            onClick={() => props.history.push("/webcreation")}
          />
          <h1>Web Creation.</h1>
        </div>
        <div className="port-logo">
          <img alt="" src={Img} />
        </div>
        <div className="port-mp">
          <img alt="" src={Img2} onClick={() => props.history.push("/webdev")} />
          <h1>Web Development.</h1>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
