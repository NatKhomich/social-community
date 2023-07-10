import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ProfilePostsType} from '../../../types/Types';
import {addPostActionCreator, onChangePostActionCreator} from '../../../redux/profilePageReducer';


const MyPosts = (props: ProfilePostsType) => {

    let postElement = props.posts.map(el => {

        return (
            <Post key={el.id} message={el.message} likesCount={el.likesCount} id={el.id}/>
        )
    })

    const addPostHandler = () => {
        props.dispatch(addPostActionCreator(props.newMyPostText))
    }

    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(onChangePostActionCreator(e.currentTarget.value))
    }

    const onKeyDownEnterHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            props.dispatch(addPostActionCreator(props.newMyPostText))
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
                    value={props.newMyPostText}/>

                <button className={s.button} onClick={addPostHandler}> Add post</button>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>

    );
};

export default MyPosts;