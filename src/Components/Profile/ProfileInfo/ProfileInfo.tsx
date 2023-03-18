import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.profile_info} >
                <img src={'https://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg'}/>
            </div>
            <div className={s.description}>avatar+description</div>
        </div>
    );
};

export default ProfileInfo;