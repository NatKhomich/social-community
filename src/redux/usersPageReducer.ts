import {actionsTypes} from '../types/Types';
import {v1} from 'uuid';

type UserPropsType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}

type UsersType = {
    users: UserPropsType[]
}


const usersInintialState: UsersType = {
    users: [
        {id: v1(), followed: true, fullName: 'Alex', status: '', location: {city: 'Astana', country: 'RK'}},
        {id: v1(), followed: true, fullName: 'Katrin', status: '', location: {city: 'Kursk', country: 'Russia'}},
        {id: v1(), followed: false, fullName: 'Natalia', status: 'Life is life', location: {city: 'Astana', country: 'RK'}},
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