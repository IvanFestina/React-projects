import React from 'react';
import './App.css';
import {ToDoList} from "./Components/ToDOList";

export function App() {
   const task1=[
        {id:1,title:'HTML&CSS',isDone:true},
        {id:2,title:'JS',isDone:false},
        {id:3,title:'React',isDone:true},
    ]
    const task2=[
        {id:1,title:'HTML&CSS222222',isDone:true},
        {id:2,title:'JS22222222222',isDone:false},
        {id:3,title:'React22222222',isDone:true},
        {id:4,title:'net',isDone:false},
    ]
    return (
        <div className="App">
            <ToDoList title={'What to learn'} task={task1} />
            <ToDoList title={'What to do'} task={task2} />
        </div>
    );
}


