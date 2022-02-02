import s from "./counter.module.css";
import {Button, ButtonGroup} from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import React from "react";

type CounterType = {
    counter: number
    setCounter: (counter: number) => void
    maxValue: number
    startValue: number
}

export const CounterWithLogic = (props: CounterType) => {
    let maxNumber = props.maxValue;
    const disabledInc = props.counter === maxNumber
    const counterStringStyle = disabledInc ? s.counterFinal : s.counterDefault;

    const counterIncrementHandler = () => {
        props.setCounter(props.counter + 1)
        localStorage.setItem('counterValue', JSON.stringify(props.counter + 1))
    }
    const resetHandler = () => {
        props.setCounter(props.startValue)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.box}>
                <div className={s.littleBox}>
                    <div className={counterStringStyle}>{props.counter}</div>
                </div>
                <div className={s.littleBox}>
                    <ButtonGroup style={{paddingTop: '15px'}}
                                 variant={'contained'}
                                 size={'small'}
                                 disableElevation>
                        <Button startIcon={<ArrowCircleUpIcon/>}
                                disabled={disabledInc}
                                onClick={counterIncrementHandler}>Push me</Button>
                        <Button startIcon={<RestartAltIcon/>}
                                onClick={resetHandler}>Reset me</Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    )
}