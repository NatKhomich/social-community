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
           //state.newMessage = action.newMessage
            return {...state, newMessage: action.newMessage}

        case 'SEND-MESSAGE':
            const newMessage: MessagesType = {id: 5, message: state.newMessage}
            state.newMessage = ''
            return {...state, messages: [...state.messages, newMessage]}

        default: return state
    }

};

export default DialogsPageReducer;