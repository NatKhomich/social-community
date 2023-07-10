import s from './Message.module.css';
import React, {ChangeEvent, KeyboardEvent} from 'react';
import {MessageType} from '../../../types/Types';

type MessagesType = {
    messages: MessageType[]
    newMessage: string
    onClickSendMessage: () => void
    onChangeNewMessage: (newMessage: string) => void
    onKeyDownEnter: () => void
}

export const Messages = (props: MessagesType) => {

    let messageElement = props.messages.map(el => <div className={s.message} key={el.id}> {el.message} </div>)

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