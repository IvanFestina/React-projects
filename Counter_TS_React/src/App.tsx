import React, {useEffect, useState} from 'react';
import s from './App.module.css'
import {CounterRenderer} from './Components/Counter/CounterRenderer'
import {Parameters} from "./Components/Parameters/Parameters";
import {useDispatch, useSelector} from "react-redux";
import {SetCounterValueAC, SetErrorAC, SetMaxValueAC, SetStartValueAC} from './bll/counterReducer';
import {RootReducerType} from "./bll/Store";

function App() {

    // const [counter, setCounter] = useState<number>(0)
    // const [maxValue, setMaxValue] = useState<number>(5)
    // const [startValue, setStartValue] = useState<number>(0)
    // const [loadedSettings, setLoadedSettings] = useState<boolean>(false)
    // const [error, setError] = useState<boolean>(false)

    const dispatch = useDispatch()
    const startValue = useSelector<RootReducerType, number>(state => state.counter.startValue)
    const maxValue = useSelector<RootReducerType, number>(state => state.counter.maxValue)
    const error = useSelector<RootReducerType, boolean>(state => state.counter.error)
    const loadedSettings = useSelector<RootReducerType, boolean>(state => state.counter.loadedSettings)

    const inputOnChangeStartValue = (value: number) => {
        dispatch(SetStartValueAC(value));
        localStorage.setItem('startValue', JSON.stringify(value))
    }
    const inputOnChangeMaxValue = (value: number) => {
        dispatch(SetMaxValueAC(value));
        localStorage.setItem('maxValue', JSON.stringify(value))
    }
    const parametersToCounter = () => {
        dispatch(SetCounterValueAC(startValue))
    }
    useEffect(() => {
        const counterFromLocalStorage = JSON.parse(localStorage.getItem('counterValue') || '0')
        dispatch(SetCounterValueAC(counterFromLocalStorage))
        const maxValueFromLocalStorage = JSON.parse(localStorage.getItem('maxValue') || '5')
        dispatch(SetMaxValueAC(maxValueFromLocalStorage))
        const startValueFromLocalStorage = JSON.parse(localStorage.getItem('startValue') || '0')
        dispatch(SetStartValueAC(startValueFromLocalStorage))
    }, [])
    useEffect(() => {
        if (startValue >= maxValue || startValue < 0 || maxValue < 0) {
            dispatch(SetErrorAC(true))
        } else {
            dispatch(SetErrorAC(false))
        }
    }, [startValue, maxValue])


return (
    <div className={s.App}>
        <Parameters maxValue={maxValue}
                    startValue={startValue}
                    inputOnChangeStartValue={inputOnChangeStartValue}
                    inputOnChangeMaxValue={inputOnChangeMaxValue}
                    loadedSettings={loadedSettings}
                    error={error}
                    parametersToCounter={parametersToCounter}
        />
        <CounterRenderer
                         maxValue={maxValue}
                         startValue={startValue}
                         error={error}
                         loadedSettings={loadedSettings}

        />
    </div>
)
}

export default App
