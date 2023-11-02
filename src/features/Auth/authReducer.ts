import {changeStatusLoadingAC, ErrorType, initializeAppTC} from '../../app/appReducer';
import {DataLoginType} from './Login';
import {AppThunkDispatch} from '../../app/store';
import {handleServerAppError} from "../../common/utils/handleServerAppError";
import {handleServerNetworkError} from "../../common/utils/handleServerNetworkError";
import {AxiosError} from "axios";
import {authAPI, UserAuthType} from "../../api/authApi";

export type AuthType = {
    isLoggedIn: boolean
    loginData: UserAuthType
}

const inintialState = {
    isLoggedIn: false, //залогинены или нет (логин пароль)
    loginData: {} as UserAuthType
}

export const authReducer = (state: AuthType = inintialState, action: ActionsType): AuthType => {
    switch (action.type) {
        case 'auth/SET-IS-LOGGED-IN':
            return {...state, loginData: action.loginData, isLoggedIn: action.value}
        default:
            return state
    }
}

export const setIsLoggedInAC = (loginData: UserAuthType, value: boolean) => ({
    type: 'auth/SET-IS-LOGGED-IN', loginData, value} as const)

//зарегистрироваться в форме (отправить свои данные на сервер - логин пароль)
export const loginTC = (data: DataLoginType) => (dispatch: AppThunkDispatch) => {
    dispatch(changeStatusLoadingAC('loading'))
    authAPI.login(data)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(initializeAppTC())
                dispatch(changeStatusLoadingAC('succeeded'))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((error: AxiosError<ErrorType>) => {
            handleServerNetworkError(error.message, dispatch)
        })
}

export const logoutTC = () => (dispatch: AppThunkDispatch) => {
    dispatch(changeStatusLoadingAC('loading'))
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC({id: null, login: null, email: null}, false))
                dispatch(changeStatusLoadingAC('succeeded'))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((error: AxiosError<ErrorType>) => {
            handleServerNetworkError(error.message, dispatch)
        })
}


type ActionsType = ReturnType<typeof setIsLoggedInAC>
