import React from 'react';
import {ProfileResponseType} from "../profileReducer";
import About from "./About/About";
import {UpdateProfileType} from "../../../api/profileApi";
import styles from './Sidebar.module.css'

type PropsType = {
    profile: ProfileResponseType | null
    updateProfile: (profile: UpdateProfileType) => Promise<any>
    isOwner: boolean
}

export const Sidebar = (props: PropsType) => {
    const {isOwner, updateProfile, profile} = props

    return (
        <div className={styles.root}>
            <About profile={profile}
                   updateProfile={updateProfile}
                   isOwner={isOwner}
            />
        </div>
    );
};

