import React, { useEffect, useRef } from 'react';
import './cardHover.css';



const CardHover = () => {

  const isMountedRef = useRef(true);

  const handleMouseMove = e => {
    if (!isMountedRef.current) {
      return;
    }

    const cards = document.getElementsByClassName("app__effectsCollection_CardHover-card");
    for(const card of cards) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  useEffect(() => {
    const cards = document.getElementById("CardHover-Cards");
    cards.addEventListener('mousemove', handleMouseMove);

    return () => {
      isMountedRef.current = false;
      cards.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id='cardHover' className='app__effectsCollection_CardHover'>
      <div className="app__effectsCollection_CardHover-cards" id='CardHover-Cards'>
        <div className="app__effectsCollection_CardHover-card">
          <div className="app__effectsCollection_CardHover-card-content">
            <h1>This effect is</h1>
          </div>
          <div className='app__effectsCollection-CardHover-card-border'/>
        </div>
        <div className="app__effectsCollection_CardHover-card">
          <div className="app__effectsCollection_CardHover-card-content">
            <h1>a mouse-tracking glow effect</h1>
          </div>
          <div className='app__effectsCollection-CardHover-card-border'/>
        </div>
        <div className="app__effectsCollection_CardHover-card">
          <div className="app__effectsCollection_CardHover-card-content">
            <h1>that not only illuminates the</h1>
          </div>
          <div className='app__effectsCollection-CardHover-card-border'/>
        </div>
        <div className="app__effectsCollection_CardHover-card">
          <div className="app__effectsCollection_CardHover-card-content">
            <h1>background of the cards,</h1>
          </div>
          <div className='app__effectsCollection-CardHover-card-border'/>
        </div>
        <div className="app__effectsCollection_CardHover-card">
          <div className="app__effectsCollection_CardHover-card-content">
            <h1>but also the border.</h1>
          </div>
          <div className='app__effectsCollection-CardHover-card-border'/>
        </div>
        <div className="app__effectsCollection_CardHover-card">
          <div className="app__effectsCollection_CardHover-card-content">
            <h1>And the border of the neighboring cards.</h1>
          </div>
          <div className='app__effectsCollection-CardHover-card-border'/>
        </div>
      </div>
      <h2>Why is this useful? It isn't. It's <span style={{ color: 'var(--color-primary)' }}>cool</span>. That's what it is.</h2>
    </section>
  )
}

export default CardHover