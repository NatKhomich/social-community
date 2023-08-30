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
    pageSize: number
    totalCountUser: number
    currentPage: number
}

const usersInintialState: UsersType = {
    items: [],
    pageSize: 10,
    totalCountUser: 0,
    currentPage: 1
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
            return {...state, items: action.users}

        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}

        case 'SET-USERS-TOTAL-COUNT':
            return {...state, totalCountUser: action.totalCount}

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

export const setCurrentPageActionCreator = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}

export const setUsersTotalCountActionCreator = (totalCount: number) => {
    return {
        type: 'SET-USERS-TOTAL-COUNT',
        totalCount
    } as const
}

export default UsersPageReducer;