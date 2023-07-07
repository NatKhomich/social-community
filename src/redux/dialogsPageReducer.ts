import {actionsTypes, DialogsPropsType, MessagesType} from './Store';

const dialogsInintialState = {
    dialogs: [
        {id: 1, name: 'Natalia'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Ekaterina'},
        {id: 4, name: 'Uliana'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'I love you'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Hi, my girl'}
    ],
    newMessage: ''
}

const DialogsPageReducer = (state: any = dialogsInintialState, action: actionsTypes): DialogsPropsType => {
    switch (action.type) {

        case 'UPDATE-NEW-MESSAGE':
            //state.newMessage = action.newMessage
            return {...state, newMessage: action.newMessage}

        case 'SEND-MESSAGE':
            const newMessage: MessagesType = {id: 5, message: state.newMessage}
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
    } as const
}


export default DialogsPageReducer;