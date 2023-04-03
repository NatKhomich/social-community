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
        <div className={s.myPosts}>
            <div className={s.titlePosts}> My posts</div>
            <div className={s.textareaAndButton}>
                <textarea
                    className={s.textarea}
                    onChange={onChangePostHandler}
                    value={props.newMyPostText}/>

                <button className={s.buttonPosts} onClick={addPostHandler}> Add post</button>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>

    );
};

export default MyPosts;