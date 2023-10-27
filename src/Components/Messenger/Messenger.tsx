import s from './Messenger.module.css';
import React from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import {MessengerContainerType} from './MessengerContainer';
import {MessageItem} from './MessageItem/MessageItem';
import {DataTextFormType, TextForm} from '../Common/TextForm/TextForm';


export const Messenger = (props: MessengerContainerType) => {

    const messageElement = props.messages.map(el => <MessageItem key={el.id} message={el.message} id={el.id}/>)
    const dialogItemElement = props.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)

    const sendMassageHandler = (newMessage: DataTextFormType) => {
        if(newMessage.text !== '') {
            props.sendMessage(newMessage.text)
        }
    }

    return (
        <div>
            <div className={s.messageDialogElement}>
                <div> {dialogItemElement} </div>
                <div className={s.messages}> {messageElement} </div>
            </div>
            <div className={s.messageField}>
                <TextForm callback={sendMassageHandler} name={'Send'}/>
            </div>
        </div>
    );
};