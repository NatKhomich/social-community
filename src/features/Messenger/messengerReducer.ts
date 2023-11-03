import {v1} from 'uuid';
import {DialogType} from './DialogItem/DialogItem';
import {MessageType} from './MessageItem/MessageItem';
import messageImg from '../../common/image/image_message.webp'

const messengerInintialState: MessengerType = {
    dialogs: [
        {
            id: v1(),
            avatar: messageImg,
            name: 'Erica',
        },
        {
            id: v1(),
            avatar: messageImg,
            name: 'Alex',
        },
        {
            id: v1(),
            avatar: messageImg,
            name: 'Dennis',
        },
    ],
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'I love you'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Hi, my girl'}
    ]
}

export const messengerReducer = (state = messengerInintialState, action: ActionsType): MessengerType => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            const newMessage: MessageType = {id: action.id, message: action.newMessage}
            return {...state, messages: [...state.messages, newMessage]}
        default:
            return state
    }
};

export const sendMessageAC = (newMessage: string) => ({type: 'SEND-MESSAGE', id: v1(), newMessage} as const)

type ActionsType =  ReturnType<typeof sendMessageAC>
export type MessengerType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

