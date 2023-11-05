import React from 'react';
import styles from './ProfileData.module.css';
import ProfileContact from "../../../ProfileContact/ProfileContact";
import {ProfileResponseType} from "../../../profileReducer";
import iconAboutMe from '../../../../../common/image/about/icon-heart.svg'
import iconLooking from '../../../../../common/image/about/icon-looking.svg'
import iconSkills from '../../../../../common/image/about/icon-skills.svg'
import iconContacts from '../../../../../common/image/about/icon-contacts.svg'
import iconFacebook from '../../../../../common/image/about/icon-facebook.svg'
import website from '../../../../../common/image/about/icon-globe.svg'
import iconTwitter from '../../../../../common/image/about/icon-twitter.svg'
import iconInstagram from '../../../../../common/image/about/icon-instagram.svg'
import iconYoutube from '../../../../../common/image/about/icon-youtube.svg'
import iconGithub from '../../../../../common/image/about/icon-github.svg'
import iconVK from '../../../../../common/image/about/icon-vk.svg'
import iconMainLink from '../../../../../common/image/about/icon-mainLink.svg'

type ProfileInfoIcons = {
    [key: string]: string | undefined;
};

type PropsType = {
    profile: ProfileResponseType | null;
    activateEditMode: () => void;
};

export const ProfileData = (props: PropsType) => {
    const profileInfoIcons: ProfileInfoIcons = {
        aboutMe: iconAboutMe,
        lookingForAJob: iconLooking,
        lookingForAJobDescription: iconSkills,
        contacts: iconContacts,
        facebook: iconFacebook,
        website: website,
        vk: iconVK,
        twitter: iconTwitter,
        instagram: iconInstagram,
        youtube: iconYoutube,
        github: iconGithub,
        mainLink: iconMainLink,
    };

    const {profile, activateEditMode} = props;

    const onActivateEditModeHandler = () => {
        activateEditMode();
    };

    return (
        <div className={styles.root}>
            <ul className={styles.items}>
                <li className={styles.item}>
                    <div className={styles.iconBlock}>
                        <img className={styles.iconImage} src={profileInfoIcons.aboutMe} alt="aboutMe-icon"/>
                    </div>
                    <div>About me:</div>
                    <div className={styles.info}>{profile?.aboutMe}</div>
                </li>
                <li className={styles.item}>
                    <div className={styles.iconBlock}>
                        <img className={styles.iconImage} src={profileInfoIcons.lookingForAJob}
                             alt="lookingForAJob-icon"/>
                    </div>
                    <div>Looking for a job:</div>
                    <div className={styles.info}>{profile?.lookingForAJob ? 'Yes': 'No'}</div>
                </li>
                {profile?.lookingForAJobDescription && (
                    <li className={styles.item}>
                        <div className={styles.iconBlock}>
                            <img
                                className={styles.iconImage}
                                src={profileInfoIcons.lookingForAJobDescription}
                                alt="lookingForAJobDescription-icon"
                            />
                        </div>
                        <div>Skills:</div>
                        <div className={styles.info}>{profile?.lookingForAJobDescription}</div>
                    </li>
                )}
                {profile?.contacts && (
                    <li className={styles.contacts}>
                        <div className={styles.item}>
                            <div className={styles.iconBlock}>
                                <img className={styles.iconImage} src={profileInfoIcons.contacts} alt="contacts-icon"/>
                            </div>
                            <div>Contacts:{Object.values(profile.contacts).every(value => !value) &&
                                <b> No contacts</b>}</div>
                        </div>
                        <div>
                            <ul className={styles.contact}>
                                {Object.entries(profile.contacts).map(([key, value]) =>
                                    value &&
                                    <ProfileContact key={key} title={key} value={value} icon={profileInfoIcons[key]}/>)}

                            </ul>
                        </div>
                    </li>
                )}
            </ul>
            <button className={styles.editButton} onClick={onActivateEditModeHandler}>Edit</button>
        </div>
    );
};