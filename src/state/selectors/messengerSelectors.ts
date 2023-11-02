import {AppRootStateType} from '../store';

export const selectMessengerDialogs = (state: AppRootStateType) => state.dialogs.dialogs
export const selectMessengerMessages = (state: AppRootStateType) => state.dialogs.messages