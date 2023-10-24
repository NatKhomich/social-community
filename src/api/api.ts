import axios from 'axios';
import {DataLoginType} from '../Components/Login/Login';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true
})

export const authAPI = {
    authMe() {
        return instance.get<ResponseType<UserAuthType>>(`/auth/me`)
    },
    login(loginData: DataLoginType) {
        return instance.post<ResponseType<{userId: number}>>('/auth/login', loginData)
    },
    logout() {
        return instance.delete<ResponseType>('/auth/login')
    }
}

export const usersAPI = {
    getUsers(page: number, pageSize: number) {
        return instance.get(`/users?page=${page}&count=${pageSize}`)
    },
    getUsersCurrentPage(pageNumber: number, pageSize: number) {
        return instance.get(`/users?page=${pageNumber}&count=${pageSize}`)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`/profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put('/profile/status', {status})
    }
}

export const followAPI = {
    follow(userId: number) {
        return instance.post(`/follow/${userId}`, {})
    },
    unfollow(userId: number) {
        return instance.delete(`/follow/${userId}`)
    }
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    fieldsErrors: string[]
    data: D
}

export type UserAuthType = {
    id: number | null | string
    email: string | null
    login: string | null
}