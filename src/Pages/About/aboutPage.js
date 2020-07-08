import React from 'react';

import AboutContent from '../../components/About-Content/about-content';
import AboutContent2 from '../../components/About-Content/about-content2';

import './aboutPage.scss';
import Img from '../../assets/mac.jpg';

const AboutPage = () => {
    return (
        <div className='about-app-container'>
            <div className='ab-wrapper-container'>

                <div className='ab-card-container'>
                    <div className='ab-card-top'>
                        <img alt='' src={Img} />
                    </div>
                    <div className='ab-card-names'>
                        <h1>Cristian Spinelli</h1>
                        <p>Web Developer</p>
                    </div>
                    <div className='ab-card-btn'>
                        <a href='/public/CV.pdf' download><button>Download CV</button></a>
                    </div>
                    <div className='ab-card-socials'>
                        <a href='https://github.com/cvspinelli09'><i className='fa fa-github'></i></a>
                        <a href='https://www.linkedin.com/in/cristian-spinelli-villaverde/'><i className='fa fa-linkedin'></i></a>
                        <a href='https://twitter.com/cris_spin09'><i className='fa fa-twitter'></i></a>
                    </div>
                </div>

                <div className="tabs">
                    <div className="tab">
                        <input type="radio" id="tab-1" name="tab-group-1" defaultChecked/>
                            <label htmlFor="tab-1">About Me</label>

                            <div className="content">
                                <AboutContent />
                            </div> 
                    </div>
                    <div className="tab">
                        <input type="radio" id="tab-2" name="tab-group-1"/>
                            <label htmlFor="tab-2">My Skills</label>

                            <div className="content">
                                <AboutContent2 />
                            </div> 
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutPage;