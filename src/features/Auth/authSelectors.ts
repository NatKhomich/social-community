import {AppRootStateType} from '../../app/store';

export const selectAuthIsLoggedIn = (state: AppRootStateType) => state.auth.isLoggedIn
export const selectAuthLoginData = (state: AppRootStateType) => state.auth.login
export const selectAuthLoginDataId = (state: AppRootStateType) => state.auth.userId
export const selectAuthCaptchaUrl = (state: AppRootStateType) => state.auth.captchaUrl