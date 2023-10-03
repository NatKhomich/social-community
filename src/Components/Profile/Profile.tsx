import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css'
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileResponseType} from '../../redux/profileReducer';

type ProfilePropsType = {
    profile: ProfileResponseType
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;