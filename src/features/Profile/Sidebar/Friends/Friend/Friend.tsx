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
            <NavLink to={`/profile/${user.id}`}>
                <img className={styles.userPhoto}
                     src={user.photos.small ? user.photos.small : userAvatar}
                     alt="user-image"/>
            </NavLink>
           <h3>{user.name}</h3>
        </div>
    );
};
