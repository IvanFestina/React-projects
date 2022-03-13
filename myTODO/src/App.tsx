import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist_main/Todolist';
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type FilterValuesType = 'all' | 'active' | 'completed'


function App() {

    const [tasks, setTasks] = useState<TaskType[]>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ])

    const [filter, setFilter] = useState<FilterValuesType>('all')
    const deleteTask = (id: string) => {
        setTasks(tasks.filter(t => t.id !== id))
    }
    const addTask = (NewTitle: string) => {
        const newTitle = {id: v1(), title: NewTitle, isDone: false}
        setTasks([newTitle, ...tasks])
    }
    const changeFilter = (Filter: FilterValuesType) => {
        setFilter(Filter)
    }

    let actualTasks = tasks
    if(filter === 'active') {
        actualTasks = tasks.filter(t => !t.isDone)
    }
    if(filter === 'completed') {
        actualTasks = tasks.filter(t => t.isDone)
    }

    return (
        <div className="App">
            <Todolist
                title={'What to do'}
                tasks={actualTasks}
                deleteTask={deleteTask}
                addTask={addTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
