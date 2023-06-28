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
    } as const
}

const DialogsPageReducer = (state: any, action: actionsTypes): DialogsPropsType => {
    switch (action.type) {

        case 'UPDATE-NEW-MESSAGE':
            state.newMessage = action.newMessage
            //state.rerenderEntireTree()
            return state

        case 'SEND-MESSAGE':
            const newMess = state.newMessage
            state.newMessage = ''
            const newMessage: MessagesType = {id: 5, message: newMess}
            state.messages.push(newMessage)
            return state

        default: return state
    }

};

export default DialogsPageReducer;