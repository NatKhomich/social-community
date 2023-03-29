import React from 'react';
import s from './ProfileInfo.module.css';
import photo_profile from '../../../image/profile_fon.png'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.profile_info} >
                <img src={photo_profile}/>
            </div>
            <div className={s.description}>avatar+description</div>
        </div>
    );
};

export default ProfileInfo;