import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import Header from './components/Header/header';
import HomePage from './Pages/HomePage/homePage2';
import PortfolioPage from './Pages/Portfolio/portfolio';
import WebCreationPage from './Pages/WebCreationPage/Web-Creations-Page';
import WebDevPage from './Pages/WebDevelopmentPage/Web-Dev-Page';
import ContactPage from './Pages/Contact/contactPage';
import AboutPage from './Pages/About/aboutPage';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

import EmailPage2 from './components/1.2.Email-Optin/emailPage2';
import SalesPage from './components/2.Sales-Page/salesPage';
import CheckoutPage from './components/3.Checkout-Page/checkoutPage';
import UpsellPage from './components/4.Upsell-Page/upsellPage';
import ThankyouPage from './components/5.ThankYou-Page/thankyouPage';



class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      sideDrawerOpen: false
     }
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen } 
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div className="App" style={{ height: "100%" }}>
        <Header drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen                                                                                                                                                                                                                                       } />
        {backdrop}
        <main style={{ marginTop: "90px" }}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/portfolio" component={PortfolioPage} />
            <Route exact path="/webcreation" component={WebCreationPage} />
            <Route exact path="/webdev" component={WebDevPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route path="/optin" component={EmailPage2} />
            <Route path="/sales" component={SalesPage} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route path="/upsell" component={UpsellPage} />
            <Route path="/thankyou" component={ThankyouPage} />
          </Switch>
        </main>
      </div>
    );
  };
};

export default App;
