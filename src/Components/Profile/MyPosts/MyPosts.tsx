import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

type MyPostsPropsType = {
    posts: PostsType[]
}

const MyPosts = (props: MyPostsPropsType) => {

    let postElement = props.posts.map( el => {
        return (
            <Post message={el.message} likesCount={el.likesCount} />
        )
    } )

    return (
        <div className={s.my_Posts}>
            <div className={s.myPosts}> My post </div>
            <div>
                <textarea> </textarea>
            </div>
            <button onClick={ ()=> {  } }>Add post</button>

            <div className={s.posts}>
                {postElement}
            </div>
        </div>

    );
};

export default MyPosts;