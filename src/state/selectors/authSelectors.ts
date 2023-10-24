import {AppStateType} from '../store';

export const selectAuthIsLoggedIn = (state: AppStateType) => state.auth.isLoggedIn
export const selectAuthLoginData = (state: AppStateType) => state.auth.loginData.login
export const selectAuthLoginDataId = (state: AppStateType) => state.auth.loginData.id