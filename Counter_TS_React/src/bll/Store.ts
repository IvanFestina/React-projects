import {applyMiddleware, combineReducers, createStore} from "redux"
import { counterReducer } from "./counterReducer"
import thunk from "redux-thunk";

let rootReducer = combineReducers ( {
counter: counterReducer
})
export type RootReducerType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunk))

//@ts-ignore
window.store=store