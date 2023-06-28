import {actionsTypes, PostType, ProfilePostsType} from './State';

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
    switch (action.type) {

        case 'ADD-POST':
            const newPost: PostType = {id: 4, message: action.newMyPostText, likesCount: 0}
            state.posts.push(newPost)
            state.newMyPostText = ''
           return state

        case 'UPDATE-NEW-MY-POST-TEXT':
            state.newMyPostText = action.newText
            // state.rerenderEntireTree()
            return state

        default: return state
    }
};

export default ProfilePageReducer;