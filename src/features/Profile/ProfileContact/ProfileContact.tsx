import React from 'react';
import styles from './ProfileContact.module.css'

type ProfileContactProps = {
    title: string
    contactValue: string | null
    icon: string | undefined
};


    export const ProfileContact: React.FC<ProfileContactProps> = (props) => {
        const {contactValue, icon, title} = props

        return (
            <li className={styles.root}>
                {icon && (
                    <div className={styles.iconBlock}>
                        <a href={contactValue ? contactValue : '#'} target={'_blank'}>
                            <img className={styles.iconImage} src={icon} alt={`${title}-icon`}/>
                        </a>
                    </div>
                )}
                <p>
                    <a className={styles.link} href={contactValue ? contactValue : '#'} target={'_blank'}>{contactValue}</a>
                </p>
            </li>
        );
    };

export default ProfileContact;