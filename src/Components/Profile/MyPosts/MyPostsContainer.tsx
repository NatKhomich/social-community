import {addPostAC, onChangePostAC} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/reduxStore';
import {PostType} from './Post/Post';


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

//types
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