import React from 'react';
import styles from './PostHeader.module.css'
import {AvatarAndFullName} from "../../../../../common/components/AvatarAndFullName/AvatarAndFullName";
import {ProfileResponseType} from "../../../profileReducer";

type PostHeader = {
    profile: ProfileResponseType | null
}


export const PostHeader = (props: PostHeader) => {

    return (
        <div className={styles.root}>
            <AvatarAndFullName profile={props.profile} />
        </div>
    );
};
