import {setAppErrorAC, setAppStatusAC} from "../state/appReducer";
import {Dispatch} from "redux";

export const handleServerNetworkError = (dispatch: Dispatch<AppActionType>, message: string) => {
    dispatch(setAppErrorAC(message))
    dispatch(setAppStatusAC('failed'))

}