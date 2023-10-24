import {authAPI, UserAuthType} from '../api/api';
import {changeStatusLoadingAC, initializeAppTC} from './appReducer';
import {DataLoginType} from '../Components/Login/Login';
import {AppThunkDispatch} from './store';

export type authType = {
    isLoggedIn: boolean
    loginData: UserAuthType
}

const inintialState = {
    isLoggedIn: false, //залогинены или нет (логин пароль)
    loginData: {} as UserAuthType
}

export const authReducer = (state: authType = inintialState, action: ActionsType): authType => {
    switch (action.type) {
        case 'SET-IS-LOGGED-IN':
            return {...state, loginData: action.loginData, isLoggedIn: action.value}
        default:
            return state
    }
}

export const setIsLoggedInAC = (loginData: UserAuthType, value: boolean) => ({
    type: 'SET-IS-LOGGED-IN', loginData, value} as const)

//авторизован или нет

//зарегистрироваться в форме (отправить свои данные на сервер - логин пароль)
export const loginTC = (data: DataLoginType) => (dispatch: AppThunkDispatch) => {
    dispatch(changeStatusLoadingAC('loading'))
    authAPI.login(data)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(initializeAppTC())
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
                dispatch(setIsLoggedInAC({id: null, login: null, email: null}, false))
                dispatch(changeStatusLoadingAC('succeeded'))
            } else {
                dispatch(changeStatusLoadingAC('failed'))
            }
        })
        .catch(() => {
            dispatch(changeStatusLoadingAC('failed'))
        })
}


type ActionsType = ReturnType<typeof setIsLoggedInAC>
