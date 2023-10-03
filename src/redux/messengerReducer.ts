import {v1} from 'uuid';
import {DialogType} from '../Components/Messenger/DialogItem/DialogItem';
import {MessageType} from '../Components/Messenger/MessageItem/MessageItem';

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

export const messengerReducer = (state = messengerInintialState, action: ActionsType): MessengerType => {
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

export const updateNewMessageAC = (newMessage: string) => ({type: 'UPDATE-NEW-MESSAGE', newMessage} as const)
export const sendMessageAC = () => ({type: 'SEND-MESSAGE', id: v1()} as const)


type ActionsType = ReturnType<typeof updateNewMessageAC> | ReturnType<typeof sendMessageAC>
export type MessengerType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessage: string
}

