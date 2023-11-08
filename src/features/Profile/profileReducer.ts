import {v1} from 'uuid';
import {PostType} from './Posts/Post/Post';
import {Dispatch} from 'redux';
import {changeStatusLoadingAC, ErrorType} from '../../app/appReducer';
import {handleServerAppError} from "../../common/utils/handleServerAppError";
import {AxiosError} from "axios";
import {handleServerNetworkError} from "../../common/utils/handleServerNetworkError";
import {profileAPI, UpdateProfileType} from "../../api/profileApi";
import {AppRootStateType, AppThunkType} from "../../app/store";

const profileInintialState = {
    posts: [
        {id: v1(), message: 'Hi, why nobody love me!', likesCount: 15},
        {id: v1(), message: 'It\'s our new program! Hey!', likesCount: 2},
    ] as PostType[],
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
        userId: '',
        photos: {
            small: '',
            large: '',
        }
    } as ProfileResponseType | null,
    status: '' as string,
    // sidebar: {
    //     about: [
    //         {
    //             id: 1,
    //             icon: '',
    //             info: 'Live In',
    //             description: ''
    //         },
    //         {
    //             id: 2,
    //             icon: '',
    //             info: 'From',
    //             description: 'Aden, Yemen'
    //         },
    //         {
    //             id: 3,
    //             icon: '',
    //             info: 'From',
    //             description: 'Relationship'
    //         }
    //     ],
    // } as SidebarType
}

export type ProfileInitialStateType = typeof profileInintialState

export const profileReducer = (state: ProfileInitialStateType = profileInintialState, action: ActionsType): ProfileInitialStateType => {
    switch (action.type) {
        case 'profile/ADD-POST':
            const newPost: PostType = {id: action.id, message: action.newPostText, likesCount: 0}
            return {...state, posts: [newPost, ...state.posts]}
        case 'profile/SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'profile/SET-STATUS':
            return {...state, status: action.status}
        case 'profile/SAVE-PHOTO':
            return {...state, profile: state.profile ? {...state.profile, photos: action.photo} : null}
        default:
            return state
    }
};

export const addPostAC = (newPostText: string) => ({type: 'profile/ADD-POST', newPostText, id: v1()} as const)
export const setUserProfileAC = (profile: ProfileResponseType) => ({type: 'profile/SET-USER-PROFILE', profile} as const)
export const setStatusAC = (status: string) => ({type: 'profile/SET-STATUS', status} as const)
export const savePhotoAC = (photo: PhotosType) => ({type: 'profile/SAVE-PHOTO', photo} as const)

export const setUserProfileTC = (userId: string | null) => (dispatch: Dispatch) => {
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

export const savePhotoTC = (file: string) => (dispatch: Dispatch) => {
    dispatch(changeStatusLoadingAC('loading'))
    profileAPI.savePhoto(file)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(savePhotoAC(res.data.data.photos))
                dispatch(changeStatusLoadingAC('succeeded'))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((error: AxiosError<ErrorType>) => {
            handleServerNetworkError(error.message, dispatch)
        })
}

export const updateProfileTC = (profile: UpdateProfileType): AppThunkType =>
    async (dispatch, getState: () => AppRootStateType) => {

    const userId = getState().auth.userId

    try {
        dispatch(changeStatusLoadingAC('loading'))
        const res = await profileAPI.updateProfile(profile)
        if (res.data.resultCode === 0) {
            dispatch(setUserProfileTC(userId))
        } else {
            handleServerAppError(res.data, dispatch)
            return Promise.reject(res.data.messages[0])
        }
    }
    catch (error) {
        handleServerNetworkError(error, dispatch)
        return Promise.reject(error);
    }
}


    type ActionsType = ReturnType<typeof addPostAC>
        | ReturnType<typeof setUserProfileAC>
        | ReturnType<typeof setStatusAC>
        | ReturnType<typeof savePhotoAC>

    export type ProfileResponseType = {
        aboutMe: string
        contacts: ContactsType,
        lookingForAJob: boolean
        lookingForAJobDescription: string
        fullName: string
        userId: string
        photos: PhotosType
    }
    export type ContactsType = {
        facebook: string | undefined
        website: string | undefined
        vk: string | undefined
        twitter: string | undefined
        instagram: string | undefined
        youtube: string | undefined
        github: string | undefined
        mainLink: string | undefined
    }

    export type PhotosType = {
        small: string
        large: string
    }

    // export type SidebarType = {
    //     about: AboutType[]
    // }

    // export type AboutType = {
    //     id: number
    //     icon: string
    //     info: string
    //     description: string
    // }