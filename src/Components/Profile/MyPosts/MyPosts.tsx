import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
            <div>
                My posts
                <div> New posts </div>
                <div className={s.posts}>
                    <Post />
                    <Post />
                </div>
            </div>
    );
};

export default MyPosts;