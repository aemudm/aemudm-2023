import React from 'react'
import './Activities.scss'

import Card from './components/Card/Card.tsx'

import dua from '../../../assets/dua.png'
import iftar from '../../../assets/iftar.png'
import basket from '../../../assets/basket.png'

const Activities = () => {
  return (
    <div className='activities-section' id='activities'>
        <h1>Nos activités</h1>
        <div className="activities">
            <Card
                title='Activités sociales'
                image={iftar}
                description="Encourager les étudiants à s'impliquer dans la communauté et à établir des relations durables qui favorisent des discussions enrichissantes et un réseau social épanouissant."
            />

            <Card
                title='Activités éducatives'
                image={dua}
                description="Transmettre les enseignements de l'Islam aux étudiants pour favoriser une compréhension
                approfondie et équilibrée de cette religion au sein de la communauté universitaire."
            />

            <Card
                title='Activités humanitaires'
                image={basket}
                description="Encourager la communauté étudiante à développer leur sensibilité envers les plus démunis et à s'engager avec bienveillance pour leur venir en aide."
            />
        </div>
    </div>
  )
}

export default Activities