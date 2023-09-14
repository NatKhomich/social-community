import React from 'react';
import {addPostAC, onChangePostAC} from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/reduxStore';
import {PostType} from './Post/Post';

export type MyPostsContainerType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    posts: PostType[]
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: (newMyPostText: string) => void
    onChangePost: (newText: string) => void
    onKeyDown: (newText: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

export const MyPostsContainer = connect(mapStateToProps,
    {
        addPost: addPostAC,
        onChangePost: onChangePostAC,
        onKeyDown: addPostAC
    })(MyPosts)