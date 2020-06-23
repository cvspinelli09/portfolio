import React from "react";

import "./checkoutPage.scss";
import Img1 from '../../assets/cosmetics.png';
import Img2 from '../../assets/icons8-keepass-96.png';
import Img3 from '../../assets/icons8-application-shield-96.png';
import Img4 from '../../assets/icons8-verified-badge-96.png';
import Img5 from '../../assets/30-Day-Guarantee-1.png';


class CheckoutPage extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      showContent: false
    }
  }
  toggle = e => {
    this.setState({
      showContent: !this.state.showContent
    })
  }

  render() {
    const { showContent } = this.state;
    return (
      <div className='checkout-page-container'>
        {/* Top Header */}
        <div className='checkout-header-container'>
          <div className='checkout-upper-container'>
            <div className='checkout-upper-left-side'>
              <img alt='' src={Img1} style={{ height: '200' }} />
            </div>
            <div className='checkout-upper-right-side'>
              <h1>Herbal Skin Crème</h1>
              <p>Adipiscing elit ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo luctus nec.</p>
            </div>
          </div>
          <div className='checkout-upper-grid'>
            <div className='checkout-grid'>
              <img alt='' src={Img2} />
              <span>100% Secure<br />Transactions</span>

            </div>
            <div className='checkout-grid'>
              <img alt='' src={Img3} />
              <span>We Protect<br />Your Data</span>

            </div>
            <div className='checkout-grid'>
              <img alt='' src={Img4} />
              <span>100% Genuine<br />Product</span>
            </div>
          </div>
        </div>

        {/* Middle Form Section*/}
        <div className='checkout-middle-section'>
          <div className='checkout-form-container'>
            <form>
              <div className='checkout-row'>
                <div className='col-50'>
                  <h3>Billing details</h3>
                  <div className='two-input-row'>
                    <input type='text' name='firstname' id='fname' placeholder='First name' />
                    <input type='text' name='lastname' id='lname' placeholder='Last name' />
                  </div>
                  <div className='two-input-row'>
                    <input type='text' name='address' id='address' placeholder='Street address' />
                    <input type='text' name='address2' id='address2' placeholder='Address complement' />
                  </div>
                  <div className='three-input-row'>
                    <input type='text' name='address3' id='address3' placeholder='Town / City' />
                    <input type='text' name='address4' id='address4' placeholder='State / County' />
                    <input type='text' name='address5' id='address5' placeholder='Postcode / ZIP' />
                  </div>
                  <div className='two-input-row'>
                    <input type='text' name='phone' id='phone' placeholder='Phone' />
                    <input type='text' name='email' id='email' placeholder='Email' />
                  </div>
                  <h3>Additional information</h3>
                  <input type='text' name='info' className='info' placeholder='Order notes (optional)' />
                  <h3>Your order</h3>
                  <table className='checkout-order-grid'>
                    <tr className='order-strong'>
                      <th>Product</th>
                      <th>Total</th>
                    </tr>
                    <tr className='order-description'>
                      <td>Herbal Skin Crème Kit x 1</td>
                      <td>$62.00</td>
                    </tr>
                    <tr className='order-description'>
                      <td>Subtotal</td>
                      <td>$62.00</td>
                    </tr>

                    <tr className='order-description'>
                      <td>Shipping</td>
                      <td>$8.00</td>
                    </tr>

                    <tr className='order-strong'>
                      <th>Total</th>
                      <th>$70.00</th>
                    </tr>
                  </table>
                  <hr />
                  <div className='coupon-container'>
                    <input type='coupon' name='coupon' placeholder='Coupon Code' />
                    <button type='button' name='button' placeholder='Apply' onClick={() => this.props.history.push("/upsell")}>Apply</button>
                  </div>
                  <hr />
                  
                  <form>
                      <div className='radio-button-container'>
                        <label className='radio-container' >
                          <input 
                            type='radio' 
                            name='card-payment'
                            value='option1'
                            className='inner-input'
                          />
                          PayPal
                        </label>
                        <label className='radio-container'>
                          <input
                            type='radio'
                            name='card-payment'
                            value='option2'
                            className='inner-input'
                            onClick={this.toggle}
                          />
                          Credit Card
                        </label>
                      </div>
                  </form>
                  {showContent === false ? "" :
                    <div id='card-payment'>
                      <h4>Accepted Credit and Debit Cards</h4>
                      <div className='checkout-icon-container'>
                        <div><i className='fa fa-cc-visa' style={{ color: '#42A5F5', background: '#fff' }} ></i></div>
                        <div><i className='fa fa-cc-amex' style={{ color: '#42A5F5', background: '#fff' }} ></i></div>
                        <div><i className='fa fa-cc-mastercard' style={{ color: '#42A5F5', background: '#fff' }} ></i></div>
                      </div>
                      <input type='text' name='name-card' placeholder='Name on Card' />
                      <input type='text' name='name-card' placeholder='Card Number' />
                      <div className='three-input-row'>
                        <input type='text' name='card1' placeholder='Exp Month' />
                        <input type='text' name='card2' placeholder='Exp Year' />
                        <input type='text' name='card3' placeholder='CVV' />
                      </div>
                    </div>
                  }
                  <button type='button' name='button' placeholder='Place-order' onClick={() => this.props.history.push("/upsell")} >Place order</button>
                  <div className='money-back'>
                    <img alt='' src={Img5} />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default CheckoutPage;

