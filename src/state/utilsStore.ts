import {v1} from 'uuid';
import {PostType} from '../Components/Profile/MyPosts/Post/Post';
import {MessageType} from '../Components/Messenger/MessageItem/MessageItem';
import {DialogType} from '../Components/Messenger/DialogItem/DialogItem';

export type StoreType = {
    _state: RootStateType
    subscribe: (observer: () => void) => void
    rerenderEntireTree: () => void
    getState: () => RootStateType
    // dispatch: (action: actionsTypes) => void
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
                {id: v1(), message: 'Hi, why nobody love me!', likesCount: 15},
                {id: v1(), message: 'It\'s our new program! Hey!', likesCount: 2},
            ],
            newMyPostText: ''
        },
        dialogsPage: {
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
   /* dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)

        this.rerenderEntireTree()
    }*/
}


