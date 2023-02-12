import React from 'react'
import './Button.scss'

type ButtonProps = {
    href: string,
    content: string
}

const Button = ({href, content}: ButtonProps) => {
  return (
    <a href={href} className='button'>{content}</a>
  )
}

export default Button;