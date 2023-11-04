import {DataLoginType} from "../features/Auth/Login";
import {instance} from "./api";
import {ResponseType} from "../common/types/types";

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

export type UserAuthType = {
    id: string
    email: string | null
    login: string | null
}
