import React from "react";
import Axios from "axios";

import "./contactPage.scss";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      emailSent: null,
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    const email = target.email;
    const message = target.message;

    this.setState({
      [name]: value,
      [email]: value,
      [message]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    Axios.post("http://localhost:8080/email", this.state)
      .then((res) => {
        console.log(res);
        if (res.data) {
          this.setState({
            emailSent: true,
          });
        } else {
          this.setState({
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);

        this.setState({
          emailSent: false,
        });
      });
  };

  render() {
    return (
      <div className="contact-app-container">
        <div className="contact-form-title">
          <div className="contact-title-container">
            <h2>PASS THE MESSAGE</h2>
            <hr></hr>
          </div>

          <div className="contact-ways-container">
            <div className="contact-ways">
              <i className="fa fa-map-marker"></i>
              <p>London, UK</p>
            </div>
            <div className="contact-ways">
              <a href='mailto:cvillaverde09@gmail.com?subject=Mail from Our Site'>
              <i className="fa fa-envelope"></i>
              </a>
              <p>cvspinelli09@gmail.com</p>
            </div>
            <div className="contact-ways">
              <i className="fa fa-phone"></i>
              <p>+44 0759 577 9595</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
