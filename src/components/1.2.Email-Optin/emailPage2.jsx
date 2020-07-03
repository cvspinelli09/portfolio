import React from 'react';
// import Axios from 'axios';

import './emailPage2.scss'

import Img1 from '../../assets/faces.png';
import Img2 from '../../assets/face1.png';
import Img3 from '../../assets/star.png';
import Img4 from '../../assets/star1.png';
import Img5 from '../../assets/teacher.png';

class EmailPage2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: '',
            email: ''
        }
    }

    handleChange = (event) => {
      const target = event.target;
      const value = target.value;
      const fullName = target.fullName;
      const email = target.email;

      this.setState({
        [fullName]: value,
        [email]: value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault();


    }


    render() {
        return (
          <div className="optin-app-container">
            {/*  Top Header  */}
            <div className="top-header-container">
              <div className="button">
                <a href="/webcreation">
                  <button>Back</button>
                </a>
              </div>
              <div className="top-header-text">
                <h4>SEND EFFECTIVE-RESULT ORIENTED EMAILS</h4>
                <h1>
                  Learn How to Kick-Start With Email Marketing in This Free
                  Course
                </h1>
                <p>
                  Learn with one the Best Digital Marketing Agent in today's
                  world!
                </p>
              </div>
              <div className="form-container">
                <div className="form">
                  <form onSubmit={this.handleSubmit}>
                    <h2>GET YOUR FREE ACCESS NOW!</h2>
                    <p>FREE for a Limited Time</p>
                    <input
                      type="text"
                      placeholder="Full name"
                      onChange={this.handleChange}
                    ></input>
                    <input
                      type="text"
                      placeholder="Email address"
                      onChange={this.handleChange}
                    ></input>
                    <button className="btn">GIVE ME FREE ACCESS NOW!</button>
                  </form>
                </div>
                <div className="testimonials">
                  <div className="testim1">
                    <img alt="" src={Img1} />
                    <h2>Perfect Course!</h2>
                    <img alt="" src={Img3} />
                    <p>
                      Loren epulius, et bacilus, nec ulla, pulvinar depinus leo.
                    </p>
                    <h4>Emma Black</h4>
                  </div>
                  <div className="testim2">
                    <img alt="" src={Img2} />
                    <h2>Amazing & Useful Content</h2>
                    <img alt="" src={Img4} />
                    <p>
                      Loren epulius, et bacilus, nec ulla, pulvinar depinus leo.
                    </p>
                    <h4>John Doe</h4>
                  </div>
                </div>
              </div>
            </div>
            {/*  Middle section  */}
            <div className="middle-section">
              <div className="middle-title">
                <h1>What you'll Learn in This Course</h1>
              </div>
              <div className="grid">
                <div className="grid-content">
                  <div className="numbers">
                    <h1>01</h1>
                    <h3>Lesson 1</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="grid-content">
                  <div className="numbers">
                    <h1>02</h1>
                    <h3>Lesson 2</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="grid-content">
                  <div className="numbers">
                    <h1>03</h1>
                    <h3>Lesson 3</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="middle-section-teacher">
                <div className="left-side-teacher">
                  <h1>
                    Push Your Email Marketing Strategies to the Next Level in{" "}
                    <i> Just 3 Days!</i>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam. Donec at dolorem volup.
                  </p>
                </div>
                <div className="right-side-teacher">
                  <img alt="" src={Img5} />
                </div>
              </div>
            </div>
            <div className="bottom-section">
              <h1>Get Free Access to The Course</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <button className="btn">START THE FREE COURSE NOW</button>
            </div>
          </div>
        );    
    }
}

export default EmailPage2;
