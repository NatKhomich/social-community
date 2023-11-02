import React from 'react';
import s from './Message.module.css'


export type MessageType = {
    message: string
    id: string
}

export const MessageItem = (props: MessageType) => {
    //let path = '/dialogs'
    return (
        <div className={s.message}>
            <div className={s.mes}> {props.message} </div>
        </div>
    )
};
