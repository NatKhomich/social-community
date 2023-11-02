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

    const onClickFollowHandler = (userId: number) => props.onClickFollow(userId)
    const onClickUnfollowHandler = (userId: number) => props.onClickUnfollow(userId)

    return (
        <div className={styles.users}>
            
                <div className={styles.user} key={props.user.id}>
                    <div className={styles.imgAndButton}>
                        <div>
                            <NavLink to={'/profile/' + props.user.id}>
                                <img alt="" className={styles.image} src={props.user.photos.small ? props.user.photos.small : userAvatar}/>
                            </NavLink>
                        </div>
                        {props.user.followed
                            ? <button onClick={() => onClickUnfollowHandler(props.user.id)}
                                      disabled={props.followingProgress.some(id => id === props.user.id)}
                            > Unfollow </button>
                            : <button onClick={() => onClickFollowHandler(props.user.id)}
                                      disabled={props.followingProgress.some(id => id === props.user.id)}
                            > Follow </button>
                        }
                    </div>
                    <div className={styles.dataBlock}>
                        <div className={styles.nameAndStatus}>
                            <div className={styles.dataText}>{props.user.name}</div>
                            <div className={styles.dataText}>{props.user.status}</div>
                        </div>
                    </div>
                </div>
        </div>
    );
};
