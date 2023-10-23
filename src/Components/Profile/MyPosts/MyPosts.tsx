import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsContainerType} from './MyPostsContainer';
import {TextForm} from '../../Common/TextForm/TextForm';


const MyPosts = (props: MyPostsContainerType) => {

    let postElement = props.posts.map(el => {
        return <Post key={el.id} message={el.message} likesCount={el.likesCount} id={el.id}/>
    })

    const addPostHandler = () => {
        if (props.newPostText !== '')
            props.addPost(props.newPostText)
    }
    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.currentTarget.value)
        props.onChangePost(e.currentTarget.value)
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter')
            props.addPost(e.currentTarget.value)
    }

    return (
        <div className={s.myPosts}>
            <div className={s.titlePosts}> My posts</div>
            <div className={s.textareaAndButton}>

                {/*<textarea*/}
                {/*    className={s.textarea}*/}
                {/*    onKeyDown={onKeyDownHandler}*/}
                {/*    onChange={onChangePostHandler}*/}
                {/*    value={props.newPostText}/>*/}
                {/*<button className={s.button} onClick={addPostHandler}> Add post</button>*/}

                <TextForm />

            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>

    );
};

export default MyPosts;