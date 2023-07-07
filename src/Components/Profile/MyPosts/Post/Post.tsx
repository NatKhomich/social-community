import React from 'react';
import s from './Post.module.css';
import { PostType} from '../../../../redux/Store';
import avatarMessages from '../../../../image/avatar_messages.jpg'

const Post = (props: PostType) => {
    return (
        <div className={s.item}>
                <img alt={''} src={avatarMessages}/>
            <div className={s.messageLikes}>
                <span> {props.message} </span>
                <div> Like {props.likesCount} </div>
            </div>
        </div>
    );
};

export default Post;
