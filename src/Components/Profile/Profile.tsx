import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import {ProfileType} from '../../redux/State';

const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts = {props.posts}
                     addPost={props.addPost}

            />
        </div>
    );
};

export default Profile;