import {Dispatch} from "redux";
import {changeStatusLoadingAC, setErrorAC} from "../state/appReducer";
import {ResponseType} from "../api/api";

export const handleServerAppError = <T>(data: ResponseType<T>, dispatch: Dispatch) => {
    const error = data.messages[0]
    if (error) {
        dispatch(setErrorAC(error))
    } else {
        dispatch(setErrorAC('Some error occurred'))
    }
    dispatch(changeStatusLoadingAC('failed'))
}