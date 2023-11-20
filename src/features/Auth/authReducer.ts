import {changeStatusLoadingAC, ErrorType, initializeAppTC} from '../../app/appReducer';
import {handleServerAppError} from "../../common/utils/handleServerAppError";
import {handleServerNetworkError} from "../../common/utils/handleServerNetworkError";
import {AxiosError} from "axios";
import {authAPI} from "../../api/authApi";
import {AppThunkDispatch} from "../../app/store";
import {securityAPI} from "../../api/securityApi";

export type AuthType = {
    isLoggedIn: boolean
    userId: string
    email: string | null
    login: string | null
    captchaUrl: null | string
}

const inintialState = {
    isLoggedIn: false,
    userId: '',
    email: null,
    login: null,
    captchaUrl: null
}

export const authReducer = (state: AuthType = inintialState, action: ActionsType): AuthType => {
    switch (action.type) {
        case 'auth/SET-IS-LOGGED-IN':
            return {...state, ...action.payload}
        case 'auth/GET-CAPTCHA-URL':
            return {...state, captchaUrl: action.captchaUrl}
        default:
            return state
    }
}

export const setIsLoggedInAC = (userId: string, email: string | null, login: string | null, isLoggedIn: boolean) => ({
    type: 'auth/SET-IS-LOGGED-IN',
    payload: {
        userId,
        email,
        login,
        isLoggedIn
    }} as const)

export const getCaptchaUrlAC = (captchaUrl: string) => ({
    type: 'auth/GET-CAPTCHA-URL', captchaUrl} as const)

//зарегистрироваться в форме (отправить свои данные на сервер - логин пароль)
export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: string | null) => (dispatch: AppThunkDispatch) => {
    dispatch(changeStatusLoadingAC('loading'))
    authAPI.login(email, password, rememberMe, captcha)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(initializeAppTC())
                dispatch(changeStatusLoadingAC('succeeded'))
            }
            else {
                if (res.data.resultCode === 10 ) {
                    dispatch(getCaptchaUrlTC())
                }
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
                dispatch(setIsLoggedInAC('', null, null, false))
                dispatch(changeStatusLoadingAC('succeeded'))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((error: AxiosError<ErrorType>) => {
            handleServerNetworkError(error.message, dispatch)
        })
}

export const getCaptchaUrlTC = () => (dispatch: AppThunkDispatch) => {
    dispatch(changeStatusLoadingAC('loading'))
    securityAPI.getCaptchaUrl()
        .then(res => {
            dispatch(getCaptchaUrlAC(res.data.url))

        })
        .catch((error: AxiosError<ErrorType>) => {
            handleServerNetworkError(error.message, dispatch)
        })
}

type ActionsType = ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof getCaptchaUrlAC>
