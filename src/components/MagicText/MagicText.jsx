import React, { useState, useEffect } from 'react';
import './magicText.css';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { BsStars, BsStarFill, BsMoonStarsFill, BsStar, BsFlower1 } from 'react-icons/bs';
import { TbPlant2 } from 'react-icons/tb';
import { GiSolidLeaf } from 'react-icons/gi';
import { images } from '../../constants';

const magicTextVariations = [
    {
        class: 'magic',
        prop1: <BsStars/>,
        prop2: <BsStarFill/>,
        prop3: <BsMoonStarsFill/>,
        prop4: <BsStars/>,
        propColor: '#673AB7'
    },
    {
        class: 'stars',
        prop1: <BsStarFill/>,
        prop2: <BsStar/>,
        prop3: <BsStarFill/>,
        prop4: <BsStar/>,
        propColor: '#ffcc66'
    },
    {
        class: 'botanic',
        prop1: <GiSolidLeaf/>,
        prop2: <BsFlower1/>,
        prop3: <GiSolidLeaf/>,
        prop4: <TbPlant2/>,
        propColor: '#9b1b30'
    },
]

const MagicText = () => {
    const [selectedEffect, setSelectedEffect] = useState(0);
    const [fadeScaleIn, setFadeScaleIn] = useState(false);
    const [iconPositions, setIconPositions] = useState({
        prop1: getRandomPosition(),
        prop2: getRandomPosition(),
        prop3: getRandomPosition(),
        prop4: getRandomPosition(),
    });

    function getRandomPosition(minvalue = 0, maxvalue = 0) {
        let num = Math.floor(Math.random() * 101);
        while (num > maxvalue || num < minvalue) {
          num = Math.floor(Math.random() * 101);
        }
        return num + '%';
    }

    useEffect(() => {
        if (fadeScaleIn) {
            const timeoutId = setTimeout(() => {
            setFadeScaleIn(false);
            }, 3000);
            return () => clearTimeout(timeoutId);
        }
    }, [fadeScaleIn]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIconPositions({
                prop1: getRandomPosition(0,25),
                prop2: getRandomPosition(25,50),
                prop3: getRandomPosition(50,75),
                prop4: getRandomPosition(75,100),
            });
        }, 6000);
        return () => clearInterval(intervalId);
    }, []);

    const handleEffectChange = (index) => {
        setSelectedEffect(index);
        setFadeScaleIn(true);
    };

    const selectedIcon1 = magicTextVariations[selectedEffect].prop1;
    const selectedIcon2 = magicTextVariations[selectedEffect].prop2;
    const selectedIcon3 = magicTextVariations[selectedEffect].prop3;
    const selectedIcon4 = magicTextVariations[selectedEffect].prop4;

  return (
    <section id='MagicText' className='app__MagicText'>
        <div className='app__MagicText-heading'>
            <h5>Hover your cursor over the text!</h5>
            <AiOutlineCaretDown/>
        </div>
        <div className={`app__MagicText-effect ${fadeScaleIn ? 'fade-scale-in' : ''}`}>
        <selectedIcon1 className="app__MagicText-effect-prop1" style={{color: magicTextVariations[selectedEffect].propColor, left: iconPositions.prop1}}>{selectedIcon1}</selectedIcon1>
        <selectedIcon2 className="app__MagicText-effect-prop2" style={{color: magicTextVariations[selectedEffect].propColor, left: iconPositions.prop2}}>{selectedIcon2}</selectedIcon2>
        <selectedIcon3 className="app__MagicText-effect-prop3" style={{color: magicTextVariations[selectedEffect].propColor, left: iconPositions.prop3}}>{selectedIcon3}</selectedIcon3>
        <selectedIcon4 className="app__MagicText-effect-prop4" style={{color: magicTextVariations[selectedEffect].propColor, left: iconPositions.prop4}}>{selectedIcon4}</selectedIcon4>
            <h1 className={magicTextVariations[selectedEffect].class}>
                The {magicTextVariations[selectedEffect].class} Text Effect
            </h1>
        </div>
        <h3>Just a simple little text effect that applies a moving gradient to the text itself and also decorates it with randomly positioned animated props around the text. Assorted into separate css classes for easy application.</h3>
        <h3>Select one of the other variations of this effect:</h3>
        <div className="app__MagicText-variations">
            {magicTextVariations.map((variation, index) => (
                <div className="app__MagicText-variation" onClick={() => handleEffectChange(index)}>
                    <h2 style={{color: variation.propColor}}>{variation.class}</h2>
                    <div className="app__MagicText-variation-backdrop" style={{background: variation.propColor}}/>
                </div>
            ))}
        </div>
    </section>
  )
}

export default MagicText