import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import {ProfilePostsType} from '../../redux/State';
import s from './Profile.module.css'

const Profile = (props: ProfilePostsType) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     newMyPostText={props.newMyPostText}
                     dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;