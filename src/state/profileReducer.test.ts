import {addPostAC, profileReducer, ProfileType} from "./profileReducer";
import {v1} from "uuid";


let startState: ProfileType

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
            userId: 0,
            photos: {
                small: '',
                large: '',
            }
        },
        status: ''
    }
})


test('correct post should be added', () => {

    const endState = profileReducer(startState, addPostAC('New Post'))


    expect(endState.posts.length).toBe(3)
    expect(endState.posts[0].message).toBe('New Post')
})