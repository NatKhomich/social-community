import React from 'react';
import styles from './Post.module.css';
import {PostHeader} from "./PostHeader/PostHeader";
import {ProfileResponseType} from "../../../../state/profileReducer";
import likeIcon from '../../../../image/profile/like_icon.png'


const Post = React.memo((props: PropsType) => {
    return (
        <div className={styles.root}>
            <PostHeader profile={props.profile}/>
            <div className={styles.text}>{props.message}</div>
            <div className={styles.likes}>
                <img className={styles.likesIcon} src={likeIcon} alt="icon-likes"/>
                <span className={styles.likesCount}>{props.likesCount}</span>
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
type PropsType = PostType & {
    profile: ProfileResponseType
}