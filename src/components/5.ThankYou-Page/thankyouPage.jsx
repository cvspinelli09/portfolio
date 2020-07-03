import React from "react";

import "./thankyouPage.scss";


const ThankYouPage = () => {
  return (
    <div className="tk-app-container">
      {/*  Top Header  */}
      <div className="tk-top-header-container">
        <div className="button">
          <a href="/webcreation">
            <button>Back</button>
          </a>
        </div>
        <div className="tk-top-header-text">
          <h1>Thank You!</h1>
          <p>You just made the right decision towards your success!</p>
        </div>

        <div className="tk-body-container">
          <div className='tk-body-title'>
            <h4>Thank you. Your order has been received.</h4>
          </div>

          <div className="tk-order">
            <div className="tk-order-display">
              <div className="tk-order-subdisplay">
                <div className="tk-order-description">
                  <p>Order number:</p>
                  <i>18514</i>
                </div>
                <div className="tk-order-desciption">
                  <p>Date:</p>
                  <i>July 2, 2020</i>
                </div>
                <div className="tk-order-desciption">
                  <p>Total:</p>
                  <i>$0.00</i>
                </div>
              </div>
            </div>
          </div>

          <div className="tk-download">
            <div className="tk-download-display">
              <h4>Downloads</h4>
              <div className="tk-download-subdisplay">
                <div className="tk-download-description">
                  <p>Product</p>
                  <i>Email Marketing Strategies Free</i>
                </div>
                <div className="tk-download-desciption">
                  <p>Expires</p>
                  <i>Never</i>
                </div>
                <div className="tk-download-description">
                  <p>Download</p>
                  <i>Email Marketing Strategies free</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Middle section  */}
      <div className="tk-follow-us">
        <h1>Follow Us</h1>
        <div className="tk-socials">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-youtube"></i>
        </div>
      </div>
    </div>
  );
}

export default ThankYouPage;
