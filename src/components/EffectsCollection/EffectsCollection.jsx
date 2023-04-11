import React from 'react';
import './effectsCollection.css';

const effects = [
    {
        label: 'effect 1',
        link: '#'
    },
    {
        label: 'effect 2',
        link: '#'
    },
    {
        label: 'effect 3',
        link: '#'
    },
    {
        label: 'effect 4',
        link: '#'
    },
    {
        label: 'effect 5',
        link: '#'
    },
    {
        label: 'effect 6',
        link: '#'
    },
    {
        label: 'effect 7',
        link: '#'
    },
    {
        label: 'effect 8',
        link: '#'
    },
    {
        label: 'effect 9',
        link: '#'
    },
    
]

const EffectsCollection = () => {

    const getRandomColor = () => {
        // Generate a random color in hexadecimal format
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };
    
    const getRandomFlexValue = () => {
        // Generate a random number between 0.5 and 3 with one decimal place
        return (Math.random() * (3 - 0.5) + 0.5).toFixed(1);
    };

  return (
    <section id='effectsCollection' className='app__effectsCollection'>
        <div className="app__effectsCollection-container">
            {effects.map((effect, index) => (
                <div 
                className="app__effectsCollection-effect"
                style={{
                    backgroundColor: getRandomColor(),
                    flex: getRandomFlexValue()
                }}
                key={index}
                >
                    <h1>{effect.label}</h1>
                    <a href={effect.link}>Go there</a>
                </div>
            ))}
        </div>
    </section>
  )
}

export default EffectsCollection