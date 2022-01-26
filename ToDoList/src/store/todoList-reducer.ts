import {FilterValuesType, todolistsType} from "../App";
import {v1} from "uuid";

type RemoveTodoListAT = {
    type: 'REMOVE-TODOLIST',
    id: string
}
type AddTodoListAT = {
    type: 'ADD-TODOLIST',
    title: string
}
type ChangeFilterAT = {
    type: 'CHANGE-FILTER',
    filter: FilterValuesType,
    todolistID: string
}
type ChangeTodolistTitleAT = {
    type: 'CHANGE-TODOLIST-TITLE'
    title: string
    todolistID: string
}

export type ActionType = RemoveTodoListAT
    | AddTodoListAT
    | ChangeFilterAT
    | ChangeTodolistTitleAT


export const todoListReducer = (todolists: todolistsType[], action: ActionType): todolistsType[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return todolists.filter(tl => tl.id !== action.id)
        case 'ADD-TODOLIST':
            const newTodoListID = v1()
            return [...todolists, {id: newTodoListID, title: action.title, filter: 'all'}]
        case 'CHANGE-FILTER':
            return todolists.map(tl => tl.id === action.todolistID ? {...tl, filter: action.filter} : tl)
        case 'CHANGE-TODOLIST-TITLE':
            return todolists.map(tl => tl.id === action.todolistID ? {...tl, title: action.title} : tl)
        default:
            return todolists
    }
}

export const RemoveTodoListAC = (id: string): RemoveTodoListAT => {
    return {
        type: 'REMOVE-TODOLIST', id
    }
}
export const AddTodoListAC = (title: string): AddTodoListAT => {
    return {
        type: 'ADD-TODOLIST', title
    }
}
export const ChangeTodolistTitleAC = (todolistID: string, title: string): ChangeTodolistTitleAT => {
    return {
        type: "CHANGE-TODOLIST-TITLE",
        todolistID,
        title
    }
}
export const ChangeFilterAC = (todolistID: string, filter: FilterValuesType): ChangeFilterAT => {
    return {
        type: "CHANGE-FILTER",
        todolistID,
        filter
    }
}