import React from 'react';
import './effectsCollection.css';
import { effects } from '../../constants';
import { Link } from 'react-router-dom';

const EffectsCollection = () => {

    const getRandomColor = () => {
        // Generate a random color in hexadecimal format
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };
    
    const getRandomFlexValue = () => {
        // Generate a random number between 0.5 and 3 with one decimal place
        return (Math.random() * (2.7 - 0.3) + 0.3).toFixed(1);
    };

  return (
    <section id='effectsCollection' className='app__effectsCollection'>
        <div className="app__effectsCollection-container">
            {effects.map((effect, index) => (
                <Link 
                className="app__effectsCollection-effect"
                style={{
                    backgroundColor: getRandomColor(),
                    flex: getRandomFlexValue()
                }}
                key={index}
                to={effect.link}
                >
                    <h1>{effect.label}</h1>
                </Link>
            ))}
        </div>
        <div className="app__effectsCollection-signature">
            <h3>Made by Yoran Schouppe</h3>
            <a href="https://yoranschouppe.com/">View Portfolio</a>
        </div>
    </section>
  )
}

export default EffectsCollection