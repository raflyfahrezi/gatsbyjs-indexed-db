// library
import React from 'react'

//css
import Styles from './Title.module.css'

const Title = ({ title }) => {
    return (
        <div className={ Styles.title }>
            <p>{ title }</p>
        </div>
    )
}

export default Title
