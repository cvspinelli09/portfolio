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
      <div className="button">
        <button onClick={() => props.history.push("/portfolio")}>Back</button>
      </div>
      <section>
        <div className="wd-panels-grid">
          <div className="wd-container">
            <img src={Img1} alt="" className="wd-image" />
            <div className="wd-middle">
              <div className="wd-text">
                <a href="https://github.com/cvspinelli09/demographics">
                  View Code
                </a>
              </div>
              <div className="wd-text">
                <a href="https://cvspinelli09.github.io/demographics/">
                  View Live
                </a>
              </div>
            </div>
          </div>

          <div className="wd-container">
            <img src={Img5} alt="" className="wd-image" />
            <div className="wd-middle">
              <div className="wd-text">
                <a href="https://github.com/cvspinelli09/classic-car">
                  View Code
                </a>
              </div>
              <div className="wd-text">
                <a href="https://cvspinelli09.github.io/classic-car/">
                  View Live
                </a>
              </div>
            </div>
          </div>

          <div className="wd-container">
            <img src={Img3} alt="" className="wd-image" />
            <div className="wd-middle">
              <div className="wd-text">
                <a href="https://github.com/cvspinelli09/buy-tickets">
                  View Code
                </a>
              </div>
              <div className="wd-text">
                <a href="https://cvspinelli09.github.io/buy-tickets/">
                  View Live
                </a>
              </div>
            </div>
          </div>

          <div className="wd-container">
            <img src={Img4} alt="" className="wd-image" />
            <div className="wd-middle">
              <div className="wd-text">
                <a href="https://github.com/cvspinelli09/ecom-clothing">
                  View Code
                </a>
              </div>
              <div className="wd-text">
                <a href="https://crwn-09-live.herokuapp.com/">View Live</a>
              </div>
            </div>
          </div>

          <div className="wd-container">
            <img src={Img2} alt="" className="wd-image" />
            <div className="wd-middle">
              <div className="wd-text">
                <a href="https://github.com/cvspinelli09/spinelli-my-weather">
                  View Code
                </a>
              </div>
              <div className="wd-text">
                <a href="https://cvspinelli09.github.io/spinelli-my-weather/">
                  View Live
                </a>
              </div>
            </div>
          </div>

          <div className="wd-container">
            <img src={Img6} alt="" className="wd-image" />
            <div className="wd-middle">
              <div className="wd-text">
                <a href="https://github.com/cvspinelli09/star_wars_cards">
                  View Code
                </a>
              </div>
              <div className="wd-text">
                <a href="https://cvspinelli09.github.io/star_wars_cards/">
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevPage;
