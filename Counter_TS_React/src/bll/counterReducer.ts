import React from 'react'
import {Dispatch} from "redux";

let initialState: InitialStateType = {
    counterValue: 0,
    startValue: 0,
    maxValue: 5,
    loadedSettings: false,
    error: false,
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "COUNTER-UP":
            return {
                ...state, counterValue: state.counterValue + 1
            }
        case "SET-START-VALUE":
            return {
                ...state, startValue: action.value
            }
        case "SET-COUNTER-VALUE":
            return {
                ...state, counterValue: action.value
            }
        case "SET-MAX-VALUE":
            return {
                ...state, maxValue: action.value
            }
        case "SET-ERROR":
            return {
                ...state, error: action.error
            }
        case "SET-LOADED-SETTINGS":
            return {
                ...state, loadedSettings: action.loadedSettings
            }
        default:
            return state
    }
}

// A C T I O N S

export const CounterValueUpAC = () => ({type: "COUNTER-UP"} as const)
export const SetCounterValueAC = (value: number) => ({type: "SET-COUNTER-VALUE", value} as const)
export const SetStartValueAC = (value: number) => ({type: "SET-START-VALUE", value} as const)
export const SetMaxValueAC = (value: number) => ({type: "SET-MAX-VALUE", value} as const)
export const SetErrorAC = (error: boolean) => ({type: "SET-ERROR", error} as const)
export const SetLoadedSettingsAC = (loadedSettings: boolean) => ({type: "SET-LOADED-SETTINGS", loadedSettings} as const)



// // THUNK - функция - для dispatch action и работа с sideEffects
//
// const CounterSetStartValueTC = (value: number) => (dispatch: Dispatch) => {
//     localStorage.setItem('startValue', JSON.stringify(value))
// }

// T Y P E S


export type InitialStateType = {
    counterValue: number
    startValue: number
    maxValue: number
    loadedSettings: boolean
    error: boolean
}

export type ActionType = CounterValueUpActionType
    | SetStartValueActionType
    | SetMaxValueActionType
    | SetCounterValueActionType
    | SetErrorActionType
    | SetLoadedSettingsActionType

export type CounterValueUpActionType = ReturnType<typeof CounterValueUpAC>
export type SetStartValueActionType = ReturnType<typeof SetStartValueAC>
export type SetMaxValueActionType = ReturnType<typeof SetMaxValueAC>
export type SetCounterValueActionType = ReturnType<typeof SetCounterValueAC>
export type SetErrorActionType = ReturnType<typeof SetErrorAC>
export type SetLoadedSettingsActionType = ReturnType<typeof SetLoadedSettingsAC>

