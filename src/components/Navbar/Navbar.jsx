import React, { useState } from 'react';
import './navbar.css';
import { ImMenu, ImCross, ImHome } from 'react-icons/im';
import { effects } from '../../constants';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
      <div className="app__navbar container">
        <div className="app__navbar-logo">
          <div>
            <h1>Yoran Schouppe</h1>
            <h2>Effects Collection</h2>
          </div>
        </div>
        <div className="app__navbar-home">
          <Link to=''><ImHome/></Link>
        </div>
        <div className="app__navbar-menu">
          {toggleMenu ? 
          <ImCross onClick={() => setToggleMenu(false)}/> 
          :
          <ImMenu onClick={() => setToggleMenu(true)}/> 
          }
          {toggleMenu && (
            <ul className='app__navbar-links'>
              {effects.map((effect) => (
                <li><a href={effect.link}>{effect.label}</a></li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar