import React, { useState } from 'react';
import './magicText.css';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { BsStars, BsStarFill, BsMoonStarsFill } from 'react-icons/bs';
import { images } from '../../constants';

const magicTextVariations = [
    {
        class: 'magic',
        prop1: '',
        prop2: '',
        prop3: '',
        prop4: '',
        propColor: ''
    },
    {
        class: 'stars',
        prop1: '',
        prop2: '',
        prop3: '',
        prop4: '',
    },
    {
        class: 'botanic',
        prop1: '',
        prop2: '',
        prop3: '',
        prop4: '',
    },
]

const MagicText = () => {
    const [selectedEffect, setSelectedEffect] = useState('magic')

  return (
    <section id='MagicText' className='app__MagicText'>
        <div className='app__MagicText-heading'>
            <h5>Hover your cursor over it!</h5>
            <AiOutlineCaretDown/>
        </div>
        <div className='app__MagicText-effect'>
            <BsStars alt="prop1" className='app__MagicText-effect-prop1' style={{fill: '#673AB7'}}/>
            <BsStarFill alt="prop2" className='app__MagicText-effect-prop2' style={{fill: '#673AB7'}}/>
            <BsMoonStarsFill alt="prop3" className='app__MagicText-effect-prop3' style={{fill: '#673AB7'}}/>
            <BsStars alt="prop4" className='app__MagicText-effect-prop4' style={{fill: '#673AB7'}}/>
            <h1
            className='magic'
            >
                The Magic Text Effect</h1>
        </div>
        <h3>Just a simple little text effect that applies a moving gradient to the text itself and also decorates it with animated props around the text. Assorted into separate css classes for easy application.</h3>
        <h3>Select one of the other variations of this effect:</h3>
        <div className="app__MagicText-variations">
            {magicTextVariations.map((variation) => (
                <div className="app__MagicText-variation">
                    <h2 style={{color: variation.propColor}}>{variation.class}</h2>
                </div>
            ))}
        </div>
    </section>
  )
}

export default MagicText