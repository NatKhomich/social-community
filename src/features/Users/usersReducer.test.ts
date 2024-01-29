import {setUsersAC, usersReducer, UsersResponseType, UsersType} from "./usersReducer";


let startState: UsersType

beforeEach(() => {

        startState = {
            items: [],
            pageSize: 10,
            totalCountUser: 0,
            page: 1,
            followingProgress: [],
            portionSize: 10,
            filter: {
                term: '',
                friend: null
            }
        }
    }
)

test('correct set users should be update', () => {

    const newUser: UsersResponseType[] = [
        {
            name: 'name-test',
            id: 1,
            uniqueUrlName: null,
            photos: {
                small: undefined,
                large: undefined
            },
            status: 'test-status',
            followed: false
        }
    ]

    const endState = usersReducer(startState, setUsersAC(newUser))

    expect(endState.items[0].name).toBe('name-test')
    expect(endState.items[0].status).toBe('test-status')
})
