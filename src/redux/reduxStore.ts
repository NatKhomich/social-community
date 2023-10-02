import {applyMiddleware, combineReducers, createStore} from 'redux';
import profilePageReducer from './profilePageReducer';
import dialogsPageReducer from './messengerPageReducer';
import usersPageReducer from './usersPageReducer';
import authReducer from './authReducer';
import thunk from 'redux-thunk';
import {appReducer} from './appReducer';

//новый стейт
let rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    app: appReducer
})

export let store  = createStore(rootReducer, applyMiddleware(thunk))
export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store