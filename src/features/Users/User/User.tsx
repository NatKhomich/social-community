import React from 'react';
import styles from './User.module.css';
import {NavLink} from 'react-router-dom';
import {UsersResponseType} from "../usersReducer";
import userAvatar from '../../../common/image/userAvatar.jpg'

type UserType = {
    onClickUnfollow: (userID: number) => void
    onClickFollow: (userID: number) => void
    user: UsersResponseType
    followingProgress: number[]
}

export const User = (props: UserType) => {
    const {user, followingProgress, onClickFollow, onClickUnfollow} = props

    let isDisabled = followingProgress.some(id => id === user.id)
    const onClickFollowHandler = (userId: number) => onClickFollow(userId)
    const onClickUnfollowHandler = (userId: number) => onClickUnfollow(userId)

    return (
        <div className={styles.container}>
            <div className={styles.root}>
                <NavLink to={`/profile/${user.id}`}>
                    <img className={styles.userPhoto}
                         src={user.photos.small ? user.photos.small : userAvatar}
                         alt="user-image"/>
                </NavLink>
                <div className={styles.name}>{user.name}</div>
                <div className={styles.status}>{user.status ? user.status : 'No status'}</div>
                {
                    user.followed
                        ? <button className={styles.buttonUnfollow} disabled={isDisabled} onClick={() => {
                            onClickUnfollowHandler(user.id)
                        }}>Unfollowing</button>
                        : <button className={styles.buttonFollow} disabled={isDisabled} onClick={() => {
                            onClickFollowHandler(user.id)
                        }}>Following</button>
                }
            </div>
        </div>
    );
};
