import {actionsTypes, PostsType, ProfilePostsType} from './State';

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

const ProfilePageReducer = (state: any, action: actionsTypes): ProfilePostsType => {
    if (action.type === 'ADD-POST') {
        const newPost: PostsType = {id: 4, message: action.newMyPostText, likesCount: 0}
        state.posts.push(newPost)
        state.newMyPostText = ''

       // state.rerenderEntireTree()

    } else if (action.type === 'UPDATE-NEW-MY-POST-TEXT') {
        state.newMyPostText = action.newText
       // state.rerenderEntireTree()
    }
    return state
};

export default ProfilePageReducer;