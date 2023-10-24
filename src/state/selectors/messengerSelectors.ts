import {AppStateType} from '../store';

export const selectMessengerDialogs = (state: AppStateType) => state.dialogs.dialogs
export const selectMessengerMessages = (state: AppStateType) => state.dialogs.messages