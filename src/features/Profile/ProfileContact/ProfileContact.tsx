import React from 'react';
import styles from './ProfileContact.module.css'

type ProfileContactProps = {
    title: string;
    value: string | null;
    icon: string | undefined;
};


    export const ProfileContact: React.FC<ProfileContactProps> = ({title, value, icon}) => {
        return (
            <li className={styles.root}>
                {icon && (
                    <div className={styles.iconBlock}>
                        <a href={value ? value : '#'} target={'_blank'}>
                            <img className={styles.iconImage} src={icon} alt={`${title}-icon`}/>
                        </a>
                    </div>
                )}
                <p>
                    <a className={styles.link} href={value ? value : '#'} target={'_blank'}>{value}</a>
                </p>
            </li>
        );
    };

export default ProfileContact;