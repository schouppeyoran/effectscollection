import React from 'react';
import './effectsCollection.css';
import { effects } from '../../constants';

const EffectsCollection = () => {

    const getRandomColor = () => {
        // Generate a random color in hexadecimal format
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };
    
    const getRandomFlexValue = () => {
        // Generate a random number between 0.5 and 3 with one decimal place
        return (Math.random() * (3 - 0.3) + 0.3).toFixed(1);
    };

  return (
    <section id='effectsCollection' className='app__effectsCollection'>
        <div className="app__effectsCollection-container">
            {effects.map((effect, index) => (
                <a 
                className="app__effectsCollection-effect"
                style={{
                    backgroundColor: getRandomColor(),
                    flex: getRandomFlexValue()
                }}
                key={index}
                href={effect.link}
                >
                    <h1>{effect.label}</h1>
                </a>
            ))}
        </div>
    </section>
  )
}

export default EffectsCollection