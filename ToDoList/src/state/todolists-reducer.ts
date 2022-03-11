import {todolistsAPI, TodolistType} from '../api/todolists-api'
import {Dispatch} from "redux";

export type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST',
    todolistId: string
}
export type AddTodolistActionType = {
    type: 'ADD-TODOLIST',
    todolistId: TodolistType
}
export type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE',
    todolistId: string
    title: string
}
export type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER',
    todolistId: string
    filter: FilterValuesType
}

type ActionsType = RemoveTodolistActionType | AddTodolistActionType
    | ChangeTodolistTitleActionType
    | ChangeTodolistFilterActionType
    | GetTodosActionType

const initialState: Array<TodolistDomainType> = [
    /*{id: todolistId1, title: 'What to learn', filter: 'all', addedDate: '', order: 0},
    {id: todolistId2, title: 'What to buy', filter: 'all', addedDate: '', order: 0}*/
]

export type FilterValuesType = 'all' | 'active' | 'completed';
export type TodolistDomainType = TodolistType & {
    filter: FilterValuesType
}

export const todolistsReducer = (state: Array<TodolistDomainType> = initialState, action: ActionsType): Array<TodolistDomainType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(tl => tl.id !== action.todolistId)
        }
        case 'ADD-TODOLIST': {
            const newTodolist: TodolistDomainType = {...action.todolistId, filter: 'all'}
            return [newTodolist, ...state]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            const todolist = state.find(tl => tl.id === action.todolistId);
            if (todolist) {
                // если нашёлся - изменим ему заголовок
                todolist.title = action.title;
            }
            return [...state]
        }
        case 'CHANGE-TODOLIST-FILTER': {
            const todolist = state.find(tl => tl.id === action.todolistId);
            if (todolist) {
                // если нашёлся - изменим ему заголовок
                todolist.filter = action.filter;
            }
            return [...state]
        }
        case 'GET-TODOS': {
            return action.todos.map( (tl) => ({...tl, filter: 'all'}) )
        }
        default:
            return state;
    }
}

export const removeTodolistAC = (todolistId: string): RemoveTodolistActionType => {
    return {type: 'REMOVE-TODOLIST', todolistId}
}
export const addTodolistAC = (todolistId: TodolistType): AddTodolistActionType => {
    return {type: 'ADD-TODOLIST', todolistId}
}
export const changeTodolistTitleAC = (todolistId: string, title: string): ChangeTodolistTitleActionType => {
    return {type: 'CHANGE-TODOLIST-TITLE', todolistId, title: title}
}
export const changeTodolistFilterAC = (todolistId: string, filter: FilterValuesType): ChangeTodolistFilterActionType => {
    return {type: 'CHANGE-TODOLIST-FILTER', todolistId, filter: filter}
}
export const getTodosAC = (todos: TodolistType[]) => {
    return {
        type: 'GET-TODOS',
        todos
    } as const
}

export type GetTodosActionType = ReturnType<typeof getTodosAC>
export type getTodosTCType = ReturnType<typeof getTodosTC>

export const getTodosTC = () => {
   return (dispatch: Dispatch) => {
        todolistsAPI.getTodolists()
        .then(result => {
        dispatch(getTodosAC(result.data))
        })
    }
}
export const removeTodolistTC = (todolistId: string) => {
   return (dispatch: Dispatch) => {
        todolistsAPI.deleteTodolist(todolistId)
        .then(result => {
        dispatch(removeTodolistAC(todolistId))
        })
    }
}
export const addTodolistTC = (title: string) => {
    return (dispatch: Dispatch) => {
    todolistsAPI.createTodolist(title)
        .then(res => {
        dispatch(addTodolistAC(res.data.data.item))
        })
    }
}
export const changeTodolistTitleTC = (todolistId: string, title: string) => {
    return (dispatch: Dispatch) => {
    todolistsAPI.updateTodolist(todolistId, title)
        .then(res => {
        dispatch(changeTodolistTitleAC(todolistId, title))
        })
    }
}