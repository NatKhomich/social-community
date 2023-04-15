import React from 'react';
import {actionsTypes, MessagesType, RootStateType, StoreType} from './State';

export const updateNewMessageActionCreator = (newMessageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE',
        newMessageText: newMessageText
    } as const
}

export const sendMessageActionCreator = () => {
    return {
        type: 'SEND-MESSAGE',
        //newMessageText: newMessageText
    } as const
}

const DialogsPageReducer = (state: RootStateType, action: actionsTypes) => {
    if (action.type === 'UPDATE-NEW-MESSAGE') {
        state.dialogsPage.newMessage = action.newMessageText
        //state.rerenderEntireTree()

    } else if (action.type === 'SEND-MESSAGE') {
        const newMess = state.dialogsPage.newMessage
        state.dialogsPage.newMessage = ''
        const newMessageText: MessagesType = {id: 5, message: newMess }
        state.dialogsPage.messages.push( newMessageText )
        //state.rerenderEntireTree()
    }

    return state
};

export default DialogsPageReducer;