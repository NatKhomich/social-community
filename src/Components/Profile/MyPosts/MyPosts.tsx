import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

type MyPostsPropsType = {
    info: string
}

const MyPosts = (props: MyPostsPropsType) => {

    let postData = [
        {id: 1, message: 'Hi, why nobody love me!', likesCount: 15},
        {id: 2, message: 'It\'s our new program! Hey!', likesCount: 2},
    ]

    return (
        <div className={s.my_Posts}>
            <div className={s.myPosts}> {props.info} </div>
            <div>
                <textarea> </textarea>
            </div>
            <button>Add post</button>

            <div className={s.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount} />
                <Post message={postData[1].message} likesCount={postData[1].likesCount} />
            </div>
        </div>
    );
};

export default MyPosts;