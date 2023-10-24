import {Dispatch} from 'redux';
import {followAPI, usersAPI} from '../api/api';
import {changeStatusLoadingAC} from './appReducer';


const usersInintialState: UsersType = {
    items: [],
    pageSize: 10,
    totalCountUser: 0,
    page: 1,
    followingProgress: []
}

export const usersReducer = (state: UsersType = usersInintialState, action: ActionsType): UsersType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, items: state.items.map(el => el.id === action.userID ? {...el, followed: true} : el)}
        case 'UNFOLLOW':
            return {...state, items: state.items.map(el => el.id === action.userID ? {...el, followed: false} : el)}
        case 'SET-USERS':
            return {...state, items: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, page: action.page}
        case 'SET-USERS-TOTAL-COUNT':
            return {...state, totalCountUser: action.totalCount}
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
export const setUsersAC = (users: UsersResponseType[]) => ({type: 'SET-USERS', users} as const)
export const setCurrentPageAC = (page: number) => ({type: 'SET-CURRENT-PAGE', page} as const)
export const setUsersTotalCountAC = (totalCount: number) => ({type: 'SET-USERS-TOTAL-COUNT', totalCount} as const)
export const toggleIsFollowingProgressAC = (userId: number, followingProgress: boolean) => (
    {type: 'TOGGLE-IS-FOLLOWING-PROGRESS', userId, followingProgress} as const)


export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(changeStatusLoadingAC('loading'))
    usersAPI.getUsers(currentPage, pageSize)
        .then(res => {
            dispatch(setUsersAC(res.data.items))
            dispatch(setUsersTotalCountAC(res.data.totalCount))
            dispatch(changeStatusLoadingAC('succeeded'))
        })
}
export const setCurrentPageTC = (pageNumber: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(changeStatusLoadingAC('loading'))
    dispatch(setCurrentPageAC(pageNumber))
    usersAPI.getUsersCurrentPage(pageNumber, pageSize)
        .then(res => {
            dispatch(setUsersAC(res.data.items))
            dispatch(changeStatusLoadingAC('succeeded'))
        })
}
export const followTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingProgressAC(userId, true))
    dispatch(changeStatusLoadingAC('loading'))
    followAPI.follow(userId)
        .then(res => {
            if(res.data.resultCode === 0) {
                dispatch(followAC(userId))
                dispatch(toggleIsFollowingProgressAC(userId, false))
                dispatch(changeStatusLoadingAC('succeeded'))
            }
        })
}
export const unfollowTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(changeStatusLoadingAC('loading'))
    dispatch(toggleIsFollowingProgressAC(userId, true))
    followAPI.unfollow(userId)
        .then(res => {
            if(res.data.resultCode === 0) {
                dispatch(unfollowAC(userId))
                dispatch(toggleIsFollowingProgressAC(userId, false))
                dispatch(changeStatusLoadingAC('succeeded'))
            }
        })
}

//types
export type UsersResponseType = {
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
    items: UsersResponseType[]
    pageSize: number
    totalCountUser: number
    page: number
    followingProgress: number[]
}

type ActionsType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC> | ReturnType<typeof toggleIsFollowingProgressAC>

