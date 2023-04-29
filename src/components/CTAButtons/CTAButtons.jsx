import React from 'react';
import './ctaButtons.css';
import {SlArrowRight} from 'react-icons/sl';

const buttonText = "Hover over me!"

const CTAButtons = () => {
  return (
    <section className='app__ctaButtons'>
        <div className='app__ctaButtons-container'>
            <div className='app__ctaButton1 app__ctaButtons-item'>
                <a href="" className='app__ctaButton1-cta'>
                {buttonText}
                <SlArrowRight className='app__ctaButton1-arrow1'/>
                <SlArrowRight className='app__ctaButton1-arrow2'/>
                <SlArrowRight className='app__ctaButton1-arrow3'/>
                </a>
            </div>
        </div>
        <h3>This is a collection of button hover effects. Primarily to be used as CTA's.</h3>
    </section>
  )
}

export default CTAButtons