import s from './Message.module.css';
import React, {ChangeEvent} from 'react';
import {MessagePropsType} from '../../../redux/State';
import {sendMessageActionCreator, updateNewMessageActionCreator} from '../../../redux/dialogsPageReducer';


export const Message = (props: MessagePropsType) => {

    let messageElement = props.messages.map(el => <div className={s.message} key={el.id}> {el.message} </div>)

    const onClickSendMessageHandler = () => {
        props.dispatch(sendMessageActionCreator())
    }

    const onChangeNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageActionCreator(e.currentTarget.value))
    }

    return (
        <div>
            <div className={s.messages}> {messageElement} </div>

            <div className={s.messageField}>
                <textarea
                className={s.textarea}
                value={props.newMessage}
                onChange={onChangeNewMessageHandler}>
            </textarea>

                <button className={s.button} onClick={onClickSendMessageHandler}> Send </button>
            </div>




        </div>
    );
};