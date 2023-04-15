import React from 'react';
import {actionsTypes, DialogsPropsType, MessagesType} from './State';

export const updateNewMessageActionCreator = (newMessageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE',
        newMessage: newMessageText
    } as const
}

export const sendMessageActionCreator = () => {
    return {
        type: 'SEND-MESSAGE',
        //newMessage: newMessage
    } as const
}

const DialogsPageReducer = (state: any, action: actionsTypes): DialogsPropsType => {
    if (action.type === 'UPDATE-NEW-MESSAGE') {
        state.newMessage = action.newMessage
        //state.rerenderEntireTree()

    } else if (action.type === 'SEND-MESSAGE') {
        const newMess = state.newMessage
        state.newMessage = ''
        const newMessage: MessagesType = {id: 5, message: newMess }
        state.messages.push( newMessage )
        //state.rerenderEntireTree()
    }
    return state
};

export default DialogsPageReducer;