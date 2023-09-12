import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileResponseType} from '../../../redux/profilePageReducer';
import {Preloader} from '../../Common/Preloader/Preloader';

type ProfilePresentPropsType = {
    profile: ProfileResponseType
}

const ProfileInfo = (props: ProfilePresentPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileBlock}>
            <div className={s.profile_info}></div>
            <div className={s.description}>
                <img src={props.profile?.photos.large} alt=""/>
                <div className={s.descriptionInfo}>
                    <div className={s.name}> {props.profile.fullName} </div>
                    <div> {props.profile.aboutMe} </div>
                    <div> Looking for a job: {props.profile.lookingForAJobDescription} </div>
                    <div>
                        Contacts:
                        <ul className={s.list}>
                            <li>{props.profile.contacts.vk}</li>
                            <li>{props.profile.contacts.youtube}</li>
                            <li>{props.profile.contacts.github}</li>
                            <li>{props.profile.contacts.facebook}</li>
                            <li>{props.profile.contacts.twitter}</li>
                            <li>{props.profile.contacts.instagram}</li>
                            <li>{props.profile.contacts.mainLink}</li>
                            <li>{props.profile.contacts.website}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;