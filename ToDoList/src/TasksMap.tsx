import styles from "./Todolist.module.css"
import React from "react";
import {TaskType} from './Todolist'

type propsType = {
    tasks: Array<TaskType>
    onChangeCheckbox: (tID: string, value: boolean) => void
    onClickHandler: (tID: string) => void
}

export const TasksMap = ({tasks, onChangeCheckbox, onClickHandler}: propsType) => {

    return (
        <ul>
            {tasks.map(t => {
                return <li key={t.id} className={t.isDone ? styles.isDone : ''}>
                    <input type="checkbox"
                           checked={t.isDone}
                           onChange={(event) => onChangeCheckbox(t.id, event.currentTarget.checked)}
                           />
                    <span>{t.title}</span>
                    <button onClick={() => onClickHandler(t.id)}>x</button>
                </li>
            })}
        </ul>
    )
}