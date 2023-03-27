import s from './Message.module.css';
import React from 'react';
import {MessagePropsType, MessagesType} from '../../../redux/State';


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