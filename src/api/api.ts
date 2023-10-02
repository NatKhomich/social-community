import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true
})

export const socialAPI = {
    //auth
    getAuthMe() {
        return instance.get(`/auth/me`)
    },
    //profile
    getProfile(userId: string) {
        return instance.get(`/profile/${userId}`)
    },
    //users
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
    },
    getUsersCurrentPage(pageNumber: number, pageSize: number) {
        return instance.get(`/users?page=${pageNumber}&count=${pageSize}`)
    },
    follow(userId: number) {
        return instance.post(`/follow/${userId}`, {})
    },
    unfollow(userId: number) {
        return instance.delete(`/follow/${userId}`)
    }
}