import React from 'react';
import s from './Profile.module.css';
import MyPosts, {PostsType} from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type ProfilePostsType = {
    posts: PostsType[]
}

const Profile = (props: ProfilePostsType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts = {props.posts}/>
        </div>
    );
};

export default Profile;