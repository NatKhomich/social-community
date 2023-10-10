import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {appReducer} from './appReducer';
import {authReducer} from './authReducer';
import {usersReducer} from './usersReducer';
import {profileReducer} from './profileReducer';
import {messengerReducer} from './messengerReducer';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: messengerReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

export let store  = createStore(rootReducer, applyMiddleware(thunk))
export type AppStateType = ReturnType<typeof rootReducer>

export type AppThunkDispatch = ThunkDispatch<AppStateType, any, AnyAction>

// @ts-ignore
window.store = store