import {
    addTodolistTC,
    changeTodolistFilterAC,
    changeTodolistTitleTC,
    FilterValuesType,
    getTodosTC,
    removeTodolistTC,
    TodolistDomainType
} from "../state/todolists-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import React, {useCallback, useEffect} from "react";
import {addTasksTC, removeTasksTC} from "../state/tasks-reducer";
import {TaskStatuses} from "../api/todolists-api";
import Grid from "@mui/material/Grid";
import {AddItemForm} from "./AddItemForm";
import Paper from "@mui/material/Paper";
import {Todolist} from "./Todolist";
import {TasksStateType} from "../App";

type TodolistGroupPropsType = { todolist: TodolistDomainType[] }

export const TodolistGroup = () => {

    const todolists = useSelector<AppRootStateType, Array<TodolistDomainType>>(state => state.todolists)
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodosTC())
    }, [dispatch])

    const removeTask = useCallback(function (todolistId: string, taskId: string) {
        dispatch(removeTasksTC(todolistId, taskId));
    }, [dispatch]);

    const addTask = useCallback(function (todolistId: string, title: string) {
        dispatch(addTasksTC(todolistId, title));
    }, [dispatch]);

    const changeStatus = useCallback(function (todolistId: string, taskId: string, status: TaskStatuses) {
        dispatch(updateTaskStatusTC(todolistId, taskId, {status}));
    }, [dispatch]);

    const changeTaskTitle = useCallback(function (todolistId: string, taskId: string, newTitle: string) {
        dispatch(updateTaskStatusTC(todolistId, taskId, {title: newTitle}));
    }, [dispatch]);

    const changeFilter = useCallback(function (todolistId: string, value: FilterValuesType) {
        const action = changeTodolistFilterAC(todolistId, value);
        dispatch(action);
    }, []);

    const removeTodolist = useCallback(function (todolistId: string) {
        dispatch(removeTodolistTC(todolistId));
    }, [dispatch]);

    const changeTodolistTitle = useCallback(function (todolistId: string, title: string) {
        dispatch(changeTodolistTitleTC(todolistId, title))
    }, [dispatch]);

    const addTodolist = useCallback((title: string) => {
        dispatch(addTodolistTC(title));
    }, [dispatch]);

    return <>
        <Grid container style={{padding: '20px'}}>
            <AddItemForm addItem={addTodolist}/>
        </Grid>
        <Grid container spacing={3}>
            {
                todolists.map(tl => {
                    let allTodolistTasks = tasks[tl.id];

                    return <Grid item key={tl.id}>
                        <Paper style={{padding: '10px'}}>
                            <Todolist
                                id={tl.id}
                                title={tl.title}
                                entityStatus={tl.entityStatus}
                                tasks={allTodolistTasks}
                                removeTask={removeTask}
                                changeFilter={changeFilter}
                                addTask={addTask}
                                changeTaskStatus={changeStatus}
                                filter={tl.filter}
                                removeTodolist={removeTodolist}
                                changeTaskTitle={changeTaskTitle}
                                changeTodolistTitle={changeTodolistTitle}
                            />
                        </Paper>
                    </Grid>
                })
            }
        </Grid>
    </>
}