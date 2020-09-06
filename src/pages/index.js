//library
import React, { useState } from 'react'
// import { initDB } from 'react-indexed-db'

//indexed db
import { dbconfig } from '../../dbconfig'

//component
import Title from '../../component/Title/Title'
// import AddingPeople from '../../component/AddingPeople/AddingPeople'
// import RetrievePeople from '../../component/RetrievePeople/RetrievePeople'
import Head from '../../component/Head/Head'

//initialize db
// initDB(dbconfig)

const Index = () => {
    const [ isUpdate, setIsUpdate ] = useState(0)

    return (
        <div>
            <Head title='React with Indexed DB'/>
            <Title title='React with Indexed DB'/>
            {/* <AddingPeople isUpdate={ isUpdate } setIsUpdate={ e => setIsUpdate(e) }/>
            <RetrievePeople isUpdate={ isUpdate }/> */}
        </div>
    )
}

export default Index
