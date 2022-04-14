import {Dispatch} from "redux";
import {todolistsAPI} from "../api/todolists-api";
import {setTodolistsAC, SetTodolistsActionType} from "../features/TodolistsList/todolists-reducer";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
   status: 'loading' as RequestStatusType,
   error: null as string | null
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
   switch (action.type) {
       case 'APP/SET-STATUS':
           return {...state, status: action.status}
       case 'APP/SET-ERROR':
            return  {...state, error: action.error}
       default:
           return state
   }
}
//Actions

export const setAppStatusAC = (status: RequestStatusType) => ({
    type: 'APP/SET-STATUS',
    status
} as const)

export const setAppErrorAC = (error: string | null) => ({
    type: 'APP/SET-ERROR',
    error
} as const)

//THUNKS
export const fetchTodolistsTC = () => {
    return (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    todolistsAPI.getTodolists()
        .then(res => {
        dispatch(setTodolistsAC(res.data))
        dispatch(setAppStatusAC('succeeded'))
        })
    }
}

export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
type ActionsType = SetAppStatusActionType
| SetTodolistsActionType
| SetAppErrorActionType