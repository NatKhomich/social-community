import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css'
import {ProfileResponseType, SidebarType} from './profileReducer';
import Posts from "./Posts/MyPosts";
import {Sidebar} from "./Sidebar/Sidebar";
import {UpdateProfileType} from "../../api/profileApi";

type ProfilePropsType = {
    profile: ProfileResponseType
    status: string
    updateStatus: (status: string) => void
    sidebar: SidebarType
    updateProfile: (profile: UpdateProfileType) => void
}

const Profile = React.memo((props: ProfilePropsType) => {
    return (
        <div className={styles.root}>
            <div className={styles.content}>

                <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>

                <Posts profile={props.profile}/>

                <Sidebar profile={props.profile} sidebar={props.sidebar} updateProfile={props.updateProfile} />
            </div>
        </div>
    );
});

export default Profile;