import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostsType} from '../../redux/State';
import MyPosts from './MyPosts/MyPosts';

type ProfilePostsType = {
    posts: PostsType[]
    addPost: (postText: string) => void
}

const Profile = (props: ProfilePostsType) => {

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