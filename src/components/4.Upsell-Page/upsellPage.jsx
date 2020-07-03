import React from "react";

import "./upsellPage.scss";

import Img1 from '../../assets/cosmetics-set.png';

const UpsellPage = (props) => {
  return (
    <div className="upsell-app-container">
      <div className="upsell-wrapper-container">
        <div className="button">
          <a href="/webcreation">
            <button>Back</button>
          </a>
        </div>
        {/*  TOP-HEADER  */}
        <div className="upsell-header-container">
          <div className="upsell-top-header">
            {/* Progress-Bar */}
            <div className="upsell-top-header-order-bar">
              <h4>Order Process</h4>
              <div className="my-Progress">
                <div className="my-Bar"></div>
              </div>
            </div>
            <div className="upsell-header-pannel">
              <div className="upsell-header-left">
                <h1>WAIT!</h1>
                <h3>Before You Go...!</h3>
                <p>
                  Add this Natural Pack Kit <br />
                  to Your Order *
                </p>
              </div>
              <div className="upsell-header-right">
                <img alt="" src={Img1} />
              </div>
            </div>
          </div>
        </div>
        <div className="upsell-body-section">
          <div className="upsell-text">
            <h2>GET THIS NATURAL PACK ONE TIME COMBO OFFER</h2>
            <h3>* You Will NEVER See This Offer Again</h3>
            <span>AT JUST $99</span>
            <p>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button>YES, I WANT IT!</button>
            <p className="pass">I'll Pass</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpsellPage;
