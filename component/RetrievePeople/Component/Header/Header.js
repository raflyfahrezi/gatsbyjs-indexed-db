//library
import React from 'react'

//css
import Styles from './Header.module.css'

const Header = ({ text }) => {
    return (
        <div className={ Styles.header }>
            <p>{ text }</p>
            <hr/>
        </div>
    )
}

export default Header
