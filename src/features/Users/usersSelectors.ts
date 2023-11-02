import {AppRootStateType} from '../../app/store';

export const selectUsers = (state: AppRootStateType) => state.users
export const selectUsersPage = (state: AppRootStateType) => state.users.page
export const selectUsersPageSize = (state: AppRootStateType) => state.users.pageSize

export const selectUsersTotalCount = (state: AppRootStateType) => state.users.totalCountUser
export const selectUsersFollowingProgress = (state: AppRootStateType) => state.users.followingProgress
//export const selectUsersItems = (state: AppStateType) => state.users.items