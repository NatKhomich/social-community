import {authReducer, AuthType, setIsLoggedInAC} from "./authReducer";
import {UserAuthType} from "../api/api";


let startState: AuthType

beforeEach(() => {

    startState = {
        isLoggedIn: false, //залогинены или нет (логин пароль)
        loginData: {} as UserAuthType
    }
})

test('correct login should be changed', () => {

    const endState = authReducer(startState, setIsLoggedInAC({id: '1', login: 'test-login', email: 'test-email'}, true))

    expect(endState.isLoggedIn).toBe(true)
    expect(endState.loginData.login).toBe('test-login')
    expect(endState.loginData.email).toBe('test-email')
})

