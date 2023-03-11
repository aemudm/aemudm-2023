import React from 'react'
import './Who.scss'

import Button from '../../Landing/components/Button/Button'

const Who = () => {
  return (
    <div className='who'>
      <div className="who-container">
        <div className="container">
          <div className="text">
            <div className="title">
              <h1>Qui sommes-nous ?</h1>
              <div className="svg"></div>
            </div>

            <div className="line"></div>
            <p>
              Nous sommes des étudiant(e)s musulman(e)s de l'Université de Montréal, de HEC Montréal et de l'école Polytechnique,
              unis dans la fraternité et la volonté de vivre l'Islam comme mode de vie à part entière, dans l'équilibre 
              et l'harmonie qu'il inspire à l'être humain, conformément au Coran et à la tradition prophétique.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Who