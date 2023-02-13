import React from 'react'
import './Activities.scss'

import Card from './components/Card/Card'

import dua from '../../../assets/dua.png'
import iftar from '../../../assets/iftar.png'
import basket from '../../../assets/basket.png'

const Activities = () => {
  return (
    <div className='activities-section'>
        <h1>Nos activités</h1>
        <div className="activities">
            <Card title='Activités annuelles' image={iftar} description=''/>
            <Card title='Activités réccurentes' image={dua} description=''/>
            <Card title='Activités ponctuelles' image={basket} description=''/>
        </div>
    </div>
  )
}

export default Activities