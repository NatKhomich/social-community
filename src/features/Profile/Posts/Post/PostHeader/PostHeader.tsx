import React from 'react';
import styles from './PostHeader.module.css'
import {AvatarAndFullName} from "../../../../../common/components/AvatarAndFullName/AvatarAndFullName";
import {ProfileResponseType} from "../../../profileReducer";

type PropsType = {
    profile: ProfileResponseType | null
}


export const PostHeader = (props: PropsType) => {

    return (
        <div className={styles.root}>
            <AvatarAndFullName profile={props.profile} />
        </div>
    );
};
