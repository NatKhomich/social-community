import {appReducer, AppStateType, changeStatusLoadingAC, setInitializedAC} from "./appReducer";


let startState: AppStateType

beforeEach(() => {

    startState = {
        status: 'idle',
        isInitialized: false,
        error: null
    }
})

test('correct status should be changed', () => {

    const endState = appReducer(startState, changeStatusLoadingAC('loading'))

    expect(endState.status).toBe('loading')
})

test('correct initialized should be changed', () => {

    const endState = appReducer(startState, setInitializedAC(true))

    expect(endState.isInitialized).toBe(true)
})

