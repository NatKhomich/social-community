import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsContainerType} from './MyPostsContainer';


const MyPosts = (props: MyPostsContainerType) => {

    let postElement = props.dialogsPage.posts.map(el => {

        return (
            <Post key={el.id} message={el.message} likesCount={el.likesCount} id={el.id}/>
        )
    })

    const addPostHandler = () => {
        /*props.dispatch(addPostActionCreator(props.newMyPostText))*/
        if (props.dialogsPage.newMyPostText !== '') props.addPost(props.dialogsPage.newMyPostText)
    }

    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        /* props.dispatch(onChangePostActionCreator(e.currentTarget.value))*/
        props.onChangePost(e.currentTarget.value)

    }

    const onKeyDownEnterHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            /* props.dispatch(addPostActionCreator(props.newMyPostText))*/
            props.addPost(e.currentTarget.value)
        }
    }

    return (
        <div className={s.myPosts}>
            <div className={s.titlePosts}> My posts</div>
            <div className={s.textareaAndButton}>
                <textarea
                    className={s.textarea}
                    onKeyDown={onKeyDownEnterHandler}
                    onChange={onChangePostHandler}
                    value={props.dialogsPage.newMyPostText}/>

                <button className={s.button} onClick={addPostHandler}> Add post</button>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>

    );
};

export default MyPosts;