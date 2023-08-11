import {actionsTypes} from '../types/Types';
import {v1} from 'uuid';
import userImage from '../image/userAvatar.jpg'

export type UserPropsType = {
    id: string
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}

export type UsersType = {
    users: UserPropsType[]
}


const usersInintialState: UsersType = {
    users: [
        {id: v1(), photoUrl: userImage, followed: true, fullName: 'Alex', status: 'Life in KZ', location: {city: 'Astana', country: 'KZ'}},
        {id: v1(), photoUrl: userImage, followed: true, fullName: 'Katrin', status: 'My life', location: {city: 'Kursk', country: 'Russia'}},
        {id: v1(), photoUrl: userImage, followed: false, fullName: 'Natalia', status: 'Life is life', location: {city: 'Astana', country: 'KZ'}},
    ]
}

const UsersPageReducer = (state: UsersType = usersInintialState, action: actionsTypes): UsersType => {
    switch (action.type) {

        case 'FOLLOW':
            return {
                ...state, users:
                    state.users.map(el => el.id === action.userID
                        ? {...el, followed: true}
                        : el)
            }
//оставть один case? followed: !el.followed
        case 'UNFOLLOW':
            return {
                ...state, users:
                    state.users.map(el => el.id === action.userID
                        ? {...el, followed: false}
                        : el)
            }

        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state
    }
};

export const followActionCreator = (userID: string) => {
    return {
        type: 'FOLLOW',
        userID
    } as const
}

export const unfollowActionCreator = (userID: string) => {
    return {
        type: 'UNFOLLOW',
        userID
    } as const
}

export const setUsersActionCreator = (users: UserPropsType[]) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}



export default UsersPageReducer;