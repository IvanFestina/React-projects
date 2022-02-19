import React, {useCallback} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from './AddItemForm';
import {EditableSpan} from './EditableSpan';
import {Button, IconButton} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {addTaskAC} from "./state/tasks-reducer";
import {changeTodolistFilterAC, changeTodolistTitleAC, removeTodolistAC} from "./state/todolists-reducer";
import {Task} from "./Task";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    filter: FilterValuesType
}


export const Todolist = React.memo((props: PropsType) => {

    const tasks = useSelector<AppRootStateType, TaskType[]>(state => state.tasks[props.id])
    const dispatch = useDispatch()


    const addTask = useCallback((title: string) => {
        dispatch(addTaskAC(title, props.id));
    }, [dispatch, props.id])
    const removeTodolist = useCallback(() => {
        dispatch(removeTodolistAC(props.id));
    }, [dispatch, props.id])
    const changeTodolistTitle = useCallback((title: string) => {
        dispatch(changeTodolistTitleAC(props.id, title));
    }, [dispatch, props.id])

    const onAllClickHandler = useCallback(() => dispatch(changeTodolistFilterAC(props.id, "all")), [props.id]);
    const onActiveClickHandler = useCallback(() => dispatch(changeTodolistFilterAC(props.id, "active")), [props.id]);
    const onCompletedClickHandler = useCallback(() => dispatch(changeTodolistFilterAC(props.id, "completed")), [props.id]);

    let tasksForTodolist = tasks
    if (props.filter === "active") {
        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false);
    }
    if (props.filter === "completed") {
        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
    }

    return <div>
        <h3><EditableSpan value={props.title} onChange={changeTodolistTitle}/>
            <IconButton onClick={removeTodolist}>
                <Delete/>
            </IconButton>
        </h3>
        <AddItemForm addItem={addTask}/>
        <div>
            {
                tasks.map(t => <Task todolistId={props.id} taskId={t.id} key={t.id} task={t}/>)
            }
        </div>
        <div>
            <Button variant={props.filter === 'all' ? 'outlined' : 'text'}
                    onClick={onAllClickHandler}
                    color={'default'}
            >All
            </Button>
            <Button variant={props.filter === 'active' ? 'outlined' : 'text'}
                    onClick={onActiveClickHandler}
                    color={'primary'}>Active
            </Button>
            <Button variant={props.filter === 'completed' ? 'outlined' : 'text'}
                    onClick={onCompletedClickHandler}
                    color={'secondary'}>Completed
            </Button>
        </div>
    </div>
})

