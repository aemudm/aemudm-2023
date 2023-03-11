import React from 'react'
import { useEffect, useState } from 'react'
import './ScrollToTop.scss'

import {AiOutlineArrowUp} from 'react-icons/ai'

const arrowUp = <AiOutlineArrowUp size={'30px'} color='white'/>

const ScrollToTop = () => {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setBackToTop(true);
            } else {
                setBackToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className='scrollButton'>
            {backToTop && (
                <button onClick={scrollUp}>{arrowUp}</button>
            )}
        </div>
    )
}

export default ScrollToTop