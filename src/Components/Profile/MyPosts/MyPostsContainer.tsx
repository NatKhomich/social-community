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

/*let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newMyPostText: string) => dispatch(addPostActionCreator(newMyPostText)),
        onChangePost: (newText: string) => dispatch(onChangePostActionCreator(newText)),
        onKeyDown: (newText: string) => dispatch(addPostActionCreator(newText))
    }
}*/
/*export const MyPostsContainer = () => {
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