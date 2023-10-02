import {Dispatch} from 'redux';
import {socialAPI} from '../api/api';

export type UserPropsType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        small: string | undefined
        large: string | undefined
    }
    status: null | string
    followed: boolean
}
export type UsersType = {
    items: UserPropsType[]
    pageSize: number
    totalCountUser: number
    currentPage: number
    isFetching: boolean
    followingProgress: number[]
}
const usersInintialState: UsersType = {
    items: [],
    pageSize: 10,
    totalCountUser: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
}

const UsersPageReducer = (state: UsersType = usersInintialState, action: ActionsType): UsersType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, items: state.items.map(el => el.id === action.userID ? {...el, followed: true} : el)}
        case 'UNFOLLOW':
            return {...state, items: state.items.map(el => el.id === action.userID ? {...el, followed: false} : el)}
        case 'SET-USERS':
            return {...state, items: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-USERS-TOTAL-COUNT':
            return {...state, totalCountUser: action.totalCount}
        case 'TOGGLE-IS-FETCHING' :
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE-IS-FOLLOWING-PROGRESS': {
            return {...state,
                followingProgress: action.followingProgress ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)}
        }
        default:
            return state
    }
}

export const followAC = (userID: number) => ({type: 'FOLLOW', userID} as const)
export const unfollowAC = (userID: number) => ({type: 'UNFOLLOW', userID} as const)
export const setUsersAC = (users: UserPropsType[]) => ({type: 'SET-USERS', users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setUsersTotalCountAC = (totalCount: number) => ({type: 'SET-USERS-TOTAL-COUNT', totalCount} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
export const toggleIsFollowingProgressAC = (userId: number, followingProgress: boolean) => (
    {type: 'TOGGLE-IS-FOLLOWING-PROGRESS', userId, followingProgress} as const)


export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    socialAPI.getUsers(currentPage, pageSize)
        .then(res => {
            dispatch(toggleIsFetchingAC(false))
            dispatch(setUsersAC(res.data.items))
            dispatch(setUsersTotalCountAC(res.data.totalCount))
        })
}
export const setCurrentPageTC = (pageNumber: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(setCurrentPageAC(pageNumber))
    dispatch(toggleIsFetchingAC(true))
    socialAPI.getUsersCurrentPage(pageNumber, pageSize)
        .then(res => {
            dispatch(setUsersAC(res.data.items))
            dispatch(toggleIsFetchingAC(false))
        })
}
export const followTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingProgressAC(userId, true))
    socialAPI.follow(userId)
        .then(res => {
            if(res.data.resultCode === 0) {
                dispatch(followAC(userId))
                dispatch(toggleIsFollowingProgressAC(userId, false))
            }
        })
}
export const unfollowTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingProgressAC(userId, true))
    socialAPI.unfollow(userId)
        .then(res => {
            if(res.data.resultCode === 0) {
                dispatch(unfollowAC(userId))
                dispatch(toggleIsFollowingProgressAC(userId, false))
            }
        })
}


type ActionsType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC> | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof toggleIsFollowingProgressAC>

export default UsersPageReducer;