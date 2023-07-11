import s from './Message.module.css';
import React, {ChangeEvent, KeyboardEvent} from 'react';
import {DialogItem} from '../DialogItem/DialogItem';
import {MessagesContainerType} from './MessagesContainer';


export const Messages = (props: MessagesContainerType) => {

    let messageElement = props.dialogsPage.messages.map(el => <div className={s.message}
                                                                   key={el.id}> {el.message} </div>)
    const dialogItemElement = props.dialogsPage.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)

    const onClickSendMessageHandler = () => {
        /* props.dispatch(sendMessageActionCreator())*/
        props.onClickSendMessage()
    }

    const onChangeNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        /*props.dispatch(updateNewMessageActionCreator(e.currentTarget.value))*/
        props.onChangeNewMessage(e.currentTarget.value)
    }

    const onKeyDownEnterHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            /* props.dispatch(sendMessageActionCreator())*/
            props.onKeyDownEnter()
        }
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
                    value={props.dialogsPage.newMessage}
                    onChange={onChangeNewMessageHandler}
                    onKeyDown={onKeyDownEnterHandler}>
                </textarea>
                <button className={s.button} onClick={onClickSendMessageHandler}> Send</button>
            </div>

        </div>
    );
};