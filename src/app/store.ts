import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {appReducer} from './appReducer';
import {authReducer} from '../features/Auth/authReducer';
import {usersReducer} from '../features/Users/usersReducer';
import {profileReducer} from '../features/Profile/profileReducer';
import {messengerReducer} from '../features/Messenger/messengerReducer';

let rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: messengerReducer,
    users: usersReducer,
    auth: authReducer,
    app: appReducer
})

export let store  = createStore(rootReducer, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>
export type AppThunkType<ReturnType = void> = ThunkAction<
    ReturnType,
    AppRootStateType,
    unknown,
    AnyAction
>

// @ts-ignore
window.store = store