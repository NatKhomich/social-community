import {NavLink} from 'react-router-dom';
import React from 'react';
import styles from './DialogItem.module.css';

export type DialogType = {
    name: string
    id: string
    avatar: string
}


export const DialogItem = (props: DialogType) => {
    const {id, name, avatar} = props

    let path = `/dialogs/${id}`

    return (
        <div className={styles.root}>
            <NavLink key={id} to={path}>
                <li className={styles.item}>
                    <div className={styles.item__image}>
                        <img className={styles.item__avatar} src={avatar} alt="contact-avatar"/>
                    </div>
                    <div className={styles.userAndMessage}>
                        <div className={styles.item__userName}>
                            {`${name}`}
                        </div>
                        <div className={styles.userMessage}>
                            'Sed diam nonummy nibh euismod tincidunt ut laoreet dolore'
                        </div>
                    </div>
                </li>
            </NavLink>
        </div>
    )
}