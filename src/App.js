import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import Header from './components/Header/header';
import HomePage from './Pages/HomePage/homePage';
import PortfolioPage from './Pages/Portfolio/portfolio';
import WebCreationPage from './Pages/WebCreationPage/Web-Creations-Page';
import WebDevPage from './Pages/WebDevelopmentPage/Web-Dev-Page';
import EmailPage2 from './components/1.2.Email-Optin/emailPage2';
import SalesPage from './components/2.Sales-Page/salesPage';
import SalesPage2 from "./components/2.Sales-Page2/salesPage2-State";
import CheckoutPage from './components/3.Checkout-Page/checkoutPage';
import UpsellPage from './components/4.Upsell-Page/upsellPage';
import ThankyouPage from './components/5.ThankYou-Page/thankyouPage';


class App extends React.Component {
  constructor() {
    super();
    this.state = { }
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/webcreation" component={WebCreationPage} />
          <Route path="/optin" component={EmailPage2} />
          <Route path="/sales" component={SalesPage} />
          <Route path="/sales2" component={SalesPage2} />}
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/upsell" component={UpsellPage} />
          <Route path="/thankyou" component={ThankyouPage} />
          <Route exact path="/webdev" component={WebDevPage} />
        </Switch>
      </div>
    );
  };
};

export default App;
