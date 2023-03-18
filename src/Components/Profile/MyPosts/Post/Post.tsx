import React from 'react';
import s from './Post.module.css';

export type PostPropsType = {
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
                <img
                    src={'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51401141-stock-illustration-male-avatar-profile-picture-use.jpg'}/>

            <span> {props.message} </span>
            <div className={s.likes}> {props.likesCount} likes! </div>
        </div>
    );
};

export default Post;