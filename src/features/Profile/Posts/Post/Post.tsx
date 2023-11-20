import React from 'react';
import styles from './Post.module.css';
import {PostHeader} from "./PostHeader/PostHeader";
import {ProfileResponseType} from "../../profileReducer";
import likeIcon from '../../../../common/image/profile/like_icon.png'

export type PostType = {
    id: string
    message: string
    likesCount: number
}
type PropsType = PostType & {
    profile: ProfileResponseType | null
}

export const Post = React.memo((props: PropsType) => {
    const {message, profile, likesCount} = props

    return (
        <div className={styles.root}>
            <PostHeader profile={profile}/>
            <div className={styles.text}>{message}</div>
            <div className={styles.likes}>
                <img className={styles.likesIcon} src={likeIcon} alt="icon-likes"/>
                <span className={styles.likesCount}>{likesCount}</span>
            </div>
        </div>
    );
});


