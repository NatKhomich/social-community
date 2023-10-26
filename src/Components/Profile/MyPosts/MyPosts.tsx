import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsContainerType} from './MyPostsContainer';
import {DataTextFormType, TextForm} from '../../Common/TextForm/TextForm';


const MyPosts = React.memo((props: MyPostsContainerType) => {

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
                <TextForm callback={addPostHandler}/>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>

    );
});

export default MyPosts;