import React, {useState} from 'react'
import Affairs from './Affairs'
import {v1} from "uuid";
import AlternativeAffairs from "./AlternativeAffairs";

// types
export type AffairPriorityType = any // need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: string
} // need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]



// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: string): any => { // need to fix any
    if (filter !== "all") {
        return [...affairs].filter(t => t.priority === filter)
    }
    else {
        return affairs
    }
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return (
        [...affairs].filter(t => t._id !== _id)
    )
}

function HW2() {
    let [dates, setDates] = useState([
        {
            id: v1(),
            name: "Vadim",
            old: 33,
            sex: "М",
            driverCar: true,
            children: true,
        },
        {
            id: v1(),
            name: "Pavel",
            old: 23,
            sex: "М",
            driverCar: true,
            children: false,
        },
        {
            id: v1(),
            name: "Oksana",
            old: 57,
            sex: "Ж",
            driverCar: false,
            children: true,
        },
        {
            id: v1(),
            name: "Sveta",
            old: 33,
            sex: "Ж",
            driverCar: true,
            children: true,
        },
        {
            id: v1(),
            name: "Ira",
            old: 32,
            sex: "Ж",
            driverCar: true,
            children: false,
        },
        {
            id: v1(),
            name: "Mity",
            old: 33,
            sex: "М",
            driverCar: false,
            children: false,
        },
    ])

    const [affairs, setAffairs] = useState<any>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)

    const deleteAffairCallback = (_id: number) => {
        setAffairs(deleteAffair(affairs, _id))
    }

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeAffairs dates={dates} setDates={setDates}/>
            <hr/>
        </div>
    )
}

export default HW2
