import React from 'react';
import s from './Post.module.css';
import avatarMessages from '../../../../image/avatar_messages.jpg'


const Post = React.memo((props: PostType) => {
    return (
        <div className={s.item}>
                <img alt={''} src={avatarMessages}/>
            <div className={s.messageLikes}>
                <span> {props.message} </span>
                <div> Like {props.likesCount} </div>
            </div>
        </div>
    );
});

export default Post;

export type PostType = {
    id: string
    message: string
    likesCount: number
}
