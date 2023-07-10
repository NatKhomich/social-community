import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePostsType} from '../../types/Types';
import s from './Profile.module.css'
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

const Profile = (props: ProfilePostsType) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            {/*<MyPosts posts={props.posts}
                     newMyPostText={props.newMyPostText}
                     dispatch={props.dispatch}
            />*/}
            <MyPostsContainer posts={props.posts}
                              dispatch={props.dispatch}
                              newMyPostText={props.newMyPostText}
            />
        </div>
    );
};

export default Profile;