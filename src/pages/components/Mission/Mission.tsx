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
                            Notre mission est d'offrir une large gamme de services à la communauté étudiante; permettre un épanouissement physique, social, spirituel et intellectuel; promouvoir le vivre ensemble harmonieux et synergique des communautés culturelles et religieuses; faciliter la compréhension de l'Islam.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission