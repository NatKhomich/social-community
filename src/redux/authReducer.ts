import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {changeStatusLoadingAC, setInitializedAC} from './appReducer';
import {DataLoginType} from '../Components/Login/Login';
import {AppThunkDispatch} from './reduxStore';

export type authType = {
    // id: null | number
    // email: null | string
    isAuth: boolean
    login: null | string //имя польз
}

const inintialState = {
    // id: null,
    // email: null,
    isAuth: false,
    login: null
}

export const authReducer = (state: authType = inintialState, action: ActionsType): authType => {
    switch (action.type) {
        case 'SET-IS-AUTH':
            return {...state, login: action.loginData, isAuth: action.value}
        default:
            return state
    }
}

export const setIsAuthAC = (loginData: string | null, value: boolean) => ({
    type: 'SET-IS-AUTH',
    loginData,
    value
} as const)

//авторизован или нет
export const setIsAuthTC = () => (dispatch: Dispatch) => {
    dispatch(changeStatusLoadingAC('loading'))
    authAPI.authMe()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsAuthAC(res.data.data.login, true))
                // dispatch(setInitializedAC(true))
                dispatch(changeStatusLoadingAC('succeeded'))
            } else {
                dispatch(setIsAuthAC(res.data.data.login, false))
                dispatch(changeStatusLoadingAC('failed'))
            }
        })
        .catch(() => {
            dispatch(changeStatusLoadingAC('failed'))
        })
        .finally(() => {
            dispatch(setInitializedAC(true)) //убрать крутилку в любом случае как только отпр me запрос
        })
}
//зарегистрироваться в форме (отправить свои данные на сервер - логин пароль)
export const loginTC = (data: DataLoginType) => (dispatch: AppThunkDispatch) => {
    dispatch(changeStatusLoadingAC('loading'))
    authAPI.login(data)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsAuthTC())
                dispatch(changeStatusLoadingAC('succeeded'))
            } else {
                dispatch(changeStatusLoadingAC('failed'))
            }
        })
        .catch(() => {
            dispatch(changeStatusLoadingAC('failed'))
        })
}

export const logoutTC = () => (dispatch: AppThunkDispatch) => {
    dispatch(changeStatusLoadingAC('loading'))
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsAuthAC(null, false))
                dispatch(changeStatusLoadingAC('succeeded'))
            } else {
                dispatch(changeStatusLoadingAC('failed'))
            }
        })
        .catch(() => {
            dispatch(changeStatusLoadingAC('failed'))
        })
}


type ActionsType = ReturnType<typeof setIsAuthAC>
