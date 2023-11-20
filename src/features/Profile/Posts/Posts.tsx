import React from 'react';
import {ProfileResponseType} from "../profileReducer";
import styles from './Posts.module.css'
import {Post, PostType} from "./Post/Post";

type PropsType = {
    profile: ProfileResponseType | null
    posts: PostType[]
}

export const Posts = React.memo((props: PropsType) => {
    const {profile, posts} = props

    let postElement = posts.map(el => {
        return <Post key={el.id} message={el.message} likesCount={el.likesCount} id={el.id} profile={profile}/>
    })


    return (
        <div className={styles.posts}>{postElement}</div>
    );
});


