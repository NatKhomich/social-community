import React from 'react';
import styles from './ProfileInfo.module.css';
import {ProfileResponseType} from '../profileReducer';
import userAvatar from '../../../common/image/userAvatar.jpg'
import {ProfileStatus} from '../ProfileStatus/ProfileStatus';
import profilePhoto from '../../../common/image/profile/profile-photo.jpg'

type ProfilePresentPropsType = {
    profile: ProfileResponseType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = React.memo((props: ProfilePresentPropsType) => {

    return (
        <div className={styles.root}>
            <div>
                <img className={styles.profilePhoto} src={profilePhoto} alt="profile-cover"/>
            </div>

            <div className={styles.profileContent}>

                {props.profile.photos.large
                    ? <img src={props.profile?.photos.large} alt=""/>
                    : <img src={userAvatar} alt=""/>}


                <div className={styles.descriptionInfo}>
                    <div className={styles.name}> {props.profile.fullName} </div>
                    {/*<div> {props.profile.aboutMe} </div>*/}
                    <div> Looking for a job: {props.profile.lookingForAJobDescription} </div>
                    <div>
                        Contacts:
                        <ul className={styles.list}>
                            <li>{props.profile.contacts.vk}</li>
                            <li>{props.profile.contacts.youtube}</li>
                            <li>{props.profile.contacts.github}</li>
                            <li>{props.profile.contacts.facebook}</li>
                            <li>{props.profile.contacts.twitter}</li>
                            <li>{props.profile.contacts.instagram}</li>
                            <li>{props.profile.contacts.mainLink}</li>
                            <li>{props.profile.contacts.website}</li>
                        </ul>
                        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ProfileInfo;