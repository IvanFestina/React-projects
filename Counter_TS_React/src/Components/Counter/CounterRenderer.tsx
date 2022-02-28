import React from 'react';
import s from './counter.module.css'
import {Button, ButtonGroup, Typography} from "@mui/material";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {IncorrectValue} from "./IncorrectValue";
import {Request} from "./Request";
import {CounterWithLogic} from "./CounterWithLogic";


type CounterType = {
    maxValue: number
    startValue: number
    error: boolean
    loadedSettings: boolean
}
export const CounterRenderer = (props: CounterType) => {

//Здесь логика отрисовки в зависимости от значиния ошибки в useState и от засетанных параметров
        return (
            props.error ? <IncorrectValue/>
                : !props.loadedSettings ? <Request/>
                    : <CounterWithLogic
                        maxValue={props.maxValue}
                        startValue={props.startValue}
                    />
        )

}
