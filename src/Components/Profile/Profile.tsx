import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css'
import {ProfileResponseType} from '../../state/profileReducer';
import MyPosts from "./MyPosts/MyPosts";

type ProfilePropsType = {
    profile: ProfileResponseType
    status: string
    updateStatus: (status: string) => void
}

const Profile = React.memo((props: ProfilePropsType) => {
    return (
        <div className={styles.root}>
            <div className={styles.content}>

                <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>

                <MyPosts profile={props.profile} />


            </div>
        </div>
    );
});

export default Profile;