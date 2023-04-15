import React from 'react';
import {actionsTypes, PostsType, RootStateType} from './State';

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

const ProfilePageReducer = (state: RootStateType, action: actionsTypes) => {
    if (action.type === 'ADD-POST') {
        const newPost: PostsType = {id: 4, message: action.newMyPostText, likesCount: 0}
        state.profilePage.posts.push(newPost)
        state.profilePage.newMyPostText = ''
       // state.rerenderEntireTree()

    } else if (action.type === 'UPDATE-NEW-MY-POST-TEXT') {
        state.profilePage.newMyPostText = action.newText
       // state.rerenderEntireTree()
    }
    return state
};

export default ProfilePageReducer;