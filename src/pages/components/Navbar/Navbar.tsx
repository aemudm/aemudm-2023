import React, { useState } from 'react';
import { HashLink as Link} from 'react-router-hash-link';
import './Navbar.scss'

import logo from '../../../assets/logoWhite.png';
import Button from '../../Landing/components/Button/Button';
import { TiArrowSortedDown } from 'react-icons/ti';
import { GiBookCover, GiHouse, GiSoccerBall, GiShakingHands, GiEnvelope, GiFamilyTree } from 'react-icons/gi';

// Components for navigation
import Main from '../Main/Main';
import Activities from '../Activities/Activities';
import Structure from '../Structure/Structure';

const burgerIcon = <TiArrowSortedDown style={{
  color: 'white',
  fontSize: '20px'
}} />

const book = <GiBookCover style={{color: '#177140', fontSize: '20px'}}/>
const house = <GiHouse style={{color: '#177140', fontSize: '20px'}}/>
const soccerBall = <GiSoccerBall style={{color: '#177140', fontSize: '20px'}}/>
const structure = <GiFamilyTree style={{color: '#177140', fontSize: '20px'}}/>
const envelope = <GiEnvelope style={{color: '#177140', fontSize: '20px'}}/>
const hands = <GiShakingHands style={{color: '#177140', fontSize: '20px'}}/>

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    setToggleMenu(!toggleMenu)
  }

  const links = [
    { name: 'Accueil', link: '#', icon: house, id: '#main' },
    { name: 'Activités', link: '#', icon: soccerBall, id: '#activities'},
    { name: "Structure", link: '#', icon: structure, id: '#structure' },
    { name: "S'impliquer", link: '#', icon: hands, id: '#members' },
  ]

  const responsiveLinks = [
    { name: 'Accueil', link: '#', icon: house, id: '#main' },
    { name: 'Activités', link: '#', icon: soccerBall, id: '#activities'},
    { name: "Structure", link: '#', icon: structure, id: '#structure' },
    { name: "S'impliquer", link: '#', icon: hands, id: '#members' },
    { name: 'Contact', link: '#', icon: envelope, id: '#contact' }
  ]

  return (
    <nav className='Navbar'>
      <div className="container">
        <a href="#" className='logo'><img src={logo} alt="AEMUDM" /></a>

        <div className="links">
          {links.map((link) =>
            <Link to={link.id} smooth><a href={link.id} className='link'>{link.name} <div className="line-container"><div className="line"></div></div></a></Link>
          )}
          <Link to='#contact' smooth><Button content="Contactez-nous" href="" clickFunction={''}/></Link>
        </div>

        <div className="dropdown-menu" onClick={handleClick}>
          {burgerIcon}

          <div className={toggleMenu ? 'menu toggled' : 'menu'}>
            {responsiveLinks.map((link) =>
              <Link to={link.id} smooth><a href={link.id} className='link' onClick={handleClick}>{link.icon}{link.name}</a></Link>
            )}
          </div>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar