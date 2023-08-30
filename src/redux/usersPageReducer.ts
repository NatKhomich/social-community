import {actionsTypes} from '../types/Types';

/*export type UserPropsType = {
    id: string
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}*/

export type UserPropsType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        small: string | undefined
        large: string | undefined
    }
    status: null | string
    followed: boolean
}

export type UsersType = {
    items: UserPropsType[]
}


const usersInintialState: UsersType = {
    items: []
}

const UsersPageReducer = (state: UsersType = usersInintialState, action: actionsTypes): UsersType => {
    switch (action.type) {

        case 'FOLLOW':
            return {
                ...state, items:
                    state.items.map(el => el.id === action.userID
                        ? {...el, followed: true}
                        : el)
            }

        case 'UNFOLLOW':
            return {
                ...state, items:
                    state.items.map(el => el.id === action.userID
                        ? {...el, followed: false}
                        : el)
            }

        case 'SET-USERS':
            return {...state, items: [...state.items, ...action.users]}

        default:
            return state
    }
};

export const followActionCreator = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID
    } as const
}

export const unfollowActionCreator = (userID: number) => {
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