import React from "react";
import ReactPlayer from 'react-player';

import "./salesPage2.scss";
import Img1 from '../../assets/Logo-property.png';
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


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
    
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    })

    return valid;
}



class SalesPage2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      tel: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        tel: ""
      }
    }
  }

  handleSubmit = (e) => {
    const { firstName, lastName, email, tel } = this.state;
    e.preventDefault();
    
    if (formValid(this.state)) {
        console.log(`
            --SUBMITTING--
            First Name: ${firstName}
            Last name: ${lastName}
            Email: ${email}
            tel: ${tel}
        `);
    } else {
        alert('Please Enter Valid Data');
    }
  };
  
  handleChange = e => {
      e.preventDefault();
      const { name, value } = e.target;
      let formErrors = { ...this.state.formErrors};

    //   console.log('name: ', name);
    //   console.log('value: ', value);

      switch (name) {
          case "firstName":
              formErrors.firstName = 
                value.length < 3 
                ? "minimum 3 characters required" 
                : "";
              break;
          case "lastName":
              formErrors.lastName =
                value.length < 3 
                ? "minimum 3 characters required" 
                : "";
              break;
          case "Email":
              formErrors.email = 
                emailRegex.test(value)
                ? "" 
                : "invalid email address";
              break;
          case "Tel":
              formErrors.tel =
                value.length < 7 
                ? "invalid phone number" 
                : "";
              break;
            default:
                break;
      }

      this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  }


  render() {
    const { formErrors } = this.state;

    return (
      <div className="sales2-container">
        

        {/* Top header section with Logo and email and phone*/}
        <section>
          <div className="sales2-top-header">
            <div className="wrapper">
              <div className="logo">
                <img alt="" src={Img1} style={{ width: "380px" }} />
              </div>
              <div className="right-header">
                <div className="top-phone">
                  <img alt="" src={Img3} style={{ width: "22px" }} /> 0204 588
                  4880
                </div>
                <div className="top-email">
                  <img alt="" src={Img4} style={{ width: "25px" }} />
                  <a
                    href="mailto:contact@propertyinc.com"
                    style={{ color: "white" }}
                  >
                    {" "}
                    contact@propertyinc.com
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
          <div className="sales2-main-header">
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
                    Property Investment Experts introduce qualifying investors
                    to Property Bond issuers <br></br>
                    <span>*YOUR CAPITAL MAY BE AT RISK</span>
                  </p>
                  <img
                    alt=""
                    src={Img5}
                    style={{ width: "300px" }}
                    
                  />
                </div>
              </div>
              <div className="sales2-main-form">
                <h2>Download your FREE Investment Guide Now</h2>
                <div className="form">
                  <form onSubmit={this.handleSubmit} noValidate>
                    <input
                      className={
                        formErrors.firstName.length > 0
                          ? "error"
                          : "input-container"
                      }
                      placeholder="First Name"
                      type="text"
                      name="firstName"
                      noValidate
                      onChange={this.handleChange}
                    />
                    {formErrors.firstName.length > 0 && (
                      <span className="errorMessage">
                        {formErrors.firstName}
                      </span>
                    )}

                    <input
                      className={
                        formErrors.lastName.length > 0
                          ? "error"
                          : "input-container"
                      }
                      placeholder="Last Name"
                      type="text"
                      name="lastName"
                      noValidate
                      onChange={this.handleChange}
                    />
                    {formErrors.lastName.length > 0 && (
                      <span className="errorMessage">
                        {formErrors.lastName}
                      </span>
                    )}

                    <input
                      className={
                        formErrors.email.length > 0
                          ? "error"
                          : "input-container"
                      }
                      placeholder="Email"
                      type="email"
                      name="email"
                      noValidate
                      onChange={this.handleChange}
                    />
                    {formErrors.email.length > 0 && (
                      <span className="errorMessage">{formErrors.email}</span>
                    )}

                    <input
                      className={
                        formErrors.tel.length > 0 ? "error" : "input-container"
                      }
                      placeholder="Tel No"
                      type="text"
                      name="tel"
                      noValidate
                      onChange={this.handleChange}
                    />
                    {formErrors.tel.length > 0 && (
                      <span className="errorMessage">{formErrors.tel}</span>
                    )}

                    <input
                      className="input-comments"
                      placeholder="Comments"
                      type="text"
                      name="comments"
                      noValidate
                      onChange={this.handleChange}
                    />

                    <p>
                      By submiting this form you agree with the Privacy Policy
                      and want to be contacted by Hunter Property
                    </p>
                    <div className="sales2-input-label">
                      <input type="checkbox" />
                      <label> agree</label>
                    </div>
                    <button className="btn" onSubmit={this.handleSubmit}>
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
