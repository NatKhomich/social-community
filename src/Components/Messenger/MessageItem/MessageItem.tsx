import React from 'react';
import s from './Message.module.css'
import {MessageType} from '../../../types/Types';


export const MessageItem = (props: MessageType) => {

    //let path = '/dialogs'

    return (
        <div className={s.message}>
            <div className={s.mes}> {props.message} </div>
        </div>
    )
};
