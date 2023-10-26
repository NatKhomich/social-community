import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css'
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileResponseType} from '../../state/profileReducer';

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
                    <MyPostsContainer/>
            </div>
        </div>
    );
});

export default Profile;