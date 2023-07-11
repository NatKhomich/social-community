import {addPostActionCreator, onChangePostActionCreator} from '../redux/profilePageReducer';
import {sendMessageActionCreator, updateNewMessageActionCreator} from '../redux/dialogsPageReducer';

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileType = {
    posts: PostType[]
    newMyPostText: string
}

export type DialogType = {
    name: string
    id: number
}

export type DialogsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessage: string
}

export type MessageType = {
    message: string
    id: number
}

export type actionsTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof onChangePostActionCreator> |

    ReturnType<typeof updateNewMessageActionCreator> |
    ReturnType<typeof sendMessageActionCreator>

/*
export type reduxStoreType =
    Store<EmptyObject & {
        profilePage: ProfilePostsType;
        dialogsPage: DialogsPropsType;
    },
        actionsTypes>*/

/*export type AppStatePropsType = {
    store: reduxStoreType
    dispatch: (action: actionsTypes) => void
}*/

/*export type MessagesPropsType = {
    messages: MessageType[]
    newMessage: string
    dispatch: (action: actionsTypes) => void
}*/

/*export type DialogsPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    dispatch: (action: actionsTypes) => void
    newMessage: string
}*/

/*export type ProfilePostsType = {
    posts: PostType[]
    newMyPostText: string //
    dispatch: (action: actionsTypes) => void
}*/

/*type MyPostsType = {
    posts: PostType[]
    addPost: (newMyPostText: string) => void
    newMyPostText: string
    onChangePost: (newText: string) => void
    onKeyDownEnter: (newText: string) => void
}*/

/*type MessagesType = {
    messages: MessageType[]
    newMessage: string
    dialogs: DialogType[]
    onClickSendMessage: () => void
    onChangeNewMessage: (newMessage: string) => void
    onKeyDownEnter: () => void
}*/