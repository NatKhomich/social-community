import {Dispatch} from 'redux';
import {changeStatusLoadingAC, ErrorType} from '../../app/appReducer';
import {AxiosError} from "axios";
import {handleServerNetworkError} from "../../common/utils/handleServerNetworkError";
import {handleServerAppError} from "../../common/utils/handleServerAppError";
import {usersAPI} from "../../api/usersApi";
import {followAPI} from "../../api/followApi";


const usersInintialState: UsersType = {
    items: [],
    pageSize: 10,
    totalCountUser: 0,
    page: 1,
    followingProgress: [],
    portionSize: 10
}

export const usersReducer = (state: UsersType = usersInintialState, action: ActionsType): UsersType => {
    switch (action.type) {
        case 'users/FOLLOW':
            return {...state, items: state.items.map(el => el.id === action.userID ? {...el, followed: true} : el)}
        case 'users/UNFOLLOW':
            return {...state, items: state.items.map(el => el.id === action.userID ? {...el, followed: false} : el)}
        case 'users/SET-USERS':
            return {...state, items: action.users}
        case 'users/SET-CURRENT-PAGE':
            return {...state, page: action.page}
        case 'users/SET-USERS-TOTAL-COUNT':
            return {...state, totalCountUser: action.totalCount}
        case 'users/TOGGLE-IS-FOLLOWING-PROGRESS': {
            return {...state,
                followingProgress: action.followingProgress ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)}
        }
        default:
            return state
    }
}

export const followAC = (userID: number) => ({type: 'users/FOLLOW', userID} as const)
export const unfollowAC = (userID: number) => ({type: 'users/UNFOLLOW', userID} as const)
export const setUsersAC = (users: UsersResponseType[]) => ({type: 'users/SET-USERS', users} as const)
export const setCurrentPageAC = (page: number) => ({type: 'users/SET-CURRENT-PAGE', page} as const)
export const setUsersTotalCountAC = (totalCount: number) => ({type: 'users/SET-USERS-TOTAL-COUNT', totalCount} as const)
export const toggleIsFollowingProgressAC = (userId: number, followingProgress: boolean) => (
    {type: 'users/TOGGLE-IS-FOLLOWING-PROGRESS', userId, followingProgress} as const)


export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(changeStatusLoadingAC('loading'))
    usersAPI.getUsers(currentPage, pageSize)
        .then(res => {
            dispatch(setUsersAC(res.data.items))
            dispatch(setUsersTotalCountAC(res.data.totalCount))
            dispatch(changeStatusLoadingAC('succeeded'))
        })
        .catch((error: AxiosError<ErrorType>) => {
            handleServerNetworkError(error.message, dispatch)
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
        .catch((error: AxiosError<ErrorType>) => {
            handleServerNetworkError(error.message, dispatch)
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
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((error: AxiosError<ErrorType>) => {
            handleServerNetworkError(error.message, dispatch)
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
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((error: AxiosError<ErrorType>) => {
            handleServerNetworkError(error.message, dispatch)
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
    followingProgress: number[],
    portionSize: number
}

type ActionsType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC> | ReturnType<typeof toggleIsFollowingProgressAC>

