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

    let postElement = props.posts.map( el => <Post message={el.message} likesCount={el.likesCount} />)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        let text = newPostElement.current?.value
       alert(text)
    }

    return (
        <div className={s.my_Posts}>
            <div className={s.myPosts}> My post </div>
            <div>
                <textarea ref={newPostElement}> </textarea>
            </div>
            <button onClick={ addPost }>Add post</button>

            <div className={s.posts}>
                {postElement}
            </div>
        </div>

    );
};

export default MyPosts;