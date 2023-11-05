import {instance} from "./api";
import {ResponseType} from "../common/types/types";
import {ContactsType, PhotosType} from "../features/Profile/profileReducer";

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
    },
    savePhoto: (photoFile: string) => {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put<ResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export type UpdateProfileType = {
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
}

type SavePhotoResponseDataType = {
    photos: PhotosType
}