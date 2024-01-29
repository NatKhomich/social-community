import {instance} from "./api";

export const usersAPI = {
    getUsers(page: number, pageSize: number, term: string = '', friend: boolean | null) {
        return instance.get(`/users?page=${page}&count=${pageSize}&term=${term}&friend=${friend}`)
    }
}

