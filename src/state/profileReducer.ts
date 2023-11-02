import {v1} from 'uuid';
import {PostType} from '../Components/Profile/MyPosts/Post/Post';
import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';
import {changeStatusLoadingAC, ErrorType} from './appReducer';
import {handleServerAppError} from "../utils/handleServerAppError";
import {AxiosError} from "axios";
import {handleServerNetworkError} from "../utils/handleServerNetworkError";

const profileInintialState: ProfileType = {
    posts: [
        {id: v1(), message: 'Hi, why nobody love me!', likesCount: 15},
        {id: v1(), message: 'It\'s our new program! Hey!', likesCount: 2},
    ],
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 0,
        photos: {
            small: '',
            large: '',
        }
    },
    status: ''
}

export const profileReducer = (state: ProfileType = profileInintialState, action: ActionsType): ProfileType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {id: action.id, message: action.newPostText, likesCount: 0}
            return {...state, posts: [newPost, ...state.posts]}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
};

export const addPostAC = (newPostText: string) => ({type: 'ADD-POST', newPostText, id: v1()} as const)
export const setUserProfileAC = (profile: ProfileResponseType) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setStatusAC = (status: string) => ({type: 'SET-STATUS', status} as const)

export const setUserProfileTC = (userId: string) => (dispatch: Dispatch) => {
    dispatch(changeStatusLoadingAC('loading'))
    profileAPI.getProfile(userId)
        .then(res => {
            dispatch(setUserProfileAC(res.data))
            dispatch(changeStatusLoadingAC('succeeded'))
        })
        .catch((error: AxiosError<ErrorType>) => {
            handleServerNetworkError(error.message, dispatch)
        })
}
export const getStatusTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(changeStatusLoadingAC('loading'))
    profileAPI.getStatus(userId)
        .then(res => {
            dispatch(setStatusAC(res.data))
            dispatch(changeStatusLoadingAC('succeeded'))
        })
        .catch((error: AxiosError<ErrorType>) => {
            handleServerNetworkError(error.message, dispatch)
        })
}

export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    dispatch(changeStatusLoadingAC('loading'))
    profileAPI.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatusAC(status))
                dispatch(changeStatusLoadingAC('succeeded'))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((error: AxiosError<ErrorType>) => {
            handleServerNetworkError(error.message, dispatch)
        })
}

type ActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusAC>

export type ProfileResponseType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: null | string
        vk: string
        twitter: string
        instagram: string
        youtube: null | string
        github: string
        mainLink: null | string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type ProfileType = {
    posts: PostType[]
    profile: ProfileResponseType
    status: string
}
