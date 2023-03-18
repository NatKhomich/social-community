import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {findAllByDisplayValue} from '@testing-library/react';

type MyPostsPropsType = {
    info: string
}

const MyPosts = (props: MyPostsPropsType) => {

    let posts = [
        {id: 1, message: 'Hi, why nobody love me!', likesCount: 15},
        {id: 2, message: 'It\'s our new program! Hey!', likesCount: 2},
    ]

    let postElement = posts.map( el => {
        return (
            <Post message={el.message} likesCount={el.likesCount} />
        )
    } )

    return (
        <div className={s.my_Posts}>
            <div className={s.myPosts}> {props.info} </div>
            <div>
                <textarea> </textarea>
            </div>
            <button>Add post</button>

            <div className={s.posts}>
                {postElement}
            </div>
        </div>

    );
};

export default MyPosts;