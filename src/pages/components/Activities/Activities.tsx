import React from 'react'
import './Activities.scss'

import Card from './components/Card/Card'

const Activities = () => {
  return (
    <div className='activities-section'>
        <div className="activities">
            <Card title='Activités annuelles' image='' description=''/>
            <Card title='Activités réccurentes' image='' description=''/>
            <Card title='Activités ponctuelles' image='' description=''/>
        </div>
    </div>
  )
}

export default Activities