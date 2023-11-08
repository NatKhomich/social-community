import {authReducer, AuthType, setIsLoggedInAC} from "./authReducer";
import {UserAuthType} from "../../api/authApi";


let startState: AuthType

beforeEach(() => {

    startState = {
        isLoggedIn: false, //залогинены или нет (логин пароль)
        userId: null,
        email: null,
        login: null,
        captchaUrl: null
    }
})

test('correct login should be changed', () => {

    const endState = authReducer(startState, setIsLoggedInAC(
        '1', 'test-email', 'test-login', false))

    expect(endState.isLoggedIn).toBe(true)
    expect(endState.login).toBe('test-login')
    expect(endState.email).toBe('test-email')
})

