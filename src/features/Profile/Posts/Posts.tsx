import React from 'react';
import Post, {PostType} from './Post/Post';
import {ProfileResponseType} from "../profileReducer";
import styles from './Posts.module.css'

type PropsType = {
    profile: ProfileResponseType | null
    posts: PostType[]
}

export const Posts = React.memo((props: PropsType) => {

    let postElement = props.posts.map(el => {
        return <Post key={el.id} message={el.message} likesCount={el.likesCount} id={el.id} profile={props.profile}/>
    })


    return (
        <div className={styles.posts}>{postElement}</div>
    );
});


