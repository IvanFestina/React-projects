import React, {useCallback, useEffect} from 'react'
import './App.css';
import {Todolist} from './components/Todolist';
import {AddItemForm} from './components/AddItemForm';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Menu} from '@mui/icons-material';
import {
    addTodolistTC,
    changeTodolistFilterAC,
    changeTodolistTitleTC,
    FilterValuesType,
    getTodosTC,
    removeTodolistTC,
    TodolistDomainType
} from './state/todolists-reducer'
import {addTasksTC, removeTasksTC, updateTaskStatusTC} from './state/tasks-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import {TaskStatuses, TaskType} from './api/todolists-api'


export type TasksStateType = {
    [key: string]: Array<TaskType>
}


function App() {

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <TodolistGroup/>
            </Container>
        </div>
    );
}

export default App;

type TodolistGroupPropsType = { todolist: TodolistDomainType[] }

const TodolistGroup = (props: TodolistGroupPropsType) => {


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
                props.todolists.map(tl => {
                    let allTodolistTasks = tasks[tl.id];

                    return <Grid item key={tl.id}>
                        <Paper style={{padding: '10px'}}>
                            <Todolist
                                id={tl.id}
                                title={tl.title}
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
