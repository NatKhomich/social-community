import React from 'react';
import styles from './Message.module.css'


export type MessageType = {
    message: string
    id: string
}

export const MessageItem = (props: MessageType) => {
    const { message } = props;

    return (
        <div className={styles.root}>
            <div className={styles.message}>{message}</div>
        </div>
    );
};