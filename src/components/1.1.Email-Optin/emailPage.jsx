import React from 'react';

import './emailPage.scss';
import Ebook from '../../assets/capa-ebook.png';

const EmailPage = (props) => {
    console.log(props);
    return (
      <div className="email-container">
        <div className="email-optin">
          <div className="form-container">
            <h1>
              Faça o Download do eBook Durma Bem e conheça os Segredos para
              melhorar a qualidade do seu sono
            </h1>
            <form>
              <input type="text" placeholder="Nome" />
              <input type="email" placeholder="Email" />
              <button
                className="btn"
                onClick={() => props.history.push("/optin")}
              >
                EU QUERO O EBOOK
              </button>
            </form>
          </div>
          <div className="ebook-img-container">
            <img
              alt=""
              src={Ebook}
              className="ebook"
              onClick={() => props.history.push("/optin")}
            />
          </div>
        </div>
      </div>
    );
}

export default EmailPage;