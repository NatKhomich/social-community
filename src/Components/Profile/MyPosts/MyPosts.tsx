import React from 'react';
import s from './MyPosts.module.css';
import Post, {PostType} from './Post/Post';
import {DataTextFormType, TextForm} from '../../Common/TextForm/TextForm';
import {PostHeader} from "./Post/PostHeader/PostHeader";
import {AppStateType} from "../../../state/store";
import {selectProfilePosts} from "../../../state/selectors/profileSelectors";
import {connect} from "react-redux";
import {addPostAC, ProfileResponseType} from "../../../state/profileReducer";


 const MyPosts = React.memo((props: MyPostsType) => {

    let postElement = props.posts.map(el => {
        return <Post key={el.id} message={el.message} likesCount={el.likesCount} id={el.id}/>
    })

    const addPostHandler = (text: DataTextFormType) => {
        if (text.text !== '')
            props.addPost(text.text)
    }

    return (
        <div className={s.myPosts}>
            <div className={s.titlePosts}> My posts</div>
            <div className={s.textareaAndButton}>

                <PostHeader profile={props.profile}/>
                <TextForm callback={addPostHandler}/>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>

    );
});

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: selectProfilePosts(state),
    }
}

export default connect(
    mapStateToProps,
    {
        addPost: addPostAC,
    })(MyPosts)

//types
type PropsType = {
    profile: ProfileResponseType
}
export type MyPostsType = MapStateToPropsType & MapDispatchToPropsType & PropsType

type MapStateToPropsType = {
    posts: PostType[]
}
type MapDispatchToPropsType = {
    addPost: (newMyPostText: string) => void
}