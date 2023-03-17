import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './Profileinfo/ProfileInfo';


const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts info={'My post'}/>
        </div>
    );
};

export default Profile;