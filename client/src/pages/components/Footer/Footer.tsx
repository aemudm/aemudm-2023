import React from 'react'
import './Footer.scss'
import { HashLink as Link} from 'react-router-hash-link';
import logo from '../../../assets/logoWhite.png';

import { BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'

const instaLogo = <BsInstagram size={'25px'} color='white' />
const facebookLogo = <BsFacebook size={'25px'} color='white' />
const tiktokLogo = <FaTiktok size={'25px'} color='white' />
const youTubeLogo = <BsYoutube size={'25px'} color='white' />

const Footer = () => {

    const links = [
        { name: 'Accueil', link: '#', id: '#main' },
        { name: 'Activités', link: '#', id: '#activities'},
        { name: "Structure", link: '#', id: '#structure' },
        { name: "S'impliquer", link: '#', id: '#members' },
      ]

    const socialLinks = [
        { icon: instaLogo, link: 'https://www.instagram.com/aemudm/' },
        { icon: facebookLogo, link: 'https://www.facebook.com/aemudm' },
        { icon: tiktokLogo, link: 'https://www.tiktok.com/@aemudm?_t=8V6hleDqeCD&_r=1' },
        { icon: youTubeLogo, link: 'https://www.youtube.com/user/aemudem' }
    ]

    return (
        <div className='footer'>
            <div className="container">
                <div className="leftSection">
                    <img src={logo} alt="" />
                    <h2>Merci de votre visite</h2>
                    <p>Merci pour votre visite! Il nous fera un grand plaisir de vous accueillir 
                        dans notre association. Vivez votre foi librement sur le campus. Que vous soyez un étudiant des pavillons principaux, d'HEC Montréal ou encore de l'école Polytechnique, l'AEMUDM se trouve être l'environnement idéal pour un musulman de l'université.
                    </p>
                </div>
                <div className="rightSection">
                    <div className="footerLinks">
                        <h1>Liens</h1>
                        <ul>
                            {links.map((link) =>
                                <li>
                                    <Link to={link.id} smooth><a href={link.id}>{link.name}</a></Link>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="socials">
                        <h1>Nos réseaux</h1>
                        <div className="logos">
                            {socialLinks.map((link) => <a href={link.link} target='_blank'>{link.icon}</a>)}
                        </div>

                    </div>
                </div>
            </div>
            <p className='copyright'>Tous droits réservés © 2023 - AEMUDM - Développé à Montréal, Canada.</p>
        </div>
    )
}

export default Footer