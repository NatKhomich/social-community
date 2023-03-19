import {PostsType} from '../Components/Profile/MyPosts/MyPosts';
import {MessagesType} from '../Components/Dialogs/Messages/Message';
import {DialogsType} from '../Components/Dialogs/DialogItem/DialogItem';

export let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, why nobody love me!', likesCount: 15},
            {id: 2, message: 'It\'s our new program! Hey!', likesCount: 2},
            {id: 3, message: 'Hi guys!', likesCount: 6},
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'I love you'},
            {id: 3, message: 'How are you?'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Yo'},
        ],
        dialogs: [
            {id: 1, name: 'Natalia'},
            {id: 2, name: 'Alex'},
            {id: 3, name: 'Katya'},
            {id: 4, name: 'Uliana'},
            {id: 5, name: 'Sergey'},
            {id: 6, name: 'Larisa'},
        ],
    }
}
export type AppRootStateType = {
    profilePage: {
        posts: PostsType[]
    }
    dialogsPage: {
        messages: MessagesType[]
        dialogs: DialogsType[]
    }
}


