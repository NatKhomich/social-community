import React from 'react';
import s from './ProfileInfo.module.css';
import photo_profile from '../../../image/profile_fon.png'
import avatar_description from '../../../image/avatar_description.jpg'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.profile_info}>
                <img src={photo_profile}/>
            </div>
            <div className={s.description}>
                <img src={avatar_description}/>
                <div className={s.descriptionInfo}>

                    <div className={s.name}> Natalia K. </div>
                    <div> Date of Birth: 6 november </div>
                    <div> City: Astana </div>
                    <div> Instagram: @nat_khomich </div>
                </div>

            </div>
        </div>
    );
};

export default ProfileInfo;