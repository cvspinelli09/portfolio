import React from "react";

import "./Web-Dev-Page.scss";

import Img1 from '../../assets/demograpr.png';
import Img2 from '../../assets/weather.png';
import Img3 from '../../assets/buy-tickets.png';
import Img4 from '../../assets/ecom.png';
import Img5 from '../../assets/classic-car.png';
import Img6 from '../../assets/star-wars.png';



const WebDevPage = (props) => {
  console.log(props);
  return (
    <div className="wd-app-container">
      <section>
        <div className="wd-panels-grid">
          <a href="https://cvspinelli09.github.io/demographics/">
            <img src={Img1} alt="" />
          </a>
          <a href="https://cvspinelli09.github.io/classic-car/">
            <img src={Img5} alt="" />
          </a>
          <a href="https://cvspinelli09.github.io/buy-tickets/">
            <img src={Img3} alt="" />
          </a>
          <a href="https://crwn-09-live.herokuapp.com/">
            <img src={Img4} alt="" />
          </a>
          <a href="https://cvspinelli09.github.io/spinelli-my-weather/">
            <img src={Img2} alt="" />
          </a>
          <a href="https://cvspinelli09.github.io/star_wars_cards/">
            <img src={Img6} alt="" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default WebDevPage;
