import React from 'react';
import {ProfilePostsType} from '../../../types/Types';
import {addPostActionCreator, onChangePostActionCreator} from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';


export const MyPostsContainer = (props: ProfilePostsType) => {

    const addPost = () => {
        props.dispatch(addPostActionCreator(props.newMyPostText))
    }

    const onChangePost = (newText: string) => {
        props.dispatch(onChangePostActionCreator(newText))
    }

    const onKeyDownEnter = (newText: string) => {
        props.dispatch(addPostActionCreator(newText))
    }

    return (
        <MyPosts posts={props.posts}
                 newMyPostText={props.newMyPostText}
                 addPost={addPost}
                 onChangePost={onChangePost}
                 onKeyDownEnter={onKeyDownEnter}

        />

    );
};
