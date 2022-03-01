import React, {useEffect, useState} from 'react';
import s from './App.module.css'
import {CounterRenderer} from './Components/Counter/CounterRenderer'
import {Parameters} from "./Components/Parameters/Parameters";
import {useDispatch, useSelector} from "react-redux";
import {SetCounterValueAC, SetErrorAC, SetMaxValueAC, SetStartValueAC} from './bll/counterReducer';
import {AppStateType} from "./bll/Store";

function App() {

    const dispatch = useDispatch()
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const error = useSelector<AppStateType, boolean>(state => state.counter.error)
    const loadedSettings = useSelector<AppStateType, boolean>(state => state.counter.loadedSettings)

    const inputOnChangeStartValue = (value: number) => {
        dispatch(SetStartValueAC(value));
    }
    const inputOnChangeMaxValue = (value: number) => {
        dispatch(SetMaxValueAC(value));
    }
    const parametersToCounter = () => {
        dispatch(SetCounterValueAC(startValue))
    }

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
