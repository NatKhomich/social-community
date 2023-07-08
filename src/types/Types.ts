import {addPostActionCreator, onChangePostActionCreator} from '../redux/profilePageReducer';
import {sendMessageActionCreator, updateNewMessageActionCreator} from '../redux/dialogsPageReducer';

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePostsType = {
    posts: PostType[]
    newMyPostText: string //
    dispatch: (action: actionsTypes) => void
}

export type DialogsType = {
    name: string
    id: number
}

export type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    dispatch: (action: actionsTypes) => void
    newMessage: string
}

export type MessagesType = {
    message: string
    id: number
}

export type MessagePropsType = {
    messages: MessagesType[]
    newMessage: string
    dispatch: (action: actionsTypes) => void
}


export type RootStateType = {
    profilePage: {
        posts: PostType[]
        newMyPostText: string //
    }
    dialogsPage: {
        messages: MessagesType[]
        dialogs: DialogsType[]
        newMessage: string
    }
}

export type StoreType = {
    _state: RootStateType
    subscribe: (observer: () => void) => void
    rerenderEntireTree: () => void
    getState: () => RootStateType
    dispatch: (action: actionsTypes) => void
}

export type actionsTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof onChangePostActionCreator> |

    ReturnType<typeof updateNewMessageActionCreator> |
    ReturnType<typeof sendMessageActionCreator>