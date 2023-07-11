import React from 'react';
import {addPostActionCreator, onChangePostActionCreator} from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/reduxStore';
import {ProfileType} from '../../../types/Types';
import {Dispatch} from 'redux';

export type MyPostsContainerType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    dialogsPage: ProfileType
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.profilePage
    }
}

type MapDispatchToPropsType = {
    addPost: (newMyPostText: string) => void
    onChangePost: (newText: string) => void
    onKeyDownEnter: (newText: string) => void
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newMyPostText: string) => {
            dispatch(addPostActionCreator(newMyPostText))
        },
        onChangePost: (newText: string) => {
            dispatch(onChangePostActionCreator(newText))
        },
        onKeyDownEnter: (newText: string) => {
            dispatch(addPostActionCreator(newText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


/*
export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().profilePage
                const addPost = () => {
                    store.dispatch(addPostActionCreator(state.newMyPostText))
                }
                const onChangePost = (newText: string) => {
                    store.dispatch(onChangePostActionCreator(newText))
                }
                const onKeyDownEnter = (newText: string) => {
                    store.dispatch(addPostActionCreator(newText))
                }


                return <MyPosts posts={state.posts}
                                newMyPostText={state.newMyPostText}
                                addPost={addPost}
                                onChangePost={onChangePost}
                                onKeyDownEnter={onKeyDownEnter}/>}}
        </StoreContext.Consumer>
    );
};
*/