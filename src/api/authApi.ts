import {instance} from "./api";
import {ResponseType} from "../common/types/types";

export const authAPI = {
    authMe() {
        return instance.get<ResponseType<UserAuthType>>(`/auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instance.post<ResponseType<{userId: number}>>('/auth/login', {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete<ResponseType>('/auth/login')
    }
}

export type UserAuthType = {
    id: string
    email: string | null
    login: string | null
    captcha: string | null
}
