import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./Components/Button";

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

    const removeTaskHandler = (tID: string) => {
        props.removeTask(tID)
    }
    //
    // const changeFilterAllhandler=()=>{
    //     props.changeFilter("all")
    // }
    //
    // const changeFilterActivehandler=()=>{
    //     props.changeFilter("active")
    // }
    //
    // const changeFilterCompletedhandler=()=>{
    //     props.changeFilter("completed")
    // }

    const tsarFoo = (filter: FilterValuesType) => {
        props.changeFilter(filter)
    }

    const removeTaskHandler = (tID: string) => {
        props.removeTask(tID)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    {/*<button onClick={() => props.removeTask(t.id)}>x</button>*/}
                    <button onClick={() => removeTaskHandler(t.id)}>x</button>
                    <Button name={'x'} callback={() => removeTaskHandler(t.id)}/>
                </li>)
            }
        </ul>
        <div>
            <Button name={'all'} callback={() => tsarFoo('all')}/>
            <Button name={'active'} callback={() => tsarFoo('active')}/>
            <Button name={'completed'} callback={() => tsarFoo('completed')}/>


            {/*<button onClick={() => tsarFoo('all')}>All</button>*/}
            {/*<button onClick={() => tsarFoo('active')}>Active</button>*/}
            {/*<button onClick={() => tsarFoo('completed')}>Completed</button>*/}
        </div>
    </div>
}
