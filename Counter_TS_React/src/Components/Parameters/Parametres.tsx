import s from "./Paramentres.module.css";
import {Button} from "../Button/Button";
import {ChangeEvent} from "react";

type ParametresPropsType = {
    maxValue: string
    startValue: string
    inputOnChangeStartValue: (value: string) => void
    inputOnChangeMaxValue: (value: string) => void
}

export const Parametres = (props: ParametresPropsType) => {
    const inputOnChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => props.inputOnChangeMaxValue(e.currentTarget.value)
    const inputOnChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => props.inputOnChangeStartValue(e.currentTarget.value)
    return (
        <div className={s.wrapper}>
            <div className={s.box}>
                <div className={s.littleBox}>
                    <div>Max value: <input onChange={inputOnChangeMaxValueHandler} type={"number"}
                                           value={props.maxValue}/></div>
                    <div>Min value: <input onChange={inputOnChangeStartValueHandler} type={"number"}
                                           value={props.startValue}/></div>
                </div>
                <div className={s.littleBox}>
                    <Button name={'Set'} callback={() => {
                    }} className={''}/>
                </div>
            </div>
        </div>
    )
}