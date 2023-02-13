import React from 'react'
import './Card.scss'

import Button from '../../../../Landing/components/Button/Button'

type cardProps = {
    image: string,
    title: string,
    description: string,
}

const Card = ({image, title, description}: cardProps) => {
  return (
    <div className='card'>
        <img src={image} alt="" />
        <h1 className='title'>{title}</h1>
        <p className='description'>{description}</p>

        <Button content='En savoir plus' href=''/>
    </div>
  )
}

export default Card