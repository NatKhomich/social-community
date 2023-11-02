import {AppRootStateType} from '../store';

export const selectAuthIsLoggedIn = (state: AppRootStateType) => state.auth.isLoggedIn
export const selectAuthLoginData = (state: AppRootStateType) => state.auth.loginData.login
export const selectAuthLoginDataId = (state: AppRootStateType) => state.auth.loginData.id