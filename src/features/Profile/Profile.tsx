import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css'
import {ProfileResponseType, SidebarType} from './profileReducer';
import Posts from "./Posts/MyPosts";
import {Sidebar} from "./Sidebar/Sidebar";
import {UpdateProfileType} from "../../api/profileApi";

type ProfilePropsType = {
    profile: ProfileResponseType | null
    status: string
    updateStatus: (status: string) => void
    sidebar: SidebarType
    updateProfile: (profile: UpdateProfileType) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

const Profile = React.memo((props: ProfilePropsType) => {
    const {profile, updateProfile, updateStatus, status, isOwner, sidebar} = props

    return (
        <div className={styles.root}>
            <div className={styles.content}>

                <ProfileInfo profile={profile}
                             savePhoto={props.savePhoto}
                             isOwner={isOwner}
                             status={status}
                             updateStatus={updateStatus}/>

                <Posts profile={profile}/>

                <Sidebar profile={profile} sidebar={sidebar} updateProfile={updateProfile} isOwner={isOwner} />
            </div>
        </div>
    );
});

export default Profile;