import {instance} from "./api";

export const usersAPI = {
    getUsers(page: number, pageSize: number) {
        return instance.get(`/users?page=${page}&count=${pageSize}`)
    },
    getUsersCurrentPage(pageNumber: number, pageSize: number) {
        return instance.get(`/users?page=${pageNumber}&count=${pageSize}`)
    }
}

