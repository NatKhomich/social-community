import {instance} from "./api";
import {ResponseType} from "../common/types/types";
import {ContactsType} from "../features/Profile/profileReducer";

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`/profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>('/profile/status', {status})
    },
    updateProfile: (profile: UpdateProfileType) => {
        return instance.put<ResponseType>(`profile`, profile)
    }
}

export type UpdateProfileType = {
    userId: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
}