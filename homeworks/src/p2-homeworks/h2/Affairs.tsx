import React from 'react'
import Affair from './Affair'
import s from './Affairs.module.css'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = {
    filter: FilterType
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => props.setFilter('all')
    const setHigh = () => props.setFilter('high')
    const setMiddle = () => props.setFilter('middle')
    const setLow = () => props.setFilter('low')

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll}>All</button>
            <button className={props.filter === 'high' ? s.red : s.black} onClick={setHigh}>High</button>
            <button className={props.filter === 'middle' ? s.orange : s.black} onClick={setMiddle}>Middle</button>
            <button className={props.filter === 'low' ? s.green : s.black} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs