import React, { useState } from 'react'
import './Card.scss'

import Button from '../../../../Landing/components/Button/Button.tsx'

type cardProps = {
    image: string,
    title: string,
    description: string,
}

const Card = ({ image, title, description }: cardProps) => {

    const [toggleCardInfo, setToggleCardInfo] = useState(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setToggleCardInfo(!toggleCardInfo)
    }

    return (
        <div className='card'>
            <div className={toggleCardInfo ? 'face invisible' : 'face visible'}>
                <img src={image} alt="" />
                <h1 className='title'>{title}</h1>

                <Button content='En savoir plus' href='' clickFunction={(event: any) => handleClick(event)}/>
            </div>

            <div className={toggleCardInfo ? 'back visible' : 'back invisible'}>
                <h1 className='title'>{title}</h1>
                <p>{description}</p>
                <Button content='Fermer' href='' clickFunction={(event: any) => handleClick(event)}/>
            </div>

        </div>
    )
}

export default Card