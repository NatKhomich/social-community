import s from './Message.module.css';
import React from 'react';
import {MessagesType} from '../../../redux/State';

type MessagePropsType = {
    messages: MessagesType[]
}

export const Message = (props: MessagePropsType) => {

    let messageElement = props.messages.map( el => {
        return (
            <div key={el.id}> {el.message} </div>
        )
    } )

    return (
        <div>
            <div className={s.message}> {messageElement} </div>
        </div>
    );
};