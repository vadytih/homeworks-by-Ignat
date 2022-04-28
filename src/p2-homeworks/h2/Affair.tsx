import React from 'react'
import {AffairType} from './HW2'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType  // need to fix any
    deleteAffairCallback: (_id: number)=> void // need to fix any
}

function Affair(props: AffairPropsType) {
    // const deleteCallback = () => {}// need to fix

    return (
        <div className="hw2__result">
            <button onClick={()=>props.deleteAffairCallback(props.affair._id)} className="hw2__del-button">X</button>
            <span className="hw2__span">{props.affair.name}</span>

        </div>
    )
}

export default Affair
