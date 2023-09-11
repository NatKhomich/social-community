import {v1} from 'uuid';
import {PostType} from '../Components/Profile/MyPosts/Post/Post';

export type ProfileType = {
    posts: PostType[]
    newPostText: string
}

const dialogsInintialState: ProfileType = {
    posts: [
        {id: v1(), message: 'Hi, why nobody love me!', likesCount: 15},
        {id: v1(), message: 'It\'s our new program! Hey!', likesCount: 2},
    ],
    newPostText: ''
}

const ProfilePageReducer = (state: ProfileType = dialogsInintialState, action: ActionsType): ProfileType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {id: action.id, message: action.newPostText, likesCount: 0}
            state.newPostText = ''
            return {...state, posts: [newPost, ...state.posts]}
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText}
        default:
            return state
    }
};

export const addPostAC = (newPostText: string) => ({type: 'ADD-POST', newPostText: newPostText, id: v1()} as const)
export const onChangePostAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const)

type ActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof onChangePostAC>

export default ProfilePageReducer;