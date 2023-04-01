import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsPropsType} from '../../../redux/State';


const MyPosts = (props: MyPostsPropsType) => {

    let postElement = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    const addPostHandler = () => {
        props.addPost(props.newMyPostText)
    }

    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMyPostText(e.currentTarget.value)
    }

    return (
        <div className={s.my_Posts}>
            <div className={s.myPosts}> My post</div>
            <div>
                <textarea onChange={onChangePostHandler}
                          value={props.newMyPostText}/>
            </div>
            <button onClick={addPostHandler}> Add post</button>

            <div className={s.posts}>
                {postElement}
            </div>
        </div>

    );
};

export default MyPosts;