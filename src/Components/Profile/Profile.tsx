import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import {ProfileType} from '../../redux/State';
import s from './Profile.module.css'

const Profile = (props: ProfileType) => {

    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts posts = {props.posts}
                     addPost={props.addPost}
                     newMyPostText={props.newMyPostText}
                     updateNewMyPostText={props.updateNewMyPostText}
            />
        </div>
    );
};

export default Profile;