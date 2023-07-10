import {addPostActionCreator, onChangePostActionCreator} from '../redux/profilePageReducer';
import {sendMessageActionCreator, updateNewMessageActionCreator} from '../redux/dialogsPageReducer';
import {EmptyObject, Store} from 'redux';

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
    messages: MessageType[]
    dispatch: (action: actionsTypes) => void
    newMessage: string
}

export type MessageType = {
    message: string
    id: number
}

export type MessagesPropsType = {
    messages: MessageType[]
    newMessage: string
    dispatch: (action: actionsTypes) => void
}

export type RootStateType = {
    profilePage: {
        posts: PostType[]
        newMyPostText: string //
    }
    dialogsPage: {
        messages: MessageType[]
        dialogs: DialogsType[]
        newMessage: string
    }
}

export type actionsTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof onChangePostActionCreator> |

    ReturnType<typeof updateNewMessageActionCreator> |
    ReturnType<typeof sendMessageActionCreator>

export type reduxStoreType =
    Store<EmptyObject & {
        profilePage: ProfilePostsType;
        dialogsPage: DialogsPropsType;
    },
        actionsTypes>