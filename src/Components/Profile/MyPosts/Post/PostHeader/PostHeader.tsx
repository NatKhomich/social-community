import React from 'react';
import styles from './PostHeader.module.css'
import {AvatarAndFullName} from "../../../../Common/AvatarAndFullName/AvatarAndFullName";
import {ProfileResponseType} from "../../../../../state/profileReducer";

type PostHeader = {
    profile: ProfileResponseType
}


export const PostHeader = (props: PostHeader) => {

    return (
        <div className={styles.root}>
            <AvatarAndFullName profile={props.profile} />
        </div>
    );
};
