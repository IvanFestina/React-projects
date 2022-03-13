import s from "./counter.module.css";
import {Button, ButtonGroup} from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import React from "react";
import {AppStateType} from "../../bll/Store";
import {useDispatch, useSelector} from "react-redux";
import {CounterValueUpAC, SetCounterValueAC} from "../../bll/counterReducer";

type CounterType = {
    maxValue: number
    startValue: number
}

export const CounterWithLogic = (props: CounterType) => {

    const counterValue = useSelector<AppStateType, number>(state => state.counter.counterValue)
    const dispatch = useDispatch()

    let maxNumber = props.maxValue;
    const disabledInc = counterValue === maxNumber
    const counterStringStyle = disabledInc ? s.counterFinal : s.counterDefault;

    const counterIncrementHandler = () => {
        dispatch(CounterValueUpAC())
    }
    const resetHandler = () => {
        dispatch(SetCounterValueAC(props.startValue))
    }

    return (
        <div className={s.wrapper}>
            <div className={s.box}>
                <div className={s.littleBox}>
                    <div className={counterStringStyle}>{counterValue}</div>
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