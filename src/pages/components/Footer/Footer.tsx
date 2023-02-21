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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum, vitae alias dolorum eligendi, at facere quidem modi perferendis in cum placeat provident voluptatem! Vel blanditiis consequatur quis non quia.</p>
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
            <p>Copyright © 2023 - AEMUDM - Developed in Montreal, Canada.</p>
        </div>
    )
}

export default Footer