import {v1} from 'uuid';
import {PostType} from '../Components/Profile/MyPosts/Post/Post';
import {Dispatch} from 'redux';
import {socialAPI} from '../api/api';
import {toggleIsFetchingAC} from './usersPageReducer';

const profileInintialState: ProfileType = {
    posts: [
        {id: v1(), message: 'Hi, why nobody love me!', likesCount: 15},
        {id: v1(), message: 'It\'s our new program! Hey!', likesCount: 2},
    ],
    newPostText: '',
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
    }
}

const ProfilePageReducer = (state: ProfileType = profileInintialState, action: ActionsType): ProfileType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {id: action.id, message: action.newPostText, likesCount: 0}
            state.newPostText = ''
            return {...state, posts: [newPost, ...state.posts]}
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        default:
            return state
    }
};

export const addPostAC = (newPostText: string) => ({type: 'ADD-POST', newPostText, id: v1()} as const)
export const onChangePostAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText} as const)
export const setUserProfileAC = (profile: ProfileResponseType) => ({type: 'SET-USER-PROFILE', profile} as const)

export const setUserProfileTC = (userId: string) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    socialAPI.getProfile(userId)
        .then(res => {
            dispatch(setUserProfileAC(res.data))
            dispatch(toggleIsFetchingAC(false))
        })
}

type ActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof onChangePostAC>
    | ReturnType<typeof setUserProfileAC>

export type ProfileResponseType = {
    aboutMe:string
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
    newPostText: string
    profile: ProfileResponseType
}

export default ProfilePageReducer;