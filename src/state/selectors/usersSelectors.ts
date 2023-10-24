import {AppStateType} from '../store';

export const selectUsers = (state: AppStateType) => state.users
export const selectUsersPage = (state: AppStateType) => state.users.page
export const selectUsersPageSize = (state: AppStateType) => state.users.pageSize

export const selectUsersTotalCount = (state: AppStateType) => state.users.totalCountUser
export const selectUsersFollowingProgress = (state: AppStateType) => state.users.followingProgress
//export const selectUsersItems = (state: AppStateType) => state.users.items