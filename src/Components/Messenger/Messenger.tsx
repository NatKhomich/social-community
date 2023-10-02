import s from './Messenger.module.css';
import React, {ChangeEvent, KeyboardEvent} from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import {MessengerContainerType} from './MessengerContainer';
import {MessageItem} from './MessageItem/MessageItem';


export const Messenger = (props: MessengerContainerType) => {

    const messageElement = props.messages.map(el => <MessageItem key={el.id} message={el.message} id={el.id}/>)
    const dialogItemElement = props.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)

    const onClickSendMessageHandler = () => props.onClickSendMessage()
    const onChangeNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => props.onChangeNewMessage(e.currentTarget.value)
    const onKeyDownEnterHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') props.onKeyDownEnter()
    }

    return (
        <div>
            <div className={s.messageDialogElement}>
                <div> {dialogItemElement} </div>
                <div className={s.messages}> {messageElement} </div>
            </div>
            <div className={s.messageField}>
                <textarea
                    className={s.textarea}
                    value={props.newMessage}
                    onChange={onChangeNewMessageHandler}
                    onKeyDown={onKeyDownEnterHandler}>
                </textarea>
                <button className={s.button} onClick={onClickSendMessageHandler}> Send </button>
            </div>

        </div>
    );
};