import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {FullInput} from "./Component/full_input";
import {Input} from "./Component/Input";
import {Button} from "./Component/Button";


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
    addTask: (title: string) => void
}


export function Todolist(props: PropsType) {
    let [title, setTitle] = useState("")


    // let [title, setTitle] = useState("")
    //
    // const addTask = () => {
    //     props.addTask(title);
    //     setTitle("");
    // }

    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.currentTarget.value)
    // }

    // const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === 'Enter') {
    //         addTask();
    //     }
    // }

    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");

    const blockButton = () => {
        props.addTask(title)
        setTitle('')
    }

    return <div>
        <h3>{props.title}</h3>
        <Input setTitle={setTitle} title={title} addTask={props.addTask}/>
        <Button name={'+'} callback={blockButton}/>

        {/*<FullInput addTask={props.addTask}/>*/}
        {/*<div>*/}
        {/*    <input value={title}*/}
        {/*           onChange={ onChangeHandler }*/}
        {/*           onKeyPress={ onKeyPressHandler }*/}
        {/*    />*/}
        {/*    <button onClick={addTask}>+</button>*/}
        {/*</div>*/}
        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id)

                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={ onClickHandler }>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button onClick={ onAllClickHandler }>All</button>
            <button onClick={ onActiveClickHandler }>Active</button>
            <button onClick={ onCompletedClickHandler }>Completed</button>
        </div>
    </div>
}
