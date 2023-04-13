import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ProfilePostsType} from '../../../redux/State';


const MyPosts = (props: ProfilePostsType) => {

    let postElement = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    const addPostHandler = () => {
       // props.addPost(props.newMyPostText)
        props.dispatch( {type: 'ADD-POST', newMyPostText: props.newMyPostText} )

    }

    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //props.updateNewMyPostText(e.currentTarget.value)
        props.dispatch( {type:'UPDATE-NEW-MY-POST-TEXT', newText: e.currentTarget.value})
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