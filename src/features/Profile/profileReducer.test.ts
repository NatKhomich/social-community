import {addPostAC, ProfileInitialStateType, profileReducer, setStatusAC} from "./profileReducer";
import {v1} from "uuid";


let startState: ProfileInitialStateType

beforeEach(() => {

    startState = {
        posts: [
            {id: v1(), message: 'Message1', likesCount: 15},
            {id: v1(), message: 'Message2', likesCount: 2},
        ],
        profile: {
            aboutMe: '',
            contacts: {
                facebook: '',
                website: '',
                vk: '',
                twitter: '',
                instagram: '',
                youtube: '',
                github: '',
                mainLink: '',
            },
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: '',
            userId: '',
            photos: {
                small: '',
                large: '',
            }
        },
        status: '',
        // sidebar: {
        //     about: [
        //         {
        //             id: 1,
        //             icon: '',
        //             info: 'Live In',
        //             description: ''
        //         }
        //     ]
        // }
    }
})

test('correct post should be added', () => {

    const endState = profileReducer(startState, addPostAC('New Post'))

    expect(endState.posts.length).toBe(3)
    expect(endState.posts[0].message).toBe('New Post')
})

test('correct status profile should be get', () => {

    const endState = profileReducer(startState, setStatusAC('New status'))

    expect(endState.status).toBe('New status')
})
test('correct status profile should be update', () => {

    const endState = profileReducer(startState, setStatusAC('New status'))

    expect(endState.status).toBe('New status')
})

