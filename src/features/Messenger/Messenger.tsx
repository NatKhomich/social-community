import styles from './Messenger.module.css';
import React from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import {MessengerContainerType} from './MessengerContainer';
import {MessageItem} from './MessageItem/MessageItem';
import {DataTextFormType, TextForm} from '../../common/components/TextForm/TextForm';


export const Messenger = (props: MessengerContainerType) => {
    const {dialogs, messages, sendMessage} = props

    const messageElement = messages.map(el => <MessageItem key={el.id} message={el.message}/>)
    const dialogItemElement = dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id} avatar={el.avatar}/>)

    const sendMassageHandler = (newMessage: DataTextFormType) => {
        if (newMessage.text !== '') {
            sendMessage(newMessage.text)
        }
    }

    return (
        <div>
            <div className={styles.root}>
                <div className={styles.dialogItemElement}> {dialogItemElement} </div>

                <div className={styles.messages}>{messageElement}</div>
            </div>
            <div className={styles.messageField}>
                <TextForm callback={sendMassageHandler} name={'Send'}/>
            </div>
        </div>
    );
};