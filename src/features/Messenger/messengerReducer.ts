import {v1} from 'uuid';
import messageImg from '../../common/image/image_message.webp'

const messengerInintialState: MessengerType = {
    dialogs: [
        {
            id: v1(),
            avatar: messageImg,
            name: 'Uliana',
        },
        {
            id: v1(),
            avatar: messageImg,
            name: 'Alex',
        },
        {
            id: v1(),
            avatar: messageImg,
            name: 'Kate',
        },
    ],
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Hi, my girl'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Good!'}
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

export type DialogType = {
    name: string
    id: string
    avatar: string
}
export type MessageType = {
    message: string
    id: string
}