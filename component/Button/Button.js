// library
import React from 'react'

//css
import Styles from './Button.module.css'

const Button = ({ text, type, reference, click}) => {
    return (
        <button type={ type } ref={ reference } className={ Styles.button } onClick={ click }>{ text }</button>
    )
}

export default Button
