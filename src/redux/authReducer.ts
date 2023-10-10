import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {changeStatusLoadingAC} from './appReducer';
import {DataLoginType} from '../Components/Login/Login';
import {AppThunkDispatch} from './reduxStore';

export type authType = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean
}

const inintialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state: authType = inintialState, action: ActionsType): authType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, isAuth: true}
        default:
            return state
    }
}

export const setAuthUserDataAC = (data: authType) => ({type: 'SET-USER-DATA', data} as const)


//авторизован или нет
export const setAuthUserDataTC = () => (dispatch: Dispatch) => {
    dispatch(changeStatusLoadingAC('loading'))
    authAPI.getAuthMe()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(res.data.data))
                dispatch(changeStatusLoadingAC('succeeded'))
            } else {
                dispatch(changeStatusLoadingAC('failed'))
            }
        }).catch(() => {
        dispatch(changeStatusLoadingAC('failed'))
    })
}
//зарегистрироваться в форме (отправить свои данные на сервер - логин пароль)
export const loginTC = (data: DataLoginType) => (dispatch: AppThunkDispatch) => {
    dispatch(changeStatusLoadingAC('loading'))
    authAPI.login(data)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserDataTC())
                dispatch(changeStatusLoadingAC('succeeded'))
            } else {
                dispatch(changeStatusLoadingAC('failed'))
            }
        }).catch(() => {
        dispatch(changeStatusLoadingAC('failed'))
    })
}

export const logoutTC = () => (dispatch: AppThunkDispatch) => {
    dispatch(changeStatusLoadingAC('loading'))
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {

                dispatch(changeStatusLoadingAC('succeeded'))
            } else {
                dispatch(changeStatusLoadingAC('failed'))
            }
        }).catch(() => {
        dispatch(changeStatusLoadingAC('failed'))
    })
}


type ActionsType = ReturnType<typeof setAuthUserDataAC>
