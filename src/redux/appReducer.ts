export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
type appStateType = {
    status: RequestStatusType
    isInitialized: boolean
    // error: string | null
}

const initialState: appStateType = {
    status: 'idle',
    // проиниуциализировано ли приложение. будет крутилка пока приложение не поймет что показать туду или логин
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

