import React from 'react'
import {ListMan} from "./ListMan";

export type DateTypeObj = {
    id: string
    name: string,
    old: number,
    sex: string,
    driverCar: boolean,
    children: boolean,
}

type AlternativeAffairsTypes = {
    dates: Array<DateTypeObj>
    setDates: any
}


function AlternativeAffairs(props: AlternativeAffairsTypes) {
    const removeMan = (id: string) => {
        props.setDates(props.dates.filter(f => f.id !== id))
    }

    const addMan = (inputValue: DateTypeObj) => {
        console.log(inputValue)
        props.setDates([inputValue ,...props.dates])
    }

    return (
        <div className="hw2">
            <ListMan dateS={props.dates} removeMan={removeMan} addMan={addMan}/>
        </div>
    );
}

export default AlternativeAffairs
