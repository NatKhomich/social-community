import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {setIsLoggedInAC} from './authReducer';

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
type appStateType = {
    status: RequestStatusType
    isInitialized: boolean
    // error: string | null
}

const initialState: appStateType = {
    status: 'idle',
    // проиниуциализировано ли приложение. будет крутилка пока приложение не поймет что показать профайл или логин
    isInitialized: false
    // error: null,
}

export const appReducer = (state= initialState, action: AppReducerActionsType): appStateType => {
    switch (action.type) {
        case 'SET-STATUS-LOADING' : {
            return {...state, status: action.status}
        }
        case 'SET-INITIALIZED':
            return {...state, isInitialized: action.initialized}
       /* case 'SET-ERROR' : {
            return {...state, error: action.error}
        }*/
        default: return state
    }
}

export type AppReducerActionsType = ChangeStatusLoadingActionType | SetInitializedACActionType
export type ChangeStatusLoadingActionType = ReturnType<typeof changeStatusLoadingAC>
export type SetInitializedACActionType = ReturnType<typeof setInitializedAC>

/*export type SetErrorActionType = ReturnType<typeof setErrorAC>*/
export const changeStatusLoadingAC = (status: RequestStatusType) => ({type: 'SET-STATUS-LOADING', status} as const)
export const setInitializedAC = (initialized: boolean) => ({type: 'SET-INITIALIZED', initialized} as const)
/*export const setErrorAC = (error: string | null) => ({type: 'SET-ERROR', error} as const)*/

export const initializeAppTC = () => (dispatch: Dispatch) => {
    dispatch(changeStatusLoadingAC('loading'))
    authAPI.authMe()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(res.data.data, true))
                dispatch(changeStatusLoadingAC('succeeded'))
            } else {
                dispatch(setIsLoggedInAC(res.data.data, false))
                dispatch(changeStatusLoadingAC('failed'))
            }
        })
        .catch(() => {
            dispatch(changeStatusLoadingAC('failed'))
        })
        .finally(() => {
            //убрать крутилку в любом случае как только пришел ответ на me запрос
            dispatch(setInitializedAC(true))
        })
}