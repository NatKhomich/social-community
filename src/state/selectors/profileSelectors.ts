import {AppStateType} from '../store';

export const selectProfile = (state: AppStateType) => state.profile.profile
export const selectProfileStatus = (state: AppStateType) => state.profile.status
export const selectProfilePosts = (state: AppStateType) => state.profile.posts