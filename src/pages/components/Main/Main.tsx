import React from 'react';
import './Main.scss';

import gathering from '../../../assets/gathering.png'
import Button from '../../Landing/components/Button/Button';

const Main = () => {
  return (
    <div className="container">
        <div className="imageSection">
            <img src={gathering} alt="" />
        </div>
        <div className="introSection">
            <h6>BIENVENUE À</h6>
            <h1>L'association des étudiants musulmans de l'Université de Montréal</h1>
            <div className="line"></div>
            <p>Vivez votre foi librement sur le campus. Que 
                vous soyez un étudiant des pavillons principaux, d'HEC Montréal ou 
                encore de l'école Polytechnique, l'AEMUDM se trouve être l'encadrement idéal
                pour le musulman de l'université. Découvrez une petite communauté remplie
                de bienveillance, de solidarité et d'épanouissement et de fraternité au sein même de votre école.
            </p>
            <div className="buttonContainer">
                <Button href='#' content='Découvrez nos activités' />
            </div>
            
        </div>
    </div>
  )
}

export default Main