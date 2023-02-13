import React from 'react'
import './Campuses.scss'

import udem from '../../../assets/udem.png';
import poly from '../../../assets/poly.png';
import hec from '../../../assets/hec.png';

const Campuses = () => {
  return (
    <div className="campuses-section">
        <img src={poly} alt="" className='poly'/>
        <img src={udem} alt="" className='udem'/>
        <img src={hec} alt="" className='hec'/>
    </div>
  )
}

export default Campuses