//library
import React, { useState, useRef } from 'react'
import { useIndexedDB } from 'react-indexed-db'

//css
import Styles from './AddingPeople.module.css'
import Input from '../Input/Input'
import Button from '../Button/Button'

const AddingPeople = ({ isUpdate, setIsUpdate }) => {
    const { add } = useIndexedDB('people')

    const [ people, setPeople ] = useState({
        name : '',
        address : ''
    })

    const inputName = useRef()
    const inputAddress = useRef()

    const inputHandler = e => {
        const Event = e.target
        const peopleTemp = {...people}

        if (Event.id === 'nama') {
            peopleTemp['name'] = Event.value
        } 

        if (Event.id === 'alamat') {
            peopleTemp['address'] = Event.value
        }

        setPeople(peopleTemp)
    }

    const setDefaultInput = () => {
        inputName.current.value = ''
        inputAddress.current.value = ''
    }

    const submitHandler = () => {
        add({ 
                name: people['name'], 
                address: people['address'] 
            }).then(
            event => {
                setIsUpdate(isUpdate + 1)

                setDefaultInput()
            },
            error => {
              console.log(error);
            }
        );
    }

    return (
        <div className={ Styles.addingPeople }>
            <Input label='Nama' id='nama' reference={ inputName } change={ e => inputHandler(e) }/>
            <div className={ Styles.separator }></div>
            <Input label='Alamat' id='alamat' reference={ inputAddress } change={ e => inputHandler(e) }/>
            <div className={ Styles.button }>
                <Button text='Add' click={ submitHandler }/>
            </div>
        </div>
    )
}

export default AddingPeople
