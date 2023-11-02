import axios from "axios";
import {Dispatch} from "redux";
import {changeStatusLoadingAC, setErrorAC} from "../state/appReducer";

export const handleServerNetworkError = (err: unknown, dispatch: Dispatch):void => {
    let errorMessage = "Some error occurred";
    if (axios.isAxiosError(err)) { // Проверка на наличие axios ошибки
        // err.response?.data?.message - например получение тасок с невалидной todolistId
        // err?.message - например при создании таски в offline режиме
        errorMessage = err.response?.data?.message || err?.message || errorMessage;

    } else if (err instanceof Error) {  // Проверка на наличие нативной ошибки
        errorMessage = `Native error: ${err.message}`;
    } else {
        errorMessage = JSON.stringify(err);// Какой-то непонятный кейс
    }
    dispatch(setErrorAC( errorMessage));
    dispatch(changeStatusLoadingAC("failed" ));
};