import {messengerReducer, MessengerType, sendMessageAC} from "./messengerReducer";
import {v1} from "uuid";


let startState: MessengerType

beforeEach(() => {

    startState = {
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
        ]
    }
})

test('correct message should be added', () => {

    const endState = messengerReducer(startState, sendMessageAC('new-message'))

    expect(endState.messages.length).toBe(5)
    expect(endState.messages[4].message).toBe('new-message')
})

