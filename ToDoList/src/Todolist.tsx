import React, {useState} from 'react';
import {filterType} from "./App";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
}

export function Todolist(props: PropsType) {

    const [filterValue, setFilterValue] = useState<filterType>('All')

    const filteredTasks = (value: filterType) => {
        setFilterValue(value)
    }
    let tasksForToDoList = props.tasks
    if (filterValue === 'Active') {
        tasksForToDoList = props.tasks.filter(f => f.isDone === false)
    }
    if (filterValue === 'Completed') {
        tasksForToDoList = props.tasks.filter(f => f.isDone)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {tasksForToDoList.map((m, i) => {
                return (
                    <li key={m.id}>
                        <button onClick={() => props.removeTask(m.id)}>X</button>
                        <input type="checkbox" checked={m.isDone}/>
                        <span>{m.title}</span>
                    </li>

                )
            })}
        </ul>
        <div>
            <button onClick={() => filteredTasks('All')}>All</button>
            <button onClick={() => filteredTasks('Active')}>Active</button>
            <button onClick={() => filteredTasks('Completed')}>Completed</button>
        </div>
    </div>
}
