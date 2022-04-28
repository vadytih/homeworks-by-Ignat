import React from 'react'
import Affair from './Affair'
import {AffairType} from './HW2'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (s: string)=>void
    deleteAffairCallback: (n: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеy ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix

    const setHigh = () => {
        props.setFilter("high")
    }
    const setMiddle = () => {
        props.setFilter("middle")
    }
    const setLow = () => {
        props.setFilter("low")
    }

    return (
        <div className="hw2">

            {mappedAffairs}

            <button className="hw2__button-filtr" onClick={setAll}>All</button>
            <button className="hw2__button-filtr" onClick={setHigh}>High</button>
            <button className="hw2__button-filtr" onClick={setMiddle}>Middle</button>
            <button className="hw2__button-filtr" onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
