import React, {useState} from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai'

import './Accordion.scss'

const plusIcon = <AiOutlinePlusCircle size={'30px'} color='rgb(195, 195, 195)'/>

type accordionProps = {
    title: string,
    description: string
}

const Accordion = ({title, description}: accordionProps) => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active)
    }
    

  return (
    <div className='accordion' onClick={handleClick}>
        <div className="accordionHeading">
            <div className="container">
                <h2>{title}</h2>
                <div className={active ? 'icon open' : 'icon'} onClick={handleClick}>{plusIcon}</div>
            </div>
        </div>

        <div className={active ? "accordionContent open" : 'accordionContent'}>
            <div className="container">
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default Accordion