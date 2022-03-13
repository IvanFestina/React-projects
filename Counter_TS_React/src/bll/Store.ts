import {applyMiddleware, combineReducers, createStore} from "redux"
import { counterReducer } from "./counterReducer"
import thunk from "redux-thunk";
import {loadState, saveState} from "../utils/localStorage-utils";

let rootReducer = combineReducers ( {
counter: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
    // localStorage.setItem('maxValue', JSON.stringify(store.getState().counter.maxValue))
    // localStorage.setItem('startValue', JSON.stringify(store.getState().counter.startValue))
    // localStorage.setItem('counterValue', JSON.stringify(store.getState().counter.counterValue))
})



//@ts-ignore
window.store=store