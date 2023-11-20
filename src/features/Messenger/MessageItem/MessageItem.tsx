import React from 'react';
import styles from './Message.module.css'

type PropsType = {
    message: string
}


export const MessageItem = (props: PropsType) => {
    const { message } = props;

    return (
        <div className={styles.root}>
            <div className={styles.message}>{message}</div>
        </div>
    );
};