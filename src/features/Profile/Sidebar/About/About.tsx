import React, {useState} from 'react';
import {ProfileData} from "./ProfileData/ProfileData";
import styles from './About.module.css'
import {AboutType, ProfileResponseType} from "../../profileReducer";
import {UpdateProfileType} from "../../../../api/profileApi";

type PropsType = {
    about: AboutType[]
    profile: ProfileResponseType | null
    updateProfile: (profile: UpdateProfileType) => void
}

const About = (props: PropsType) => {

    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }

    return (
        <div className={styles.root}>
            <h4 className={styles.sidebar__title}>About</h4>

            <ProfileData profile={props.profile} activateEditMode={activateEditMode} />
        </div>
    );
};

export default About;

