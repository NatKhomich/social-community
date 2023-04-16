import profilePageReducer, {addPostActionCreator, onChangePostActionCreator} from './profilePageReducer';
import dialogsPageReducer, {sendMessageActionCreator, updateNewMessageActionCreator} from './dialogsPageReducer';

export type PostPropsType = {
    message: string
    likesCount: number
}

export type PostsType = {
    id: number
    message: string
    likesCount: number

}
/*export type MyPostsPropsType = {
    posts: PostsType[]
    addPost: (postText: string) => void
    newMyPostText: string //
    updateNewMyPostText: (newText: string) => void
    dispatch: (action: actionsTypes) => void
}*/

export type ProfilePostsType = {
    posts: PostsType[]
    // addPost: (postText: string) => void
    newMyPostText: string //
    //updateNewMyPostText: (newText: string) => void
    dispatch: (action: actionsTypes) => void
}

export type DialogsType = {
    name: string
    id: number
}

export type DialogItemPropsType = {
    dialogs: DialogsType[]
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

export type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    dispatch: (action: actionsTypes) => void
    newMessage: string
}

export type RootStateType = {
    profilePage: {
        posts: PostsType[]
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

/*type addPostActionType = {
    type: 'ADD-POST'
    newMyPostText: string
}

type updateNewMyPostTextActionType = {
    type: 'UPDATE-NEW-MY-POST-TEXT'
    newText: string
}*/

/*type addPostActionType = ReturnType<typeof addPostActionCreator>
type updateNewMyPostTextActionType = ReturnType<typeof onChangePostActionCreator>*/

/*export const addPostActionCreator = (newMyPostText: string) => {
    return {
        type: 'ADD-POST',
        newMyPostText: newMyPostText
    } as const
}

export const onChangePostActionCreator = (newText: string) => {
    return {
        type: 'UPDATE-NEW-MY-POST-TEXT',
        newText: newText
    } as const
}*/

/*export const updateNewMessageActionCreator = (newMessageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE',
        newMessageText: newMessageText
    } as const
}

export const sendMessageActionCreator = () => {
    return {
        type: 'SEND-MESSAGE',
       //newMessageText: newMessageText
    } as const
}*/

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
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'I love you'},
                {id: 3, message: 'How are you?'},
                {id: 4, message: 'Yo'}
            ],
            dialogs: [
                {id: 1, name: 'Natalia'},
                {id: 2, name: 'Alex'},
                {id: 3, name: 'Ekaterina'},
                {id: 4, name: 'Uliana'}
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
      this._state.profilePage =  profilePageReducer(this._state.profilePage, action)

      this._state.dialogsPage =  dialogsPageReducer(this._state.dialogsPage, action)

        this.rerenderEntireTree()

        /*if (action.type === 'ADD-POST') { //message: this._state.profilePage.newMyPostText,
            const newPost: PostsType = {id: 4, message: action.newMyPostText, likesCount: 0}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newMyPostText = ''
            this.rerenderEntireTree()

        } else if (action.type === 'UPDATE-NEW-MY-POST-TEXT') {
            this._state.profilePage.newMyPostText = action.newText
            this.rerenderEntireTree()

        }*/ /*if (action.type === 'UPDATE-NEW-MESSAGE') {
            this._state.dialogsPage.newMessage = action.newMessageText
            this.rerenderEntireTree()

        } else if (action.type === 'SEND-MESSAGE') {
            const newMess = this._state.dialogsPage.newMessage
            this._state.dialogsPage.newMessage = ''
            const newMessageText: MessagesType = {id: 5, message: newMess }
            this._state.dialogsPage.messages.push( newMessageText )
            this.rerenderEntireTree()
        }*/
    }
}


