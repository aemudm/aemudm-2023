import React from 'react'
import './Navbar.scss'

import logo from '../../../assets/logo.jpeg';
import Button from '../../Landing/components/Button/Button';

const Navbar = () => {
  const links = [
    { name: 'Accueil', link: '#' },
    { name: 'Activités', link: '#' },
    { name: "S'impliquer", link: '#' },
    { name: 'Références', link: '#' }
  ]

  return (
    <nav className='Navbar'>
      <a href="#" className='logo'><img src={logo} alt="AEMUDM" /></a>

      <div className="links">
        {links.map((link) =>
          <a href={link.link} className='link'>{link.name} <div className="line-container"><div className="line"></div></div></a>
        )}
        <Button content="Contactez-nous" href="#"/>
      </div>
    </nav>
  )
}

export default Navbar