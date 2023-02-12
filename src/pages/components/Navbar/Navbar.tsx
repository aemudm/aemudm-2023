import React, { useState } from 'react';
import './Navbar.scss'

import logo from '../../../assets/logoWhite.png';
import Button from '../../Landing/components/Button/Button';
import { TiArrowSortedDown } from 'react-icons/ti';
import { GiBookCover, GiHouse, GiSoccerBall, GiShakingHands } from 'react-icons/gi';

const burgerIcon = <TiArrowSortedDown style={{
  color: 'white',
  fontSize: '20px'
}} />

const book = <GiBookCover style={{color: '#177140', fontSize: '20px'}}/>
const house = <GiHouse style={{color: '#177140', fontSize: '20px'}}/>
const soccerBall = <GiSoccerBall style={{color: '#177140', fontSize: '20px'}}/>
const hands = <GiShakingHands style={{color: '#177140', fontSize: '20px'}}/>

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    setToggleMenu(!toggleMenu)
  }

  const links = [
    { name: 'Accueil', link: '#', icon: house },
    { name: 'Activités', link: '#', icon: soccerBall},
    { name: "S'impliquer", link: '#', icon: hands },
    { name: 'Références', link: '#', icon: book }
  ]

  return (
    <nav className='Navbar'>
      <div className="container">
        <a href="#" className='logo'><img src={logo} alt="AEMUDM" /></a>

        <div className="links">
          {links.map((link) =>
            <a href={link.link} className='link'>{link.name} <div className="line-container"><div className="line"></div></div></a>
          )}
          <Button content="Contactez-nous" href="#" />
        </div>

        <div className="dropdown-menu" onClick={handleClick}>
          {burgerIcon}

          <div className={toggleMenu ? 'menu toggled' : 'menu'}>
            {links.map((link) =>
              <a href={link.link} className='link' onClick={handleClick}>{link.icon}{link.name}</a>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar