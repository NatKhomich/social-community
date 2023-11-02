import {AppRootStateType} from '../../app/store';

export const selectProfile = (state: AppRootStateType) => state.profile.profile
export const selectProfileStatus = (state: AppRootStateType) => state.profile.status
export const selectProfilePosts = (state: AppRootStateType) => state.profile.posts