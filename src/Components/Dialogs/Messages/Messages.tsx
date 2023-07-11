import s from './Message.module.css';
import React, {ChangeEvent, KeyboardEvent} from 'react';
import {DialogsType, MessageType} from '../../../types/Types';
import {DialogItem} from '../DialogItem/DialogItem';

type MessagesType = {
    messages: MessageType[]
    newMessage: string
    dialogs: DialogsType[]
    onClickSendMessage: () => void
    onChangeNewMessage: (newMessage: string) => void
    onKeyDownEnter: () => void
}

export const Messages = (props: MessagesType) => {

    let messageElement = props.messages.map(el => <div className={s.message} key={el.id}> {el.message} </div>)
    const dialogItemElement = props.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)

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
            <div> {dialogItemElement} </div>
            <div className={s.messages}> {messageElement} </div>

            <div className={s.messageField}>
                <textarea
                    className={s.textarea}
                    value={props.newMessage}
                    onChange={onChangeNewMessageHandler}
                    onKeyDown={onKeyDownEnterHandler}
                >
            </textarea>

                <button className={s.button} onClick={onClickSendMessageHandler}> Send</button>
            </div>

        </div>
    );
};