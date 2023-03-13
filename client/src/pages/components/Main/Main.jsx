import React from 'react';
import { useState, useEffect } from 'react';
import './Main.scss';

import { HashLink as Link } from 'react-router-hash-link';

import gathering from '../../../assets/gathering.png';
import Button from '../../Landing/components/Button/Button.tsx';

import img1 from '../../../assets/photo1.png'
import img2 from '../../../assets/photo2.png'
import img3 from '../../../assets/photo3.png'
import img4 from '../../../assets/photo4.png'
import img5 from '../../../assets/photo5.png'
import img6 from '../../../assets/photo6.png'
import img7 from '../../../assets/photo7.png'
import img8 from '../../../assets/photo8.png'
import img9 from '../../../assets/photo9.png'

import {RiArrowLeftSFill, RiArrowRightSFill} from 'react-icons/ri';

const arrowLeftIcon = <RiArrowLeftSFill size={'15px'} color='white'/>
const arrowRightIcon = <RiArrowRightSFill size={'15px'} color='white'/>


const Main = () => {
    const [image, setImage] = useState(0)
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

    const prevImage = () => {
        setImage((image - 1 + images.length) % images.length)
    }

    const nextImage = () => {
        setImage((image + 1) % images.length);
    }

    useEffect(() => {
      const timer = setTimeout(() => {
        nextImage();
      }, 4000);
    
      return () => {
        clearTimeout(timer);
      }
    }, [image])

    return (
        <div className="main" id='main'>
            <div className="main-container">
                <div className="imageSection">
                    <img src={images[image]} alt="" />
                    <div className="buttons">
                        <button className='imageController' onClick={nextImage}>{arrowLeftIcon}</button>
                        <button className='imageController' onClick={prevImage}>{arrowRightIcon}</button>
                    </div>

                </div>
                <div className="introSection">
                    <h6>BIENVENUE À</h6>
                    <h1>L'Association des Étudiants Musulmans de l'Université de Montréal</h1>
                    <div className="line"></div>
                    <p>Vivez votre foi librement sur le campus. Que
                        vous soyez un étudiant des pavillons principaux, d'HEC Montréal ou
                        encore de l'école Polytechnique, l'AEMUDM se trouve être l'environnement idéal
                        pour un musulman de l'université. Découvrez une communauté remplie
                        de bienveillance, de solidarité, d'épanouissement et de fraternité au sein même de votre école.
                    </p>
                    <div className="buttonContainer">
                        <Link to='#activities' smooth><Button href='#' content='Découvrez nos activités' clickFunction={''} /></Link>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Main