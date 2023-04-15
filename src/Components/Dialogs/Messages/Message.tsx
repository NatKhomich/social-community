import s from './Message.module.css';
import React, {ChangeEvent} from 'react';
import {
    MessagePropsType,
} from '../../../redux/State';
import {sendMessageActionCreator, updateNewMessageActionCreator} from '../../../redux/dialogsPageReducer';


export const Message = (props: MessagePropsType) => {

    let messageElement = props.messages.map(el => <div className={s.message} key={el.id}> {el.message} </div>)

    const onClickSendMessageHandler = () => {
        props.dispatch(sendMessageActionCreator())
    }

    const onChangeNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // const valueTextarea = e.currentTarget.value
        props.dispatch(updateNewMessageActionCreator(e.currentTarget.value))
    }

    return (
        <div>
            <div className={s.messages}> {messageElement} </div>

            <div> <textarea
                className={s.textarea}
                value={props.newMessage}
                            onChange={onChangeNewMessageHandler}> </textarea></div>

            <div>
                <button className={s.button} onClick={onClickSendMessageHandler}> Send</button>
            </div>
        </div>
    );
};