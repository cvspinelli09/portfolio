import React from "react";
import ReactPlayer from 'react-player';

import "./salesPage2.scss";
import Img1 from '../../assets/spinelli-my-funnels-logo.png';
import Img2 from "../../assets/trustpilot-logo.png";
import Img3 from "../../assets/phone.png";
import Img4 from "../../assets/mail.png"; 
import Img5 from '../../assets/book.png';
import Img6 from "../../assets/european.jpg";
import Img7 from "../../assets/powerhouse.png";
import Img8 from "../../assets/eco-friendly.jpg";
import Img9 from "../../assets/london.jpg";
import Img10 from "../../assets/city.jpg";
import Img11 from "../../assets/dubai.jpg";

class SalesPage2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      tel: "",
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        tel: ""
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
  } 


  render() {
    return (
      <div className="sales2-container">
        {/* Top bar section */}
        <section>
          <div className="top-bar">
            <p>
              This is only an example of Sales Funnel we can build for you. We are
              by no means try to sell anything rather than the funnels design and
              production.
          </p>
          </div>
        </section>

        {/* Top header section with Logo and email and phone*/}
        <section>
          <div className="top-header">
            <div className="wrapper">
              <div className="logo">
                <img alt="" src={Img1} style={{ width: "380px" }} />
              </div>
              <div className="right-header">
                <div className="top-phone">
                  <img alt="" src={Img3} style={{ width: "22px" }} /> 0759 577
                9595
              </div>
                <div className="top-email">
                  <img alt="" src={Img4} style={{ width: "25px" }} />
                  <a
                    href="mailto:cvspinelli09@gmail.com"
                    style={{ color: "white" }}
                  >
                    {" "}
                  cvspinelli09@gmail.com
                </a>
                </div>
                <div className="trust-logo">
                  <img alt="" src={Img2} className="trust-logo" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Body Section with contact forms */}
        <section>
          <div className="main-header">
            <div className="wrapper">
              <div className="main-header-left">
                <h1>
                  Investment in <br />
                  <strong>PROPERTY DEVELOPMENT</strong>
                </h1>
                <h2>
                  <strong>The smarter alternative</strong>
                  <br />
                to buy-to-let
              </h2>
                <div className="green-line"></div>
                <div className="book">
                  <p>
                    Hunter Property introduce qualifying investors to Property
                  Bond issuers <br></br>
                    <span>*YOUR CAPITAL MAY BE AT RISK</span>
                  </p>
                  <img
                    alt=""
                    src={Img5}
                    style={{ width: "300px" }}
                    onClick={() => this.props.history.push("/checkout")}
                  />
                </div>
              </div>
              <div className="main-form">
                <h2>Download your FREE Investment Guide Now</h2>
                <div className="form">
                  <form>
                    <input
                      className="input-container"
                      placeholder="First Name"
                      type="text"

                    />
                    <input
                      className="input-container"
                      placeholder="Last Name"
                      type="text"
                      required
                    />
                    <input
                      className="input-container"
                      placeholder="Email"
                      type="email"
                      required
                    />
                    <input
                      className="input-container"
                      placeholder="Tel No"
                      type="text"
                      required
                    />
                    <input
                      className="input-comments"
                      placeholder="Comments"
                      type="text"
                    />
                    <p>
                      By submiting this form you agree with the Privacy Policy and
                      want to be contacted by Hunter Property
                  </p>
                    <input type="checkbox" />
                    <label> agree</label>
                    <button
                      className="btn"
                      onClick={() => this.props.history.push("/checkout")}
                    >
                      DOWNLOAD FREE GUIDE
                </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Body Middle Section with Investments Cards Opportunities */}
        <section>
          <div className="title-cards">
            <h1>Latest Investment Opportunites</h1>
          </div>
          <div className="card-wrapper">
            <div className="cards">
              <div className="invest-box">
                <img alt="" src={Img6} />
              </div>
              <div className="invest-box-text">
                <h2>
                  European <br />
                Property Bond
              </h2>
                <p>
                  Term: 2 - 5 years
                <br />
                income option available
              </p>
                <button className="button">Find out more</button>
              </div>
            </div>

            <div className="cards">
              <div className="invest-box">
                <img alt="" src={Img7} />
              </div>
              <div className="invest-box-text">
                <h2>
                  Northern <br />
                Powerhouse <br />
                Property Bond
              </h2>
                <p>
                  Term: 2 - 4 years
                <br />
                income option available
              </p>
                <button className="button">Find out more</button>
              </div>
            </div>

            <div className="cards">
              <div className="invest-box">
                <img alt="" src={Img8} />
              </div>
              <div className="invest-box-text">
                <h2>
                  Eco Friendly <br />
                Sustainable <br />
                Housing Bond
              </h2>
                <p>
                  Term:
                <br />
                12 months - 5 years
              </p>
                <button className="button">Find out more</button>
              </div>
            </div>

            <div className="cards">
              <div className="invest-box">
                <img alt="" src={Img9} />
              </div>
              <div className="invest-box-text">
                <h2>
                  London Commuter <br />
                Belt Bond
              </h2>
                <p>
                  Term:
                <br />
                18 months
              </p>
                <button className="button">Find out more</button>
              </div>
            </div>
          </div>

          <div className="card-wrapper-2">
            <div className="cards">
              <div className="invest-box">
                <img alt="" src={Img10} />
              </div>
              <div className="invest-box-text">
                <h2>
                  National Private <br />
                Rental Scheme <br />
                Bond
              </h2>
                <p>
                  Term:
                <br />
                10 months
              </p>
                <button className="button">Find out more</button>
              </div>
            </div>

            <div className="cards">
              <div className="invest-box">
                <img alt="" src={Img11} />
              </div>
              <div className="invest-box-text">
                <h2>
                  Exclusive Dubai <br />
                Hotel Bond
              </h2>
                <p>
                  Term:
                <br />
                18 months
              </p>
                <button className="button">Find out more</button>
              </div>
            </div>
          </div>
        </section>

        {/* Middle Section "How We Work" with Youtube Video */}
        <section>
          <div className="video-frame">
            <h1>Your Video Here</h1>
            <div className="frame">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=S1wehKlmMv4"
                className="react-player"
              />
            </div>
          </div>
        </section>

        {/* Bottom Section Message about trusty partners */}
        <section>
          <div className="message-bottom">
            <div className="background-layer">
              <h1>We partner with trusted developers</h1>
              <p>
                Only rigorously selected developers - verified, trusted <br />
              and with a proven track record.
            </p>
            </div>
          </div>
        </section>

        {/*  */}
      </div>
    );
  }
};

export default SalesPage2;
