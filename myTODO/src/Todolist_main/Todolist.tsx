import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import s from './Todolist.module.css'
import {FilterValuesType, TaskType} from "../App";
import {Button} from "./Button";
import {AddMessageErrorPropsType, TodoAddMessage} from "./Components/AddMessage";


type PropsType = {
    title: string
    tasks: TaskType[]
    deleteTask: (id: string) => void
    addTask: (NewTitle: string) => void
    changeFilter: (Filter: FilterValuesType) => void
}

export const Todolist = (props: PropsType) => {
    const [title, setTitle] = useState<string>('')
    const [message, setMessage] = useState<AddMessageErrorPropsType>({type: null, message: null});
    const deleteTaskHandler = (id: string) => {
        props.deleteTask(id)
    }
    const addTaskOnClickHandler = () => {
        if (title !== '') {
            props.addTask(title)
            setTitle('')
            setMessage({type: 'success', message: 'Success add!'});
        } else {
            setMessage({type: 'error', message: 'At least 1 character !'});
        }
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value.trim());
        setMessage({type: null, message: null});

    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTaskOnClickHandler()
        }
    }


    return (
        <div className={s.wrapper}>
            <div className={s.taskAddTitle}>{props.title}</div>
            <div className={s.taskAddForm}>
                <div className={s.message_wrapper}><input className={s.add_input} value={title}
                                                          onChange={onChangeHandler}
                                                          onKeyPress={onKeyPressHandler}/>
                    {message.type &&
                    <TodoAddMessage type={message.type} message={message.message} setMessage={setMessage}/>}
                </div>
                <Button name={'+'} callback={addTaskOnClickHandler}/>
            </div>
            <div className={s.taskNav}>
                <Button name={'All'} callback={() => props.changeFilter('all')}/>
                <Button name={'Active'} callback={() => props.changeFilter('active')}/>
                <Button name={'Completed'} callback={() => props.changeFilter('completed')}/>
            </div>
            <ul>
                {props.tasks.map(t => <li key={t.id}>
                    <Button name={'-'} callback={() => deleteTaskHandler(t.id)}/>
                    <input type={'checkbox'} checked={t.isDone}/>
                    <span>{t.title}</span>
                </li>)
                }
            </ul>

        </div>
    )
}