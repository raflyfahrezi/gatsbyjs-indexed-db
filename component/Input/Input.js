//library
import React from 'react'

//css
import Styles from './Input.module.css'

const Input = ({ label, type, id, reference, change }) => {
    return (
        <div className={ Styles.input }>
            <label>{ label }</label>
            <input type={ type } id={ id } ref={ reference } onChange={ change } spellCheck='false' autoComplete='off'></input>
        </div>
    )
}

export default Input
