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

const authReducer = (state: authType = inintialState, action: ActionsType): authType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

export const setAuthUserDataAC = (data: authType) => ({type: 'SET-USER-DATA', data} as const)

type ActionsType = ReturnType<typeof setAuthUserDataAC>

export default authReducer;