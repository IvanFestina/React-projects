import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./components/Button";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addtask: (NewTitle: string) => void
}

export function Todolist(props: PropsType) {
    const [title, setTitle] = useState('');
    console.log(title)

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onClickHandler = () => {
        props.addtask(title);
        setTitle('');

    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.addtask(title);
            setTitle('');
        }
    }

    const tsarFoo = (filter: FilterValuesType) => {
        props.changeFilter(filter)
    }

    const removeTaskHandler = (tID:string) => {
        props.removeTask(tID)
    }

    const addTaskHandler = (title: string) => {
        props.addtask(title);
        setTitle('');
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
            <Button name={'+'} callBack={() => addTaskHandler(title)}/>
        </div>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    {/*<button onClick={()=>props.removeTask(t.id)}>x</button>*/}
                    <Button name={'x'} callBack={()=>removeTaskHandler(t.id)}/>
                </li>)
            }
        </ul>
        <div>
            <Button name={'all'} callBack={() => tsarFoo('all')}/>
            <Button name={'active'} callBack={() => tsarFoo('active')}/>
            <Button name={'completed'} callBack={() => tsarFoo('completed')}/>

        </div>
    </div>
}
