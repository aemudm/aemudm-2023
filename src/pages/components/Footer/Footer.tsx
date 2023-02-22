import React from 'react'
import './Footer.scss'

import logo from '../../../assets/logoWhite.png';

import { BsInstagram, BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs'

const instaLogo = <BsInstagram size={'25px'} color='white' />
const facebookLogo = <BsFacebook size={'25px'} color='white' />
const twitterLogo = <BsTwitter size={'25px'} color='white' />
const youTubeLogo = <BsYoutube size={'25px'} color='white' />

const Footer = () => {

    const links = [
        { name: 'Accueil', link: '#', id: '/main' },
        { name: 'Activités', link: '#', id: '/activities' },
        { name: "S'impliquer", link: '#', id: '/structure' },
        { name: 'Références', link: '#', id: '/references' },
        { name: 'Nous contacter', link: '#', id: '/references' }
    ]

    const socialLinks = [
        { icon: instaLogo, link: 'https://www.instagram.com/aemudm/' },
        { icon: facebookLogo, link: 'https://www.facebook.com/aemudm' },
        { icon: twitterLogo, link: 'https://twitter.com/aemudm' },
        { icon: youTubeLogo, link: 'https://www.youtube.com/user/aemudem' }
    ]

    return (
        <div className='footer'>
            <div className="container">
                <div className="leftSection">
                    <img src={logo} alt="" />
                    <h2>Merci de votre visite</h2>
                    <p>Merci pour votre visite! Il nous fera un grand plaisir de vous accueillir 
                        dans notre association. Vivez votre foi librement sur le campus. Que vous soyez un étudiant des pavillons principaux, d'HEC Montréal ou encore de l'école Polytechnique, l'AEMUDM se trouve être l'encadrement idéal pour un musulman de l'université.
                    </p>
                </div>
                <div className="rightSection">
                    <div className="footerLinks">
                        <h1>Liens</h1>
                        <ul>
                            {links.map((link) =>
                                <li>
                                    <a href="">{link.name}</a>
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