import React from 'react'
import './Activities.scss'

import Card from './components/Card/Card'

import dua from '../../../assets/dua.png'
import iftar from '../../../assets/iftar.png'
import basket from '../../../assets/basket.png'

const Activities = () => {
  return (
    <div className='activities-section' id='activities'>
        <h1>Nos activités</h1>
        <div className="activities">
            <Card
                title='Activités annuelles'
                image={iftar}
                description='Semaine interculturelle, journée des comités, conférence
                annuelle, souper des membres, soirée Iftar durant le mois de ramadan, après-midi BBQ.'
            />

            <Card
                title='Activités réccurentes'
                image={dua}
                description='Prière du vendredi, halaqa hebdomadaire, séances de foot, exégèse du coran, 5@7,
                bibliothèque islamique.'
            />

            <Card
                title='Activités ponctuelles'
                image={basket}
                description='Sports, cabane à sucre, forum de discussion, chalet des membres, aide humanitaire,
                ateliers divers, book club.'
            />
        </div>
    </div>
  )
}

export default Activities