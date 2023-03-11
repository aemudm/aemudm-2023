import React from 'react'
import './Mission.scss'

import Button from '../../Landing/components/Button/Button'

const Mission = () => {
    return (
        <div className='mission'>
            <div className="mission-container">
                <div className="container">
                    <div className="text">
                        <div className="title">
                            <h1>Notre mission</h1>
                            <div className="svg"></div>
                        </div>

                        <div className="line"></div>
                        <p>
                            Veiller à l'épanouissement physique, social, spirituel et intellectuel des étudiants de l'Université de Montréal, Polytechnique et HEC en offrant des activités conformes aux valeurs islamiques.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission