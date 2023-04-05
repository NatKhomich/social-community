import React from 'react';
import s from './Post.module.css';
import {PostPropsType} from '../../../../redux/State';
import avatarMessages from '../../../../image/avatar_messages.jpg'

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
                <img src={avatarMessages}/>
            <div className={s.messageLikes}>
                <span> {props.message} </span>
                <div> Like {props.likesCount} </div>
            </div>
        </div>
    );
};

export default Post;
