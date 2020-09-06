//library
import React, { useEffect, useState } from 'react'
import { useIndexedDB } from 'react-indexed-db'

//css
import Styles from './RetrievePeople.module.css'

//component
import Header from './Component/Header/Header'

const RetrievePeople = ({ isUpdate }) => {
    const { getAll } = useIndexedDB('people')
    const [ person, setPersons ] = useState([])

    useEffect(() => {
        getAll().then(personFromDB => {
            setPersons(personFromDB)
        })
    }, [ isUpdate ])

    return (
        <div className={ Styles.retrievePeople }>
            <Header text='People'/>
            { person.map((item, index) => (
                <div key={ index } className={ Styles.card }>
                    <p>{ item['name'] }</p>
                    <p>{ item['address'] }</p>
                </div>
            )) }
        </div>
    )
}

export default RetrievePeople
