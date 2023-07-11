import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css'
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

const Profile = () => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            {/*<MyPosts posts={props.posts}
                     newMyPostText={props.newMyPostText}
                     dispatch={props.dispatch}
            />*/}
            {/*<MyPostsContainer posts={props.posts}
                              dispatch={props.dispatch}
                              newMyPostText={props.newMyPostText}
            />*/}
            <MyPostsContainer />
        </div>
    );
};

export default Profile;