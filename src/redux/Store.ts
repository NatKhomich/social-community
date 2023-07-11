import profilePageReducer from './profilePageReducer';
import dialogsPageReducer from './dialogsPageReducer';
import {actionsTypes, DialogType, MessageType, PostType} from '../types/Types';

export type StoreType = {
    _state: RootStateType
    subscribe: (observer: () => void) => void
    rerenderEntireTree: () => void
    getState: () => RootStateType
    dispatch: (action: actionsTypes) => void
}

export type RootStateType = {
    profilePage: {
        posts: PostType[]
        newMyPostText: string //
    }
    dialogsPage: {
        messages: MessageType[]
        dialogs: DialogType[]
        newMessage: string
    }
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, why nobody love me!', likesCount: 15},
                {id: 2, message: 'It\'s our new program! Hey!', likesCount: 2},
            ],
            newMyPostText: ''
        },
        dialogsPage: {
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
    },

    rerenderEntireTree() {
        console.log('state was changed')
    },
    subscribe(observer: () => void) {
        this.rerenderEntireTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)

        this.rerenderEntireTree()
    }
}


