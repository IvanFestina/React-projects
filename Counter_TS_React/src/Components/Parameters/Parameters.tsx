import s from "./Paramentres.module.css";
import {ChangeEvent} from "react";
import {Button, Input, TextField} from "@mui/material";
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';


type ParametersPropsType = {
    maxValue: number
    startValue: number
    inputOnChangeStartValue: (value: number) => void
    inputOnChangeMaxValue: (value: number) => void
    setSet: (set: boolean) => void
    set: boolean
    setError: (error: boolean) => void
    error: boolean
    parametersToCounter: () => void

}

export const Parameters = (props: ParametersPropsType) => {

    const inputOnChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.inputOnChangeMaxValue(+e.currentTarget.value)
        props.setSet(false)
    }
    const inputOnChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.inputOnChangeStartValue(+e.currentTarget.value)
        props.setSet(false)
    }
    const onClickHandler = () => {
        props.setSet(true)
        props.parametersToCounter()
    }
    const spanValueStyle = props.error ? s.labelWithError : s.label

    return (
        <div className={s.wrapper}>
            <div className={s.box}>
                <div className={s.valueBox}>
                    <div>
                        <span className={spanValueStyle}>Max value:</span>
                        <Input onChange={inputOnChangeMaxValueHandler}
                               type={"number"}
                               value={props.maxValue}
                               error={props.error}/></div>
                    <div>
                        <span className={spanValueStyle}>Start value:</span>
                        <Input onChange={inputOnChangeStartValueHandler}
                               type={"number"}
                               value={props.startValue} error={props.error}/></div>
                </div>
                <div className={s.buttonBox}>
                    <Button variant={'contained'}
                            disabled={props.set || props.error}
                            size={'small'}
                            onClick={onClickHandler}
                            startIcon={<DisplaySettingsIcon/>}>Set</Button>
                </div>
            </div>
        </div>
    )
}