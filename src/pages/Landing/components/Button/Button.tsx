import { click } from '@testing-library/user-event/dist/click'
import React from 'react'
import './Button.scss'

type ButtonProps = {
    href: string,
    content: string,
    clickFunction: any
}

const Button = ({href, content, clickFunction}: ButtonProps) => {
  return (
    <a href={href} className='button' onClick={clickFunction}>{content}</a>
  )
}

export default Button;