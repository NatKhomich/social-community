import styles from './AvatarAndFullName.module.css'
import userAvatar from "../../image/userAvatar.jpg";
import React from "react";
import {ProfileResponseType} from "../../../features/Profile/profileReducer";

type PropsType = {
    profile: ProfileResponseType | null
}

export const AvatarAndFullName = (props: PropsType) => {

    return (
        <div className={styles.user}>
            <div className={styles.image}>

                {props.profile?.photos.large
                    ? <img src={props.profile?.photos.large} alt=""/>
                    : <img src={userAvatar} alt=""/>}

            </div>
            <span className={styles.fullName}>{props.profile?.fullName}</span>
        </div>
    );
};