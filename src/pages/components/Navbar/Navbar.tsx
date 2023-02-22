import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.scss'

import logo from '../../../assets/logoWhite.png';
import Button from '../../Landing/components/Button/Button';
import { TiArrowSortedDown } from 'react-icons/ti';
import { BsFillHouseDoorFill, BsFillLightningChargeFill, BsFillPeopleFill, BsFillEnvelopeFill, BsFillDiagram3Fill, BsFillBellFill } from 'react-icons/bs';

import { BsInstagram, BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs'

const instaLogo = <BsInstagram size={'25px'} color='white' />
const facebookLogo = <BsFacebook size={'25px'} color='white' />
const twitterLogo = <BsTwitter size={'25px'} color='white' />
const youTubeLogo = <BsYoutube size={'25px'} color='white' />

const burgerIcon = <TiArrowSortedDown style={{
  color: 'white',
  fontSize: '20px'
}} />

const house = <BsFillHouseDoorFill style={{ color: '#177140', fontSize: '20px' }} />
const bolt = <BsFillLightningChargeFill style={{ color: '#177140', fontSize: '20px' }} />
const structure = <BsFillDiagram3Fill style={{ color: '#177140', fontSize: '20px' }} />
const envelope = <BsFillEnvelopeFill style={{ color: '#177140', fontSize: '20px' }} />
const people = <BsFillPeopleFill style={{ color: '#177140', fontSize: '20px' }} />
const bell = <BsFillBellFill style={{ color: 'white', fontSize: '20px' }} />

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleNotif, setToggleNotif] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);
  const [isShaking, setIsShaking] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsShaking(prevIsShaking => !prevIsShaking);
    }, 1000); // change interval time as needed
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setToggleNav(true);
      } else {
        setToggleNav(false)
      }
    })
  }, [])

  const handleClickNotif = () => {
    setToggleNotif(!toggleNotif)
    setToggleMenu(false)
  }

  const handleClick = () => {
    setToggleMenu(!toggleMenu)
    setToggleNotif(false)
  }

  const links = [
    { name: 'Accueil', link: '#', icon: house, id: '#main' },
    { name: 'Activités', link: '#', icon: bolt, id: '#activities' },
    { name: "Structure", link: '#', icon: structure, id: '#structure' },
    { name: "S'impliquer", link: '#', icon: people, id: '#members' },
  ]

  const responsiveLinks = [
    { name: 'Accueil', link: '#', icon: house, id: '#main' },
    { name: 'Activités', link: '#', icon: bolt, id: '#activities' },
    { name: "Structure", link: '#', icon: structure, id: '#structure' },
    { name: "S'impliquer", link: '#', icon: people, id: '#members' },
    { name: 'Contact', link: '#', icon: envelope, id: '#contact' }
  ]

  const socialLinks = [
    { icon: instaLogo, link: 'https://www.instagram.com/aemudm/' },
    { icon: facebookLogo, link: 'https://www.facebook.com/aemudm' },
    { icon: twitterLogo, link: 'https://twitter.com/aemudm' },
    { icon: youTubeLogo, link: 'https://www.youtube.com/user/aemudem' }
  ]

  return (
    <nav className={toggleNav ? 'dark' : ''}>
      <div className="container">
        <a href="#" className='logo'><img src={logo} alt="AEMUDM" /></a>

        <div className="links">
          {links.map((link) =>
            <Link to={link.id} smooth><a href={link.id} className='link'>{link.name} <div className="line-container"><div className="line"></div></div></a></Link>
          )}
          <Link to='#contact' smooth><Button content="Contactez-nous" href="" clickFunction={''} /></Link>
          <div className='notification'>
            <div className='bell' onClick={handleClickNotif}>
              <div className={isShaking ? 'animated icon-shake' : 'animated'}>
                {bell}
              </div>
            </div>
            <div className={toggleNotif ? 'socialLinks toggled' : 'socialLinks'}>
              <h2>Faites un tour sur nos réseaux sociaux</h2>
              <div className="logos">
                {socialLinks.map((link) => <a href={link.link} target='_blank'>{link.icon}</a>)}
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown-menu">
          <div className='notification'>
            <div className='bell' onClick={handleClickNotif}>
              <div className={isShaking ? 'animated icon-shake' : 'animated'}>
                {bell}
              </div>
            </div>
            <div className={toggleNotif ? 'socialLinks toggled' : 'socialLinks'}>
              <h2>Faites un tour sur nos réseaux</h2>
              <div className="logos">
                {socialLinks.map((link) => <a href={link.link} target='_blank'>{link.icon}</a>)}
              </div>
            </div>
          </div>
          <div className="menu-container" onClick={handleClick}>
            {burgerIcon}
            <div className={toggleMenu ? 'menu toggled' : 'menu'}>
              {responsiveLinks.map((link) =>
                <Link to={link.id} smooth><a href={link.id} className='link' onClick={handleClick}>{link.icon}{link.name}</a></Link>
              )}
            </div>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar