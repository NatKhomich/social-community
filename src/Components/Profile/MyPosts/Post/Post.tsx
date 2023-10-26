import React from 'react';
import styles from './Post.module.css';
import avatarMessages from '../../../../image/avatar_messages.jpg'


const Post = React.memo((props: PostType) => {
    return (
        <div className={styles.item}>
            <img alt={''} src={avatarMessages}/>
            <div className={styles.messageLikes}>
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
