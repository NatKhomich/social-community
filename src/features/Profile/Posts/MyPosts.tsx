import React from 'react';
import Post, {PostType} from './Post/Post';
import {DataTextFormType, TextForm} from '../../../common/components/TextForm/TextForm';
import {PostHeader} from "./Post/PostHeader/PostHeader";
import {AppRootStateType} from "../../../app/store";
import {selectProfilePosts} from "../profileSelectors";
import {connect} from "react-redux";
import {addPostAC, ProfileResponseType} from "../profileReducer";
import styles from './MyPosts.module.css'


const Posts = React.memo((props: MyPostsType) => {

    let postElement = props.posts.map(el => {
        return <Post key={el.id} message={el.message} likesCount={el.likesCount} id={el.id} profile={props.profile}/>
    })

    const addPostHandler = (text: DataTextFormType) => {
        if (text.text !== '')
            props.addPost(text.text)
    }

    return (
        <div className={styles.items}>

            <div className={styles.postForm}>
                <div className={styles.textareaAndButton}>
                    <PostHeader profile={props.profile}/>
                    <TextForm callback={addPostHandler} name={'Add post'}/>
                </div>
            </div>

            <div className={styles.posts}>{postElement}</div>

        </div>
    );
});

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        posts: selectProfilePosts(state),
    }
}

export default connect(
    mapStateToProps,
    {
        addPost: addPostAC,
    })(Posts)

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