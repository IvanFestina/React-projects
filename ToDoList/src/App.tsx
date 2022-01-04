import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type FilterValuesType = "all" | "active" | "completed"

type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TaskStateType = {
    [key: string]: Array<TaskType>
}

export function App() {

    const todoListID_1 = v1()
    const todoListID_2 = v1()
    const [todoLists, setTodoLists] = useState<TodoListType[]>([
        {id: todoListID_1, title: 'What to learn', filter: 'all'},
        {id: todoListID_2, title: 'What to buy', filter: 'all'}
    ])

    const [tasks, setTasks] = useState<TaskStateType>({
        [todoListID_1]: [    //Синтаксис вычисляемых свойств объекта
            {id: v1(), title: "HTML", isDone: true},
            {id: v1(), title: "CSS", isDone: true},
            {id: v1(), title: "JS/TS", isDone: false},
        ],
        [todoListID_2]: [
            {id: v1(), title: "Beer", isDone: true},
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "Bread", isDone: false},

        ]
    })

    const removeTask = (tasksID: string, todoListID: string) => {
        const copyTasks = {...tasks}
        copyTasks[todoListID] = copyTasks[todoListID].filter(t => t.id !== tasksID)
        setTasks(copyTasks)
    }
    const addTask = (title: string, todoListID: string) => {
        const copyTasks = {...tasks}
        copyTasks[todoListID] = [{id: v1(), title, isDone: false}, ...tasks[todoListID]]
        setTasks(copyTasks)
    }
    const changeTaskStatus = (tasksID: string, isDone: boolean, todoListID: string) => {
        const copyTasks = {...tasks}
        copyTasks[todoListID] = copyTasks[todoListID].map(t => t.id === tasksID ? {...t, isDone} : t)
        setTasks(copyTasks)
    }
    // {id, title, isDone}

    const changeTodoListFilter = (filter: FilterValuesType, todoListID: string) => {
        setTodoLists(todoLists.map(tl => tl.id === todoListID ? {...tl, filter} : tl))
    }

    const removeTodoList = (todoListID: string) => {
        setTodoLists(todoLists.filter(tl => tl.id !== todoListID))
        const copyTasks = {...tasks}
        delete copyTasks[todoListID]
        setTasks(copyTasks)
    }

    const getTasksForRender = (filter: FilterValuesType, tasks: TaskType[]) => {
        switch (filter) {
            case "completed":
                return tasks.filter(t => t.isDone)
            case "active":
                return tasks.filter(t => !t.isDone)
            default:
                return tasks
        }
    }

   const todoListsComp = todoLists.map(tl => {
        //UI:
        const tasksForRender = getTasksForRender(tl.filter, tasks[tl.id])
        return (
            <div className="App">
                <TodoList
                    key={tl.id}
                    todoListID={tl.id}
                    filter={tl.filter}
                    title={tl.title}
                    tasks={tasksForRender}
                    addTask={addTask}
                    removeTask={removeTask}
                    changeTodoListFilter={changeTodoListFilter}
                    changeTaskStatus={changeTaskStatus}
                    removeTodoList={removeTodoList}
                />
            </div>
        )
    })
   return <div>
       {todoListsComp}
   </div>
}


