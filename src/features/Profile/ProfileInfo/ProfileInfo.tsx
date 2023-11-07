import React, {ChangeEvent} from 'react';
import styles from './ProfileInfo.module.css';
import {ProfileResponseType} from '../profileReducer';
import userAvatar from '../../../common/image/userAvatar.jpg'
import {ProfileStatus} from '../ProfileStatus/ProfileStatus';
import profilePhoto from '../../../common/image/profile/profile-photo.jpg'
import editIcon from '../../../common/image/profile/icon-edit.svg'

type ProfilePresentPropsType = {
    profile: ProfileResponseType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

const ProfileInfo = React.memo((props: ProfilePresentPropsType) => {
    const {profile, updateStatus, status, isOwner, savePhoto} = props

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files && savePhoto(e.target.files[0])
    }

    return (
        <div className={styles.root}>

                <div >
                    <img className={styles.profilePhoto} src={profilePhoto} alt="profile-cover"/>
                </div>
                <div className={styles.profileContent}>
                    <div className={styles.profileAvatar}>
                        <img className={styles.userAvatar} src={profile?.photos.large || userAvatar} alt="profile-avatar-8"/>
                        {isOwner &&
                            <label htmlFor="mainPhotoInput" className={styles.fileInputLabel}>
                                <input
                                    id="mainPhotoInput"
                                    type="file"
                                    onChange={onMainPhotoSelected}
                                    className={styles.fileInput}
                                />
                                <img className={styles.fileInputIcon} src={editIcon} alt='edit-icon'/>
                            </label>
                        }

                        {isOwner &&  <div className={styles.userStatus}></div>}
                    </div>
                    <div className={styles.profileInfo}>
                        <h1 className={styles.fullName}>{profile?.fullName}</h1>
                        <p className={styles.aboutMe}>{profile?.aboutMe}</p>
                        <ProfileStatus status={status} updateStatus={updateStatus} isOwner={props.isOwner}/>
                    </div>
                </div>
            </div>
    );
});

export default ProfileInfo;