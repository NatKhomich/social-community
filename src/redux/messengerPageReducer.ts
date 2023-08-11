import {actionsTypes, MessageType, MessengerType} from '../types/Types';
import {v1} from 'uuid';

const messengerInintialState: MessengerType = {
    dialogs: [
        {id: v1(), name: 'Natalia'},
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'Ekaterina'},
        {id: v1(), name: 'Uliana'}
    ],
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'I love you'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Hi, my girl'}
    ],
    newMessage: ''
}

const MessengerPageReducer = (state = messengerInintialState, action: actionsTypes): MessengerType => {
    switch (action.type) {

        case 'UPDATE-NEW-MESSAGE':
            return {...state, newMessage: action.newMessage}

        case 'SEND-MESSAGE':
            const newMessage: MessageType = {id: action.id, message: state.newMessage}
            state.newMessage = ''
            return {...state, messages: [...state.messages, newMessage]}

        default:
            return state
    }
};

export const updateNewMessageActionCreator = (newMessageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE',
        newMessage: newMessageText
    } as const
}

export const sendMessageActionCreator = () => {
    return {
        type: 'SEND-MESSAGE',
        id: v1()
    } as const
}


export default MessengerPageReducer;