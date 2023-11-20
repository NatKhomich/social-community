import {NavLink} from 'react-router-dom';
import React from 'react';
import styles from './DialogItem.module.css';
import {DialogType} from "../messengerReducer";



export const DialogItem = (props: DialogType) => {
    const {id, name, avatar} = props

    let path = `/dialogs/${id}`

    return (
        <div className={styles.root}>
            <NavLink key={id} to={path}>
                <li className={styles.item}>
                    <div className={styles.itemImage}>
                        <img className={styles.itemAvatar} src={avatar} alt="contact-avatar"/>
                    </div>
                    <div className={styles.userAndMessage}>
                        <div className={styles.userName}>
                            {`${name}`}
                        </div>
                        <div className={styles.userMessage}>
                            'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
                        </div>
                    </div>
                </li>
            </NavLink>
        </div>
    )
}