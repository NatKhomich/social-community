import React, {useState} from 'react';
import {ProfileData} from "./ProfileData/ProfileData";
import styles from './About.module.css'
import {ProfileResponseType} from "../../profileReducer";
import {UpdateProfileType} from "../../../../api/profileApi";
import {ProfileDataForm} from "./ProfileDataForm/ProfileDataForm";

type PropsType = {
    profile: ProfileResponseType | null
    updateProfile: (profile: UpdateProfileType) => Promise<any>
    isOwner: boolean
}

const About = (props: PropsType) => {
    const {profile, updateProfile, isOwner} = props

    const [editMode, setEditMode] = useState(false)

    const onSubmit = (profileData: UpdateProfileType) => {
        updateProfile(profileData)
            .then(() => {
                setEditMode(false);
            })
    };

    const activateEditMode = () => {
        setEditMode(true)
    }

    return (
        <div className={styles.root}>
            <h4 className={styles.title}> About </h4>

            {
                editMode
                    ? <ProfileDataForm callback={onSubmit} profile={profile}/>
                    : <ProfileData profile={profile} activateEditMode={activateEditMode} isOwner={isOwner}/>
            }

        </div>
    );
};

export default About;

