import React from 'react';
import {ProfileResponseType} from "../profileReducer";
import About from "./About/About";
import {UpdateProfileType} from "../../../api/profileApi";
import styles from './Sidebar.module.css'
import {Friends} from "./Friends/Friends";
import {UsersResponseType} from "../../Users/usersReducer";

type Props = {
    profile: ProfileResponseType | null
    updateProfile: (profile: UpdateProfileType) => Promise<any>
    isOwner: boolean
    userItems: UsersResponseType[]
}

export const Sidebar = (props: Props) => {
    const {isOwner, updateProfile, profile, userItems} = props

    return (
        <div className={styles.root}>
            <About profile={profile}
                   updateProfile={updateProfile}
                   isOwner={isOwner}
            />
            {isOwner && <Friends userItems={userItems}/> }

        </div>
    );
};

