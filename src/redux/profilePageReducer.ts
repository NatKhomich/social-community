import {actionsTypes, PostType, ProfilePostsType} from '../types/Types';

const dialogsInintialState = {
    posts: [
        {id: 1, message: 'Hi, why nobody love me!', likesCount: 15},
        {id: 2, message: 'It\'s our new program! Hey!', likesCount: 2},
    ],
    newMyPostText: ''
}

const ProfilePageReducer = (state: any = dialogsInintialState, action: actionsTypes): ProfilePostsType => {
    switch (action.type) {

        case 'ADD-POST':
            const newPost: PostType = {id: 4, message: action.newMyPostText, likesCount: 0}
            state.newMyPostText = ''
            return {...state, posts: [newPost, ...state.posts]}

        case 'UPDATE-NEW-MY-POST-TEXT':
            // state.newMyPostText = action.newText
            return {...state, newMyPostText: action.newText}

        default:
            return state
    }
};

export const addPostActionCreator = (newMyPostText: string) => {
    return {
        type: 'ADD-POST',
        newMyPostText: newMyPostText
    } as const
}

export const onChangePostActionCreator = (newText: string) => {
    return {
        type: 'UPDATE-NEW-MY-POST-TEXT',
        newText: newText
    } as const
}

export default ProfilePageReducer;