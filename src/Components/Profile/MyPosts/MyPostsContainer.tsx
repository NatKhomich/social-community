import React from 'react';
import {addPostActionCreator, onChangePostActionCreator} from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';
import {StoreContext} from '../../../StoreContext';


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
                                onKeyDownEnter={onKeyDownEnter}/>
            }}

        </StoreContext.Consumer>

    );
};
