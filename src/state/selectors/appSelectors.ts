import {AppStateType} from '../store';

export const selectAppStatus = (state: AppStateType) => state.app.status
export const selectAppIsInitialized = (state: AppStateType) => state.app.isInitialized