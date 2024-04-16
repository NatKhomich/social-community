import React from 'react';
import {UsersResponseType} from "../../../../Users/usersReducer";
import styles from "../../../../Users/User/User.module.css";
import userAvatar from "../../../../../common/image/userAvatar.jpg";
import {NavLink} from "react-router-dom";
import s from './Friend.module.css'

type Props = {
    user: UsersResponseType
}

export const Friend = ({user}: Props) => {
    return (
        <div className={s.root}>
            <div className={s.content}>
                <NavLink className={styles.link} to={`/profile/${user.id}`}>
                    <img className={styles.userPhoto}
                         src={user.photos.small ? user.photos.small : userAvatar}
                         alt="user-image"/>
                </NavLink>
                <p className={s.name}>{user.name}</p>
            </div>

        </div>
    );
};
