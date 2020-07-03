import React from 'react';
// import { Switch, Route } from "react-router-dom";

import './Web-Creations-Page.scss';

import Img1 from '../../assets/optin.png';
import Img2 from '../../assets/sales.png';
// import Img3 from '../../assets/sales2.png';
import Img4 from '../../assets/checkout.png';
import Img5 from '../../assets/upsell.png';
import Img6 from "../../assets/thankyoupage.png";

const WebCreationPage = (props) => {
    console.log(props);
    return (
        <div className='fp-app-container'>
            <div className='button'>
                <button onClick={()=>props.history.push('/portfolio')} >Back</button>
            </div>
            <section>
                <div className='fp-panels-grid'>
                    <img src={Img1} alt='' onClick={()=>props.history.push('/optin')} />
                    <img src={Img2} alt='' onClick={() => props.history.push('/sales')}/>
                    {/*<img src={Img3} alt='' onClick={() => props.history.push('/sales2')}/>*/}
                    <img src={Img4} alt='' onClick={() => props.history.push('/checkout')}/>
                    <img src={Img5} alt='' onClick={() => props.history.push('/upsell')}/>
                    <img src={Img6} alt='' onClick={() => props.history.push('/thankyou')}/>
                </div>
            </section>
        </div>
    )
}

export default WebCreationPage;
